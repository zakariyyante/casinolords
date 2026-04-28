export interface PaymentMethod {
  id: number;
  name: string;
  icon?: string;
}

export interface Highlight {
  id: number;
  text: string;
  icon?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  bonusText: string;
  paymentMethods: PaymentMethod[];
  highlights: Highlight[];
  partnerUrl: string;
  isMobile: boolean;
  order: number;
  partner?: {
    name: string;
    logo: string;
  };
}

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
    headText: "Welcome to CasinoLords - Your Ultimate UK Casino Guide",
    headParagraph:
      "Explore the finest UK-licensed casinos and betting sites. Compare exclusive bonuses, payment options, and trusted operators all in one place.",
    pageTitle: "CasinoLords - Top UK Casino & Betting Sites",
  },
  {
    id: 2,
    order: 2,
    headText: "Top UK Casinos & Betting Sites - Exclusive Offers",
    headParagraph:
      "Discover top-rated sites with exclusive welcome bonuses, fast withdrawals, and premium experiences built for UK players.",
    pageTitle: "Top UK Casinos & Betting Sites | CasinoLords",
  },
];

export const mockPartners: Partner[] = [
  {
    id: 1,
    name: "Karamba",
    logo: "/karamba.svg",
    bonusText: "100% Welcome Bonus up to £200 + 100 Free Spins",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Mastercard" },
      { id: 3, name: "PayPal" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Same-Day Withdrawals" },
      { id: 3, text: "Live Casino" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 1,
    partner: { name: "Karamba", logo: "/karamba.svg" },
  },
  {
    id: 2,
    name: "Barz Casino",
    logo: "/barz.webp",
    bonusText: "100 Wager-Free Spins + 100% match bonus up to £300",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Skrill" },
      { id: 3, name: "PayPal" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Wager-Free Spins" },
      { id: 3, text: "Instant Withdrawals" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 2,
    partner: { name: "Barz Casino", logo: "/barz.webp" },
  },
  {
    id: 3,
    name: "SpinLand",
    logo: "/spinland.png",
    bonusText: "Exclusive: £10 No Deposit + 150% match up to £300",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Mastercard" },
      { id: 3, name: "PayPal" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "No Deposit Bonus" },
      { id: 3, text: "Mobile Optimised" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 3,
    partner: { name: "SpinLand", logo: "/spinland.png" },
  },
  {
    id: 4,
    name: "VegasHero",
    logo: "/VegasHero.png",
    bonusText: "Get up to £500 + 200 Free Spins on your first deposit",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Skrill" },
      { id: 3, name: "Neteller" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Fast Payouts" },
      { id: 3, text: "500+ Slots" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 4,
    partner: { name: "VegasHero", logo: "/VegasHero.png" },
  },
  {
    id: 5,
    name: "BetNinja",
    logo: "/BetNinja.png",
    bonusText: "Bet £10 Get £30 in Free Bets for new customers",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "PayPal" },
      { id: 3, name: "Bank Transfer" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "In-Play Betting" },
      { id: 3, text: "Cash Out Feature" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 5,
    partner: { name: "BetNinja", logo: "/BetNinja.png" },
  },
  {
    id: 6,
    name: "SpinBoss",
    logo: "/spinboss.webp",
    bonusText: "Welcome Package: 200% up to £400 + 50 Free Spins",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Mastercard" },
      { id: 3, name: "Skrill" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "VIP Programme" },
      { id: 3, text: "24/7 Support" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 6,
    partner: { name: "SpinBoss", logo: "/spinboss.webp" },
  },
  {
    id: 7,
    name: "Golden Genie",
    logo: "/goldengenie.png",
    bonusText: "50 Free Spins No Deposit + 100% up to £250 on first deposit",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "PayPal" },
      { id: 3, name: "Neteller" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Free Spins Daily" },
      { id: 3, text: "Jackpot Slots" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 7,
    partner: { name: "Golden Genie", logo: "/goldengenie.png" },
  },
  {
    id: 8,
    name: "LuckyWave",
    logo: "/luckywave.svg",
    bonusText: "Claim £25 Free Bet + 125% Deposit Match up to £500",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Mastercard" },
      { id: 3, name: "PayPal" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Sports & Casino" },
      { id: 3, text: "Weekly Cashback" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: false,
    order: 8,
    partner: { name: "LuckyWave", logo: "/luckywave.svg" },
  },
  // Mobile partners
  {
    id: 101,
    name: "RollySpin",
    logo: "/RollySpin.svg",
    bonusText: "150% up to £300 + 75 Free Spins – mobile exclusive offer",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "PayPal" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Mobile First" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: true,
    order: 1,
    partner: { name: "RollySpin", logo: "/RollySpin.svg" },
  },
  {
    id: 102,
    name: "SpinFin",
    logo: "/spinfin.svg",
    bonusText: "Get £20 Free + 100% Bonus up to £200 on mobile",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Mastercard" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Fast Payouts" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: true,
    order: 2,
    partner: { name: "SpinFin", logo: "/spinfin.svg" },
  },
  {
    id: 103,
    name: "MogoBet",
    logo: "/mogobet.webp",
    bonusText: "Bet £5 Get £45 in free bets – new mobile customers only",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "PayPal" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Same-Day Withdrawals" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: true,
    order: 3,
    partner: { name: "MogoBet", logo: "/mogobet.webp" },
  },
  {
    id: 104,
    name: "LuckyTwice",
    logo: "/luckytwice.svg",
    bonusText: "Double your first deposit up to £250 + 50 Free Spins",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Skrill" },
    ],
    highlights: [
      { id: 1, text: "UKGC Licensed" },
      { id: 2, text: "Daily Promotions" },
    ],
    partnerUrl: "https://example-site.com?ref=",
    isMobile: true,
    order: 4,
    partner: { name: "LuckyTwice", logo: "/luckytwice.svg" },
  },
];
