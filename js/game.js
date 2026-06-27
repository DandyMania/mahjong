const DIFF_LABEL = { beginner: '初級', medium: '中級', advanced: '上級' };

const state = {
  score: 0,
  lives: 3,
  round: 0,
  combo: 0,
  phase: 'title',
  problemIndex: 0,
  shuffledProblems: [],
  currentProblem: null
};

// ── Screen management ──────────────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function showOverlay() {
  document.getElementById('result-overlay').classList.remove('hidden');
}

function hideOverlay() {
  document.getElementById('result-overlay').classList.add('hidden');
}

// ── Game lifecycle ─────────────────────────────────────────────────────────

function startGame() {
  state.score = 0;
  state.lives = 3;
  state.round = 0;
  state.combo = 0;
  state.problemIndex = 0;
  state.shuffledProblems = [...PROBLEMS];
  state.phase = 'playing';
  showScreen('game');
  loadNextProblem();
}

function loadNextProblem() {
  if (state.problemIndex >= state.shuffledProblems.length) {
    state.shuffledProblems = shuffle([...PROBLEMS]);
    state.problemIndex = 0;
  }
  state.currentProblem = state.shuffledProblems[state.problemIndex++];
  state.round++;
  renderProblem();
  updateHUD();
}

// ── Rendering ─────────────────────────────────────────────────────────────

function renderProblem() {
  const p = state.currentProblem;

  const badge = document.getElementById('difficulty-badge');
  badge.textContent = DIFF_LABEL[p.difficulty];
  badge.className = 'diff-badge diff-' + p.difficulty;

  document.getElementById('problem-title').textContent = p.title;
  document.getElementById('problem-desc').textContent = p.description;

  const discardsRow = document.getElementById('discards-row');
  discardsRow.innerHTML = '';
  p.opponentDiscards.forEach(t => discardsRow.appendChild(makeTile(t, 'discard')));

  const handRow = document.getElementById('hand-row');
  handRow.innerHTML = '';
  p.hand.forEach(td => {
    const el = makeTile(td.tile, 'hand');
    el.addEventListener('click', () => selectTile(td));
    el.addEventListener('touchstart', () => el.classList.add('pressing'), { passive: true });
    el.addEventListener('touchend', () => el.classList.remove('pressing'), { passive: true });
    handRow.appendChild(el);
  });
}

function makeTile(tileId, type) {
  const el = document.createElement('div');
  el.className = 'tile tile-' + type;
  el.dataset.tile = tileId;
  el.innerHTML = `<span class="tile-face">${TILE_EMOJI[tileId] || '?'}</span>`;
  return el;
}

function updateHUD() {
  const hearts = '❤️'.repeat(state.lives) + '🖤'.repeat(3 - state.lives);
  document.getElementById('lives-display').textContent = hearts;
  document.getElementById('score-display').textContent = state.score.toLocaleString();
  document.getElementById('round-display').textContent = `第 ${state.round} 問`;
}

// ── Interaction ────────────────────────────────────────────────────────────

function selectTile(tileData) {
  if (state.phase !== 'playing') return;
  state.phase = 'result';

  const isSafe = tileData.safe;

  if (isSafe) {
    const comboBonus = Math.min(state.combo, 5) * 20;
    const pts = 100 + comboBonus;
    state.score += pts;
    state.combo++;
    showResult(true, tileData, pts);
  } else {
    state.lives = Math.max(0, state.lives - 1);
    state.combo = 0;
    showResult(false, tileData, 0);
  }
  updateHUD();
}

function showResult(safe, selected, pts) {
  const p = state.currentProblem;

  document.getElementById('result-icon').textContent = safe ? '✅' : '💥';
  document.getElementById('result-title').textContent = safe ? 'セーフ！' : '振り込み！';

  let scoreText = '';
  if (safe) {
    scoreText = `+${pts} 点`;
    if (state.combo > 1) scoreText += ` 🔥 ${state.combo} 連続！`;
  }
  document.getElementById('result-score').textContent = scoreText;
  document.getElementById('result-wait').textContent = `待ち牌：${p.waitShape}`;
  document.getElementById('result-explanation').textContent = p.explanation;

  const hand = document.getElementById('result-hand');
  hand.innerHTML = '';
  p.hand.forEach(td => {
    const el = makeTile(td.tile, 'result');
    el.classList.add(td.safe ? 'tile-safe' : 'tile-danger');
    if (td.tile === selected.tile) el.classList.add('tile-picked');
    const label = document.createElement('div');
    label.className = 'tile-label';
    label.textContent = td.safe ? '安全' : '危険';
    el.appendChild(label);
    hand.appendChild(el);
  });

  showOverlay();
}

function nextProblem() {
  hideOverlay();
  if (state.lives <= 0) {
    showGameOver();
    return;
  }
  state.phase = 'playing';
  loadNextProblem();
}

function showGameOver() {
  document.getElementById('final-score').textContent = `スコア：${state.score.toLocaleString()} 点`;
  document.getElementById('final-round').textContent = `${state.round - 1} 問クリア`;
  showScreen('gameover');
}

// ── Utility ────────────────────────────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Bootstrap ──────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('btn-how').addEventListener('click', () => showScreen('how'));
  document.getElementById('btn-how-back').addEventListener('click', () => showScreen('title'));
  document.getElementById('btn-next').addEventListener('click', nextProblem);
  document.getElementById('btn-retry').addEventListener('click', startGame);
  document.getElementById('btn-title').addEventListener('click', () => showScreen('title'));

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  showScreen('title');
});
