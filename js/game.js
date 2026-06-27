// ── Rivals ─────────────────────────────────────────────────────────────────
const RIVALS = [
  { name: 'ルーキー あいこ', icon: '👧', hp: 4, flavor: 'え…リーチって何？',    problemIds: [1,2,3,4,5] },
  { name: 'ほのか',          icon: '🎀', hp: 5, flavor: 'ちょっとは読めるよ？',  problemIds: [2,3,4,5,6,7] },
  { name: '中堅 タケシ',     icon: '🤨', hp: 6, flavor: '筋ぐらいは読んでる',   problemIds: [5,6,7,8,9,10] },
  { name: '強豪 リサ',       icon: '😤', hp: 7, flavor: '舐めないでよ！',        problemIds: [7,8,9,10,11,12,13] },
  { name: '黒龍 ジン',       icon: '🐉', hp: 8, flavor: '…ロン確定だ。',         problemIds: [9,10,11,12,13,14,15] },
];

// ── Move names ─────────────────────────────────────────────────────────────
const MOVES = {
  safe:     ['現物切り！', '安全牌確保！', '読み勝ち！', '守備完璧！', 'PERFECT GUARD'],
  safe_c2:  ['ダブルガード！'],
  safe_c3:  ['トリプルガード！！'],
  safe_c4:  ['鉄壁の防御！！'],
  safe_c5:  ['INVINCIBLE!!'],
  crit:     ['現物ヒット！！', '大打撃！！', 'CRITICAL HIT!!'],
  danger:   ['ロン！！', '振り込み確定！！', '罠カード発動！！', 'DEAL IN!!'],
  danger2:  ['ダブルダメージ！！', '大振り込み！！', 'HEAVY DAMAGE!!'],
  timeout:  ['タイムオーバー！！', '制限時間切れ！！', 'TIME LIMIT!!'],
  defeated: ['ライバル撃破！！', 'RIVAL DEFEATED!!', '次の挑戦者！'],
  victory:  ['完全制覇！！', 'ALL CLEAR!!'],
};

// ── Tile display ────────────────────────────────────────────────────────────
const SUIT_KANJI = { m: '萬', p: '筒', s: '索' };
const HONOR_MAP  = { '1z':'東','2z':'南','3z':'西','4z':'北','5z':'白','6z':'発','7z':'中' };

// ── State ───────────────────────────────────────────────────────────────────
const G = {
  score: 0, lives: 3, combo: 0, phase: 'title',
  rivalIdx: 0, rivalHp: 0, rivalHpMax: 0,
  rivalProblems: [], rivalProbIdx: 0,
  currentProblem: null,
};

// ── Timer ───────────────────────────────────────────────────────────────────
const TIMER_MAX = 10;
let _timer = null, _timerVal = 0;

function startTimer() {
  stopTimer();
  _timerVal = TIMER_MAX;
  _renderTimer();
  _timer = setInterval(() => {
    _timerVal--;
    _renderTimer();
    if (_timerVal <= 0) { clearInterval(_timer); _timer = null; onTimeUp(); }
  }, 1000);
}
function stopTimer() { if (_timer) { clearInterval(_timer); _timer = null; } }
function _renderTimer() {
  const bar = $('timer-bar'), num = $('timer-num');
  bar.style.width = Math.max(0, (_timerVal / TIMER_MAX) * 100) + '%';
  bar.className = 'timer-fill ' + (_timerVal <= 3 ? 't-red' : _timerVal <= 6 ? 't-orange' : 't-green');
  num.textContent = _timerVal;
  num.className   = 'timer-num' + (_timerVal <= 3 ? ' red' : '');
}

// ── Auto-advance ────────────────────────────────────────────────────────────
let _advance = null;
function scheduleAdvance(ms) { _advance = setTimeout(advanceGame, ms); }
function advanceGame() {
  if (_advance) { clearTimeout(_advance); _advance = null; }
  hideToast();
  if (G.lives <= 0) { showGameOver(); return; }
  G.phase = 'playing';
  loadNextProblem();
}

// ── Screens ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// ── Game lifecycle ───────────────────────────────────────────────────────────
function startGame() {
  stopTimer();
  if (_advance) { clearTimeout(_advance); _advance = null; }
  G.score = 0; G.lives = 3; G.combo = 0;
  G.phase = 'playing'; G.rivalIdx = 0;
  $('screen-game').classList.remove('critical');
  showScreen('screen-game');
  loadRival(0);
}

function loadRival(idx) {
  G.rivalIdx = idx;
  const r = RIVALS[idx];
  G.rivalHp    = r.hp;
  G.rivalHpMax = r.hp;
  G.rivalProblems = shuffle(r.problemIds.map(id => PROBLEMS.find(p => p.id === id)).filter(Boolean));
  G.rivalProbIdx  = 0;
  renderRivalBar();
  loadNextProblem();
}

