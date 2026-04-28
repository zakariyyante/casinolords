export interface Casino {
  id: number;
  name: string;
  logo: string;
  rating: number;
  votes: number;
  bonus: string;
  url: string;
  badge?: string;
  isMobile?: boolean;
  order?: number;
}

// Keep Partner as alias so api.ts stays compatible
export type Partner = Casino;

export interface Gametype {
  id: number;
  order: number;
  headText: string;
  headParagraph: string;
  pageTitle: string;
}

export const mockGametypes: Gametype[] = [
  {
    id: 1,
    order: 1,
    headText: "CasinoLords - The UK's Leading Casino Guide",
    headParagraph:
      "Explore the finest UK-licensed casinos and betting sites. Compare exclusive bonuses, payment options, and trusted operators all in one place.",
    pageTitle: "CasinoLords - Top UK Casino & Betting Sites",
  },
];

interface CasinoRawData {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
}

const topBadges = ["Best Bonus", "Top Pick", "Trending Now"];

const generateId = (name: string, index: number): number =>
  name.toLowerCase().replace(/\s+/g, '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + index;

// ─── ADD / EDIT YOUR BRANDS BELOW ────────────────────────────────────────────

const casinosRawData: CasinoRawData[] = [
  // ── DESKTOP brands (isMobile not set or false) ──────────────────────────
  {
    name: "BlueFox Casino",
    logo: "/BlueFox_Casino.max-600x340.webp",
    bonus: "WELCOME PACKAGE UP TO £1000 + 100 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1643&c=2712&s1=BlueFox-{AccountCode}&clickid=",
    votes: 4821,
  },
  {
    name: "MogoBet",
    logo: "/mogobet.webp",
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1641&c=2713&s1=MogoBet-{AccountCode}&clickid=",
    votes: 3654,
  },

  // ── MOBILE brands (shown only on mobile + gclid) ─────────────────────────
  // {
  //   name: "DaytonaSpin",
  //   logo: "/daytonaspin.svg",
  //   bonus: "255% UP TO £4500 + 255 FREE SPINS",
  //   url: "https://daytona.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=daytona",
  //   votes: 5872,
  //   isMobile: true,
  // },
  // {
  //   name: "Westace",
  //   logo: "/westace.webp",
  //   bonus: "300% UP TO €2000 + 150 FREE SPINS",
  //   url: "https://westace.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=westace",
  //   votes: 5872,
  //   isMobile: true,
  // },
  // {
  //   name: "Spinboss",
  //   logo: "/spinboss.webp",
  //   bonus: "400% up to 12750 GBP + 400 FREE SPINS",
  //   url: "https://spinboss.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=spinboss",
  //   votes: 5872,
  //   isMobile: true,
  // },
  // {
  //   name: "X3Bet",
  //   logo: "/x3bet.svg",
  //   bonus: "100% UP TO €600 + 200 FREE SPINS",
  //   url: "https://x3bet.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=x3bet",
  //   votes: 5872,
  //   isMobile: true,
  // },
  // {
  //   name: "OdinFortune",
  //   logo: "/odinfortune.png",
  //   bonus: "Up to €4,000 + 700 FREE SPINS",
  //   url: "https://odinfortune.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=odinfortune",
  //   votes: 5872,
  //   isMobile: true,
  // },
];

// ─────────────────────────────────────────────────────────────────────────────

export const mockPartners: Casino[] = casinosRawData.map((c, index) => {
  // Rating counts separately per mobile/desktop group
  const groupIndex = casinosRawData
    .filter(x => !!x.isMobile === !!c.isMobile)
    .findIndex(x => x.name === c.name);

  const rating = parseFloat((10 - groupIndex * 0.1).toFixed(1));

  return {
    id: generateId(c.name, index),
    name: c.name,
    logo: c.logo,
    rating,
    votes: c.votes,
    bonus: c.bonus,
    url: c.url,
    badge: groupIndex < 3 ? topBadges[groupIndex] : undefined,
    isMobile: c.isMobile ?? false,
    order: groupIndex + 1,
    // compat fields expected by api.ts / BrandCard
    bonusText: c.bonus,
    partnerUrl: c.url,
    paymentMethods: [],
    highlights: [],
    partner: { name: c.name, logo: c.logo },
  } as any;
});
