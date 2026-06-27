// ── Rivals ─────────────────────────────────────────────────────────────────
const RIVALS = [
  { name: '天野 マリン',    icon: '👧', hp: 4, flavor: 'え…リーチって何のこと？',          prob: [1,2,3,4,5] },
  { name: '罠師 リオ',     icon: '🎀', hp: 5, flavor: '危険牌は…こっそり隠してあるの♪',   prob: [2,3,4,5,6,7] },
  { name: '鬼牌 ジョウ',   icon: '🤨', hp: 6, flavor: '筋ぐらいは読んでるぜ！',           prob: [5,6,7,8,9,10] },
  { name: '覇王 カリン',   icon: '😤', hp: 7, flavor: '私の牌読みに死角はない！',          prob: [7,8,9,10,11,12,13] },
  { name: '冥龍 カイト',   icon: '🐉', hp: 8, flavor: '…お前のツモは終わりだ。',           prob: [9,10,11,12,13,14,15] },
];

// ── Run skills (temp, expire each run) ─────────────────────────────────────
const RUN_SKILLS = [
  { id: 'iron_wall',   icon: '🛡️',  name: '鉄壁',        desc: '次のダメージを1回無効にする' },
  { id: 'time_boost',  icon: '⚡',   name: '速攻',        desc: 'このライバル戦 タイマー+3秒' },
  { id: 'combo_save',  icon: '🔥',   name: '連撃',        desc: '次のミスでコンボが-1のみ' },
  { id: 'safe_one',    icon: '🎯',   name: '幸運の牌',    desc: '次の問題の危険牌が1枚消える' },
  { id: 'double_dmg',  icon: '💢',   name: '破壊力',      desc: 'このライバル戦 与えるダメージ×2' },
  { id: 'score_2x',    icon: '💰',   name: '大勝負',      desc: '次の正解スコア×2' },
  { id: 'crit_triple', icon: '🀄',   name: '現物の極意',  desc: '現物ヒットで与えるダメージ×3' },
  { id: 'heal',        icon: '❤️‍🩹',  name: '回復',        desc: 'ライフ+1回復（即時）' },
  { id: 'time_next5',  icon: '😌',   name: '余裕',        desc: '次の問題だけタイマー+5秒' },
  // 麻雀漫画スキル
  { id: 'mouhai',      icon: '🦾',   name: '轟盲牌',      desc: '次の問題、牌の文字が見えなくなるが正解で3倍スコア' },
  { id: 'reitan',      icon: '🧊',   name: '冷たい打ち手', desc: 'このランでコンボが0にならない' },
  { id: 'shinsoku',    icon: '⚡⚡',  name: '捨て牌三倍速', desc: '残り5秒以上で正解したらスコア+200' },
];

// ── Permanent upgrades (saved to localStorage) ─────────────────────────────
const UPGRADES = [
  { id: 'hp',    icon: '❤️',  name: '体力強化',     maxLv: 2, costs: [8,20],  descs: ['+1ライフ（最大4）', '+1ライフ（最大5）'] },
  { id: 'time',  icon: '⏱️',  name: '時間延長',     maxLv: 2, costs: [10,18], descs: ['+2秒（12秒）', '+2秒（14秒）'] },
  { id: 'hint',  icon: '💡',  name: 'ヒント全開',   maxLv: 1, costs: [15],    descs: ['ヒントで安全牌が全部光る'] },
  { id: 'lucky', icon: '🍀',  name: '幸運お守り',   maxLv: 2, costs: [12,25], descs: ['ラッキーイベント確率2倍', 'ツモ被害を受けない'] },
  { id: 'combo', icon: '🔥',  name: 'コンボキープ', maxLv: 1, costs: [20],    descs: ['ミスでコンボが-1のみ'] },
  { id: 'ins',   icon: '🛡️',  name: '初回ミス保険', maxLv: 1, costs: [10],    descs: ['1ランに1回、最初のミスを無効'] },
];

