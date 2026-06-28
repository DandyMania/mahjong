// ── Rivals ─────────────────────────────────────────────────────────────────
const RIVALS = [
  { name: '鳳翔 マリン', icon: '🏴‍☠️', hp: 3,
    flavor: 'これ…ガッチャじゃないの？',
    lines: {
      t1:       'えっ、これわかる…？すごいじゃん…',
      t2:       'あれ、まだ諦めてないの？',
      t3:       'リーチよ！もう終わりっ！',
      safe:     ['えっ、正解した…！？まぐれでしょ！', 'なんで当たるの…！？', 'ま、まだ諦めてないんだ…！'],
      miss:     'あははっ！ひっかかった！',
      ult_miss: ['やったー！ガッチャ大成功っ！！', 'あははっ！最後で引っかかった！', 'ガッチャ！完璧な罠だったね！'],
      yakuBreak:'なんで…！？ちゃんと見てたの…！？',
      win:      'やったー！ガッチャ成功っ！',
      defeated: 'やっぱりサクラしとけばよかった…！',
    },
    prob: [1,2,3,4,5] },

  { name: '高峰 ルイナ', icon: '🥀', hp: 4,
    flavor: '危険牌は…こっそり隠してあるの。ふぅん',
    lines: {
      t1:       '…どれが罠か、わかる？',
      t2:       'ふぅん。なかなかやるじゃない',
      t3:       'さあ、これが最後よ。もう逃げられない',
      safe:     ['…ふぅん。まぐれかしら', '…正解ね。でも次は読めないわ', '…なかなかやるじゃない'],
      miss:     'ふっ…引っかかったわ',
      ult_miss: ['…最後の罠にかかったわ。ふぅん', '…結局は…わたしの勝ちよ', '…これが…限界ね'],
      yakuBreak:'…っ！なんで読めるの…！？',
      win:      'ふぅん…罠にかかったわね',
      defeated: '…ふぅん。認めるわ。あなた、本物ね',
    },
    prob: [2,3,4,5,6,7,19,20] },

  { name: '鬼牌 こより', icon: '🧪', hp: 5,
    flavor: '打牌ファイヤーよ！受けてみてね！',
    lines: {
      t1:       'あーたしの牌読みが読めるかな！？',
      t2:       'くっ…まだやるの！？おもしろいじゃん！',
      t3:       'リーチよ！受けてみてっ！！',
      safe:     ['なんで！？当てたの！？ズルい！', 'くぅー！なんで読めるの！？', 'まぐれじゃないの！？おかしくない！？'],
      miss:     'ふへへっ！ドカン！食らえっ！',
      ult_miss: ['ふへへっ！最後で引っかかった！ドカン！', 'やった！究極の選択も通じない！！', '最後の最後でドカン！！'],
      yakuBreak:'な、なんで！？あーたしの手牌が…！',
      win:      'ふへへへへ！！全弾命中っ！！',
      defeated: 'あなた…ただもんじゃないね…！認めるっ！',
    },
    prob: [5,6,7,8,9,10,16,19,20] },

  { name: '覇王 ラミィ', icon: '☃️', hp: 6,
    flavor: '強靭！無敵！最強！私の牌読み！',
    lines: {
      t1:       '私の完璧な手牌を見なさい',
      t2:       'まだ諦めないの…？頑固ね',
      t3:       '強靭！無敵！リーチよ！！受けてみなさい！',
      safe:     ['…まぐれよ！絶対まぐれ！', '…この私の牌を読むとは…！', '偶然ね！次は必ず当てる！'],
      miss:     '当然ね！私の読みに狂いはないわ！',
      ult_miss: ['強靭！無敵！最強！やっぱり私が勝つ！', '最終局面でも私の勝ち！当然ね！', '…この私に挑んだ報いよ！'],
      yakuBreak:'強靭！無敵！…最強じゃなかった…！？',
      win:      '強靭！無敵！最強！当然の結果よ！',
      defeated: 'こんな…こんなはずが…！私が…！',
    },
    prob: [8,9,10,11,12,13,16,17,20,21] },

  { name: '桐生院 チハル', icon: '🐉', hp: 8,
    flavor: '粉砕…玉砕…あなたのライフ…大喝采。',
    lines: {
      t1: [
        '…あなたは…何者…',
        '…ここまで辿り着くとは…面白い…',
        '…冥府の道が…見えているか…',
        '…ライバルたちを全員…倒したのね…',
        '…わたしが…最後の門番よ…',
        '…あなたの覚悟…試させてもらう…',
      ],
      t2: [
        '粉砕…玉砕…されるのは、あなたよ…',
        '…まだあがくの…？ふふ…',
        '…あなたの牌読み…なかなかね…',
        '…でも…ここからが本番よ…',
        '玉砕される前に…諦めなさい…',
        '…面白い…もう少し付き合いましょう…',
      ],
      t3: [
        'リーチ…大喝采の時が…来た…！',
        '…宣言…リーチ…あなたの運命を受け入れなさい…',
        '粉砕！リーチ！大喝采の一手！',
        '…これが…最後の問いよ…答えてみせなさい…',
        '…冥龍の一撃…受けてみせなさい…！',
        '…ここを乗り越えた者は…誰もいない…',
      ],
      safe: [
        '…ほぅ…読めたのね…',
        '…まだ諦めていないの…面白い…',
        '…なかなかやるじゃない…',
        '…それでも…わたしには届かない…',
        '…その程度では…まだ足りない…',
        '…面白い…続きを見せてもらいましょう…',
      ],
      miss: [
        '…冥府の底へ…落ちなさい…',
        '粉砕…当然の結果ね…',
        '…フフ…ドジね…',
        '…その程度では…冥龍には勝てない…',
        '玉砕…哀れね…',
        '…もがけばもがくほど…深みにはまる…',
        '…消えなさい…まだ早いけれど…',
      ],
      ult_miss: [
        '粉砕…玉砕…大喝采…究極でも…ふふ…',
        '…最後の問いに…答えられなかったわね…',
        '…これが…冥龍の力よ…もう終わり…',
        '…惜しかったわ…でも…これが限界ね…',
        '…究極の選択…あなたには…早すぎた…',
        '粉砕…最後まで抗ったのね…大喝采…',
      ],
      yakuBreak: [
        '粉砕…されたのは…わたし…？',
        '…なぜ…読めた…？',
        '…あなた…本当に…人間…？',
        '…冥龍でも…こんなことは…！',
        '…ありえない…わたしの手が…崩された…',
      ],
      win: [
        '…ふふ…悪くなかったわ…次はもっと磨いてきて…',
        '…惜しかったわね…あと少しで…届いたのに…',
        '…散り際も…美しく…それがあなたの流儀ね…',
        '…また来なさい…成長したあなたを…待っているから…',
        '…いい戦いだったわ…ゆっくり…休んでいきなさい…',
      ],
      defeated: [
        '…あなたこそが…真の冥龍だわ…',
        '…負けた…わたしが…！',
        '粉砕…されたのは…わたし…？大喝采…',
        '…見事よ…牌★斬★王…',
        '…いつか…また…次は…負けない…',
        '…これが…闇の果てよ…あなたは…本物ね…',
      ],
    },
    prob: [9,10,11,12,13,14,15,17,18,21,22,23,24] },
];

// ── Round names ─────────────────────────────────────────────────────────────
const ROUND_NAMES = ['東一局', '東二局', '東三局', '東四局', 'オーラス'];

// ── Run skills ──────────────────────────────────────────────────────────────
const RUN_SKILLS = [
  { id: 'iron_wall',   icon: '🛡️',  name: '鉄壁',        desc: '次のダメージを1回無効にする' },
  { id: 'time_boost',  icon: '⚡',   name: '速攻',        desc: 'このライバル戦 タイマー+3秒' },
  { id: 'combo_save',  icon: '🔥',   name: '連撃',        desc: '次のミスでコンボが-1のみ' },
  { id: 'safe_one',    icon: '🎯',   name: '幸運の牌',    desc: '次の問題の危険牌が1枚消える' },
  { id: 'double_dmg',  icon: '💢',   name: '破壊力',      desc: 'このライバル戦 与えるダメージ×2' },
  { id: 'score_2x',    icon: '💰',   name: '大勝負',      desc: '次の正解スコア×2' },
  { id: 'crit_triple', icon: '🀄',   name: '現物の極意',  desc: 'クリティカル（非現物安全牌）で与えるダメージ×3' },
  { id: 'heal',        icon: '❤️‍🩹',  name: '回復',        desc: 'ライフ+1回復（即時）' },
  { id: 'time_next5',  icon: '😌',   name: '余裕',        desc: '次の問題だけタイマー+5秒' },
  { id: 'mouhai',      icon: '🦾',   name: '轟盲牌',      desc: 'ピンチ時（ライフ1）に1回発動可能。手牌が全部「白」に！白はワンチャン安牌…！' },
  { id: 'reitan',      icon: '🧊',   name: '冷たい打ち手', desc: 'このランでコンボが0にならない' },
  { id: 'shinsoku',    icon: '⚡⚡',  name: '捨て牌三倍速', desc: '残り5秒以上で正解したらスコア+200' },
  { id: 'tsumikomi',  icon: '🃏',   name: '積み込み',    desc: '次の問題の危険牌を1枚除外する' },
  { id: 'surikae',    icon: '🔄',   name: 'すり替え',    desc: 'このバトル中1回、手牌を再抽選できる' },
  { id: 'toshi',      icon: '👁️',   name: '透視',        desc: '次の問題で一瞬だけ安全/危険が透けて見える' },
  { id: 'nidotsumi',  icon: '🀫',   name: '二度積み',    desc: '次の問題で安全牌が1枚複製される' },
];

// ── Permanent upgrades ──────────────────────────────────────────────────────
const UPGRADES = [
  { id: 'hp',       icon: '❤️',  name: '体力強化',     maxLv: 2, costs: [40,300],   descs: ['+1ライフ（最大4）', '+1ライフ（最大5）'] },
  { id: 'time',     icon: '⏱️',  name: '時間延長',     maxLv: 2, costs: [40,280],   descs: ['+2秒（12秒）', '+2秒（14秒）'] },
  { id: 'hint',     icon: '💡',  name: 'ヒント全開',   maxLv: 1, costs: [90],       descs: ['ヒントで安全牌が全部光る'] },
  { id: 'lucky',    icon: '🍀',  name: '幸運お守り',   maxLv: 2, costs: [40,400],   descs: ['ラッキーイベント確率2倍', 'ツモ被害を受けない'] },
  { id: 'combo',    icon: '🔥',  name: 'コンボキープ', maxLv: 1, costs: [130],      descs: ['ミスでコンボが-1のみ'] },
  { id: 'ins',      icon: '🛡️',  name: '初回ミス保険', maxLv: 1, costs: [70],       descs: ['1ランに1回、最初のミスを無効'] },
  { id: 'score_up', icon: '💎',  name: 'スコア底上げ', maxLv: 3, costs: [30,220,450], descs: ['正解ごと+50点', '正解ごと+100点', '正解ごと+150点'] },
  { id: 'exp_rate', icon: '📈',  name: 'EXP効率アップ', maxLv: 2, costs: [50,320],  descs: ['EXP獲得量+30%', 'EXP獲得量+60%'] },
  { id: 'crit_up',  icon: '⚔️',  name: '斬撃強化',     maxLv: 2, costs: [80,500],   descs: ['クリティカル+150点ボーナス', 'クリティカル+300点ボーナス'] },
  { id: 'start_hp', icon: '💊',  name: '鋼の意志',     maxLv: 1, costs: [160],      descs: ['ライバル戦開始時ライフ1回復'] },
];