function loadNextProblem() {
  if (G.rivalProbIdx >= G.rivalProblems.length) {
    G.rivalProblems = shuffle([...G.rivalProblems]);
    G.rivalProbIdx = 0;
  }
  G.currentProblem = G.rivalProblems[G.rivalProbIdx++];
  G.phase = 'playing';
  renderProblem();
  updateHUD();
  startTimer();
}

// ── Rival bar ────────────────────────────────────────────────────────────────
function renderRivalBar() {
  const r = RIVALS[G.rivalIdx];
  $('rival-icon').textContent   = r.icon;
  $('rival-name').textContent   = r.name;
  $('rival-flavor').textContent = r.flavor;
  renderRivalHp();
}

function renderRivalHp(hit) {
  const pct = Math.max(0, G.rivalHp / G.rivalHpMax * 100);
  const bar  = $('rival-hp-bar');
  const wrap = $('rival-hp-wrap');
  bar.style.width = pct + '%';
  bar.className = 'rival-hp-fill' + (G.rivalHp <= Math.ceil(G.rivalHpMax / 3) ? ' hp-low' : '');
  $('rival-hp-text').textContent = `${G.rivalHp} / ${G.rivalHpMax}`;
  if (hit) {
    wrap.classList.remove('hp-hit');
    void wrap.offsetWidth;
    wrap.classList.add('hp-hit');
    setTimeout(() => wrap.classList.remove('hp-hit'), 380);
  }
}

// ── Rendering ────────────────────────────────────────────────────────────────
function renderProblem() {
  const p  = G.currentProblem;
  const r  = RIVALS[G.rivalIdx];
  const done = r.hp - G.rivalHp;
  $('round-display').textContent = `第 ${done + 1} / ${r.hp} 撃`;

  const dr = $('discards-row');
  dr.innerHTML = '';
  p.opponentDiscards.forEach(t => dr.appendChild(makeTile(t, 'discard')));

  const hr = $('hand-row');
  hr.innerHTML = '';
  p.hand.forEach(td => {
    const el = makeTile(td.tile, 'hand');
    el.addEventListener('pointerdown', e => { el.classList.add('pressed'); addRipple(el, e); });
    el.addEventListener('pointerup',   () => { el.classList.remove('pressed'); selectTile(td, el); });
    el.addEventListener('pointerleave',() => el.classList.remove('pressed'));
    hr.appendChild(el);
  });
}

function makeTile(tileId, type) {
  const el   = document.createElement('div');
  const suit = tileId[1];
  const num  = tileId[0];
  // suit class on PARENT so CSS descendants work
  el.className = `tile tile-${type}` + (suit !== 'z' ? ` suit-${suit}` : '');
  el.dataset.tile = tileId;

  if (suit === 'z') {
    const s = document.createElement('span');
    s.className   = `tc-honor honor-${tileId}`;
    s.textContent = HONOR_MAP[tileId] || '?';
    el.appendChild(s);
  } else {
    const n = document.createElement('span');
    n.className = 'tc-num'; n.textContent = num;
    const s = document.createElement('span');
    s.className = 'tc-suit'; s.textContent = SUIT_KANJI[suit];
    el.appendChild(n); el.appendChild(s);
  }
  return el;
}

