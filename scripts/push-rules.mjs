import fs from 'fs';

const TOKEN = 'ghp_REDACTED
const OWNER = 'Harry-DWAC';
const REPO = 'dwac-website';
const BRANCH = 'main';

const files = [
  'src/app/(main)/rules/full/page.tsx',
  'src/app/zh-cn/rules/full/page.tsx',
  'src/app/zh-tw/rules/full/page.tsx'
];

async function pushFile(localPath) {
  const content = fs.readFileSync(localPath, 'utf8');
  const contentBase64 = Buffer.from(content).toString('base64');
  const githubPath = localPath;
  
  const getRes = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${githubPath}?ref=${BRANCH}`, {
    headers: { 'Authorization': `Bearer ${TOKEN}`, 'User-Agent': 'Node.js' }
  });
  const getData = await getRes.json();
  const sha = getData.sha;
  
  const payload = {
    message: 'fix: P0-5 two-tier award system + Article 15 tribunal composition (三语)',
    content: contentBase64,
    branch: BRANCH,
    sha: sha
  };
  
  const putRes = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${githubPath}`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json', 'User-Agent': 'Node.js' },
    body: JSON.stringify(payload)
  });
  const putData = await putRes.json();
  if (putData.commit) {
    console.log(`✅ ${githubPath} → ${putData.commit.sha.substring(0,8)}`);
  } else {
    console.error(`❌ ${githubPath}: ${putData.message || JSON.stringify(putData).substring(0,200)}`);
  }
}

(async () => {
  for (const f of files) {
    await pushFile(f);
  }
})();
