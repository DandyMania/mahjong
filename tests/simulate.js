/**
 * Headless game simulator — ブラウザなしで game logic をシミュレート
 * Usage: node tests/simulate.js [--runs N] [--strategy random|safe|optimal]
 *
 * 出力: 各ランの結果 + 集計統計
 * 用途: パラメータ調整（HP / タイマー / スコア係数 / EXP 計算式）の影響を定量評価
 */

// ── Inline game parameters (game.js から抜粋・調整用) ──────────────────────
const PARAMS = {
  BASE_TIMER:       10,    // 基本タイマー秒数
  SCORE_SAFE:       100,   // 現物正解スコア
  SCORE_CRIT:       200,   // 非現物正解スコア
  COMBO_BONUS:       20,   // コンボボーナス（最大5コンボまで）
  BAD_EVENT_BASE:  0.06,   // ツモ被害確率（ライバル進捗0での基率）
  BAD_EVENT_SLOPE: 0.12,   // ツモ被害確率増加率（進捗×slope）
  GOOD_EVENT_RATE: 0.08,   // 幸運イベント確率
  EXP_BASE:           2,   // EXP 最低保証
  EXP_PER_RIVAL:      3,   // EXP = rivalIdx × N + floor(score/50)
  EXP_PER_SCORE:     50,   // EXP = max(base, rivalIdx*3 + floor(score/EXP_PER_SCORE))
};

const RIVALS = [
  { name: 'ルーキー あいこ', hp: 4, problemCount: 5 },
  { name: 'ほのか',          hp: 5, problemCount: 6 },
  { name: '中堅 タケシ',     hp: 6, problemCount: 6 },
  { name: '強豪 リサ',       hp: 7, problemCount: 7 },
  { name: '黒龍 ジン',       hp: 8, problemCount: 7 },
];

// ── Strategy helpers ──────────────────────────────────────────────────────────
const STRATEGIES = {
  // 常に安全牌を選ぶ（理想プレイ）
  optimal: (hand) => hand.find(t => t.safe) ?? hand[0],
  // 常に現物（捨て牌にある牌）を優先
  safe: (hand, discards) => {
    const gen = hand.find(t => t.safe && discards.includes(t.tile));
    return gen ?? hand.find(t => t.safe) ?? hand[0];
  },
  // ランダム
  random: (hand) => hand[Math.floor(Math.random() * hand.length)],
  // 危険牌混じりで初心者相当（60% 正解）
  beginner: (hand) => Math.random() < 0.6
    ? (hand.find(t => t.safe) ?? hand[0])
    : (hand.find(t => !t.safe) ?? hand[0]),
};

// ── Fake problem pool (real shapes without DOM) ──────────────────────────────
function fakeProblem(rivalIdx) {
  const difficulty = rivalIdx < 2 ? 'beginner' : rivalIdx < 4 ? 'medium' : 'advanced';
  const safeCount  = difficulty === 'beginner' ? 5 : difficulty === 'medium' ? 4 : 3;
  const total      = 7;
  const hand = [];
  for (let i = 0; i < total; i++) {
    const isSafe = i < safeCount;
    const damage = !isSafe && difficulty === 'advanced' && Math.random() < 0.2 ? 2 : 1;
    hand.push({ tile: `${i+1}m`, safe: isSafe, damage });
  }
  const discards = hand.filter(t => t.safe).slice(0, 2).map(t => t.tile);
  return { hand, discards, waitShape: '両面待ち' };
}

