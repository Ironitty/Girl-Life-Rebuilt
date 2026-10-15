import { chromium } from 'playwright';

const TEST_STATE: Record<string, unknown> = {
  daystart: 0,
  clock: 0,
  dayofweek: 0,
  dayofyear: 1,
  dayofmonth: 1,
  month: 1,
  year: 2024,
  locArgs: ['A34', '0', '0'],
  npcID: 'A34',
  npcdesc: 'Test',
  npc_usedname: { A34: 'Test' },
  npc_nickname: { A34: 'Test', A29: '' },
  npc_finance: { A34: 1 },
  npc_selfish: { A34: 1 },
  npc_caretaker: {},
  npc_abusive: {},
  pharmacy_timers: {},
  pharmacyfirstpregtest: 0,
  appointment_state: 'active',
  appointment_state_wait: -5,
  pharmacyfirstbirthcontrol: 0,
  ludaQW: { pharm_purchase: '' },
  sex_ev: { virgin_deny: 0 },
  know_virgin: {},
  npc_anal_times: {},
  pcs_ass: 0,
  appt_attend_desc: 'a',
};

const targets = [
  { loc: 'clinic_functions', sub: 'reception_attend', expect: 'Go to your appointment with a' },
  { loc: 'pav_pharmacy', sub: 'buy_preg_test', expect: "Don't tell" },
  { loc: 'sex_ev_virgin', sub: 'saving_virginity', expect: 'Saving it for marriage' },
];

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome', args: ['--disable-gpu', '--disable-gpu-compositing', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4174/');
  await page.waitForLoadState('networkidle');
  await page.locator('button', { hasText: /^Start$/ }).click();
  await page.waitForTimeout(500);
  await page.locator('button', { hasText: 'Quick Start' }).click();
  await page.waitForTimeout(1000);

  for (const t of targets) {
    console.log(`\n=== ${t.loc}:${t.sub} (expect: "${t.expect}") ===`);

    // Step 1: Capture fullState
    const fullState = await page.evaluate(() => {
      const st = (window as any).__gameStore.getState();
      const plain: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(st)) if (typeof v !== 'function') plain[k] = v;
      return plain;
    });

    // Step 2: Apply TEST_STATE + navigate
    await page.evaluate(([loc, sub, ts]) => {
      const store = (window as any).__gameStore;
      const st = store.getState();
      for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
      Math.random = () => 0;
      store.getState().doGoto(loc, sub);
    }, [t.loc, t.sub, TEST_STATE]);
    await page.waitForTimeout(100);

    // Step 3: Collect button list
    const buttons1 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('button'))
        .filter(b => {
          const text = b.textContent?.trim() ?? '';
          const title = b.getAttribute('title');
          if (title) return false;
          if (b.offsetParent === null) return false;
          if (/^(Map|Back|Open Map)$/i.test(text)) return false;
          if (text.length === 0 || text.length >= 80) return false;
          return true;
        })
        .map(b => b.textContent?.trim() ?? '');
    });
    console.log(`First navigation buttons: [${buttons1.join(', ')}]`);

    // Step 4: For the expected button, reset + re-navigate
    await page.evaluate(([fs, loc, sub, ts]) => {
      const store = (window as any).__gameStore;
      store.setState(fs);
      const st = store.getState();
      for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
      Math.random = () => 0;
      store.getState().doGoto(loc, sub);
    }, [fullState, t.loc, t.sub, TEST_STATE]);
    await page.waitForTimeout(100);

    const buttons2 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('button'))
        .filter(b => {
          const text = b.textContent?.trim() ?? '';
          const title = b.getAttribute('title');
          if (title) return false;
          if (b.offsetParent === null) return false;
          if (/^(Map|Back|Open Map)$/i.test(text)) return false;
          if (text.length === 0 || text.length >= 80) return false;
          return true;
        })
        .map(b => b.textContent?.trim() ?? '');
    });
    console.log(`Second navigation buttons: [${buttons2.join(', ')}]`);

    const found = buttons2.includes(t.expect);
    console.log(found ? `FOUND: "${t.expect}"` : `NOT FOUND: "${t.expect}"`);

    // Dump scene text
    const textContent = await page.evaluate(() => {
      const body = document.body.textContent ?? '';
      return body.slice(0, 500);
    });
    console.log(`Scene text: ${textContent}`);
  }

  await browser.close();
})();
