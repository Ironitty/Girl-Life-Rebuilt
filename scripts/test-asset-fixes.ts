import { createServer, type Server } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4175;

function startServer(): Server {
  const html = readFileSync(join(ROOT, 'dist', 'index.html'));
  const srv = createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      try {
        const data = readFileSync(join(ROOT, 'public', req.url!));
        res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    }
  });
  srv.listen(PORT);
  return srv;
}

interface Case { label: string; url: string; expect: number; }

const cases: Case[] = [
  { label: 'FIXED: happyhome.mp3 (was HappyHome.mp3)', url: '/sound/happyhome/happyhome.mp3', expect: 200 },
  { label: 'FIXED: week9.JPG (was week9.jpg)', url: '/images/characters/pavlovsk/school/girl/anushka/tour/week9.JPG', expect: 200 },
  { label: 'FIXED: headshots_main/12.jpg (was characters/characters/...)', url: '/images/characters/shared/headshots_main/12.jpg', expect: 200 },
  { label: 'OLD broken: HappyHome.mp3 must 404', url: '/sound/happyhome/HappyHome.mp3', expect: 404 },
  { label: 'OLD broken: week9.jpg must 404 (case-sensitive)', url: '/images/characters/pavlovsk/school/girl/anushka/tour/week9.jpg', expect: 404 },
  { label: 'OLD broken: doubled characters/ must 404', url: '/images/characters/characters/shared/headshots_main/12.jpg', expect: 404 },
];

async function main() {
  const srv = startServer();
  await new Promise((r) => setTimeout(r, 400));

  let passed = 0;
  let failed = 0;
  for (const c of cases) {
    const res = await fetch(`http://localhost:${PORT}${c.url}`);
    const ok = res.status === c.expect;
    if (ok) { passed++; console.log(`✓ ${c.label} -> ${res.status}`); }
    else { failed++; console.log(`✗ ${c.label} -> got ${res.status}, expected ${c.expect}`); }
  }

  const diskChecks = [
    'sound/happyhome/happyhome.mp3',
    'images/characters/pavlovsk/school/girl/anushka/tour/week9.JPG',
    'images/characters/shared/headshots_main/12.jpg',
  ];
  for (const p of diskChecks) {
    const ok = existsSync(join(ROOT, p));
    if (ok) { passed++; console.log(`✓ on disk: ${p}`); }
    else { failed++; console.log(`✗ missing on disk: ${p}`); }
  }

  srv.close();
  console.log(`\n=== ASSET FIX TEST: ${passed} passed, ${failed} failed ===`);
  process.exit(failed > 0 ? 1 : 0);
}

main();
