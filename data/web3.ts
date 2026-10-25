import type { LocalizedText } from '@/lib/i18n';

export type Web3Cost = 'free' | 'gas' | 'paid';
export type Web3Type = 'trading' | 'non-trading';

export type Web3Entry = {
  name: string;
  url: string;
  cost: Web3Cost;
  type: Web3Type;
  status: LocalizedText;
  note: LocalizedText;
  updated: string;
};

export const web3Entries: Web3Entry[] = [
  {
    name: 'Rialo',
    url: 'https://playground.rialo.io',
    cost: 'free',
    type: 'non-trading',
    status: { zh: 'devnet 进行中', en: 'Devnet in progress' },
    note: { zh: '种子轮 $20M，Pantera 领投', en: 'Seed round $20M, led by Pantera' },
    updated: '2026-10-25',
  },
  {
    name: 'Vearl',
    url: 'https://vearl.org',
    cost: 'free',
    type: 'non-trading',
    status: { zh: 'PoW 测试网第1期（10/23 开）', en: 'PoW testnet phase 1 (opened 10/23)' },
    note: { zh: '本期 0.7% 主网供应', en: 'This phase is 0.7% of mainnet supply' },
    updated: '2026-10-25',
  },
  {
    name: 'DogeOS',
    url: 'https://www.dogeos.com',
    cost: 'free',
    type: 'non-trading',
    status: { zh: '测试网任务进行中', en: 'Testnet tasks in progress' },
    note: { zh: 'Polychain 投资', en: 'Polychain investment' },
    updated: '2026-10-25',
  },
  {
    name: 'Orbinum',
    url: 'https://orbinum.network',
    cost: 'free',
    type: 'non-trading',
    status: { zh: '测试网已上线', en: 'Testnet is live' },
    note: { zh: '空投池 2000 万 ORB', en: 'Airdrop pool of 20 million ORB' },
    updated: '2026-10-25',
  },
  {
    name: 'TastyCo',
    url: 'https://tastyco.io/en/',
    cost: 'free',
    type: 'non-trading',
    status: { zh: '积分任务进行中', en: 'Points tasks in progress' },
    note: { zh: '官方写明 $TASTY 空投', en: 'The project states a $TASTY airdrop' },
    updated: '2026-10-25',
  },
  {
    name: 'Kalos',
    url: 'https://www.kalos.fun/',
    cost: 'free',
    type: 'non-trading',
    status: { zh: 'Elysium 测试网', en: 'Elysium testnet' },
    note: { zh: '匿名团队，高投机', en: 'Anonymous team, highly speculative' },
    updated: '2026-10-25',
  },
  {
    name: 'Raycash',
    url: 'https://www.raycash.xyz',
    cost: 'free',
    type: 'non-trading',
    status: { zh: '候补名单任务', en: 'Waitlist tasks' },
    note: { zh: 'Zama 隐私稳定币', en: 'Zama privacy stablecoin' },
    updated: '2026-10-25',
  },
  {
    name: 'Titan Exchange',
    url: 'https://titanx.cc',
    cost: 'free',
    type: 'trading',
    status: { zh: '激励测试网（10/1 起）', en: 'Incentivized testnet (since 10/1)' },
    note: { zh: 'Canton 链', en: 'Canton chain' },
    updated: '2026-10-25',
  },
  {
    name: 'MetaFlux',
    url: 'https://mtf.exchange',
    cost: 'free',
    type: 'trading',
    status: { zh: '测试网每周积分', en: 'Weekly testnet points' },
    note: { zh: 'TGE 目标 2027-03', en: 'TGE targeted for 2027-03' },
    updated: '2026-10-25',
  },
  {
    name: 'Polyester',
    url: 'https://polyester.com',
    cost: 'free',
    type: 'trading',
    status: { zh: '模拟交易', en: 'Paper trading' },
    note: { zh: '融资未公开', en: 'Funding not disclosed' },
    updated: '2026-10-25',
  },
  {
    name: 'Dow Protocol',
    url: 'https://dowprotocol.com',
    cost: 'gas',
    type: 'non-trading',
    status: { zh: 'Dow XP 任务', en: 'Dow XP tasks' },
    note: { zh: '种子轮 $10.5M；条款或限制部分地区', en: 'Seed round $10.5M; terms restrict some regions' },
    updated: '2026-10-25',
  },
  {
    name: 'Variational',
    url: 'https://variational.io',
    cost: 'paid',
    type: 'trading',
    status: { zh: '每周积分', en: 'Weekly points' },
    note: { zh: '$VAR 空投已确认，计划 Q4', en: '$VAR airdrop confirmed, planned for Q4' },
    updated: '2026-10-25',
  },
  {
    name: 'Extended',
    url: 'https://extended.exchange',
    cost: 'paid',
    type: 'trading',
    status: { zh: 'TGE 临近（11 月）', en: 'TGE approaching (November)' },
    note: { zh: '30% 给积分用户', en: '30% allocated to points users' },
    updated: '2026-10-25',
  },
  {
    name: 'RISEx',
    url: 'https://www.rise.trade',
    cost: 'paid',
    type: 'trading',
    status: { zh: 'Season 1', en: 'Season 1' },
    note: { zh: '需邀请码', en: 'Invite code required' },
    updated: '2026-10-25',
  },
  {
    name: 'N1',
    url: 'https://www.n1.xyz',
    cost: 'paid',
    type: 'trading',
    status: { zh: 'Season 1', en: 'Season 1' },
    note: { zh: '需邀请码，Founders Fund 投资', en: 'Invite code required; Founders Fund investment' },
    updated: '2026-10-25',
  },
];