// ── Achievements ────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  // 正の実績
  {id:'first_rival', icon:'⚔️',  name:'初陣撃破',      desc:'ライバルを1体撃破'},
  {id:'full_clear',  icon:'🏆',  name:'全制覇',         desc:'全ライバルを撃破'},
  {id:'combo5',      icon:'🔥',  name:'連撃×5',         desc:'コンボ5以上を達成'},
  {id:'combo10',     icon:'💥',  name:'大連撃×10',      desc:'コンボ10以上を達成',        hidden:true},
  {id:'no_miss',     icon:'💎',  name:'完璧撃破',       desc:'ノーダメージでライバル撃破', hidden:true},
  // プレイ回数
  {id:'runs5',       icon:'🎮',  name:'5ラン',          desc:'5ラン以上プレイ'},
  {id:'veteran',     icon:'🛡️', name:'熟練者',         desc:'10ラン以上プレイ'},
  {id:'runs25',      icon:'🏅',  name:'25ラン',         desc:'25ラン以上プレイ',           hidden:true},
  {id:'runs50',      icon:'👑',  name:'50ラン',         desc:'50ラン以上プレイ',           hidden:true},
  // 逆の実績（隠し）
  {id:'double_ron',  icon:'🎰',  name:'連続ロン',       desc:'2回連続で危険牌を切った',   hidden:true},
  {id:'triple_ron',  icon:'💀',  name:'三連ロン',       desc:'3回連続で危険牌を切った',   hidden:true},
  {id:'timeout3',    icon:'⏰',  name:'時間の無駄遣い', desc:'1ランで3回タイムアップ',    hidden:true},
  {id:'last_stand',  icon:'😤',  name:'土壇場撃破',     desc:'ライフ1でライバルを撃破',   hidden:true},
];

// ── Move names ──────────────────────────────────────────────────────────────
const MOVES = {
  clutch:   ['土壇場逆転！！','ギリギリ大打撃！！','CLUTCH HIT!!','崖っぷちの一手！！'],
  safe:     ['現物切り！','安全牌確保！','読み勝ち！','守備完璧！','PERFECT GUARD'],
  safe_c2:  ['ダブルガード！'],
  safe_c3:  ['トリプルガード！！', '轟盲牌！！'],
  safe_c4:  ['鉄壁の防御！！', '悪魔の振り子！！', '捨て牌三倍速！！'],
  safe_c5:  ['INVINCIBLE!!', '神域の読み！！', '完全記憶術！！'],
  ultimate: ['一閃！！','断空剣！！','滅牌斬！！','覇龍一刀！！','双閃！！','天魔斬！！','無双打！！','魔閃！！','斬牌覇道！！','烈光斬！！','必殺一択！！','闇の一手！！'],
  crit:     ['現物ヒット！！','大打撃！！','CRITICAL HIT!!','牌の支配者！！'],
  danger:   ['ロン！！','振り込み確定！！','DEAL IN!!'],
  danger2:  ['ダブルダメージ！！','大振り込み！！','HEAVY DAMAGE!!'],
  timeout:  ['タイムオーバー！！','TIME LIMIT!!'],
  defeated: ['ライバル撃破！！','RIVAL DEFEATED!!'],
  victory:  ['完全制覇！！','ALL CLEAR!!'],
  yakubreak:['役崩し！！','上がり阻止！！','YAKU BREAK!!','完璧な防御！！'],
};


// ── Tile display ────────────────────────────────────────────────────────────
const SUIT_KANJI = { m:'萬', p:'筒', s:'索' };
const HONOR_MAP  = { '1z':'東','2z':'南','3z':'西','4z':'北','5z':'白','6z':'発','7z':'中' };
const KANJI_NUM  = ['','一','二','三','四','五','六','七','八','九'];

const P_POS = [
  [], [[30,40]], [[30,22],[30,58]], [[30,16],[19,56],[41,56]],
  [[19,22],[41,22],[19,56],[41,56]],
  [[19,18],[41,18],[30,40],[19,62],[41,62]],
  [[19,17],[41,17],[19,40],[41,40],[19,63],[41,63]],
  [[30,12],[19,32],[41,32],[19,52],[41,52],[19,70],[41,70]],
  [[19,12],[41,12],[19,33],[41,33],[19,54],[41,54],[19,75],[41,75]],
  [[16,12],[30,12],[44,12],[16,40],[30,40],[44,40],[16,68],[30,68],[44,68]],
];
const P_R = [0,14,11,10,10,9,9,8,7,7];

function pinzuSVG(n) {
  const r = P_R[n]||8;
  const circles = (P_POS[n]||[]).map(([cx,cy])=>
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r-4}" fill="#60a5fa" opacity="0.55"/>` +
    `<circle cx="${cx-2}" cy="${cy-2}" r="${Math.max(2,r-7)}" fill="#fff" opacity="0.45"/>`
  ).join('');
  return `<svg viewBox="0 0 60 80" width="100%" height="100%">${circles}</svg>`;
}

const S_LAYOUT = [
  null, null,
  {c:1,w:16,h:30,gx:0,gy:8}, {c:1,w:16,h:18,gx:0,gy:5},
  {c:2,w:14,h:28,gx:8,gy:7}, {c:2,w:13,h:23,gx:7,gy:5},
  {c:2,w:13,h:18,gx:7,gy:5}, {c:2,w:13,h:16,gx:7,gy:4},
  {c:2,w:13,h:14,gx:7,gy:4}, {c:3,w:13,h:18,gx:4,gy:5},
];
function souzuSVG(n) {
  if (n===1) return `<svg viewBox="0 0 60 80" width="100%" height="100%">
    <rect x="27" y="12" width="6" height="50" rx="3" fill="#166534"/>
    <rect x="21" y="25" width="18" height="6" rx="3" fill="#4ade80"/>
    <rect x="21" y="40" width="18" height="6" rx="3" fill="#4ade80"/>
    <ellipse cx="30" cy="9" rx="9" ry="7" fill="#f59e0b"/>
    <circle cx="34" cy="7" r="2" fill="#92400e"/>
  </svg>`;
  const {c,w,h,gx,gy} = S_LAYOUT[n]||{c:2,w:12,h:13,gx:5,gy:4};
  const rows = Math.ceil(n/c);
  const sx = Math.round((60-(c*w+(c-1)*gx))/2);
  const sy = Math.round((80-(rows*h+(rows-1)*gy))/2);
  let seg='';
  for(let i=0;i<n;i++){
    const col=i%c, row=Math.floor(i/c);
    const x=sx+col*(w+gx), y=sy+row*(h+gy);
    const fill = row%2===0 ? '#15803d' : '#4ade80';
    seg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2.5" fill="${fill}"/>` +
           `<rect x="${x}" y="${y}" width="${w}" height="3" rx="1.5" fill="#052e16" opacity="0.5"/>` +
           `<rect x="${x}" y="${y+h-3}" width="${w}" height="3" rx="1.5" fill="#052e16" opacity="0.5"/>` +
           `<rect x="${x+2}" y="${y+3}" width="2" height="${h-6}" rx="1" fill="#bbf7d0" opacity="0.4"/>`;
  }
  return `<svg viewBox="0 0 60 80" width="100%" height="100%">${seg}</svg>`;
}

// ── Save ────────────────────────────────────────────────────────────────────
const SAVE_KEY = 'mj-sweeper-v1';
function getSave() { try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || mkSave(); } catch { return mkSave(); } }
function mkSave() { return { exp:0, upgrades:{}, bestScore:0, runs:0, bestCombo:0, achievements:{} }; }
function writeSave(s) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch {} }

function unlockAchievement(id) {
  const save=getSave();
  if(!save.achievements) save.achievements={};
  if(save.achievements[id]) return;
  save.achievements[id]=true; writeSave(save);
  const def=ACHIEVEMENTS.find(a=>a.id===id); if(!def) return;
  const el=document.getElementById('ach-toast'); if(!el) return;
  el.innerHTML=`<div class="ach-toast-label">Achievement Unlocked！</div><div class="ach-toast-icon">${def.icon}</div><div class="ach-toast-name">${def.name}</div>`;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

// ── Mode flags ───────────────────────────────────────────────────────────────
let DEBUG_MODE = false;
let EASY_MODE  = false;

// ── State ───────────────────────────────────────────────────────────────────
const G = {
  score:0, lives:3, maxLives:3, combo:0, phase:'title',
  rivalIdx:0, rivalHp:0, rivalHpMax:0,
  rivalProbs:[], rivalProbIdx:0, currentProblem:null,
  runSkills:[],
  hasBlock:false, hasInsurance:true, comboSaveOnce:false,
  safeOneNext:false, scoreDblOnce:false, mouhaiNext:false, mouhaiActive:false, mouhaiUsed:false, rivalDmgMult:1, critMult:2,
  timerBonus:0, nextTimerBonus:0, carryTime:0,
  missThisRival:false,
  consecutiveMiss:0,
  timeoutCount:0,
  eShownIdx:[],  // hand indices shown in the previous turn (for tile continuity)
  // 3-turn encounter state
  eTurn:1,       // current turn within encounter (1, 2, or 3)
  eSafeCount:0,  // safe picks so far this encounter
  eRiichi:false, // true if a miss/timeout happened (riichi declared)
  eUsed:[],      // hand indices already picked this encounter
  continueMode:false, // true when continuing after game over (shop → same rival)
};

// ── Timer ───────────────────────────────────────────────────────────────────
let BASE_TIMER = 10;
let _timer = null, _tv = 0;

function startTimer() {
  stopTimer();
  const bonus = G.timerBonus + G.nextTimerBonus;
  G.nextTimerBonus = 0;
  const stagePenalty = Math.min(G.rivalIdx, 4) * 0.5; // Stage 1=0s, 2=-0.5s, 3=-1s, 4=-1.5s, 5=-2s
  const base = DEBUG_MODE ? 30 : EASY_MODE ? 15 : Math.max(6, BASE_TIMER - stagePenalty);
  _tv = G.carryTime > 0 ? Math.min(G.carryTime + bonus, 15) : base + bonus;
  G.carryTime = 0;
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

// ── Advance / schedule ───────────────────────────────────────────────────────
let _adv = null;
let _goTimer = null;
let _displayedScore = 0, _scoreAnim = null;

function animateScore(target) {
  if (_scoreAnim) { cancelAnimationFrame(_scoreAnim); _scoreAnim = null; }
  const start = _displayedScore;
  const diff = target - start;
  if (diff <= 0) { _displayedScore = target; $('score-display').textContent = target.toLocaleString(); return; }
  const dur = Math.min(700, Math.max(200, diff * 1.5));
  const t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    const ease = 1 - (1 - p) * (1 - p);
    _displayedScore = Math.round(start + diff * ease);
    $('score-display').textContent = _displayedScore.toLocaleString();
    if (p < 1) _scoreAnim = requestAnimationFrame(tick);
    else { _scoreAnim = null; _displayedScore = target; }
  })(t0);
}
function sched(ms) { _adv = setTimeout(advance, ms); }
function advance() {
  if (_adv) { clearTimeout(_adv); _adv=null; }
  hideToast();
  if (G.phase==='gameover'||G.phase==='victory') return;
  if (G.lives<=0) { showGameOver(); return; }
  G.phase='playing';
  // 「次の局へ」幕間テキスト
  const nextHit = G.rivalProbIdx + 1;
  const r = RIVALS[G.rivalIdx];
  const label = `${ROUND_NAMES[G.rivalIdx] ?? '次の局'} 第${nextHit}撃`;
  showMoveName('rival', label);
  setTimeout(loadNextProblem, 650);
}

