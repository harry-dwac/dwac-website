# DWAC 收款系统设计方案

## 1. 系统概述

### 1.1 目标
为 DWAC 数字仲裁平台提供完整的在线支付解决方案，支持：
- 微信支付
- 支付宝
- 银行转账（线上录入 + 线下确认）
- 信用卡支付（Visa/Mastercard/JCB/银联）
- 数字人民币（e-CNY）- Phase 2

### 1.2 收费场景
| 场景 | 支付时机 | 金额 |
|------|----------|------|
| 立案费 | 提交仲裁申请时 | ¥1,000 - ¥15,000 |
| 第一期款 (20%) | 申请受理后 | 案件总费用的 20% |
| 第二期款 (40%) | 收到开庭通知时 | 案件总费用的 40% |
| 第三期款 (40%) | 裁决书交付前 | 案件总费用的 40% |
| 附加费用 | 紧急仲裁员、翻译等 | 按实际发生 |

---

## 2. 支付渠道设计

### 2.1 微信支付

#### 技术方案
- **API**: 微信支付 API v3
- **模式**: Native 扫码支付 + H5 支付
- **费率**: 0.6%
- **结算**: T+1

#### 流程
```
用户选择微信支付 → 后端调用统一下单 API → 返回支付二维码
→ 用户扫码支付 → 微信回调通知 → 后端验签更新订单状态
```

#### 所需材料
- [ ] 微信支付商户号
- [ ] API 证书（apiclient_key.pem）
- [ ] API v3 密钥
- [ ] 回调地址配置

#### 代码接口
```typescript
// POST /payment/wechat/create
interface WechatPayRequest {
  caseId: string;
  amount: number;      // 单位：分
  description: string;
  installment: 'full' | 'first' | 'second' | 'third';
}

interface WechatPayResponse {
  codeUrl: string;     // 支付二维码链接
  orderId: string;     // 内部订单号
  prepayId: string;    // 微信预支付ID
  expireTime: string;  // 二维码过期时间 (ISO 8601)
}
```

---

### 2.2 支付宝

#### 技术方案
- **API**: 支付宝开放平台
- **模式**: 电脑网站支付 + 手机网站支付
- **费率**: 0.6%
- **结算**: T+1

#### 流程
```
用户选择支付宝 → 后端调用 alipay.trade.page.pay
→ 跳转支付宝收银台 → 支付完成回调 → 后端验签更新订单
```

#### 所需材料
- [ ] 支付宝应用 APPID
- [ ] 应用私钥
- [ ] 支付宝公钥
- [ ] 回调地址配置

#### 代码接口
```typescript
// POST /payment/alipay/create
interface AlipayRequest {
  caseId: string;
  amount: number;
  subject: string;
  installment: 'full' | 'first' | 'second' | 'third';
}

interface AlipayResponse {
  redirectUrl: string;  // 支付宝收银台 URL
  orderId: string;
}
```

---

### 2.3 银行转账（线上录入）

#### 技术方案
- **模式**: 线下转账 + 线上确认
- **流程**: 用户转账后上传凭证 → 财务审核 → 系统确认

#### 功能
1. 显示收款账户信息（户名、账号、开户行）
2. 用户上传转账凭证（截图/PDF）
3. 财务后台审核通过后更新订单状态

#### 代码接口
```typescript
// POST /payment/bank/submit
interface BankTransferSubmit {
  caseId: string;
  amount: number;
  transferTime: string;   // 转账时间
  voucherFile: string;   // 凭证文件 Base64 或 URL
  installment: 'full' | 'first' | 'second' | 'third';
  notes?: string;
}

// POST /payment/bank/verify (财务后台)
interface BankTransferVerify {
  orderId: string;
  status: 'confirmed' | 'rejected';
  rejectReason?: string;
}
```

---

### 2.4 信用卡支付

#### 技术方案
- **服务商**: Stripe 或 国内聚合支付（如 Ping++、易宝）
- **支持卡种**: Visa、Mastercard、JCB、银联
- **费率**: 2.9% + ¥2（Stripe）或 1.5%（国内聚合）
- **结算**: T+3 ~ T+7

#### 流程
```
用户选择信用卡 → 前端 Stripe.js 加密卡号
→ 后端调用 Payment Intent API → 返回支付结果
```