// ── Move names ─────────────────────────────────────────────────────────────
const MOVES = {
  clutch:   ['土壇場逆転！！','ギリギリ大打撃！！','CLUTCH HIT!!','崖っぷちの一手！！'],
  safe:     ['現物切り！','安全牌確保！','読み勝ち！','守備完璧！','PERFECT GUARD'],
  safe_c2:  ['ダブルガード！'],
  safe_c3:  ['トリプルガード！！', '轟盲牌！！'],
  safe_c4:  ['鉄壁の防御！！', '悪魔の振り子！！', '捨て牌三倍速！！'],
  safe_c5:  ['INVINCIBLE!!', '神域の読み！！', '完全記憶術！！'],
  crit:     ['現物ヒット！！','大打撃！！','CRITICAL HIT!!','牌の支配者！！'],
  danger:   ['ロン！！','振り込み確定！！','DEAL IN!!'],
  danger2:  ['ダブルダメージ！！','大振り込み！！','HEAVY DAMAGE!!'],
  timeout:  ['タイムオーバー！！','TIME LIMIT!!'],
  defeated: ['ライバル撃破！！','RIVAL DEFEATED!!'],
  victory:  ['完全制覇！！','ALL CLEAR!!'],
};

// ── Random event chars ──────────────────────────────────────────────────────
const NPC = ['アンズ','ホンダ','バクラ','マリク','レベッカ','アテム'];

// ── Tile display ────────────────────────────────────────────────────────────
const SUIT_KANJI = { m:'萬', p:'筒', s:'索' };
const HONOR_MAP  = { '1z':'東','2z':'南','3z':'西','4z':'北','5z':'白','6z':'発','7z':'中' };
const KANJI_NUM  = ['','一','二','三','四','五','六','七','八','九'];

// ── Save ────────────────────────────────────────────────────────────────────
const SAVE_KEY = 'mj-sweeper-v1';
function getSave() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || mkSave(); }
  catch { return mkSave(); }
}
function mkSave() { return { exp:0, upgrades:{}, bestScore:0, runs:0 }; }
function writeSave(s) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch {} }

// ── Mode flags ───────────────────────────────────────────────────────────────
let DEBUG_MODE = false;
let EASY_MODE  = false;

// ── State ───────────────────────────────────────────────────────────────────
const G = {
  score:0, lives:3, maxLives:3, combo:0, phase:'title',
  rivalIdx:0, rivalHp:0, rivalHpMax:0,
  rivalProbs:[], rivalProbIdx:0, currentProblem:null,
  runSkills:[], // active run skills
  // one-shot flags
  hasBlock:false, hasInsurance:true, comboSaveOnce:false,
  safeOneNext:false, scoreDblOnce:false, mouhaiNext:false, rivalDmgMult:1, critMult:2,
  timerBonus:0, nextTimerBonus:0,
  // combo time carry-over
  carryTime:0,
};

// ── Timer ───────────────────────────────────────────────────────────────────
let BASE_TIMER = 10;
let _timer = null, _tv = 0;

function startTimer() {
  stopTimer();
  const bonus = G.timerBonus + G.nextTimerBonus;
  G.nextTimerBonus = 0;
  const base = DEBUG_MODE ? 30 : EASY_MODE ? 15 : BASE_TIMER;
  // Carry time from previous problem's combo (焦れば焦るほど時間がなくなる)
  _tv = G.carryTime > 0 ? Math.min(G.carryTime + bonus, 15) : base + bonus;
  G.carryTime = 0; // consume carry
  _renderTimer();
  _timer = setInterval(() => { _tv--; _renderTimer(); if (_tv<=0) { clearInterval(_timer); _timer=null; onTimeUp(); } }, 1000);
}
function stopTimer() { if (_timer) { clearInterval(_timer); _timer=null; } }
function _renderTimer() {
  const bar=$('timer-bar'), num=$('timer-num');
  const max = (DEBUG_MODE?30:EASY_MODE?15:BASE_TIMER)+G.timerBonus;
  bar.style.width = Math.max(0,_tv/max*100)+'%';
  bar.className='timer-fill '+(_tv<=3?'t-red':_tv<=6?'t-orange':'t-green');
  num.textContent=_tv; num.className='timer-num'+(_tv<=3?' red':'');
}

// ── Advance timer ────────────────────────────────────────────────────────────
let _adv = null;
function sched(ms) { _adv = setTimeout(advance, ms); }
function advance() {
  if (_adv) { clearTimeout(_adv); _adv=null; }
  hideToast();
  if (G.lives<=0) { showGameOver(); return; }
  G.phase='playing'; loadNextProblem();
}

// ── Screens ─────────────────────────────────────────────────────────────────
const $=id=>document.getElementById(id);
function showScreen(id) { document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); $(id).classList.add('active'); }