// ── Screens ──────────────────────────────────────────────────────────────────
const $=id=>document.getElementById(id);
function showScreen(id) { hideToast(); document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); $(id).classList.add('active'); }

// ── Game start ───────────────────────────────────────────────────────────────
function startGame() {
  stopTimer();
  if (_adv) { clearTimeout(_adv); _adv=null; }

  const save = getSave(), upg = save.upgrades;
  G.maxLives   = 3 + (upg.hp  || 0);
  BASE_TIMER   = 10 + (upg.time || 0) * 2;
  G.hintAll    = !!(upg.hint);
  G.hasInsurance = !!(upg.ins);
  G.scoreBonus = (upg.score_up||0)*50;
  G.critBonus  = (upg.crit_up||0)*150;
  G.startHpRegen = !!(upg.start_hp);

  G.score=0; G.lives=G.maxLives; G.combo=0; G.rivalIdx=0;
  if (_scoreAnim) { cancelAnimationFrame(_scoreAnim); _scoreAnim=null; } _displayedScore=0; $('score-display').textContent='0';
  G.runSkills=[]; G.hasBlock=false; G.comboSaveOnce=false;
  G.safeOneNext=false; G.scoreDblOnce=false; G.mouhaiNext=false; G.mouhaiActive=false; G.mouhaiUsed=false; G.rivalDmgMult=1;
  G.tsumikomiNext=false; G.surikaeAvail=false; G.toshiNext=false; G.toshiThisProblem=false; G.nidotsumiNext=false;
  G.critMult = hasRunSkill('crit_triple') ? 3 : 2;
  G.timerBonus=0; G.nextTimerBonus=0; G.carryTime=0;
  G.consecutiveMiss=0; G.timeoutCount=0;

  $('screen-game').classList.remove('critical');
  showScreen('screen-game');
  loadRival(0);
}

// ── Rival loading ─────────────────────────────────────────────────────────────
function loadRival(idx) {
  G.rivalIdx=idx;
  G.missThisRival=false;
  const r=RIVALS[idx];
  G.rivalHp    = DEBUG_MODE ? 1 : r.hp;
  G.rivalHpMax = DEBUG_MODE ? 1 : r.hp;
  G.timerBonus = hasRunSkill('time_boost') ? 3 : 0;
  G.rivalDmgMult = hasRunSkill('double_dmg') ? 2 : 1;

  showRivalTransition(idx, () => {
    // ステージ開始時 HP+1 回復（最初のステージ除く）
    if(idx>0 && G.lives < G.maxLives){ G.lives++; updateHUD(); showEventToast('❤️ ライフ回復！','safe'); }
    if(idx>0 && G.startHpRegen && G.lives < G.maxLives){ G.lives++; updateHUD(); showEventToast('💊 鋼の意志でライフ回復！','safe'); }
    G.rivalProbs = shuffle(r.prob.map(id=>PROBLEMS.find(p=>p.id===id)).filter(Boolean));
    G.rivalProbIdx=0;
    renderRivalBar();
    G.phase='playing';
    loadNextProblem();
  });
}

// ── Stage transition ──────────────────────────────────────────────────────────
const TRANS_TIPS = [
  '現物（捨て牌と同じ牌）は絶対安全！迷ったら現物から探そう',
  '非現物の安全牌を当てるとクリティカル！スコア2倍＆ライバルに大ダメージ',
  'コンボを切らすな！5連続正解でボーナス最大になるよ',
  'タイムオーバーはミス扱い。迷ったら現物を選ぼう',
  '捨て牌の多い牌は危険！手牌に当たり牌が残ってる可能性が高い',
  'ライフ1のピンチで盲牌スキルを持ってると自動発動！正解で3倍スコア',
  'ショップで時間延長を買うと余裕が生まれるよ。序盤の優先投資に！',
  'コンボキープスキルがあればミスしてもコンボが-1のみ。スコア狙いに必須',
  '早押しボーナスはないけどコンボの繰越時間があるよ。早く正解すると次の問題が楽になる',
  'リーチした相手の現物は複数あることも。落ち着いて全部の捨て牌を確認しよう',
];
function showRivalTransition(idx, cb) {
  hideToast();
  const r=RIVALS[idx], ov=$('stage-trans');
  $('trans-stage').textContent  = ROUND_NAMES[idx] ?? `東${idx+1}局`;
  $('trans-icon').textContent   = r.icon;
  $('trans-name').textContent   = r.name;
  $('trans-flavor').textContent = `"${r.flavor}"`;
  const tipEl=$('trans-tip');
  if(tipEl) tipEl.textContent='💡 '+TRANS_TIPS[Math.floor(Math.random()*TRANS_TIPS.length)];
  ov.classList.remove('hidden');
  requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add('show')));
  let done=false;
  const advance=()=>{
    if(done) return; done=true;
    ov.removeEventListener('click',advance);
    ov.classList.remove('show');
    setTimeout(()=>{ ov.classList.add('hidden'); cb(); }, 350);
  };
  ov.addEventListener('click', advance);
}

// ── Problem loading ───────────────────────────────────────────────────────────
function loadNextProblem() {
  hideToast();
  const revRow=$('opp-reveal-row'); if(revRow) revRow.classList.add('hidden');
  if (G.rivalProbIdx>=G.rivalProbs.length) { G.rivalProbs=shuffle([...G.rivalProbs]); G.rivalProbIdx=0; }
  G.currentProblem = JSON.parse(JSON.stringify(G.rivalProbs[G.rivalProbIdx++]));

  // Reset encounter state for each new problem
  G.eTurn=1; G.eSafeCount=0; G.eRiichi=false; G.eUsed=[]; G.eShownIdx=[];
  G.mouhaiNext=false;

  // Lucky: one dangerous tile becomes safe
  if (G.safeOneNext) {
    G.safeOneNext=false;
    const dangerous=G.currentProblem.hand.filter(td=>!td.safe);
    if(dangerous.length>0) { const t=pick(dangerous); t.safe=true; t.lucky=true; }
  }

  // Danger scaler: ensure min 3 safe tiles for 3-turn encounters
  if (!EASY_MODE && !DEBUG_MODE) {
    const MAX_FILLER = [4, 2, 1, 0, 0][G.rivalIdx] ?? 0;
    const prob = G.currentProblem;
    const filler = prob.hand.filter(td => td.safe && !td.lucky && td.safeType === 'unknown' && !td.tile.endsWith('z'));
    const otherSafe = prob.hand.filter(td => td.safe && !td.lucky && td.safeType !== 'unknown').length;
    const keep = Math.max(MAX_FILLER, 3 - otherSafe);
    shuffle(filler).slice(keep).forEach(td => { td.safe = false; td.damage = 1; });
  }

  // 積み込み: 危険牌を1枚安全化
  if (G.tsumikomiNext) {
    G.tsumikomiNext=false;
    const dangers=G.currentProblem.hand.filter(td=>!td.safe&&!td.lucky);
    if(dangers.length>0){const t=pick(dangers);t.safe=true;t.lucky=true;t.reason='積み込み';}
    showEventToast('🃏 積み込み発動！危険牌を1枚除外した！','safe');
  }
  // 二度積み: 安全牌を1枚複製
  if (G.nidotsumiNext) {
    G.nidotsumiNext=false;
    const safes=G.currentProblem.hand.filter(td=>td.safe||td.lucky);
    if(safes.length>0){const t=pick(safes);G.currentProblem.hand.push({...t,reason:'二度積み（複製）'});}
    showEventToast('🀫 二度積み発動！安全牌が1枚複製された！','safe');
  }
  // 透視フラグを立てる（renderHandForTurn で視覚化）
  if (G.toshiNext) { G.toshiNext=false; G.toshiThisProblem=true; }
  // ピンチ時にたまに透視が自動発動（ライフ1、30%）— mouhai中は発動しない
  if (!G.toshiThisProblem && !G.mouhaiNext && G.lives===1 && Math.random()<0.3) {
    G.toshiThisProblem=true;
    setTimeout(()=>showEventToast('👁️ 透視が発動した…！','safe'),400);
  }

  if (G.phase==='playing') rollEvent();
  if (G.lives<=0) { showGameOver(); return; }

  updateHUD();
  renderProblem();
  startTimer();

  if ((EASY_MODE || G.hintAll) && !G.mouhaiNext) setTimeout(showHint, 400);
  // 轟盲牌ボタン表示: ライフ1かつスキル未使用
  const mouhaiBtn=$('btn-mouhai');
  if(mouhaiBtn) mouhaiBtn.classList.toggle('hidden', !(hasRunSkill('mouhai') && !G.mouhaiUsed && G.lives<=1));
}

// ── Random events ─────────────────────────────────────────────────────────────
function rollEvent() {
}
function showEventToast(msg, mode) {
  const t=$('game-toast');
  t.className='game-toast '+(mode==='safe'?'toast-safe':'toast-danger')+' show';
  t.textContent=msg; t.onclick=null;
  setTimeout(()=>{ if(t.classList.contains('show')) t.className='game-toast'; }, 2200);
}

