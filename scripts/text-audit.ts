import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';

const args = process.argv.slice(2);
const filterIdx = args.indexOf('--filter');
const filter = filterIdx !== -1 ? args[filterIdx + 1] : null;
const verbose = args.includes('--verbose');

const PATTERNS: { name: string; re: RegExp; severity: 'high' | 'medium' }[] = [
  { name: 'raw func()', re: /\$?func\('/g, severity: 'high' },
  { name: 'QSP dynamics <<>>', re: /<<|>>/g, severity: 'high' },
  { name: 'NaN', re: /\bNaN\b/g, severity: 'high' },
  { name: 'undefined', re: /\bundefined\b/g, severity: 'high' },
  { name: '[object Object]', re: /\[object Object\]/g, severity: 'high' },
  { name: 'TODO-QSP', re: /TODO-QSP/g, severity: 'medium' },
  { name: 'a 0', re: /\ba 0\b/g, severity: 'medium' },
  { name: 'the 0', re: /\bthe 0\b/g, severity: 'medium' },
  { name: 'is 0', re: /\bis 0\b/g, severity: 'medium' },
  { name: 'for 0', re: /\bfor 0\b/g, severity: 'medium' },
  { name: 'of 0', re: /\bof 0\b/g, severity: 'medium' },
  { name: 'and 0', re: /\band 0\b/g, severity: 'medium' },
  { name: '0 and', re: /\b0 and\b/g, severity: 'medium' },
  { name: '0, 0', re: /\b0, 0\b/g, severity: 'medium' },
  { name: '0 is', re: /\b0 is\b/g, severity: 'medium' },
  { name: 'at 0', re: /\bat 0\b/g, severity: 'medium' },
  { name: 'both 0', re: /\bboth 0\b/g, severity: 'medium' },
  { name: 'near 0', re: /\bnear 0\b/g, severity: 'medium' },
  { name: 'next to 0', re: /\bnext to 0\b/g, severity: 'medium' },
  { name: 'with 0', re: /\bwith 0\b/g, severity: 'medium' },
];

function startServer(): Server {
  const html = readFileSync(join(ROOT, 'dist', 'index.html'));
  const srv = createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      try {
        const data = readFileSync(join(ROOT, 'public', req.url!));
        const ext = req.url!.split('.').pop();
        const ct = ext === 'jpg' || ext === 'png' ? 'image/*' : ext === 'mp3' ? 'audio/mpeg' : 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': ct });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    }
  });
  srv.listen(4173);
  return srv;
}

function getLocations(): string[] {
  const locDir = join(ROOT, 'src', 'locations');
  const locations: string[] = [];
  function scanDir(dir: string) {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        if (entry === '_shared') continue;
        scanDir(fullPath);
      } else if (entry.endsWith('.ts')) {
        const name = basename(entry, '.ts');
        if (name.startsWith('_')) continue;
        locations.push(name);
      }
    }
  }
  scanDir(locDir);
  return locations.sort();
}

function scanText(text: string): { pattern: string; severity: string; context: string; count: number }[] {
  const issues: { pattern: string; severity: string; context: string; count: number }[] = [];
  for (const p of PATTERNS) {
    p.re.lastIndex = 0;
    let match: RegExpExecArray | null;
    let count = 0;
    let firstContext = '';
    while ((match = p.re.exec(text)) !== null) {
      count++;
      if (count === 1) {
        const start = Math.max(0, match.index - 30);
        const end = Math.min(text.length, match.index + match[0].length + 30);
        firstContext = (start > 0 ? '...' : '') + text.slice(start, end).replace(/\n/g, ' ') + (end < text.length ? '...' : '');
      }
      if (count > 10) break;
    }
    if (count > 0) {
      issues.push({ pattern: p.name, severity: p.severity, context: firstContext, count });
    }
  }
  return issues;
}