// ── Bootstrap game start ─────────────────────────────────────────────────────
function startGame() {
  stopTimer();
  if (_adv) { clearTimeout(_adv); _adv=null; }

  const save = getSave();
  const upg  = save.upgrades;

  // Apply permanent upgrades
  G.maxLives   = 3 + (upg.hp  || 0);
  BASE_TIMER   = 10 + (upg.time || 0) * 2;
  G.hintAll    = !!(upg.hint);
  G.hasInsurance = !!(upg.ins);

  G.score=0; G.lives=G.maxLives; G.combo=0; G.rivalIdx=0;
  G.runSkills=[]; G.hasBlock=false; G.comboSaveOnce=false;
  G.safeOneNext=false; G.scoreDblOnce=false; G.mouhaiNext=false; G.rivalDmgMult=1;
  G.critMult = hasRunSkill('crit_triple') ? 3 : 2;
  G.timerBonus=0; G.nextTimerBonus=0; G.carryTime=0;

  $('screen-game').classList.remove('critical');
  showScreen('screen-game');
  loadRival(0);
}

// ── Rival loading ─────────────────────────────────────────────────────────────
function loadRival(idx) {
  G.rivalIdx=idx;
  const r=RIVALS[idx];
  G.rivalHp    = DEBUG_MODE ? 1 : r.hp;
  G.rivalHpMax = DEBUG_MODE ? 1 : r.hp;
  // Reset time boost on new rival
  G.timerBonus = hasRunSkill('time_boost') ? 3 : 0;
  G.rivalDmgMult = hasRunSkill('double_dmg') ? 2 : 1;

  showRivalTransition(idx, () => {
    G.rivalProbs = shuffle(r.prob.map(id=>PROBLEMS.find(p=>p.id===id)).filter(Boolean));
    G.rivalProbIdx=0;
    renderRivalBar();
    G.phase='playing';
    loadNextProblem();
  });
}

// ── Stage transition ──────────────────────────────────────────────────────────
function showRivalTransition(idx, cb) {
  const r=RIVALS[idx];
  const ov=$('stage-trans');
  $('trans-stage').textContent  = `STAGE ${idx+1} / ${RIVALS.length}`;
  $('trans-icon').textContent   = r.icon;
  $('trans-name').textContent   = r.name;
  $('trans-flavor').textContent = `"${r.flavor}"`;
  ov.classList.remove('hidden');
  requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add('show')));
  setTimeout(()=>{
    ov.classList.remove('show');
    setTimeout(()=>{ ov.classList.add('hidden'); cb(); }, 350);
  }, 2200);
}

// ── Problem loading ───────────────────────────────────────────────────────────
function loadNextProblem() {
  if (G.rivalProbIdx>=G.rivalProbs.length) { G.rivalProbs=shuffle([...G.rivalProbs]); G.rivalProbIdx=0; }
  // Clone problem so we can mutate it for lucky effects
  G.currentProblem = JSON.parse(JSON.stringify(G.rivalProbs[G.rivalProbIdx++]));

  // Lucky effect: one dangerous tile becomes safe
  if (G.safeOneNext) {
    G.safeOneNext=false;
    const dangerous=G.currentProblem.hand.filter(td=>!td.safe);
    if (dangerous.length>0) { const t=pick(dangerous); t.safe=true; t.lucky=true; }
  }

  // Random event (before rendering)
  if (G.phase==='playing') rollEvent();

  if (G.lives<=0) { showGameOver(); return; }

  updateHUD();
  renderProblem();
  startTimer();

  // Mouhai: hide tile text next problem (set before renderProblem)
  if(hasRunSkill('mouhai')&&!G.mouhaiNext) { G.mouhaiNext=true; }

  // Auto-hint for easy mode or hint upgrade
  if (EASY_MODE || G.hintAll) setTimeout(showHint, 400);
}

// ── Random events ─────────────────────────────────────────────────────────────
function rollEvent() {
  const save=getSave();
  const upg=save.upgrades;
  const diff=G.rivalIdx/(RIVALS.length-1);
  const badRate  = EASY_MODE ? 0 : 0.06+diff*0.12;
  const goodRate = 0.08*(upg.lucky>=1?2:1);
  const r=Math.random();

  if (r<badRate && !(upg.lucky>=2)) {
    // Bad: ツモ
    const name=pick(NPC);
    if (G.hasBlock) {
      G.hasBlock=false;
      showEventToast(`🛡️ ${name}のツモ！でも鉄壁で防いだ！`, 'safe');
    } else {
      G.lives=Math.max(0,G.lives-1);
      hitLives(); updateHUD();
      showEventToast(`😱 ${name}がツモ！-1ライフ…`, 'danger');
    }
  } else if (r<badRate+goodRate) {
    // Good: 他家ロン → 危険牌が1枚消える
    const name=pick(NPC);
    G.safeOneNext=true;
    showEventToast(`✨ ${name}がロン！危険牌が1枚消えるよ`, 'safe');
  }
}