#### 所需材料（Stripe 方案）
- [ ] Stripe Account ID
- [ ] Publishable Key (前端)
- [ ] Secret Key (后端)
- [ ] Webhook Secret

#### 代码接口
```typescript
// POST /payment/card/create-intent
interface CardPayRequest {
  caseId: string;
  amount: number;        // 单位：分
  currency: 'cny' | 'usd';
  installment: 'full' | 'first' | 'second' | 'third';
}

interface CardPayResponse {
  clientSecret: string;  // 前端 Stripe.js 使用
  orderId: string;
}
```

---

## 3. 数据库设计

### 3.1 支付订单表
```sql
CREATE TABLE payment_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID NOT NULL REFERENCES cases(id),
  order_no VARCHAR(32) UNIQUE NOT NULL,        -- DWAC202605310001
  installment VARCHAR(20) NOT NULL,           -- 'first'/'second'/'third'/'full'
  amount_cents BIGINT NOT NULL,                -- 金额（分）
  currency VARCHAR(3) DEFAULT 'CNY',
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  -- pending/paid/failed/refunded/expired
  
  payment_method VARCHAR(20),                  -- wechat/alipay/bank/card
  external_order_id VARCHAR(64),              -- 第三方订单号
  
  paid_at TIMESTAMP,
  expired_at TIMESTAMP,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_payment_orders_case ON payment_orders(case_id);
CREATE INDEX idx_payment_orders_status ON payment_orders(status);
```

### 3.2 银行转账凭证表
```sql
CREATE TABLE bank_transfer_vouchers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES payment_orders(id),
  
  transfer_time TIMESTAMP NOT NULL,
  voucher_url TEXT NOT NULL,                   -- 凭证文件 URL
  notes TEXT,
  
  verified_by UUID REFERENCES users(id),      -- 审核人
  verified_at TIMESTAMP,
  verify_status VARCHAR(20),                   -- pending/confirmed/rejected
  reject_reason TEXT,
  
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3.3 支付流水表
```sql
CREATE TABLE payment_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES payment_orders(id),
  
  transaction_type VARCHAR(20) NOT NULL,       -- payment/refund
  amount_cents BIGINT NOT NULL,
  
  channel VARCHAR(20) NOT NULL,               -- wechat/alipay/bank/card
  external_transaction_id VARCHAR(64),
  
  status VARCHAR(20) NOT NULL,
  raw_response JSONB,                         -- 原始回调数据
  
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 4. Worker API 扩展

### 4.1 新增端点

```typescript
// 支付创建
POST /payment/create
Body: { caseId, method: 'wechat'|'alipay'|'bank'|'card', installment }

// 支付回调（微信/支付宝）
POST /payment/callback/wechat
POST /payment/callback/alipay
POST /payment/webhook/stripe

// 银行转账提交
POST /payment/bank/submit

// 订单查询
GET /payment/orders?caseId=xxx
GET /payment/orders/:orderId

// 退款（管理员）
POST /payment/refund
Body: { orderId, reason }
```

### 4.2 KV 存储
```javascript
// 支付订单 KV
PAYMENT_ORDERS_KV: {
  "order:{orderId}": { ...orderData },
  "case:{caseId}:orders": [orderId1, orderId2, ...]
}

// 待处理回调队列
PAYMENT_CALLBACKS_KV: {
  "callback:pending": [{ orderId, channel, rawData, timestamp }, ...]
}
```

---

## 5. 前端页面设计

### 5.1 支付选择页面
路径: `/payment/[caseId]`

```
┌─────────────────────────────────────────────────────┐
│  支付仲裁费用                                        │
│  案件号: DWAC-2026-001                               │
│  支付阶段: 第一期款 (20%)                            │
│  金额: ¥12,000.00                                   │
├─────────────────────────────────────────────────────┤
│  请选择支付方式:                                     │
│                                                     │
│  ┌─────────────┐ ┌─────────────┐                   │
│  │ 📱 微信支付  │ │ 💙 支付宝   │                   │
│  │   扫码支付   │ │  跳转支付   │                   │
│  └─────────────┘ └─────────────┘                   │
│                                                     │
│  ┌─────────────┐ ┌─────────────┐                   │
│  │ 🏦 银行转账  │ │ 💳 信用卡   │                   │
│  │  上传凭证   │ │ Visa/MC/JCB │                   │
│  └─────────────┘ └─────────────┘                   │
│                                                     │
│  [返回案件]                          [确认支付 →]   │
└─────────────────────────────────────────────────────┘
```