async function main() {
  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await sleep(500);

    await page.locator('button', { hasText: /^Start$/ }).click();
    await sleep(500);
    await page.locator('button', { hasText: 'Quick Start' }).click();
    await sleep(500);
    await page.locator('input[placeholder="Elena"]').first().fill('Test');
    await page.locator('button', { hasText: /^Continue$/ }).click();
    await sleep(500);
    await page.locator('button', { hasText: /^Continue$/ }).click();
    await sleep(500);
    await page.locator('button', { hasText: /End of August/ }).click();
    await sleep(500);
    await page.locator('button', { hasText: 'Pavlovsk' }).first().click();
    await sleep(500);
    await page.locator('button', { hasText: 'Popular' }).first().click();
    await sleep(500);
    await page.locator('button', { hasText: 'Sociable' }).first().click();
    await sleep(500);
    await page.locator('button', { hasText: /^Continue$/ }).click();
    await sleep(500);
    await page.locator('button', { hasText: 'Start Game' }).click();
    await sleep(1000);

    let locations = getLocations();
    if (filter) {
      const re = new RegExp(filter, 'i');
      locations = locations.filter((l) => re.test(l));
    }

    console.log('=== TEXT AUDIT ===');
    console.log(`Locations to check: ${locations.length}`);
    if (filter) console.log(`Filter: ${filter}`);
    console.log('');

    const results: { loc: string; issues: { pattern: string; severity: string; context: string; count: number }[] }[] = [];
    const startTime = Date.now();
    const patternCounts: Record<string, number> = {};
    const severityCounts: Record<string, number> = { high: 0, medium: 0 };

    for (let i = 0; i < locations.length; i++) {
      const loc = locations[i];
      const issues: { pattern: string; severity: string; context: string; count: number }[] = [];

      try {
        await page.evaluate((l) => {
          const store = (window as any).__gameStore;
          store.getState().doGoto(l, '');
        }, loc);
      } catch {
        results.push({ loc, issues: [{ pattern: 'goto threw', severity: 'high', context: '', count: 1 }] });
        continue;
      }

      await sleep(400);

      const bodyText = await page.textContent('body') ?? '';
      const actionTexts: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('button'))
          .map((b) => b.textContent?.trim() ?? '')
          .filter((t) => t.length > 0 && t.length < 80 && !/^(Map|Back)$/i.test(t));
      });

      const allText = bodyText + '\n' + actionTexts.join('\n');
      const found = scanText(allText);
      if (found.length > 0) {
        issues.push(...found);
      }

      results.push({ loc, issues });

      for (const issue of issues) {
        patternCounts[issue.pattern] = (patternCounts[issue.pattern] ?? 0) + 1;
        severityCounts[issue.severity] = (severityCounts[issue.severity] ?? 0) + 1;
      }

      if (verbose && issues.length > 0) {
        console.log(`✗ ${loc}: ${issues.map((x) => `${x.pattern} x${x.count}`).join(', ')}`);
      }

      if ((i + 1) % 100 === 0) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        const withIssues = results.filter((r) => r.issues.length > 0).length;
        console.log(`  Progress: ${i + 1}/${locations.length} (${elapsed}s) [${withIssues} with issues]`);
      }
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const withIssues = results.filter((r) => r.issues.length > 0);
    const clean = results.length - withIssues.length;

    console.log('');
    console.log(`=== RESULTS (${elapsed}s) ===`);
    console.log(`Total: ${results.length}`);
    console.log(`Clean: ${clean}`);
    console.log(`With issues: ${withIssues.length}`);

    if (withIssues.length > 0) {
      console.log('');
      console.log('--- PATTERN SUMMARY ---');
      for (const [pattern, count] of Object.entries(patternCounts).sort((a, b) => b[1] - a[1])) {
        console.log(`${pattern}: ${count} locations`);
      }
      console.log('');
      console.log(`High severity: ${severityCounts.high} locations`);
      console.log(`Medium severity: ${severityCounts.medium} locations`);

      console.log('');
      console.log('--- LOCATIONS WITH ISSUES ---');
      for (const r of withIssues) {
        const summary = r.issues.map((x) => `${x.pattern} x${x.count}`).join(', ');
        console.log(`${r.loc}: ${summary}`);
        if (verbose) {
          for (const issue of r.issues) {
            if (issue.context) console.log(`  [${issue.pattern}] ...${issue.context}...`);
          }
        }
      }
    }

    if (withIssues.length > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Audit crashed: ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