// ── Rival HP bar ─────────────────────────────────────────────────────────────
function renderRivalBar() {
  const r=RIVALS[G.rivalIdx];
  $('rival-icon').textContent    = r.icon;
  $('rival-name').textContent    = r.name;
  const subnameEl = $('rival-subname');
  if (subnameEl) subnameEl.style.display = 'none';
  $('rival-flavor').textContent  = r.flavor;
  const stageEl = $('stage-counter');
  if (stageEl) {
    const round = ROUND_NAMES[G.rivalIdx] ?? `東${G.rivalIdx+1}局`;
    const rem   = RIVALS.length - G.rivalIdx - 1;
    const remTxt = rem===0 ? 'ラスト！' : `あと${rem}人`;
    stageEl.innerHTML = `${round} <span class="stage-rem">${remTxt}</span>`;
  }
  renderRivalHp();
}
function updateRivalFlavor(key) {
  const r=RIVALS[G.rivalIdx];
  const lineOrArr = r.lines?.[key] ?? r.flavor;
  const line = Array.isArray(lineOrArr) ? pick(lineOrArr) : lineOrArr;
  const el=$('rival-flavor');
  if (!el) return;
  el.classList.remove('flavor-anim');
  void el.offsetWidth;
  el.textContent = line;
  el.classList.add('flavor-anim');
}
function slashRival(count) {
  const zone=document.querySelector('.zone-opp'); if(!zone) return;
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      const s=document.createElement('div');
      s.className='zone-slash';
      s.style.setProperty('--y',(45+i*14+Math.random()*6)+'%');
      zone.appendChild(s);
      // インパクト時にゾーンフラッシュ
      setTimeout(()=>{
        zone.classList.add('slash-flash');
        setTimeout(()=>zone.classList.remove('slash-flash'),280);
      }, 130);
      setTimeout(()=>s.remove(),420);
    }, i*180);
  }
}
function renderRivalHp(hit, slashCount) {
  const wrap=$('rival-hp-wrap'); if(!wrap) return;
  const isLow=G.rivalHp<=Math.ceil(G.rivalHpMax/3);
  let h='';
  for(let i=0;i<G.rivalHpMax;i++){
    if(i<G.rivalHp) h+=`<span class="heart rival-heart${isLow?' rival-heart-low':''}">💜</span>`;
    else             h+=`<span class="heart rival-heart-dead">🖤</span>`;
  }
  wrap.innerHTML=h;
  if(hit){ wrap.classList.remove('hp-hit'); void wrap.offsetWidth; wrap.classList.add('hp-hit'); setTimeout(()=>wrap.classList.remove('hp-hit'),380); slashRival(slashCount||1); }
}

// ── Problem rendering helpers ─────────────────────────────────────────────────

// Show partial discards based on current turn
function renderDiscards() {
  const p=G.currentProblem, dr=$('discards-row'); dr.innerHTML='';
  const limit = G.eTurn===1 ? 2 : G.eTurn===2 ? 4 : p.opponentDiscards.length;
  p.opponentDiscards.slice(0, limit).forEach(t=>dr.appendChild(mkTile(t,'discard')));
}

// Show hand minus tiles already used this encounter, capped per turn
function renderHandForTurn() {
  const hr=$('hand-row'); hr.innerHTML='';
  const p=G.currentProblem;

  // Remaining tiles with original hand index
  const remaining=p.hand.map((td,i)=>({td,i})).filter(x=>!G.eUsed.includes(x.i));

  // Tile cap: Turn1=4, Turn2=3, Turn3=2(究極の選択)
  const maxShow=G.eTurn>=3?2:G.eTurn===2?3:4;

  // 現物チェック（表示ターン数に応じた見える捨て牌）
  const visLimit=G.eTurn===1?2:G.eTurn===2?4:p.opponentDiscards.length;
  const genzaiSet=new Set(p.opponentDiscards.slice(0,visLimit));

  let toShow;
  if(remaining.length<=maxShow){
    toShow=remaining;
  } else if(G.eTurn===2 && G.eShownIdx.length>0){
    // T2: keep same tiles as T1 (minus the one that was picked)
    const prev=remaining.filter(x=>G.eShownIdx.includes(x.i));
    toShow=prev.length>0?prev:remaining.slice(0,maxShow);
  } else {
    const genzai=remaining.filter(x=> genzaiSet.has(x.td.tile));
    const safe   =remaining.filter(x=>!genzaiSet.has(x.td.tile)&&(x.td.safe||x.td.lucky));
    const danger =remaining.filter(x=>!x.td.safe&&!x.td.lucky);
    if(G.eTurn>=3){
      // 究極の選択: 必ず1危険 + 1安全
      let d=danger.length>0?danger[Math.floor(Math.random()*danger.length)]:null;
      // remaining に danger がない場合 → eUsed済み含む全手牌から復活
      if(!d){
        const allD=p.hand.map((td,i)=>({td,i})).filter(x=>!x.td.safe&&!x.td.lucky&&!genzaiSet.has(x.td.tile));
        if(allD.length>0) d=allD[Math.floor(Math.random()*allD.length)];
      }
      const picked_s=safe.length>0?safe[Math.floor(Math.random()*safe.length)]:(genzai.length>0?genzai[Math.floor(Math.random()*genzai.length)]:null);
      const pair=[d,picked_s].filter(Boolean);
      toShow=shuffle(pair.length===2?pair:[...remaining].slice(0,2));
    } else {
      // T1/T2: 現物を必ず1枚含める + 残りを危険多めで埋める
      const maxGenzai=Math.min(genzai.length, Math.floor(maxShow/2));
      const pickedG=shuffle([...genzai]).slice(0,maxGenzai);
      const slots=maxShow-pickedG.length;
      const dc=Math.min(Math.ceil(slots*.7),danger.length);
      const sc=Math.min(slots-dc,safe.length);
      const fill=slots-dc-sc;
      const pickedD=shuffle([...danger]).slice(0,dc+fill);
      const pickedS=shuffle([...safe]).slice(0,sc);
      toShow=shuffle([...pickedG,...pickedD,...pickedS]);
    }
  }

  G.eShownIdx=toShow.map(x=>x.i);
  const isUltimate=G.eTurn>=3;
  hr.classList.toggle('ultimate-choice',isUltimate);
  const cl=document.querySelector('.cut-line');
  if(cl) cl.textContent=isUltimate?'究極の選択！！':'どれ切る？';

  toShow.forEach(({td,i})=>{
    const el=mkTile(td.tile,'hand',G.mouhaiNext);
    el.dataset.handIdx=i;
    if(genzaiSet.has(td.tile) && (td.safe||td.lucky) && !G.mouhaiNext) el.classList.add('tile-genzai');
    el.addEventListener('pointerdown',e=>{el.classList.add('pressed');addRipple(el,e);});
    el.addEventListener('pointerup',  ()=>{el.classList.remove('pressed');selectTile(td,el);});
    el.addEventListener('pointerleave',()=>el.classList.remove('pressed'));
    hr.appendChild(el);
  });

  // 透視: 0.3秒後に一瞬だけ安全/危険色を表示 (0.6秒で消える)
  if (G.toshiThisProblem) {
    G.toshiThisProblem=false;
    setTimeout(()=>{
      const tiles=[...hr.querySelectorAll('.tile-hand')];
      tiles.forEach(el=>{
        const idx=parseInt(el.dataset.handIdx);
        const td=p.hand[idx];
        el.classList.add((td&&(td.safe||td.lucky))?'toshi-safe':'toshi-danger');
      });
      setTimeout(()=>tiles.forEach(el=>el.classList.remove('toshi-safe','toshi-danger')),600);
    },300);
  }

  // すり替えボタン（持っている間は毎ターン表示）
  const ha=document.querySelector('.hand-area');
  if(ha){
    ha.querySelector('.btn-surikae')?.remove();
    if(G.surikaeAvail){
      const sb=document.createElement('button');
      sb.className='btn-surikae';
      sb.textContent='🔄 すり替え';
      sb.addEventListener('click',()=>{
        G.surikaeAvail=false;
        sb.remove();
        renderHandForTurn();
      });
      ha.appendChild(sb);
    }
  }
}