### 5.2 微信支付页面
```
┌─────────────────────────────────────────────────────┐
│  微信扫码支付                                        │
│                                                     │
│         ┌───────────────────────┐                  │
│         │   ████████████████    │                  │
│         │   █ 微信支付二维码 █    │                  │
│         │   ████████████████    │                  │
│         └───────────────────────┘                  │
│                                                     │
│  使用微信扫描二维码完成支付                          │
│  订单金额: ¥12,000.00                               │
│  订单号: DWAC202605310001                           │
│                                                     │
│  ⏱ 二维码有效期: 14:59                              │
│                                                     │
│  [取消]                              [已完成支付]   │
└─────────────────────────────────────────────────────┘
```

### 5.3 银行转账页面
```
┌─────────────────────────────────────────────────────┐
│  银行转账信息                                        │
│                                                     │
│  收款户名: 数字世界仲裁委员会                        │
│  收款账号: 1234 5678 9012 3456                      │
│  开户银行: 中国工商银行北京分行                      │
│  开户行号: 1021 0000                                │
│                                                     │
│  ⚠ 请在转账附言中备注: DWAC-2026-001                │
│                                                     │
├─────────────────────────────────────────────────────┤
│  上传转账凭证:                                       │
│  ┌─────────────────────────────────────────────┐   │
│  │  📄 拖拽文件或点击上传                        │   │
│  │     支持: JPG, PNG, PDF                       │   │
│  │     最大: 10MB                                │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  转账时间: [2026-05-31] [12:30]                     │
│  备注: [可选]                                       │
│                                                     │
│  [取消]                                  [提交凭证] │
└─────────────────────────────────────────────────────┘
```

---

## 6. 安全设计

### 6.1 支付安全
- 所有支付请求必须经过用户认证
- 订单金额二次校验（前端显示 + 后端计算）
- 支付回调验签（微信/支付宝 RSA/SHA256）
- 订单防重放攻击（订单号唯一 + 过期时间）

### 6.2 敏感信息
- 支付密钥存储在 Cloudflare KV（加密存储）
- 前端不接触任何 API 密钥
- 银行账号信息动态生成（可配置）

### 6.3 合规
- 微信/支付宝需要 ICP 备案
- 跨境支付需外汇管理局备案
- 发票开具对接税务系统

---

## 7. 实施计划

### Phase 1: 基础支付 (2周)
- [ ] 微信支付集成
- [ ] 支付宝集成
- [ ] 银行转账（凭证上传）
- [ ] 支付订单管理后台

### Phase 2: 信用卡 + 优化 (1周)
- [ ] Stripe/聚合支付集成
- [ ] 支付状态实时推送（WebSocket）
- [ ] 发票自动开具

### Phase 3: 数字人民币 (1周)
- [ ] 数字人民币钱包对接
- [ ] 多币种支持

---

## 8. 费用估算

| 项目 | 成本 |
|------|------|
| 微信支付手续费 | 0.6% |
| 支付宝手续费 | 0.6% |
| Stripe 手续费 | 2.9% + ¥2 |
| 国内聚合支付 | 1.5% |
| 开发成本 | 约 2-3 人周 |

---

## 附录：第三方支付配置清单

### 微信支付
1. 注册微信支付商户平台: https://pay.weixin.qq.com
2. 提交企业资质审核（营业执照、法人身份证）
3. 创建应用，获取 APPID 和商户号
4. 下载 API 证书
5. 配置支付回调域名

### 支付宝
1. 注册支付宝开放平台: https://open.alipay.com
2. 创建应用（网页/移动应用）
3. 签约"电脑网站支付"能力
4. 生成应用公私钥对
5. 配置应用网关和授权回调

### Stripe
1. 注册 Stripe 账号: https://dashboard.stripe.com
2. 完成 KYC 认证
3. 获取 API Keys
4. 配置 Webhook 端点
5. 如需中国商户，需使用 Stripe Atlas 或第三方代理