// ── Single run simulation ─────────────────────────────────────────────────────
function simulateRun(strategy = 'optimal', upgrades = {}) {
  const maxLives = 3 + (upgrades.hp || 0);
  const baseTimer = PARAMS.BASE_TIMER + (upgrades.time || 0) * 2;

  let score = 0, lives = maxLives, combo = 0;
  let rivalIdx = 0, totalProblems = 0;
  const events = [];

  for (rivalIdx = 0; rivalIdx < RIVALS.length; rivalIdx++) {
    const rival = RIVALS[rivalIdx];
    let rivalHp = rival.hp;
    const diff   = rivalIdx / (RIVALS.length - 1);
    const badRate  = PARAMS.BAD_EVENT_BASE + diff * PARAMS.BAD_EVENT_SLOPE;
    const goodRate = PARAMS.GOOD_EVENT_RATE;

    while (rivalHp > 0) {
      // ランダムイベント
      const r = Math.random();
      if (r < badRate) {
        lives = Math.max(0, lives - 1);
        events.push(`rival${rivalIdx}: tsumoDamage, lives=${lives}`);
        if (lives <= 0) break;
      } else if (r < badRate + goodRate) {
        events.push(`rival${rivalIdx}: luckyEvent`);
      }

      totalProblems++;
      const prob = fakeProblem(rivalIdx);
      const pick = STRATEGIES[strategy](prob.hand, prob.discards);

      if (pick.safe) {
        const is現物 = prob.discards.includes(pick.tile);
        const isCrit = !is現物;
        let pts = (isCrit ? PARAMS.SCORE_CRIT : PARAMS.SCORE_SAFE) + Math.min(combo, 5) * PARAMS.COMBO_BONUS;
        score += pts;
        combo++;
        rivalHp--;
      } else {
        combo = 0;
        lives = Math.max(0, lives - (pick.damage ?? 1));
        if (lives <= 0) break;
      }
    }

    if (lives <= 0) break;
  }

  const defeated = rivalIdx >= RIVALS.length;
  const exp = Math.max(PARAMS.EXP_BASE, rivalIdx * PARAMS.EXP_PER_RIVAL + Math.floor(score / PARAMS.EXP_PER_SCORE));

  return { defeated, rivalIdx: Math.min(rivalIdx, RIVALS.length - 1), score, lives, totalProblems, exp, events };
}

// ── Multi-run stats ───────────────────────────────────────────────────────────
function runStats(n, strategy, upgrades) {
  const results = [];
  for (let i = 0; i < n; i++) results.push(simulateRun(strategy, upgrades));

  const victories = results.filter(r => r.defeated).length;
  const scores    = results.map(r => r.score);
  const exps      = results.map(r => r.exp);
  const probs     = results.map(r => r.totalProblems);

  const avg = arr => (arr.reduce((a,b) => a+b, 0) / arr.length).toFixed(1);
  const max = arr => Math.max(...arr);
  const min = arr => Math.min(...arr);

  return {
    winRate:      `${((victories / n) * 100).toFixed(1)}%`,
    victories,
    n,
    score:        { avg: avg(scores), max: max(scores), min: min(scores) },
    exp:          { avg: avg(exps),   max: max(exps),   min: min(exps) },
    problems:     { avg: avg(probs),  max: max(probs),  min: min(probs) },
  };
}

// ── CLI entry ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const N    = parseInt(args[args.indexOf('--runs') + 1] || '1000');
const strat = args[args.indexOf('--strategy') + 1] || 'optimal';

console.log(`\n=== 斬★牌★王 パラメータシミュレーション (n=${N}, strategy=${strat}) ===\n`);

// Base パラメータ
const base = runStats(N, strat, {});
console.log('Base (no upgrades):');
console.log(`  勝率: ${base.winRate} (${base.victories}/${base.n})`);
console.log(`  スコア: avg=${base.score.avg}, max=${base.score.max}, min=${base.score.min}`);
console.log(`  EXP:   avg=${base.exp.avg}, max=${base.exp.max}`);
console.log(`  問題数: avg=${base.problems.avg}`);

// アップグレード済み
const upgraded = runStats(N, strat, { hp: 2, time: 2 });
console.log('\n体力Lv2 + 時間Lv2:');
console.log(`  勝率: ${upgraded.winRate}`);
console.log(`  スコア: avg=${upgraded.score.avg}, max=${upgraded.score.max}`);

// 初心者想定
if (strat === 'optimal') {
  const beg = runStats(N, 'beginner', {});
  console.log('\nbeginner strategy (60% accuracy):');
  console.log(`  勝率: ${beg.winRate}`);
  console.log(`  スコア: avg=${beg.score.avg}`);
  console.log(`  EXP:   avg=${beg.exp.avg}`);
}

console.log('\n=== PARAMS (調整するならここを変える) ===');
console.log(PARAMS);
