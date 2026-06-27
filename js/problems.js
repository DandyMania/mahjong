const PROBLEMS = [
  // ===== BEGINNER =====
  {
    id: 1,
    difficulty: 'beginner',
    title: '現物の基本',
    description: '相手の捨て牌と同じ牌は絶対安全！',
    opponentDiscards: ['9m', '3p', '6s', '1z'],
    hand: [
      { tile: '9m',  safe: true,  reason: '現物（相手が捨てた牌）' },
      { tile: '1z',  safe: true,  reason: '現物（相手が捨てた牌）' },
      { tile: '5m',  safe: false, reason: '振り込み！6m-7m の両面待ち' },
      { tile: '8m',  safe: false, reason: '振り込み！6m-7m の両面待ち' },
      { tile: '4p',  safe: true,  reason: '今回は安全' },
      { tile: '7s',  safe: true,  reason: '今回は安全' },
      { tile: '3z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['5m', '8m'],
    waitShape: '6m-7m の両面待ち',
    explanation: '9m と東（1z）は現物で安全。\n5m と 8m が待ち牌（6m-7m の両面）！'
  },
  {
    id: 2,
    difficulty: 'beginner',
    title: '字牌は現物で安全',
    description: '字牌も捨ててあれば現物！',
    opponentDiscards: ['5z', '4m', '3p', '2s'],
    hand: [
      { tile: '5z',  safe: true,  reason: '現物（白）' },
      { tile: '4m',  safe: true,  reason: '現物' },
      { tile: '6s',  safe: false, reason: '振り込み！7s-8s の両面待ち' },
      { tile: '9s',  safe: false, reason: '振り込み！7s-8s の両面待ち' },
      { tile: '1m',  safe: true,  reason: '今回は安全' },
      { tile: '4p',  safe: true,  reason: '今回は安全' },
      { tile: '4z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['6s', '9s'],
    waitShape: '7s-8s の両面待ち',
    explanation: '白（5z）と 4m は現物で安全。\n6s と 9s が待ち牌（7s-8s の両面）！'
  },
  {
    id: 3,
    difficulty: 'beginner',
    title: '現物を見つけよう',
    description: '捨て牌の中に安全牌のヒントがある！',
    opponentDiscards: ['6m', '2p', '5s', '2z'],
    hand: [
      { tile: '6m',  safe: true,  reason: '現物' },
      { tile: '2z',  safe: true,  reason: '現物（南）' },
      { tile: '3p',  safe: false, reason: '振り込み！4p-5p の両面待ち' },
      { tile: '6p',  safe: false, reason: '振り込み！4p-5p の両面待ち' },
      { tile: '8m',  safe: true,  reason: '今回は安全' },
      { tile: '7s',  safe: true,  reason: '今回は安全' },
      { tile: '6z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['3p', '6p'],
    waitShape: '4p-5p の両面待ち',
    explanation: '6m と南（2z）は現物で安全。\n3p と 6p が待ち牌（4p-5p の両面）！'
  },
  {
    id: 4,
    difficulty: 'beginner',
    title: '危険牌は1枚だけ？',
    description: '単騎待ちは1種類だけが危険！',
    opponentDiscards: ['1m', '9p', '8s', '3z'],
    hand: [
      { tile: '1m',  safe: true,  reason: '現物' },
      { tile: '3z',  safe: true,  reason: '現物（西）' },
      { tile: '8p',  safe: false, reason: '振り込み！8p の単騎待ち' },
      { tile: '3m',  safe: true,  reason: '今回は安全' },
      { tile: '5p',  safe: true,  reason: '今回は安全' },
      { tile: '4s',  safe: true,  reason: '今回は安全' },
      { tile: '6z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['8p'],
    waitShape: '8p 単騎待ち',
    explanation: '1m と西（3z）は現物で安全。\n危険牌は 8p だけ！単騎待ちの罠に注意。'
  },
  {
    id: 5,
    difficulty: 'beginner',
    title: '危険牌は複数あるかも',
    description: '手牌に危険牌が 2 枚以上あることも！',
    opponentDiscards: ['7m', '4p', '2s', '4z'],
    hand: [
      { tile: '7m',  safe: true,  reason: '現物' },
      { tile: '4z',  safe: true,  reason: '現物（北）' },
      { tile: '3s',  safe: false, reason: '振り込み！4s-5s の両面待ち' },
      { tile: '6s',  safe: false, reason: '振り込み！4s-5s の両面待ち' },
      { tile: '9m',  safe: true,  reason: '今回は安全' },
      { tile: '1p',  safe: true,  reason: '今回は安全' },
      { tile: '1z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['3s', '6s'],
    waitShape: '4s-5s の両面待ち',
    explanation: '7m と北（4z）は現物で安全。\n3s と 6s が待ち牌（4s-5s の両面）！'
  },

  // ===== MEDIUM =====
  {
    id: 6,
    difficulty: 'medium',
    title: '筋（スジ）読みの基本',
    description: '4m が捨ててある → 1m と 7m は筋で比較的安全',
    opponentDiscards: ['4m', '3p', '8s', '1z', '3z'],
    hand: [
      { tile: '1m',  safe: true,  reason: '4m の筋（スジ）で安全' },
      { tile: '7m',  safe: true,  reason: '4m の筋（スジ）で安全' },
      { tile: '5p',  safe: false, reason: '振り込み！6p-7p の両面待ち' },
      { tile: '8p',  safe: false, reason: '振り込み！6p-7p の両面待ち' },
      { tile: '2s',  safe: true,  reason: '今回は安全' },
      { tile: '4z',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['5p', '8p'],
    waitShape: '6p-7p の両面待ち',
    explanation: '4m が捨て牌にある → 1m と 7m は「筋」で安全。\n5p と 8p が待ち（6p-7p の両面）。'
  },
  {
    id: 7,
    difficulty: 'medium',
    title: '6 の筋を読む',
    description: '6m が捨ててある → 3m と 9m が筋',
    opponentDiscards: ['6m', '3p', '7s', '1z'],
    hand: [
      { tile: '3m',  safe: true,  reason: '6m の筋で安全' },
      { tile: '9m',  safe: true,  reason: '6m の筋で安全' },
      { tile: '4p',  safe: false, reason: '振り込み！5p-6p の両面待ち' },
      { tile: '7p',  safe: false, reason: '振り込み！5p-6p の両面待ち' },
      { tile: '2s',  safe: true,  reason: '今回は安全' },
      { tile: '4z',  safe: true,  reason: '今回は安全' },
      { tile: '6z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['4p', '7p'],
    waitShape: '5p-6p の両面待ち',
    explanation: '6m が捨て牌にある → 3m と 9m は筋で安全。\n4p と 7p が待ち（5p-6p の両面）。'
  },
  {
    id: 8,
    difficulty: 'medium',
    title: '複数の筋を組み合わせる',
    description: '複数の捨て牌から安全牌を導こう',
    opponentDiscards: ['3m', '6p', '9s', '2z', '3z'],
    hand: [
      { tile: '6m',  safe: true,  reason: '3m の筋で安全' },
      { tile: '3p',  safe: true,  reason: '6p の筋で安全' },
      { tile: '9p',  safe: true,  reason: '6p の筋で安全' },
      { tile: '2s',  safe: false, reason: '振り込み！3s-4s の両面待ち' },
      { tile: '5s',  safe: false, reason: '振り込み！3s-4s の両面待ち' },
      { tile: '1m',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['2s', '5s'],
    waitShape: '3s-4s の両面待ち',
    explanation: '3m の筋→6m 安全、6p の筋→3p・9p 安全。\n2s と 5s が待ち（3s-4s の両面）。'
  },
  {
    id: 9,
    difficulty: 'medium',
    title: '5 の筋を読む',
    description: '5m が捨ててある → 2m と 8m が筋',
    opponentDiscards: ['5m', '2p', '8s', '1z'],
    hand: [
      { tile: '2m',  safe: true,  reason: '5m の筋で安全' },
      { tile: '8m',  safe: true,  reason: '5m の筋で安全' },
      { tile: '2s',  safe: false, reason: '振り込み！3s-4s の両面待ち' },
      { tile: '5s',  safe: false, reason: '振り込み！3s-4s の両面待ち' },
      { tile: '4p',  safe: true,  reason: '今回は安全' },
      { tile: '4z',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['2s', '5s'],
    waitShape: '3s-4s の両面待ち',
    explanation: '5m の筋 → 2m と 8m は安全。\n2s と 5s が待ち（3s-4s の両面）！'
  },
  {
    id: 10,
    difficulty: 'medium',
    title: '⚠️ 筋の罠！',
    description: '筋に見えても危険なことがある。スジは 100% じゃない！',
    opponentDiscards: ['3m', '7p', '5s', '2z'],
    hand: [
      { tile: '6m',  safe: false, reason: '振り込み！3m の筋に見えるが 6m 単騎待ちだった！', damage: 2 },
      { tile: '7m',  safe: true,  reason: '今回は安全' },
      { tile: '1s',  safe: true,  reason: '今回は安全' },
      { tile: '4s',  safe: true,  reason: '今回は安全' },
      { tile: '3p',  safe: true,  reason: '今回は安全' },
      { tile: '3z',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['6m'],
    waitShape: '6m 単騎待ち',
    explanation: '3m の筋なので 6m は安全に見えるが…\n相手は 6m の単騎待ち！スジも 100% ではない！'
  },

  // ===== ADVANCED =====
  {
    id: 11,
    difficulty: 'advanced',
    title: '複合待ち（三面張）に注意！',
    description: '相手の待ちが 3 種類になることがある',
    opponentDiscards: ['9m', '8s', '1z', '4z', '3z'],
    hand: [
      { tile: '1p',  safe: false, reason: '振り込み！2p-3p で 1p or 4p 待ち' },
      { tile: '4p',  safe: false, reason: '振り込み！2p-3p と 5p-6p の複合で 4p！' },
      { tile: '7p',  safe: false, reason: '振り込み！5p-6p で 4p or 7p 待ち' },
      { tile: '3m',  safe: true,  reason: '今回は安全' },
      { tile: '6s',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' },
      { tile: '2z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['1p', '4p', '7p'],
    waitShape: '2p-3p-4p-5p-6p の三面張（1p・4p・7p 待ち）',
    explanation: '相手は三面張！2p-3p-4p-5p-6p で\n1p・4p・7p すべてが待ち牌！'
  },
  {
    id: 12,
    difficulty: 'advanced',
    title: 'シャンポン（双碰）待ち',
    description: '2 種類の牌が同時に待ち牌になる！',
    opponentDiscards: ['8m', '3p', '7p', '6s', '1z'],
    hand: [
      { tile: '2m',  safe: false, reason: '振り込み！2m-2m のシャンポン片方' },
      { tile: '5p',  safe: false, reason: '振り込み！5p-5p のシャンポン片方' },
      { tile: '4m',  safe: true,  reason: '今回は安全' },
      { tile: '8p',  safe: true,  reason: '今回は安全' },
      { tile: '1s',  safe: true,  reason: '今回は安全' },
      { tile: '2z',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['2m', '5p'],
    waitShape: '2m-2m / 5p-5p のシャンポン待ち',
    explanation: 'シャンポン（双碰）は 2m・5p のどちらを\n振り込んでもアウト！両方危険。'
  },
  {
    id: 13,
    difficulty: 'advanced',
    title: 'カンチャン（間張）待ち',
    description: '間の牌を待つカンチャンは筋読みが効かない！',
    opponentDiscards: ['5m', '2p', '9s', '3z', '4z'],
    hand: [
      { tile: '7m',  safe: false, reason: '振り込み！6m-8m のカンチャン待ち' },
      { tile: '4p',  safe: false, reason: '振り込み！3p-5p のカンチャン待ち' },
      { tile: '1m',  safe: true,  reason: '今回は安全' },
      { tile: '3s',  safe: true,  reason: '今回は安全' },
      { tile: '2z',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' },
      { tile: '6z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['7m', '4p'],
    waitShape: '6m-8m のカンチャン + 3p-5p のカンチャン',
    explanation: 'カンチャンは間の牌が待ち。筋では読めない！\n7m（6m-8m）と 4p（3p-5p）が複合カンチャン待ち。'
  },
  {
    id: 14,
    difficulty: 'advanced',
    title: '⚠️ 裏スジの罠',
    description: '筋に見える牌でも危険な「裏筋」がある',
    opponentDiscards: ['2m', '5m', '8p', '4s', '1z'],
    hand: [
      { tile: '8m',  safe: false, reason: '振り込み！5m の筋に見えるが 7m-9m のカンチャン（8m）だった！', damage: 2 },
      { tile: '7p',  safe: false, reason: '振り込み！6p-8p のカンチャン（7p）待ち', damage: 2 },
      { tile: '4m',  safe: true,  reason: '今回は安全' },
      { tile: '2p',  safe: true,  reason: '今回は安全' },
      { tile: '3s',  safe: true,  reason: '今回は安全' },
      { tile: '2z',  safe: true,  reason: '今回は安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['8m', '7p'],
    waitShape: '7m-9m のカンチャン（8m）+ 6p-8p のカンチャン（7p）',
    explanation: '5m の筋なら 8m は安全そうだが…\n7m-9m のカンチャン！筋の裏が刺さることがある。'
  },
  {
    id: 15,
    difficulty: 'advanced',
    title: '三面張を読め！',
    description: '索子の連続形で三面張が形成されることがある',
    opponentDiscards: ['3m', '6m', '4p', '7p', '1z'],
    hand: [
      { tile: '2s',  safe: false, reason: '振り込み！三面張の一つ（3s-4s の端）' },
      { tile: '5s',  safe: false, reason: '振り込み！三面張の中心' },
      { tile: '8s',  safe: false, reason: '振り込み！三面張の一つ（6s-7s の端）' },
      { tile: '9m',  safe: true,  reason: '6m の筋で安全' },
      { tile: '1p',  safe: true,  reason: '4p の筋で安全' },
      { tile: '5z',  safe: true,  reason: '今回は安全' },
      { tile: '2z',  safe: true,  reason: '今回は安全' }
    ],
    waits: ['2s', '5s', '8s'],
    waitShape: '3s-4s-5s-6s-7s の三面張（2s・5s・8s 待ち）',
    explanation: '3s-4s-5s-6s-7s は三面張！\n2s・5s・8s すべて危険。9m と 1p は筋で安全。'
  }
];