function showEventToast(msg, mode) {
  const t=$('game-toast');
  t.className='game-toast '+(mode==='safe'?'toast-safe':'toast-danger')+' show';
  t.textContent=msg;
  t.onclick=null;
  setTimeout(()=>{ if(t.classList.contains('show')) t.className='game-toast'; }, 2200);
}

// ── Rival HP bar ─────────────────────────────────────────────────────────────
function renderRivalBar() {
  const r=RIVALS[G.rivalIdx];
  $('rival-icon').textContent   = r.icon;
  $('rival-name').textContent   = r.name;
  $('rival-flavor').textContent = r.flavor;
  renderRivalHp();
}
function renderRivalHp(hit) {
  const pct=Math.max(0,G.rivalHp/G.rivalHpMax*100);
  const bar=$('rival-hp-bar'), wrap=$('rival-hp-wrap');
  bar.style.width=pct+'%';
  bar.className='rival-hp-fill'+(G.rivalHp<=Math.ceil(G.rivalHpMax/3)?' hp-low':'');
  $('rival-hp-text').textContent=`${G.rivalHp} / ${G.rivalHpMax}`;
  if (hit) { wrap.classList.remove('hp-hit'); void wrap.offsetWidth; wrap.classList.add('hp-hit'); setTimeout(()=>wrap.classList.remove('hp-hit'),380); }
}

// ── Problem rendering ─────────────────────────────────────────────────────────
function renderProblem() {
  const p=G.currentProblem, r=RIVALS[G.rivalIdx];
  $('round-display').textContent=`第 ${r.hp-G.rivalHp+1} / ${r.hp} 撃`;
  const dr=$('discards-row'); dr.innerHTML='';
  p.opponentDiscards.forEach(t=>dr.appendChild(mkTile(t,'discard')));
  const hr=$('hand-row'); hr.innerHTML='';
  p.hand.forEach(td=>{
    const el=mkTile(td.tile,'hand',G.mouhaiNext);
    el.addEventListener('pointerdown',e=>{el.classList.add('pressed');addRipple(el,e);});
    el.addEventListener('pointerup',  ()=>{el.classList.remove('pressed');selectTile(td,el);});
    el.addEventListener('pointerleave',()=>el.classList.remove('pressed'));
    hr.appendChild(el);
  });
  if(G.mouhaiNext) showEventToast('🦾 盲牌発動！正解で3倍スコア', 'safe');
}
function mkTile(id,type,blind=false) {
  const el=document.createElement('div');
  const suit=id[1], num=id[0];
  el.className=`tile tile-${type}`+(suit!=='z'?` suit-${suit}`:'')+(blind?' tile-blind':'');
  el.dataset.tile=id;
  if(blind){const s=document.createElement('span');s.className='tc-blind';s.textContent='？';el.appendChild(s);}
  else if(suit==='z'){const s=document.createElement('span');s.className=`tc-honor honor-${id}`;s.textContent=HONOR_MAP[id]||'?';el.appendChild(s);}
  else{const n=document.createElement('span');n.className='tc-num';n.textContent=KANJI_NUM[parseInt(num)]||num;const s=document.createElement('span');s.className='tc-suit';s.textContent=SUIT_KANJI[suit];el.appendChild(n);el.appendChild(s);}
  return el;
}
function addRipple(el,e) {
  const r=el.getBoundingClientRect(),rip=document.createElement('span');
  rip.className='ripple';const sz=Math.max(r.width,r.height);
  rip.style.cssText=`width:${sz}px;height:${sz}px;left:${e.clientX-r.left-sz/2}px;top:${e.clientY-r.top-sz/2}px`;
  el.appendChild(rip);setTimeout(()=>rip.remove(),420);
}

// ── HUD ──────────────────────────────────────────────────────────────────────
function updateHUD() {
  let h='';
  for(let i=0;i<G.maxLives;i++) h+=i<G.lives?'<span class="heart heart-alive">❤️</span>':'<span class="heart heart-dead">🖤</span>';
  $('lives-display').innerHTML=h;
  $('score-display').textContent=G.score.toLocaleString();
  const cd=$('combo-display');
  if(G.combo>=2){cd.textContent=`🔥 ×${G.combo}`;cd.classList.remove('combo-hidden');cd.classList.add('combo-bump');setTimeout(()=>cd.classList.remove('combo-bump'),200);}
  else cd.classList.add('combo-hidden');
  if(G.lives<=1)$('screen-game').classList.add('critical');
  else $('screen-game').classList.remove('critical');
}

