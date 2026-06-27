// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:8080';

// AI プレイヤー: 安全牌を自動選択して全ライバルを倒す
async function playThrough(page, { debug = true, maxSteps = 120, stepMs = 300 } = {}) {
  const logs = [];
  const errors = [];

  // エラー監視
  page.on('pageerror', e => errors.push(e.message));

  await page.evaluate((dbg) => {
    window.__errors = [];
    window.onerror = (msg, _s, line, col) => { window.__errors.push(`${msg} L${line}:${col}`); return false; };
    if (dbg) { DEBUG_MODE = true; updateTitleUI(); }
    startGame();
  }, debug);

  for (let i = 0; i < maxSteps; i++) {
    await page.waitForTimeout(stepMs);

    const state = await page.evaluate(() => ({
      phase: G.phase,
      screen: document.querySelector('.screen.active')?.id,
      rivalIdx: G.rivalIdx,
      errors: window.__errors || [],
    }));

    logs.push(`step${i + 1}: ${state.phase} | ${state.screen} | rival=${state.rivalIdx}`);
    if (state.errors.length) errors.push(...state.errors);

    if (state.screen === 'screen-victory') {
      logs.push('VICTORY');
      return { result: 'victory', logs, errors, steps: i + 1 };
    }
    if (state.screen === 'screen-gameover' || state.screen === 'screen-upgrade') {
      logs.push('GAMEOVER_UNEXPECTED');
      return { result: 'gameover', logs, errors, steps: i + 1 };
    }
    if (state.screen === 'screen-skill') {
      await page.evaluate(() => {
        const card = document.querySelector('.skill-card');
        if (card) { clearInterval(_skillTimer); card.click(); }
      });
      continue;
    }
    if (state.screen === 'screen-game' && state.phase === 'playing') {
      await page.evaluate(() => {
        const p = G.currentProblem;
        if (!p) return;
        const tiles = Array.from($('hand-row').querySelectorAll('.tile-hand'));
        const idx = p.hand.findIndex(td => td.safe);
        if (idx >= 0 && tiles[idx]) selectTile(p.hand[idx], tiles[idx]);
      });
    }
  }

  return { result: 'timeout', logs, errors, steps: maxSteps };
}

// ──────────────────────────────────────────────
test.describe('E2E フロー', () => {
  test('タイトル画面が表示される', async ({ page }) => {
    await page.goto(BASE);
    await expect(page.locator('h1')).toHaveText('斬★牌★王');
    await expect(page.locator('#btn-start')).toBeVisible();
  });

  test('遊び方画面が開閉できる', async ({ page }) => {
    await page.goto(BASE);
    await page.click('#btn-how');
    await expect(page.locator('.how-header')).toBeVisible();
    await page.click('#btn-how-back');
    await expect(page.locator('#btn-start')).toBeVisible();
  });

  test('全ライバル撃破で勝利画面まで到達できる (DEBUG mode)', async ({ page }) => {
    await page.goto(BASE);
    const { result, logs, errors } = await playThrough(page);

    console.log('--- play log ---\n' + logs.slice(-20).join('\n'));
    expect(errors, `JS エラー: ${errors.join(', ')}`).toHaveLength(0);
    expect(result).toBe('victory');
  });

  test('勝利画面に「もう一度！」ボタンがある', async ({ page }) => {
    await page.goto(BASE);
    const { result } = await playThrough(page);
    expect(result).toBe('victory');
    await expect(page.locator('#btn-again')).toBeVisible();
    await expect(page.locator('#victory-score')).toContainText('点');
  });

  test('「もう一度！」でリスタートできる', async ({ page }) => {
    await page.goto(BASE);
    await playThrough(page);
    await page.click('#btn-again');
    // 新しいゲームが始まる（stage transition → game screen）
    await page.waitForTimeout(3000);
    const screen = await page.evaluate(() => document.querySelector('.screen.active')?.id);
    expect(screen).toBe('screen-game');
  });
});

// ──────────────────────────────────────────────
test.describe('ゲームロジック (in-page)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    // DEBUG + スタート
    await page.evaluate(() => {
      DEBUG_MODE = true; updateTitleUI(); startGame();
    });
    await page.waitForTimeout(2800); // stage transition 待ち
  });

  test('安全牌を選択するとライバルHPが減る', async ({ page }) => {
    const hpBefore = await page.evaluate(() => G.rivalHp);
    await page.evaluate(() => {
      const p = G.currentProblem;
      const tiles = Array.from($('hand-row').querySelectorAll('.tile-hand'));
      const idx = p.hand.findIndex(td => td.safe);
      if (idx >= 0) selectTile(p.hand[idx], tiles[idx]);
    });
    const hpAfter = await page.evaluate(() => G.rivalHp);
    expect(hpAfter).toBeLessThan(hpBefore);
  });

  test('危険牌を選択するとライフが減る', async ({ page }) => {
    const livesBefore = await page.evaluate(() => G.lives);
    await page.evaluate(() => {
      const p = G.currentProblem;
      const tiles = Array.from($('hand-row').querySelectorAll('.tile-hand'));
      const idx = p.hand.findIndex(td => !td.safe);
      if (idx >= 0) selectTile(p.hand[idx], tiles[idx]);
    });
    const livesAfter = await page.evaluate(() => G.lives);
    expect(livesAfter).toBeLessThan(livesBefore);
  });

  test('スコアが正常に加算される', async ({ page }) => {
    const scoreBefore = await page.evaluate(() => G.score);
    await page.evaluate(() => {
      const p = G.currentProblem;
      const tiles = Array.from($('hand-row').querySelectorAll('.tile-hand'));
      const idx = p.hand.findIndex(td => td.safe);
      if (idx >= 0) selectTile(p.hand[idx], tiles[idx]);
    });
    const scoreAfter = await page.evaluate(() => G.score);
    expect(scoreAfter).toBeGreaterThan(scoreBefore);
  });

  test('ヒントボタンで hint-safe アニメが付く', async ({ page }) => {
    await page.click('#btn-hint');
    const hasHint = await page.evaluate(() =>
      Array.from($('hand-row').querySelectorAll('.tile-hand'))
        .some(el => el.classList.contains('hint-safe'))
    );
    expect(hasHint).toBe(true);
  });
});