function addRipple(el, e) {
  const rect = el.getBoundingClientRect();
  const r = document.createElement('span');
  r.className = 'ripple';
  const sz = Math.max(rect.width, rect.height);
  r.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX-rect.left-sz/2}px;top:${e.clientY-rect.top-sz/2}px`;
  el.appendChild(r);
  setTimeout(() => r.remove(), 420);
}

function updateHUD() {
  let h = '';
  for (let i = 0; i < 3; i++) {
    h += i < G.lives
      ? '<span class="heart heart-alive">❤️</span>'
      : '<span class="heart heart-dead">🖤</span>';
  }
  $('lives-display').innerHTML = h;
  $('score-display').textContent = G.score.toLocaleString();

  const cd = $('combo-display');
  if (G.combo >= 2) {
    cd.textContent = `🔥 ×${G.combo}`;
    cd.classList.remove('combo-hidden');
    cd.classList.add('combo-bump');
    setTimeout(() => cd.classList.remove('combo-bump'), 200);
  } else {
    cd.classList.add('combo-hidden');
  }

  if (G.lives <= 1) $('screen-game').classList.add('critical');
  else              $('screen-game').classList.remove('critical');
}

// ── Interaction ───────────────────────────────────────────────────────────────
function selectTile(td, el) {
  if (G.phase !== 'playing') return;
  G.phase = 'result';
  stopTimer();

  const p = G.currentProblem;

  if (td.safe) {
    // 現物 (in opponent's discards) → CRITICAL HIT = 2 HP damage + 2× score
    const isCrit  = p.opponentDiscards.includes(td.tile);
    const hpDmg   = isCrit ? 2 : 1;
    const comboB  = Math.min(G.combo, 5) * 20;
    const pts     = (isCrit ? 200 : 100) + comboB;

    G.score += pts;
    G.combo++;
    flashGreen();
    spawnScorePopup(pts, el, isCrit);
    revealHand(td, isCrit ? 'crit' : 'safe');
    showMoveName(isCrit ? 'critical' : 'safe', isCrit ? pick(MOVES.crit) : pickSafeMove(G.combo));
    showToast('safe', pts, p.waitShape, isCrit, 0);

    G.rivalHp = Math.max(0, G.rivalHp - hpDmg);
    renderRivalHp(true);
    updateHUD();

    if (G.rivalHp <= 0) setTimeout(rivalDefeated, 600);
    else                 scheduleAdvance(1700);

  } else {
    // Dangerous pick — damage amount from tile data (default 1)
    const dmg = td.damage ?? 1;
    G.combo = 0;
    flashRed(dmg);
    shakeScreen();
    revealHand(td, 'danger');
    G.lives = Math.max(0, G.lives - dmg);
    hitLives();
    showMoveName('danger', dmg >= 2 ? pick(MOVES.danger2) : pick(MOVES.danger));
    showToast('danger', 0, p.waitShape, false, dmg);
    updateHUD();
    scheduleAdvance(G.lives <= 0 ? 2200 : 2000);
  }
}

function onTimeUp() {
  if (G.phase !== 'playing') return;
  G.phase = 'result';
  G.combo = 0;
  flashRed(1);
  shakeScreen();
  revealHand(null, 'none');
  G.lives = Math.max(0, G.lives - 1);
  hitLives();
  showMoveName('danger', pick(MOVES.timeout));
  showToast('timeout', 0, G.currentProblem.waitShape, false, 1);
  updateHUD();
  scheduleAdvance(G.lives <= 0 ? 2200 : 2000);
}

function revealHand(selected, mode) {
  const p = G.currentProblem;
  $('hand-row').querySelectorAll('.tile').forEach((el, i) => {
    const td = p.hand[i];
    el.style.pointerEvents = 'none';
    const isCrit = td.safe && p.opponentDiscards.includes(td.tile);
    if (isCrit)       el.classList.add('tile-crit');
    else if (td.safe) el.classList.add('tile-safe');
    else              el.classList.add('tile-danger');

    if (selected && td.tile === selected.tile) {
      el.classList.add(isCrit ? 'tile-picked-crit' : td.safe ? 'tile-picked-safe' : 'tile-picked-danger');
    }
    const lbl = document.createElement('span');
    lbl.className = 'tile-label';
    lbl.textContent = isCrit ? '★' : td.safe ? '✓' : (td.damage ?? 1) >= 2 ? '✗✗' : '✗';
    el.appendChild(lbl);
  });
}

// ── Rival defeated ────────────────────────────────────────────────────────────
function rivalDefeated() {
  showMoveName('rival', pick(MOVES.defeated));
  if (G.rivalIdx >= RIVALS.length - 1) {
    setTimeout(showVictory, 1200);
  } else {
    setTimeout(() => loadRival(G.rivalIdx + 1), 1400);
  }
}

function showVictory() {
  showMoveName('rival', pick(MOVES.victory));
  $('victory-score').textContent  = `スコア：${G.score.toLocaleString()} 点`;
  $('victory-detail').textContent = `${RIVALS.length} 人のライバルを撃破！`;
  setTimeout(() => showScreen('screen-victory'), 1200);
}

function showGameOver() {
  $('final-score').textContent  = `${G.score.toLocaleString()} 点`;
  $('final-detail').textContent = `${RIVALS[G.rivalIdx].name} に敗れた…`;
  showScreen('screen-gameover');
}

// ── Effects ────────────────────────────────────────────────────────────────────
function flashGreen() {
  const f = $('screen-flash');
  f.style.background = 'rgba(34,197,94,.3)';
  f.classList.add('active');
  setTimeout(() => { f.classList.add('fade'); f.classList.remove('active'); setTimeout(() => f.classList.remove('fade'), 260); }, 80);
}
function flashRed(dmg) {
  const f = $('screen-flash');
  f.style.background = dmg >= 2 ? 'rgba(239,68,68,.75)' : 'rgba(239,68,68,.5)';
  f.className = 'screen-flash active';
  setTimeout(() => f.classList.remove('active'), 80);
  setTimeout(() => f.classList.add('active'),    180);
  setTimeout(() => f.classList.remove('active'), 260);
  if (dmg >= 2) {
    setTimeout(() => f.classList.add('active'),    380);
    setTimeout(() => f.classList.remove('active'), 480);
  }
}
function shakeScreen() {
  const el = $('screen-game');
  el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 380);
}
function hitLives() {
  const el = $('lives-display');
  el.classList.remove('lives-hit'); void el.offsetWidth; el.classList.add('lives-hit');
  setTimeout(() => el.classList.remove('lives-hit'), 380);
}
function spawnScorePopup(pts, anchor, isCrit) {
  const layer = $('popup-layer');
  const el = document.createElement('div');
  el.className = 'score-pop' + (isCrit ? ' crit' : '');
  el.textContent = (isCrit ? '★ ' : '') + '+' + pts;
  if (anchor) {
    const r = anchor.getBoundingClientRect();
    el.style.left = (r.left + r.width / 2 - 24) + 'px';
    el.style.top  = (r.top - 8) + 'px';
  } else { el.style.left = '50%'; el.style.top = '40%'; el.style.transform = 'translateX(-50%)'; }
  layer.appendChild(el);
  setTimeout(() => el.remove(), 1050);
}

// ── Move name slam ─────────────────────────────────────────────────────────────
function showMoveName(mode, text) {
  const w = $('move-name'), t = $('move-name-text');
  w.className = `move-name move-${mode} show`;
  t.textContent = text;
  setTimeout(() => { w.className = 'move-name'; }, 1000);
}
function pickSafeMove(combo) {
  if (combo >= 5) return pick(MOVES.safe_c5);
  if (combo >= 4) return pick(MOVES.safe_c4);
  if (combo >= 3) return pick(MOVES.safe_c3);
  if (combo >= 2) return pick(MOVES.safe_c2);
  return pick(MOVES.safe);
}

// ── Toast ──────────────────────────────────────────────────────────────────────
function showToast(mode, pts, waitShape, isCrit, dmg) {
  const t = $('game-toast');
  if (mode === 'safe') {
    t.className = 'game-toast ' + (isCrit ? 'toast-crit' : 'toast-safe') + ' show';
    t.innerHTML = isCrit
      ? `★ 現物ヒット！ +${pts}pt<br><small>${waitShape}</small>`
      : `✅ セーフ！ +${pts}pt<br><small>${waitShape}</small>`;
  } else if (mode === 'danger') {
    t.className = 'game-toast toast-danger show';
    t.innerHTML = `💥 振り込み！ ${dmg >= 2 ? '-' + dmg + 'ライフ！！' : ''}<br><small>相手の待ち → ${waitShape}</small>`;
  } else {
    t.className = 'game-toast toast-danger show';
    t.innerHTML = `⏰ タイムオーバー！<br><small>待ち → ${waitShape}</small>`;
  }
  t.onclick = () => { clearTimeout(_advance); _advance = null; advanceGame(); };
}
function hideToast() {
  const t = $('game-toast');
  t.className = 'game-toast'; t.onclick = null;
}

// ── Utility ────────────────────────────────────────────────────────────────────
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Hint system ────────────────────────────────────────────────────────────────
function showHint() {
  if (G.phase !== 'playing') return;
  const discardSet = new Set(G.currentProblem.opponentDiscards);
  let found = false;
  $('hand-row').querySelectorAll('.tile-hand').forEach((el, i) => {
    const td = G.currentProblem.hand[i];
    if (td && discardSet.has(td.tile)) {
      el.classList.remove('hint-safe');
      void el.offsetWidth;
      el.classList.add('hint-safe');
      setTimeout(() => el.classList.remove('hint-safe'), 1500);
      found = true;
    }
  });
  if (!found) {
    // No 現物 in hand — pulse all safe tiles briefly
    $('hand-row').querySelectorAll('.tile-hand').forEach((el, i) => {
      const td = G.currentProblem.hand[i];
      if (td && td.safe) {
        el.classList.remove('hint-safe');
        void el.offsetWidth;
        el.classList.add('hint-safe');
        setTimeout(() => el.classList.remove('hint-safe'), 1500);
      }
    });
  }
}

// ── Bootstrap ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  $('btn-start').addEventListener('click',  startGame);
  $('btn-hint').addEventListener('click',   showHint);
  $('btn-how').addEventListener('click',    () => showScreen('screen-how'));
  $('btn-how-back').addEventListener('click', () => showScreen('screen-title'));
  $('btn-retry').addEventListener('click',  startGame);
  $('btn-title').addEventListener('click',  () => showScreen('screen-title'));
  $('btn-again').addEventListener('click',  startGame);
  $('btn-vtitle').addEventListener('click', () => showScreen('screen-title'));

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  showScreen('screen-title');
});