// ── Tile interaction ──────────────────────────────────────────────────────────
function selectTile(td,el) {
  if(G.phase!=='playing') return;
  G.phase='result'; stopTimer();
  if(_adv){clearTimeout(_adv);_adv=null;}
  const p=G.currentProblem;

  if(td.safe||td.lucky) {
    const is現物 = p.opponentDiscards.includes(td.tile);
    // クリティカル = 現物じゃない安全牌を当てた（うまい手の読み！）
    const isCrit = !is現物;
    // 土壇場コンボ: 残り1〜2秒 かつ コンボ2以上 → +150pt + ボーナスダメージ + 専用演出
    const isClutch = _tv <= 2 && G.combo >= 2;
    const hpDmg = (isCrit ? G.critMult : G.rivalDmgMult) + (isClutch ? 1 : 0);
    let pts=(isCrit?200:100)+Math.min(G.combo,5)*20;
    if(isClutch) pts+=150;
    if(G.mouhaiNext){G.mouhaiNext=false;pts*=3;}
    if(G.scoreDblOnce){pts*=2;G.scoreDblOnce=false;}
    if(hasRunSkill('shinsoku')&&_tv>=5) pts+=200;
    G.score+=pts; G.combo++;
    // コンボ時間持ち越し：うまい読み→大きく、現物→小さく
    const comboTimeBonus = isCrit ? 4 : is現物 ? 1 : 0;
    G.carryTime = Math.min(_tv + comboTimeBonus, 15);

    flashGreen(); spawnPop(pts,el,isClutch||isCrit);
    const moveMode = isClutch ? 'clutch' : isCrit ? 'critical' : 'safe';
    const moveTxt  = isClutch ? pick(MOVES.clutch) : isCrit ? pick(MOVES.crit) : pickSafeMove(G.combo);
    revealHand(td); showMoveName(moveMode, moveTxt);
    showToast('safe',pts,p.waitShape,isClutch||isCrit,0);
    G.rivalHp=Math.max(0,G.rivalHp-hpDmg); renderRivalHp(true); updateHUD();
    if(G.rivalHp<=0) setTimeout(rivalDefeated,600);
    else sched(1000);
  } else {
    const dmg=td.damage??1;
    // Insurance / block checks
    if(G.hasInsurance){
      G.hasInsurance=false;
      showMoveName('safe','初回ミス保険発動！');
      showToast('safe',0,p.waitShape,false,0);
      revealHand(td); sched(1800); return;
    }
    if(G.hasBlock){
      G.hasBlock=false;
      showMoveName('safe','鉄壁で防いだ！');
      showToast('safe',0,p.waitShape,false,0);
      revealHand(td); sched(1800); return;
    }
    G.carryTime = 0; // miss = 時間持ち越しリセット（焦れば焦るほど時間がなくなる）
    if(G.comboSaveOnce){G.comboSaveOnce=false;G.combo=Math.max(0,G.combo-1);}
    else if(hasRunSkill('reitan')) G.combo=Math.max(0,G.combo-1);
    else G.combo=0;
    flashRed(dmg); shakeScreen();
    G.lives=Math.max(0,G.lives-dmg); hitLives();
    revealHand(td); showMoveName('danger',dmg>=2?pick(MOVES.danger2):pick(MOVES.danger));
    showToast('danger',0,p.waitShape,false,dmg); updateHUD();
    sched(G.lives<=0?2200:2000);
  }
}

function onTimeUp() {
  if(G.phase!=='playing') return;
  G.phase='result';
  if(hasRunSkill('reitan')) G.combo=Math.max(0,G.combo-1); else G.combo=0;
  G.carryTime=0;
  if(_adv){clearTimeout(_adv);_adv=null;}
  flashRed(1); shakeScreen(); revealHand(null);
  G.lives=Math.max(0,G.lives-1); hitLives();
  showMoveName('danger',pick(MOVES.timeout));
  showToast('timeout',0,G.currentProblem.waitShape,false,1); updateHUD();
  sched(G.lives<=0?2200:2000);
}

