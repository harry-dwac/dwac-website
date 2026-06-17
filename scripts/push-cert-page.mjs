import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKEN = 'ghp_REDACTED
const OWNER = 'Harry-DWAC';
const REPO = 'dwac-website';
const BRANCH = 'main';
const FILE_PATH = 'src/app/about/certification/page.tsx';

const filePath = path.join(__dirname, '..', FILE_PATH);
const content = fs.readFileSync(filePath, 'utf8');
const contentBase64 = Buffer.from(content).toString('base64');

const payload = {
  message: 'feat: add certification system page (P1-4)',
  content: contentBase64,
  branch: BRANCH
};

fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'Node.js'
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  if (data.commit) {
    console.log('✅ 推送成功！');
    console.log(`  Commit: ${data.commit.sha.substring(0, 8)}`);
  } else {
    console.error('❌ 推送失败:', data.message || data);
  }
})
.catch(err => console.error('❌ 错误:', err));