// Show yaku target banner (from turn 1)
function showYakuTarget() {
  const p=G.currentProblem, el=$('yaku-target');
  if (!el) return;
  if (p && p.yaku) {
    $('yaku-name-text').textContent  = p.yaku;
    $('yaku-stars-text').textContent = '★'.repeat(p.yakuValue||1);
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

// Update riichi / turn indicator banner
function updateRiichiBanner() {
  const b=$('riichi-banner');
  if (G.eRiichi) {
    b.textContent  = G.eTurn===3 ? '⚡ リーチ！ラストチャンス！' : `⚡ リーチ！[${G.eTurn}/3]`;
    b.className    = 'riichi-banner';
  } else if (G.eTurn===2 && G.eSafeCount===1) {
    b.textContent  = '🛡️ 阻止チャンス！あと1手！';
    b.className    = 'riichi-banner no-riichi';
  } else {
    b.textContent  = `📖 手作り中… [${G.eTurn}/3]`;
    b.className    = 'riichi-banner pre-riichi';
  }
}

// ── Problem rendering (main) ──────────────────────────────────────────────────
function renderProblem() {
  const r=RIVALS[G.rivalIdx];
  $('round-display').textContent = `第 ${r.hp-G.rivalHp+1} / ${r.hp} 撃`;
  renderDiscards();
  renderHandForTurn();
  showYakuTarget();
  updateRiichiBanner();
  // フレーバーテキストをターン/リーチ状態に合わせて更新
  if (G.eRiichi)       updateRivalFlavor('t3');
  else if (G.eTurn===2) updateRivalFlavor('t2');
  else                  updateRivalFlavor('t1');
  // 自分の役バナー
  const pyEl=$('player-yaku');
  if(pyEl){
    const p=G.currentProblem;
    if(p&&p.playerYaku){
      const stars='★'.repeat(p.playerYakuValue||1);
      pyEl.textContent=`自分の役 → ${p.playerYaku} ${stars}`;
      pyEl.classList.remove('hidden');
    } else { pyEl.classList.add('hidden'); }
  }
  if(G.mouhaiNext) showEventToast('🦾 盲牌発動！正解で3倍スコア','safe');
  console.log(`[遷移] renderProblem: stage=${G.rivalIdx+1} rivalHp=${G.rivalHp} eTurn=${G.eTurn} eRiichi=${G.eRiichi}`);
}

// ── Tile factory ──────────────────────────────────────────────────────────────
function mkTile(id,type,blind=false) {
  const el=document.createElement('div');
  const suit=id[1], num=parseInt(id[0]);
  el.className=`tile tile-${type}`+(suit!=='z'?` suit-${suit}`:'')+(blind?' tile-blind':'');
  el.dataset.tile=id;
  if(blind){const s=document.createElement('span');s.className='tc-honor honor-5z';s.textContent='白';el.appendChild(s);}
  else if(suit==='z'){const s=document.createElement('span');s.className=`tc-honor honor-${id}`;s.textContent=HONOR_MAP[id]||'?';el.appendChild(s);}
  else if(suit==='p'){el.innerHTML=pinzuSVG(num);}
  else if(suit==='s'){el.innerHTML=souzuSVG(num);}
  else{const n=document.createElement('span');n.className='tc-num';n.textContent=KANJI_NUM[num]||num;const s=document.createElement('span');s.className='tc-suit';s.textContent=SUIT_KANJI[suit];el.appendChild(n);el.appendChild(s);}
  return el;
}
function unblindHand(exceptEl) {
  document.querySelectorAll('#hand-row .tile-blind').forEach(blindEl => {
    if(blindEl===exceptEl) return;
    const revealed=mkTile(blindEl.dataset.tile,'hand',false);
    revealed.style.pointerEvents='none';
    blindEl.replaceWith(revealed);
  });
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
  if (G.score !== _displayedScore) animateScore(G.score);
  const cd=$('combo-display');
  if(G.combo>=2){cd.textContent=`🔥 ×${G.combo}`;cd.classList.remove('combo-hidden');cd.classList.add('combo-bump');setTimeout(()=>cd.classList.remove('combo-bump'),200);}
  else cd.classList.add('combo-hidden');
  if(G.lives<=1)$('screen-game').classList.add('critical');
  else $('screen-game').classList.remove('critical');
}

// ── Tile interaction ──────────────────────────────────────────────────────────
function selectTile(td, el) {
  if(G.phase!=='playing') return;
  G.phase='result'; stopTimer();
  if(_adv){clearTimeout(_adv);_adv=null;}

  const p=G.currentProblem;
  const tileIdx=p.hand.indexOf(td);
  if(tileIdx>=0) G.eUsed.push(tileIdx);
  const isFinal = G.eTurn>=3;

  if(td.safe || td.lucky) {
    // ── Safe pick ─────────────────────────────────────────────────────────
    // Determine "visible" discards for is現物 check (player can only see partial discards)
    const visLimit = G.eTurn===1?2:G.eTurn===2?4:p.opponentDiscards.length;
    const is現物 = p.opponentDiscards.slice(0,visLimit).includes(td.tile);
    const isCrit = !is現物;
    const isClutch = _tv<=2 && G.combo>=2;
    let pts=(isCrit?200:100)+Math.min(G.combo,5)*20;
    if(isClutch) pts+=150;
    if(isCrit) pts+=(G.critBonus||0);
    pts+=(G.scoreBonus||0);
    if(G.mouhaiNext){G.mouhaiNext=false;pts*=3;unblindHand(el);}
    if(G.scoreDblOnce){pts*=2;G.scoreDblOnce=false;}
    if(hasRunSkill('shinsoku')&&_tv>=5) pts+=200;
    G.score+=pts; G.combo++;
    G.consecutiveMiss=0;
    if(G.combo>=5)  unlockAchievement('combo5');
    if(G.combo>=10) unlockAchievement('combo10');
    // 3コンボごとにライフ1回復（フラグを立てて後でアニメーション発動）
    const didHeal=G.combo%3===0 && G.lives<G.maxLives;
    if(didHeal) G.lives++;
    G.carryTime=Math.min(_tv+(isCrit?4:is現物?1:0),15);
    G.eSafeCount++;

    flashGreen(); spawnPop(pts,el,isClutch||isCrit);
    const moveMode = isClutch?'clutch':isCrit?'critical':'safe';
    const moveTxt  = isClutch?pick(MOVES.clutch):isCrit?pick(MOVES.crit):pickSafeMove(G.combo);
    showMoveName(moveMode,moveTxt);
    updateHUD();
    if(didHeal) healLives();

    if(G.eTurn===1) {
      // Turn 1: advance to turn 2
      revealOneTile(td,el);
      showToast('safe',pts,p.waitShape,isClutch||isCrit,0,td.reason);
      updateRivalFlavor('safe');
      _adv=setTimeout(advanceTurn,1200);

    } else if(G.eTurn===2 && !G.eRiichi) {
      // Turn 2 perfect (both safe, no riichi) → YAKU BREAK! Encounter ends
      revealOneTile(td,el);
      showToast('safe',pts,p.waitShape,isClutch||isCrit,0,td.reason);
      G.rivalHp=Math.max(0,G.rivalHp-1); renderRivalHp(true,2);
      setTimeout(()=>showYakuBreak(p.yaku,p.yakuValue),700);
      if(G.rivalHp<=0) setTimeout(rivalDefeated,4500);
      else _adv=setTimeout(advance,5000);

    } else if(G.eTurn===2 && G.eRiichi) {
      // Turn 2 safe but riichi already declared → advance to turn 3
      revealOneTile(td,el);
      showToast('safe',pts,p.waitShape,isClutch||isCrit,0,td.reason);
      updateRivalFlavor('safe');
      _adv=setTimeout(advanceTurn,1200);

    } else {
      // Turn 3 (final, riichi mode) safe → ULTIMATE!! 演出
      const hpDmg=(isCrit?G.critMult:G.rivalDmgMult)+(isClutch?1:0);
      revealHand(td);
      showToast('safe',pts,p.waitShape,isClutch||isCrit,0,td.reason);
      flashGold();
      setTimeout(showUltimateSplash,80);
      G.rivalHp=Math.max(0,G.rivalHp-hpDmg); renderRivalHp(true, Math.min(hpDmg+1,3));
      if(G.rivalHp<=0) setTimeout(rivalDefeated,2200);
      else sched(2600);
    }

  } else {
    // ── Dangerous pick ────────────────────────────────────────────────────
    if(G.mouhaiNext){G.mouhaiNext=false;unblindHand(el);}
    const dmg=td.damage??1;

    // Defensive skills (don't trigger riichi)
    if(G.hasInsurance){
      G.hasInsurance=false;
      showMoveName('safe','初回ミス保険発動！');
      showToast('safe',0,p.waitShape,false,0);
      revealOneTile(td,el);
      if(isFinal){revealHand(td);sched(1800);}else{_adv=setTimeout(advanceTurn,1800);}
      return;
    }
    if(G.hasBlock){
      G.hasBlock=false;
      showMoveName('safe','鉄壁で防いだ！');
      showToast('safe',0,p.waitShape,false,0);
      revealOneTile(td,el);
      if(isFinal){revealHand(td);sched(1800);}else{_adv=setTimeout(advanceTurn,1800);}
      return;
    }

    // Actual damage
    G.eRiichi=true;
    G.carryTime=0;
    if(G.comboSaveOnce){G.comboSaveOnce=false;G.combo=Math.max(0,G.combo-1);}
    else if(hasRunSkill('reitan')) G.combo=Math.max(0,G.combo-1);
    else G.combo=0;
    flashRed(dmg); shakeScreen();
    G.missThisRival=true;
    G.consecutiveMiss++;
    if(G.consecutiveMiss>=2) unlockAchievement('double_ron');
    if(G.consecutiveMiss>=3) unlockAchievement('triple_ron');
    G.lives=Math.max(0,G.lives-dmg); hitLives();
    updateRivalFlavor(isFinal ? 'ult_miss' : 'miss');
    console.log(`[遷移] miss: lives=${G.lives} eTurn=${G.eTurn} isFinal=${isFinal}`);
    showMoveName('danger',dmg>=2?pick(MOVES.danger2):pick(MOVES.danger));
    showToast('danger',0,p.waitShape,false,dmg);
    updateHUD();

    if(isFinal){
      revealHand(td);
      sched(G.lives<=0?2200:2000);
    } else {
      revealOneTile(td,el);
      _adv=setTimeout(advanceTurn,G.lives<=0?2200:2000);
    }
  }
}

function onTimeUp() {
  if(G.phase!=='playing') return;
  G.phase='result';
  G.eRiichi=true;
  if(hasRunSkill('reitan')) G.combo=Math.max(0,G.combo-1); else G.combo=0;
  G.carryTime=0;
  if(_adv){clearTimeout(_adv);_adv=null;}
  flashRed(1); shakeScreen();
  G.missThisRival=true;
  G.consecutiveMiss++;
  G.timeoutCount++;
  if(G.consecutiveMiss>=2) unlockAchievement('double_ron');
  if(G.consecutiveMiss>=3) unlockAchievement('triple_ron');
  if(G.timeoutCount>=3)    unlockAchievement('timeout3');
  G.lives=Math.max(0,G.lives-1); hitLives();
  showMoveName('danger',pick(MOVES.timeout));
  showToast('timeout',0,G.currentProblem.waitShape,false,1);
  updateHUD();
  const isFinal=G.eTurn>=3;
  if(isFinal){revealHand(null);sched(G.lives<=0?2200:2000);}
  else{_adv=setTimeout(advanceTurn,G.lives<=0?2200:2000);}
}

// ── Advance to next turn within the same encounter ────────────────────────────
function advanceTurn() {
  if(_adv){clearTimeout(_adv);_adv=null;}
  if(G.lives<=0){showGameOver();return;}
  hideToast();
  G.eTurn++;
  G.phase='playing';
  renderDiscards();
  updateRiichiBanner();
  $('round-display').textContent=`第 ${RIVALS[G.rivalIdx].hp-G.rivalHp+1} / ${RIVALS[G.rivalIdx].hp} 撃`;
  if(G.eTurn>=3){
    showUltimateChoiceCutin();
    setTimeout(()=>{renderHandForTurn();showYakuTarget();startTimer();},900);
  } else {
    renderHandForTurn();
    showYakuTarget();
    startTimer();
  }
}
function showUltimateChoiceCutin(){
  const el=document.createElement('div');
  el.className='ultimate-cutin';
  el.innerHTML='<div class="uc-text">究極の選択！！</div>';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1200);
}

// ── Tile reveal helpers ───────────────────────────────────────────────────────

// Reveal only the selected tile (used for turns 1–2)
function revealOneTile(td, el) {
  const isCritVisual=td.safe&&!G.currentProblem.opponentDiscards.includes(td.tile);
  el.style.pointerEvents='none';
  if(td.lucky||isCritVisual) el.classList.add('tile-crit');
  else if(td.safe) el.classList.add('tile-safe');
  else el.classList.add('tile-danger');
  el.classList.add(isCritVisual||td.lucky?'tile-picked-crit':td.safe?'tile-picked-safe':'tile-picked-danger');
  const lbl=document.createElement('span');lbl.className='tile-label';
  lbl.textContent=td.lucky?'✨':isCritVisual?'★':td.safe?'✓':(td.damage??1)>=2?'✗✗':'✗';
  el.appendChild(lbl);
}

// Reveal all remaining tiles (used for turn 3 / encounter end)
function revealHand(selected) {
  const p=G.currentProblem;
  $('hand-row').querySelectorAll('.tile').forEach(el=>{
    const i=parseInt(el.dataset.handIdx);
    const td=p.hand[i];
    if(!td) return;
    el.style.pointerEvents='none';
    const isCritVisual=td.safe&&!p.opponentDiscards.includes(td.tile);
    if(td.lucky)          el.classList.add('tile-crit');
    else if(isCritVisual) el.classList.add('tile-crit');
    else if(td.safe)      el.classList.add('tile-safe');
    else                  el.classList.add('tile-danger');
    if(selected && p.hand.indexOf(selected)===i)
      el.classList.add(isCritVisual||td.lucky?'tile-picked-crit':td.safe?'tile-picked-safe':'tile-picked-danger');
    const lbl=document.createElement('span');lbl.className='tile-label';
    lbl.textContent=td.lucky?'✨':isCritVisual?'★':td.safe?'✓':(td.damage??1)>=2?'✗✗':'✗';
    el.appendChild(lbl);
  });
}

// ── Yaku break ────────────────────────────────────────────────────────────────
function showYakuSplash(yaku) {
  const el=$('yaku-splash'); if(!el) return;
  el.querySelector('.yaku-splash-main').textContent=yaku||'役崩し！！';
  $('yaku-splash-sub').textContent=pick(['阻止！！', '役崩し！！', '崩壊！！', '上がり阻止！！']);
  el.classList.remove('hidden');
  el.style.animation='none'; void el.offsetWidth;
  el.style.animation='';
  el.querySelector('.yaku-splash-main').style.animation='none'; void el.offsetWidth;
  el.querySelector('.yaku-splash-main').style.animation='';
  setTimeout(()=>el.classList.add('hidden'), 2800);
}

function showYakuBreak(yaku, value) {
  if(!yaku) return;
  console.log(`[遷移] showYakuBreak: yaku=${yaku} value=${value}`);
  G.phase='result'; stopTimer(); hideToast();
  const bonus=(value||1)*300;
  G.score+=bonus;
  updateRivalFlavor('yakuBreak');
  showYakuSplash(yaku);
  spawnPop(bonus,null,true);
  updateHUD();
  setTimeout(revealOpponentHandDisplay, 1800);
}

function revealOpponentHandDisplay() {
  const p=G.currentProblem; if(!p) return;
  const wrap=$('opp-reveal-row'); if(!wrap) return;
  wrap.innerHTML='';
  wrap.classList.remove('hidden');
  const shape=p.waitShape||'';
  const lbl=document.createElement('div'); lbl.className='opp-reveal-label';
  lbl.textContent=`⚡ 相手の待ち（${shape}）`;
  wrap.appendChild(lbl);
  const tilesWrap=document.createElement('div'); tilesWrap.className='opp-reveal-tiles';
  (p.waits||[]).forEach(t=>{
    const el=mkTile(t,'result');
    el.style.pointerEvents='none';
    tilesWrap.appendChild(el);
  });
  wrap.appendChild(tilesWrap);
}

// ── Rival defeated ────────────────────────────────────────────────────────────
function rivalDefeated() {
  G.phase='rival_defeated'; stopTimer(); hideToast();
  if(_adv){clearTimeout(_adv);_adv=null;}
  console.log(`[遷移] rivalDefeated: stage=${G.rivalIdx+1}`);
  unlockAchievement('first_rival');
  if(!G.missThisRival) unlockAchievement('no_miss');
  if(G.lives===1)      unlockAchievement('last_stand');
  showMoveName('rival',pick(MOVES.defeated));
  updateRivalFlavor('defeated');
  setTimeout(()=>{
    if(G.rivalIdx>=RIVALS.length-1) showVictory();
    else showSkillSelection();
  },2200);
}

// ── Skill selection ───────────────────────────────────────────────────────────
let _skillTimer=null;
function showSkillSelection() {
  const pool=RUN_SKILLS.filter(s=>s.id!=='heal'||G.lives<G.maxLives);
  const shuffled=shuffle([...pool]).slice(0,3);
  // put heal first when life is critical, otherwise keep shuffle order
  if(G.lives===1) { const hi=shuffled.findIndex(s=>s.id==='heal'); if(hi>0){[shuffled[0],shuffled[hi]]=[shuffled[hi],shuffled[0]];} }
  const choices=shuffled;
  const container=$('skill-cards'); container.innerHTML='';

  let countdown=10;
  const countEl=document.createElement('div');
  countEl.style.cssText='text-align:center;color:#6b7280;font-size:12px;padding:8px 0;';
  countEl.textContent=`${countdown}秒後に自動でおまかせ選択…`;

  choices.forEach((skill,i)=>{
    const card=document.createElement('div');
    const isAuto = i===0;
    card.className='skill-card'+(isAuto?' skill-recommend':'');
    const autoLabel = isAuto ? ' <span style="font-size:11px;color:#94a3b8">↩おまかせ</span>' : '';
    card.innerHTML=`<div class="skill-card-icon">${skill.icon}</div><div><div class="skill-card-name">${skill.name}${autoLabel}</div><div class="skill-card-desc">${skill.desc}</div></div>`;
    card.addEventListener('click',()=>{clearInterval(_skillTimer);pickSkill(skill);});
    container.appendChild(card);
  });
  container.appendChild(countEl);
  showScreen('screen-skill');

  _skillTimer=setInterval(()=>{
    countdown--;
    countEl.textContent=`${countdown}秒後に自動でおまかせ選択…`;
    if(countdown<=0){clearInterval(_skillTimer);pickSkill(choices[0]);}
  },1000);
}

function pickSkill(skill) {
  G.runSkills.push(skill);
  if(skill.id==='heal')        G.lives=Math.min(G.lives+1,G.maxLives);
  if(skill.id==='iron_wall')   G.hasBlock=true;
  if(skill.id==='combo_save')  G.comboSaveOnce=true;
  if(skill.id==='safe_one')    G.safeOneNext=true;
  if(skill.id==='score_2x')    G.scoreDblOnce=true;
  if(skill.id==='double_dmg')  G.rivalDmgMult=2;
  if(skill.id==='crit_triple') G.critMult=3;
  if(skill.id==='time_boost')  G.timerBonus=3;
  if(skill.id==='time_next5')  G.nextTimerBonus=5;
  if(skill.id==='mouhai')      G.mouhaiActive=true;
  if(skill.id==='tsumikomi')   G.tsumikomiNext=true;
  if(skill.id==='surikae')     G.surikaeAvail=true;
  if(skill.id==='toshi')       G.toshiNext=true;
  if(skill.id==='nidotsumi')   G.nidotsumiNext=true;
  showScreen('screen-game');
  loadRival(G.rivalIdx+1);
}
function hasRunSkill(id){ return G.runSkills.some(s=>s.id===id); }

// ── Victory ───────────────────────────────────────────────────────────────────
function showVictory() {
  G.phase='victory'; stopTimer(); hideToast();
  showMoveName('rival',pick(MOVES.victory));
  const save=getSave(); save.runs++;
  if(G.score>save.bestScore) save.bestScore=G.score;
  if(!save.bestCombo) save.bestCombo=0;
  if(G.combo>save.bestCombo) save.bestCombo=G.combo;
  const expEarned=calcExp();
  save.exp+=expEarned; writeSave(save);
  unlockAchievement('full_clear');
  if(save.runs>=5)  unlockAchievement('runs5');
  if(save.runs>=10) unlockAchievement('veteran');
  if(save.runs>=25) unlockAchievement('runs25');
  if(save.runs>=50) unlockAchievement('runs50');
  G.lastExpEarned=expEarned;
  $('victory-score').textContent  =`スコア：${G.score.toLocaleString()} 点`;
  $('victory-detail').textContent =`全 ${RIVALS.length} ライバル撃破！ +${expEarned} EXP`;
  setTimeout(()=>showScreen('screen-victory'),1200);
}

// ── Game over ─────────────────────────────────────────────────────────────────
function showGameOver() {
  G.phase='gameover'; // prevent stale callbacks from firing
  stopTimer(); hideToast();
  if(_adv){clearTimeout(_adv);_adv=null;}

  const save=getSave(); save.runs++;
  if(G.score>save.bestScore) save.bestScore=G.score;
  if(!save.bestCombo) save.bestCombo=0;
  if(G.combo>save.bestCombo) save.bestCombo=G.combo;
  const expEarned=calcExp();
  save.exp+=expEarned; writeSave(save);
  if(save.runs>=5)  unlockAchievement('runs5');
  if(save.runs>=10) unlockAchievement('veteran');
  if(save.runs>=25) unlockAchievement('runs25');
  if(save.runs>=50) unlockAchievement('runs50');

  console.log(`[遷移] showGameOver: stage=${G.rivalIdx+1} score=${G.score}`);
  const r=RIVALS[G.rivalIdx], p=G.currentProblem;
  $('final-score').textContent  =`${G.score.toLocaleString()} 点`;
  $('final-detail').textContent =`${r.name} に敗北…`;
  // 勝利セリフ
  const quoteEl=$('rival-win-quote');
  if(quoteEl) quoteEl.innerHTML=`${r.icon} <em>「${r.lines?.win ?? r.flavor}」</em>`;
  // 待ち牌表示
  const waitEl=$('gameover-waits');
  if(waitEl && p) {
    const shape=p.waitShape||'';
    const waitTiles=(p.waits||[]).map(t=>{
      const el=mkTile(t,'result'); return el.outerHTML;
    }).join('');
    const expStr=p.explanation?`<div class="go-explanation">${tileIdToJa(p.explanation).replace(/\n/g,'<br>')}</div>`:'';
    waitEl.innerHTML=`<div class="go-wait-label">相手の待ち（${tileIdToJa(shape)}）</div><div class="go-wait-tiles">${waitTiles}</div>${expStr}`;
  }
  const handEl=$('gameover-hand');
  if(handEl && p) {
    const discardTiles=(p.opponentDiscards||[]).map(t=>mkTile(t,'discard').outerHTML).join('');
    const yakuStr=p.yaku?`<div class="go-wait-label" style="margin-top:8px">役: ${p.yaku}${'★'.repeat(p.yakuValue||1)}</div>`:'';
    handEl.innerHTML=`<div class="go-wait-label">相手の捨て牌</div><div class="go-wait-tiles">${discardTiles}</div>${yakuStr}`;
  }
  G.pendingExpEarned=expEarned;
  showScreen('screen-gameover');
  if(_goTimer) clearTimeout(_goTimer);
  _goTimer=setTimeout(()=>{ _goTimer=null; G.phase='title'; showScreen('screen-title'); updateTitleUI(); }, 30000);
}

function calcExp() {
  const save=getSave();
  const mult=1+(save.upgrades.exp_rate||0)*0.3;
  return Math.max(2, Math.round((G.rivalIdx*3+Math.floor(G.score/50))*mult));
}

// ── Upgrade shop ──────────────────────────────────────────────────────────────
function openShop(expEarned) {
  const save=getSave();
  $('shop-exp-earned').textContent=expEarned>0?`+${expEarned} EXP 獲得！`:'';
  $('btn-next-run').textContent=G.continueMode?'⚔️ 再挑戦！':'次のランへ →';
  renderShop(save); showScreen('screen-upgrade');
}
function renderShop(save) {
  $('shop-exp').textContent=save.exp;
  const list=$('shop-list'); list.innerHTML='';
  UPGRADES.forEach(upg=>{
    const curLv=save.upgrades[upg.id]||0, isMax=curLv>=upg.maxLv;
    const cost=upg.costs[curLv], canBuy=!isMax&&save.exp>=cost;
    const item=document.createElement('div');
    item.className='shop-item'+(isMax?' maxed':'');
    item.innerHTML=`<div class="shop-icon">${upg.icon}</div><div class="shop-info"><div class="shop-name">${upg.name}</div><div class="shop-desc">${isMax?'最大レベル！':upg.descs[curLv]}</div><div class="shop-level">Lv ${curLv} / ${upg.maxLv}</div></div><button class="shop-buy" ${isMax||!canBuy?'disabled':''}>${isMax?'MAX':cost+' EXP'}</button>`;
    if(!isMax&&canBuy) item.querySelector('.shop-buy').addEventListener('click',()=>buyUpgrade(upg.id));
    list.appendChild(item);
  });
}
function buyUpgrade(id) {
  const save=getSave(), upg=UPGRADES.find(u=>u.id===id);
  const curLv=save.upgrades[id]||0;
  if(curLv>=upg.maxLv) return;
  const cost=upg.costs[curLv];
  if(save.exp<cost) return;
  save.exp-=cost; save.upgrades[id]=(curLv+1);
  writeSave(save); renderShop(save);
}

// ── Effects ────────────────────────────────────────────────────────────────────
function flashGreen(){const f=$('screen-flash');f.style.background='rgba(34,197,94,.3)';f.classList.add('active');setTimeout(()=>{f.classList.add('fade');f.classList.remove('active');setTimeout(()=>f.classList.remove('fade'),260);},80);}
function flashGold(){const f=$('screen-flash');f.style.background='rgba(255,255,255,.92)';f.classList.add('active');setTimeout(()=>{f.classList.remove('active');f.style.background='rgba(251,191,36,.6)';f.classList.add('active');setTimeout(()=>f.classList.remove('active'),220);},60);}
function showUltimateSplash(){
  const el=$('ultimate-splash');if(!el)return;
  const main=el.querySelector('.ult-main');
  if(main) main.textContent=pick(MOVES.ultimate);
  el.classList.remove('hidden');
  ['','ult-main','ult-sub'].forEach(sel=>{const t=sel?el.querySelector('.'+sel):el;if(t){t.style.animation='none';void t.offsetWidth;t.style.animation='';}});
  setTimeout(()=>el.classList.add('hidden'),2400);
}
function flashRed(dmg){const f=$('screen-flash');f.style.background=dmg>=2?'rgba(239,68,68,.75)':'rgba(239,68,68,.5)';f.className='screen-flash active';setTimeout(()=>f.classList.remove('active'),80);setTimeout(()=>f.classList.add('active'),180);setTimeout(()=>f.classList.remove('active'),260);if(dmg>=2){setTimeout(()=>f.classList.add('active'),380);setTimeout(()=>f.classList.remove('active'),480);}}
function shakeScreen(){const el=$('screen-game');el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');setTimeout(()=>el.classList.remove('shake'),380);}
function hitLives(){const el=$('lives-display');el.classList.remove('lives-hit');void el.offsetWidth;el.classList.add('lives-hit');setTimeout(()=>el.classList.remove('lives-hit'),380);}
function healLives(){const el=$('lives-display');el.classList.remove('lives-heal');void el.offsetWidth;el.classList.add('lives-heal');setTimeout(()=>el.classList.remove('lives-heal'),500);}
function spawnPop(pts,anchor,isCrit){
  const layer=$('popup-layer'),el=document.createElement('div');
  el.className='score-pop'+(isCrit?' crit':'');
  el.textContent=(isCrit?'★ ':'')+'+'+pts;
  if(anchor){const r=anchor.getBoundingClientRect();el.style.left=(r.left+r.width/2-24)+'px';el.style.top=(r.top-8)+'px';}
  else{el.style.left='50%';el.style.top='22%';el.style.transform='translateX(-50%)';}
  layer.appendChild(el);setTimeout(()=>el.remove(),1050);
}
function showMoveName(mode,text){
  const w=$('move-name'),t=$('move-name-text');
  w.className=`move-name move-${mode} show`;t.textContent=text;
  setTimeout(()=>{w.className='move-name';},1000);
}
function pickSafeMove(combo){if(combo>=5)return pick(MOVES.safe_c5);if(combo>=4)return pick(MOVES.safe_c4);if(combo>=3)return pick(MOVES.safe_c3);if(combo>=2)return pick(MOVES.safe_c2);return pick(MOVES.safe);}

function showToast(mode,pts,waitShape,isCrit,dmg,reason){
  const t=$('game-toast');
  const ws=tileIdToJa(waitShape||'');
  if(mode==='safe'){
    t.className='game-toast '+(isCrit?'toast-crit':'toast-safe')+' show';
    const r=reason?`<span class="toast-reason">${tileIdToJa(reason)}</span>`:'';
    t.innerHTML=isCrit?`★ 現物ヒット！ +${pts}pt<br>${r}<small>${ws}</small>`:`✅ セーフ！ +${pts}pt<br>${r}<small>${ws}</small>`;
  } else if(mode==='danger'){
    const p=G.currentProblem;
    const yStr=p?.yaku?`<span class="toast-yaku">ロン！ ${p.yaku} ${'★'.repeat(p.yakuValue||1)}</span>`:'';
    t.className='game-toast toast-danger show';
    t.innerHTML=`💥 振り込み！${dmg>=2?' -'+dmg+'ライフ！！':''}<br>${yStr}<small>待ち → ${ws}</small>`;
  } else {
    const p=G.currentProblem;
    const yStr=p?.yaku?`<span class="toast-yaku">ツモ！ ${p.yaku} ${'★'.repeat(p.yakuValue||1)}</span>`:'';
    t.className='game-toast toast-danger show';
    t.innerHTML=`⏰ タイムオーバー！<br>${yStr}<small>待ち → ${ws}</small>`;
  }
  // Toast tap: skip to next turn or next encounter depending on current turn
  t.onclick=()=>{
    clearTimeout(_adv);_adv=null;
    if(G.eTurn<3&&G.phase==='result') advanceTurn(); else advance();
  };
}
function hideToast(){const t=$('game-toast');t.className='game-toast';t.onclick=null;}

// ── Hint ──────────────────────────────────────────────────────────────────────
function showHint(){
  if(G.phase!=='playing') return;
  if(G.mouhaiNext) return; // mouhai中はヒント無効
  // Only visible discards count as known genzai (partial info per turn)
  const visLimit=G.eTurn===1?2:G.eTurn===2?4:G.currentProblem.opponentDiscards.length;
  const discards=new Set(G.currentProblem.opponentDiscards.slice(0,visLimit));
  let found=false;
  $('hand-row').querySelectorAll('.tile-hand').forEach(el=>{
    const i=parseInt(el.dataset.handIdx);
    const td=G.currentProblem.hand[i];
    const isTarget=G.hintAll||EASY_MODE?(td&&td.safe):(td&&discards.has(td.tile));
    if(isTarget){el.classList.remove('hint-safe');void el.offsetWidth;el.classList.add('hint-safe');setTimeout(()=>el.classList.remove('hint-safe'),1500);found=true;}
  });
  if(!found&&!G.hintAll&&!EASY_MODE){
    $('hand-row').querySelectorAll('.tile-hand').forEach(el=>{
      const i=parseInt(el.dataset.handIdx);
      const td=G.currentProblem.hand[i];
      if(td&&td.safe){el.classList.remove('hint-safe');void el.offsetWidth;el.classList.add('hint-safe');setTimeout(()=>el.classList.remove('hint-safe'),1500);}
    });
  }
}

// ── Ranking scroll ────────────────────────────────────────────────────────────
let _rankRaf=null;
function startRankScroll(el) {
  if(_rankRaf){cancelAnimationFrame(_rankRaf);_rankRaf=null;}
  if(!el) return;
  requestAnimationFrame(()=>{
    const max=Math.max(0,el.scrollHeight-el.clientHeight);
    if(max===0) return;
    let pos=max, paused=120, atTop=false, userScrollAt=0;
    el.scrollTop=pos;
    // ユーザー操作のみ検知（プログラムスクロールは除外）
    const onUser=()=>{ userScrollAt=performance.now(); };
    el.addEventListener('pointerdown', onUser);
    el.addEventListener('wheel',       onUser, {passive:true});
    const tick=()=>{
      if(G.phase!=='title') return;
      if(performance.now()-userScrollAt < 3000){ _rankRaf=requestAnimationFrame(tick); return; }
      if(paused>0){paused--;_rankRaf=requestAnimationFrame(tick);return;}
      if(atTop){
        atTop=false; pos=max; el.scrollTop=pos; paused=60;
        _rankRaf=requestAnimationFrame(tick); return;
      }
      pos-=0.4;
      el.scrollTop=pos;
      if(pos<=0){pos=0;el.scrollTop=0;atTop=true;paused=300;}
      _rankRaf=requestAnimationFrame(tick);
    };
    _rankRaf=requestAnimationFrame(tick);
  });
}

// ── Title UI ──────────────────────────────────────────────────────────────────
function updateTitleUI() {
  const save=getSave(), hs=$('title-hs');
  if(save.bestScore>0){
    const bc=save.bestCombo>0?` | 最大コンボ: ${save.bestCombo}🔥`:'';
    hs.textContent=`EXP: ${save.exp} | ランク: ${save.runs}戦${bc}`;
  } else hs.textContent='';

  // タイトルランキング
  const rankEl=$('title-ranking');
  if(rankEl){
    const bs=save.bestScore||0;
    const FAKE=[
      {name:'桐生院 チハル 🐉',     score:30000},{name:'覇王 ラミィ ☃️',  score:23000},
      {name:'影牌師 シン 🌑',       score:18500},{name:'疾風 ハヤテ ⚡',  score:15000},
      {name:'鬼牌 こより 🧪',       score:12000},{name:'天音 レイ ✨',    score:9800},
      {name:'炎龍 カエン 🔥',       score:8200}, {name:'高峰 ルイナ 🥀', score:6800},
      {name:'氷華 ミソラ ❄️',       score:5500}, {name:'妖牌 ツキミ 🌙', score:4400},
      {name:'鳳翔 マリン 🏴‍☠️',   score:3500}, {name:'流星 コウ 💫',   score:2700},
      {name:'鉄壁 テツオ 🛡️',      score:2000}, {name:'春嵐 ハルカ 🌸', score:1500},
      {name:'迅雷 ライジン ⚡',      score:1100}, {name:'銀翼 シロ 🦅',   score:750},
      {name:'霧島 キリ 🌫️',        score:500},  {name:'天使 エンジェル 👼',score:300},
      {name:'新米 ルーキー 🌱',      score:150},
    ];
    const entries=FAKE.map(f=>({name:f.name,score:f.score}));
    if(bs>0) entries.push({name:'▶ YOU ◀',score:bs,isPlayer:true});
    entries.sort((a,b)=>b.score-a.score);
    const rows=entries.map((e,i)=>{
      const cls=e.isPlayer?'rank-row rank-you':'rank-row';
      return `<div class="${cls}"><span class="rank-pos">${i+1}</span><span class="rank-name">${e.name}</span><span class="rank-score">${e.score.toLocaleString()}点</span></div>`;
    }).join('');
    rankEl.innerHTML=`<div class="rank-title">🏆 スコアランキング</div><div class="rank-rows-wrap">${rows}</div>`;
    startRankScroll(rankEl);
  }

  $('btn-easy').classList.toggle('active',EASY_MODE);
  $('btn-debug').classList.toggle('active',DEBUG_MODE);
  const resetBtn=$('btn-reset'); if(resetBtn) resetBtn.style.display=DEBUG_MODE?'':'none';
  let badge=document.querySelector('.debug-badge');
  if(DEBUG_MODE){if(!badge){badge=document.createElement('div');badge.className='debug-badge';badge.textContent='DEBUG';document.body.appendChild(badge);}}
  else if(badge) badge.remove();
}

// ── Achievements screen ─────────────────────────────────────────────────────────
const ACH_PER_PAGE = 5;
function showAchievements(page=0){
  const save=getSave();
  const unlocked=save.achievements||{};
  const body=$('ach-body');
  if(!body){showScreen('screen-ach');return;}
  const totalPages=Math.ceil(ACHIEVEMENTS.length/ACH_PER_PAGE);
  page=Math.max(0,Math.min(page,totalPages-1));
  const slice=ACHIEVEMENTS.slice(page*ACH_PER_PAGE,(page+1)*ACH_PER_PAGE);
  const rows=slice.map(a=>{
    const isUnlocked=!!unlocked[a.id];
    if(!isUnlocked && a.hidden) return `<div class="ach-row ach-row-locked"><span class="ach-row-icon">🔒</span><div class="ach-row-info"><div class="ach-row-name">????</div><div class="ach-row-desc">???</div></div></div>`;
    const cls=isUnlocked?'ach-row':'ach-row ach-row-locked';
    return `<div class="${cls}"><span class="ach-row-icon">${a.icon}</span><div class="ach-row-info"><div class="ach-row-name">${a.name}</div><div class="ach-row-desc">${a.desc}</div></div>${isUnlocked?'<span class="ach-row-check">✅</span>':''}</div>`;
  }).join('');
  const prevDis=page===0?'disabled':'';
  const nextDis=page===totalPages-1?'disabled':'';
  body.innerHTML=rows+`
    <div class="ach-pager">
      <button id="btn-ach-prev" class="btn-secondary ach-pager-btn" ${prevDis}>◀</button>
      <span class="ach-pager-num">${page+1} / ${totalPages}</span>
      <button id="btn-ach-next" class="btn-secondary ach-pager-btn" ${nextDis}>▶</button>
    </div>
    <button id="btn-ach-back" class="btn-secondary" style="margin-top:8px">戻る</button>`;
  body.querySelector('#btn-ach-prev').addEventListener('click',()=>showAchievements(page-1));
  body.querySelector('#btn-ach-next').addEventListener('click',()=>showAchievements(page+1));
  body.querySelector('#btn-ach-back').addEventListener('click',()=>{G.phase='title';showScreen('screen-title');updateTitleUI();});
  showScreen('screen-ach');
}

// ── Utils ──────────────────────────────────────────────────────────────────────
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
function tileIdToJa(text){
  return text.replace(/([1-9])([mpsz])/g,(_,n,s)=>{
    const num=parseInt(n);
    if(s==='z') return HONOR_MAP[n+s]||n+s;
    return KANJI_NUM[num]+(SUIT_KANJI[s]||s);
  });
}
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

// ── Pause / resume / go-title ─────────────────────────────────────────────────
function pauseGame() {
  if(G.phase!=='playing') return;
  G.phase='paused'; stopTimer();
  $('pause-overlay').classList.remove('hidden');
}
function resumeGame() {
  if(G.phase!=='paused') return;
  $('pause-overlay').classList.add('hidden');
  G.phase='playing'; _renderTimer();
  _timer=setInterval(()=>{_tv--;_renderTimer();if(_tv<=0){clearInterval(_timer);_timer=null;onTimeUp();}},1000);
}
function continueGame() {
  clearTimeout(_goTimer); _goTimer=null;
  stopTimer();
  if(_adv){clearTimeout(_adv);_adv=null;}
  G.score=Math.floor(G.score*0.3);
  G.lives=G.maxLives; G.combo=0;
  G.continueMode=true;
  openShop(G.pendingExpEarned||0);
}
function retryCurrentRival() {
  clearTimeout(_goTimer); _goTimer=null;
  stopTimer();
  if(_adv){clearTimeout(_adv);_adv=null;}
  const save=getSave(), upg=save.upgrades;
  G.maxLives=3+(upg.hp||0); BASE_TIMER=10+(upg.time||0)*2;
  G.hintAll=!!(upg.hint); G.hasInsurance=!!(upg.ins);
  G.scoreBonus=(upg.score_up||0)*50; G.critBonus=(upg.crit_up||0)*150; G.startHpRegen=!!(upg.start_hp);
  G.score=0; G.lives=G.maxLives; G.combo=0;
  G.runSkills=[]; G.hasBlock=false; G.comboSaveOnce=false;
  G.safeOneNext=false; G.scoreDblOnce=false; G.mouhaiNext=false; G.mouhaiActive=false; G.mouhaiUsed=false; G.rivalDmgMult=1;
  G.critMult=2; G.timerBonus=0; G.nextTimerBonus=0; G.carryTime=0;
  G.tsumikomiNext=false; G.surikaeAvail=false; G.toshiNext=false; G.toshiThisProblem=false; G.nidotsumiNext=false;
  $('screen-game').classList.remove('critical');
  showScreen('screen-game');
  loadRival(G.rivalIdx); // 同じライバルから再挑戦
}
function goTitle() {
  stopTimer();
  if(_adv){clearTimeout(_adv);_adv=null;}
  if(_skillTimer){clearInterval(_skillTimer);_skillTimer=null;}
  $('pause-overlay').classList.add('hidden');
  G.phase='title'; showScreen('screen-title'); updateTitleUI();
}

// ── Responsive scale ─────────────────────────────────────────────────────────
function applyScale(){
  const w=Math.min(window.innerWidth,540);
  const h=window.innerHeight;
  const s=Math.min(Math.max(Math.min(w/390,h/720),0.72),1.5);
  document.documentElement.style.setProperty('--s',s.toFixed(3));
}
window.addEventListener('resize',applyScale);
applyScale();

// ── Bootstrap ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  $('btn-start').addEventListener('click',startGame);
  $('btn-how').addEventListener('click',  ()=>showScreen('screen-how'));
  $('btn-how-back').addEventListener('click',()=>{G.phase='title';showScreen('screen-title');updateTitleUI();});
  $('btn-ach').addEventListener('click',  ()=>showAchievements());
  $('btn-easy').addEventListener('click', ()=>{EASY_MODE=!EASY_MODE;updateTitleUI();});
  $('btn-debug').addEventListener('click',()=>{DEBUG_MODE=!DEBUG_MODE;updateTitleUI();});
  $('btn-reset').addEventListener('click',()=>{if(confirm('セーブデータを全削除しますか？')){localStorage.removeItem(SAVE_KEY);location.reload();}});
  const mouhaiActivateBtn=$('btn-mouhai');
  if(mouhaiActivateBtn) mouhaiActivateBtn.addEventListener('click',()=>{
    G.mouhaiNext=true; G.mouhaiUsed=true;
    mouhaiActivateBtn.classList.add('hidden');
    renderHandForTurn();
    showEventToast('🦾 盲牌発動！正解で3倍スコア','safe');
  });
  $('btn-hint').addEventListener('click', showHint);
  $('btn-continue').addEventListener('click',continueGame);
  $('btn-retry').addEventListener('click',()=>{clearTimeout(_goTimer);_goTimer=null;openShop(0);});
  $('btn-title').addEventListener('click',()=>{clearTimeout(_goTimer);_goTimer=null;G.phase='title';showScreen('screen-title');updateTitleUI();});
  $('btn-next-run').addEventListener('click',()=>{
    if(G.continueMode){
      G.continueMode=false; G.phase='playing';
      showScreen('screen-game');
      showEventToast('💸 コンティニュー！','danger');
      loadRival(G.rivalIdx);
    } else { startGame(); }
  });
  $('btn-shop-title').addEventListener('click',()=>{G.phase='title';showScreen('screen-title');updateTitleUI();});
  $('btn-again').addEventListener('click', ()=>openShop(G.lastExpEarned||0));
  $('btn-vtitle').addEventListener('click',()=>{G.phase='title';showScreen('screen-title');updateTitleUI();});
  $('btn-pause').addEventListener('click', pauseGame);
  $('btn-resume').addEventListener('click',resumeGame);
  $('btn-pause-title').addEventListener('click',goTitle);

  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
    navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload());
  }
  updateTitleUI(); showScreen('screen-title');

  // タイトル牌スラッシュエフェクト（2秒後に開始、10秒おきにループ）
  let _slashT=null;
  function titleSlash(){
    if(G.phase!=='title'){_slashT=setTimeout(titleSlash,2000);return;}
    const tile=$('title-tile'); if(!tile) return;
    tile.classList.remove('cut'); void tile.offsetWidth;
    tile.classList.add('cut');
    setTimeout(()=>tile.classList.remove('cut'),500);
    showMoveName('ultimate',pick(MOVES.ultimate));
    _slashT=setTimeout(titleSlash,10000);
  }
  setTimeout(titleSlash,2000);
});