function revealHand(selected) {
  const p=G.currentProblem;
  $('hand-row').querySelectorAll('.tile').forEach((el,i)=>{
    const td=p.hand[i]; if(!td) return;
    el.style.pointerEvents='none';
    // crit visual = 非現物安全牌（スキル読みが必要）= selectTile の isCrit と一致
    const isCritVisual=td.safe&&!p.opponentDiscards.includes(td.tile);
    if(td.lucky)           el.classList.add('tile-crit');
    else if(isCritVisual)  el.classList.add('tile-crit');
    else if(td.safe)       el.classList.add('tile-safe');
    else                   el.classList.add('tile-danger');
    if(selected&&td.tile===selected.tile) el.classList.add(isCritVisual||td.lucky?'tile-picked-crit':td.safe?'tile-picked-safe':'tile-picked-danger');
    const lbl=document.createElement('span');
    lbl.className='tile-label';
    lbl.textContent=td.lucky?'✨':isCritVisual?'★':td.safe?'✓':(td.damage??1)>=2?'✗✗':'✗';
    el.appendChild(lbl);
  });
}

// ── Rival defeated ────────────────────────────────────────────────────────────
function rivalDefeated() {
  showMoveName('rival',pick(MOVES.defeated));
  setTimeout(()=>{
    if(G.rivalIdx>=RIVALS.length-1) showVictory();
    else showSkillSelection();
  }, 1200);
}

// ── Skill selection ───────────────────────────────────────────────────────────
let _skillTimer = null;
function showSkillSelection() {
  const pool=RUN_SKILLS.filter(s=>s.id!=='heal'||G.lives<G.maxLives);
  const choices=shuffle([...pool]).slice(0,3);
  const container=$('skill-cards');
  container.innerHTML='';

  // Auto-proceed countdown
  let countdown = 20;
  const countEl = document.createElement('div');
  countEl.style.cssText='text-align:center;color:#6b7280;font-size:12px;padding:8px 0;';
  countEl.textContent=`${countdown}秒後に自動でおまかせ選択…`;

  choices.forEach((skill,i)=>{
    const card=document.createElement('div');
    card.className='skill-card'+(i===0?' skill-recommend':'');
    card.innerHTML=`<div class="skill-card-icon">${skill.icon}</div><div><div class="skill-card-name">${skill.name}${i===0?' <span style="font-size:11px;color:#fbbf24">★オススメ</span>':''}</div><div class="skill-card-desc">${skill.desc}</div></div>`;
    card.addEventListener('click',()=>{ clearInterval(_skillTimer); pickSkill(skill); });
    container.appendChild(card);
  });
  container.appendChild(countEl);
  showScreen('screen-skill');

  _skillTimer = setInterval(()=>{
    countdown--;
    countEl.textContent=`${countdown}秒後に自動でおまかせ選択…`;
    if(countdown<=0){ clearInterval(_skillTimer); pickSkill(choices[0]); }
  },1000);
}

function pickSkill(skill) {
  G.runSkills.push(skill);
  // Apply instant effects
  if(skill.id==='heal')        G.lives=Math.min(G.lives+1,G.maxLives);
  if(skill.id==='iron_wall')   G.hasBlock=true;
  if(skill.id==='combo_save')  G.comboSaveOnce=true;
  if(skill.id==='safe_one')    G.safeOneNext=true;
  if(skill.id==='score_2x')    G.scoreDblOnce=true;
  if(skill.id==='double_dmg')  G.rivalDmgMult=2;
  if(skill.id==='crit_triple') G.critMult=3;
  if(skill.id==='time_boost')  G.timerBonus=3;
  if(skill.id==='time_next5')  G.nextTimerBonus=5;
  if(skill.id==='mouhai')      G.mouhaiNext=true;

  showScreen('screen-game');
  loadRival(G.rivalIdx+1);
}
function hasRunSkill(id){ return G.runSkills.some(s=>s.id===id); }

// ── Victory ───────────────────────────────────────────────────────────────────
function showVictory() {
  showMoveName('rival',pick(MOVES.victory));
  const save=getSave(); save.runs++;
  if(G.score>save.bestScore) save.bestScore=G.score;
  const expEarned=calcExp();
  save.exp+=expEarned;
  writeSave(save);
  G.lastExpEarned=expEarned; // btn-again で shop に渡す用
  $('victory-score').textContent  = `スコア：${G.score.toLocaleString()} 点`;
  $('victory-detail').textContent = `全 ${RIVALS.length} ライバル撃破！ +${expEarned} EXP`;
  setTimeout(()=>showScreen('screen-victory'),1200);
}

// ── Game over → shop ──────────────────────────────────────────────────────────
function showGameOver() {
  const save=getSave(); save.runs++;
  if(G.score>save.bestScore) save.bestScore=G.score;
  const expEarned=calcExp();
  save.exp+=expEarned;
  writeSave(save);

  $('final-score').textContent  = `${G.score.toLocaleString()} 点`;
  $('final-detail').textContent = `${RIVALS[G.rivalIdx].name} で撃沈…`;
  showScreen('screen-gameover');
  // Small delay then show shop
  setTimeout(()=>openShop(expEarned), 2200);
}

function calcExp() {
  return Math.max(2, G.rivalIdx*3+Math.floor(G.score/50));
}

// ── Upgrade shop ──────────────────────────────────────────────────────────────
function openShop(expEarned) {
  const save=getSave();
  $('shop-exp-earned').textContent = expEarned>0?`+${expEarned} EXP 獲得！`:'';
  renderShop(save);
  showScreen('screen-upgrade');
}

function renderShop(save) {
  $('shop-exp').textContent = save.exp;
  const list=$('shop-list'); list.innerHTML='';
  UPGRADES.forEach(upg=>{
    const curLv=save.upgrades[upg.id]||0;
    const isMax=curLv>=upg.maxLv;
    const cost=upg.costs[curLv];
    const canBuy=!isMax&&save.exp>=cost;
    const item=document.createElement('div');
    item.className='shop-item'+(isMax?' maxed':'');
    item.innerHTML=`
      <div class="shop-icon">${upg.icon}</div>
      <div class="shop-info">
        <div class="shop-name">${upg.name}</div>
        <div class="shop-desc">${isMax?'最大レベル！':upg.descs[curLv]}</div>
        <div class="shop-level">Lv ${curLv} / ${upg.maxLv}</div>
      </div>
      <button class="shop-buy" ${isMax||!canBuy?'disabled':''}>${isMax?'MAX':cost+' EXP'}</button>`;
    if(!isMax&&canBuy) item.querySelector('.shop-buy').addEventListener('click',()=>buyUpgrade(upg.id));
    list.appendChild(item);
  });
}

function buyUpgrade(id) {
  const save=getSave();
  const upg=UPGRADES.find(u=>u.id===id);
  const curLv=save.upgrades[id]||0;
  if(curLv>=upg.maxLv) return;
  const cost=upg.costs[curLv];
  if(save.exp<cost) return;
  save.exp-=cost;
  save.upgrades[id]=(curLv+1);
  writeSave(save);
  renderShop(save);
}

// ── Effects ────────────────────────────────────────────────────────────────────
function flashGreen(){const f=$('screen-flash');f.style.background='rgba(34,197,94,.3)';f.classList.add('active');setTimeout(()=>{f.classList.add('fade');f.classList.remove('active');setTimeout(()=>f.classList.remove('fade'),260);},80);}
function flashRed(dmg){const f=$('screen-flash');f.style.background=dmg>=2?'rgba(239,68,68,.75)':'rgba(239,68,68,.5)';f.className='screen-flash active';setTimeout(()=>f.classList.remove('active'),80);setTimeout(()=>f.classList.add('active'),180);setTimeout(()=>f.classList.remove('active'),260);if(dmg>=2){setTimeout(()=>f.classList.add('active'),380);setTimeout(()=>f.classList.remove('active'),480);}}
function shakeScreen(){const el=$('screen-game');el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');setTimeout(()=>el.classList.remove('shake'),380);}
function hitLives(){const el=$('lives-display');el.classList.remove('lives-hit');void el.offsetWidth;el.classList.add('lives-hit');setTimeout(()=>el.classList.remove('lives-hit'),380);}
function spawnPop(pts,anchor,isCrit){
  const layer=$('popup-layer'),el=document.createElement('div');
  el.className='score-pop'+(isCrit?' crit':'');
  el.textContent=(isCrit?'★ ':'')+'+'+pts;
  if(anchor){const r=anchor.getBoundingClientRect();el.style.left=(r.left+r.width/2-24)+'px';el.style.top=(r.top-8)+'px';}
  else{el.style.left='50%';el.style.top='40%';el.style.transform='translateX(-50%)';}
  layer.appendChild(el);setTimeout(()=>el.remove(),1050);
}
function showMoveName(mode,text){const w=$('move-name'),t=$('move-name-text');w.className=`move-name move-${mode} show`;t.textContent=text;setTimeout(()=>{w.className='move-name';},1000);}
function pickSafeMove(combo){if(combo>=5)return pick(MOVES.safe_c5);if(combo>=4)return pick(MOVES.safe_c4);if(combo>=3)return pick(MOVES.safe_c3);if(combo>=2)return pick(MOVES.safe_c2);return pick(MOVES.safe);}

function showToast(mode,pts,waitShape,isCrit,dmg){
  const t=$('game-toast');
  if(mode==='safe'){
    t.className='game-toast '+(isCrit?'toast-crit':'toast-safe')+' show';
    t.innerHTML=isCrit?`★ 現物ヒット！ +${pts}pt<br><small>${waitShape}</small>`:`✅ セーフ！ +${pts}pt<br><small>${waitShape}</small>`;
  } else if(mode==='danger'){
    t.className='game-toast toast-danger show';
    t.innerHTML=`💥 振り込み！${dmg>=2?' -'+dmg+'ライフ！！':''}<br><small>待ち → ${waitShape}</small>`;
  } else {
    t.className='game-toast toast-danger show';
    t.innerHTML=`⏰ タイムオーバー！<br><small>待ち → ${waitShape}</small>`;
  }
  t.onclick=()=>{clearTimeout(_adv);_adv=null;advance();};
}
function hideToast(){const t=$('game-toast');t.className='game-toast';t.onclick=null;}

// ── Hint ──────────────────────────────────────────────────────────────────────
function showHint(){
  if(G.phase!=='playing') return;
  const discards=new Set(G.currentProblem.opponentDiscards);
  let found=false;
  $('hand-row').querySelectorAll('.tile-hand').forEach((el,i)=>{
    const td=G.currentProblem.hand[i];
    const isTarget = G.hintAll||EASY_MODE ? (td&&td.safe) : (td&&discards.has(td.tile));
    if(isTarget){el.classList.remove('hint-safe');void el.offsetWidth;el.classList.add('hint-safe');setTimeout(()=>el.classList.remove('hint-safe'),1500);found=true;}
  });
  if(!found&&!G.hintAll&&!EASY_MODE){
    $('hand-row').querySelectorAll('.tile-hand').forEach((el,i)=>{const td=G.currentProblem.hand[i];if(td&&td.safe){el.classList.remove('hint-safe');void el.offsetWidth;el.classList.add('hint-safe');setTimeout(()=>el.classList.remove('hint-safe'),1500);}});
  }
}

// ── Title UI ──────────────────────────────────────────────────────────────────
function updateTitleUI() {
  const save=getSave();
  const hs=$('title-hs');
  if(save.bestScore>0) hs.textContent=`ベストスコア: ${save.bestScore.toLocaleString()} 点 | EXP: ${save.exp}`;
  else hs.textContent='';
  $('btn-easy').classList.toggle('active', EASY_MODE);
  $('btn-debug').classList.toggle('active', DEBUG_MODE);
  // Debug badge
  let badge=document.querySelector('.debug-badge');
  if(DEBUG_MODE){if(!badge){badge=document.createElement('div');badge.className='debug-badge';badge.textContent='DEBUG';document.body.appendChild(badge);}}
  else if(badge) badge.remove();
}

// ── Utils ──────────────────────────────────────────────────────────────────────
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

// ── Bootstrap ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  $('btn-start').addEventListener('click', startGame);
  $('btn-how').addEventListener('click',   ()=>showScreen('screen-how'));
  $('btn-how-back').addEventListener('click', ()=>{ showScreen('screen-title'); updateTitleUI(); });
  $('btn-easy').addEventListener('click',  ()=>{ EASY_MODE=!EASY_MODE; updateTitleUI(); });
  $('btn-debug').addEventListener('click', ()=>{ DEBUG_MODE=!DEBUG_MODE; updateTitleUI(); });
  $('btn-hint').addEventListener('click',  showHint);
  $('btn-retry').addEventListener('click', ()=>openShop(0));
  $('btn-title').addEventListener('click', ()=>{ showScreen('screen-title'); updateTitleUI(); });
  $('btn-next-run').addEventListener('click', startGame);
  $('btn-shop-title').addEventListener('click', ()=>{ showScreen('screen-title'); updateTitleUI(); });
  $('btn-again').addEventListener('click',  ()=>openShop(G.lastExpEarned||0));
  $('btn-vtitle').addEventListener('click', ()=>{ showScreen('screen-title'); updateTitleUI(); });

  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  updateTitleUI();
  showScreen('screen-title');
});
