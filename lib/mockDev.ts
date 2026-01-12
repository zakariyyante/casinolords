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
    headText: "Welcome to BritWager - Your Premier UK Betting Destination",
    headParagraph:
      "Discover the finest selection of UK-licensed betting brands. Compare exclusive bonuses, secure payment methods, and trusted operators all in one place.",
    pageTitle: "BritWager - UK's Premier Betting Affiliate Platform",
  },
  {
    id: 2,
    order: 2,
    headText: "Top UK Betting Brands - Exclusive Offers & Bonuses",
    headParagraph:
      "Find the best betting sites with exclusive welcome bonuses, fast withdrawals, and premium gaming experiences tailored for UK players.",
    pageTitle: "Top UK Betting Brands - Exclusive Offers | BritWager",
  },
];

export const mockPartners: Partner[] = [
  {
    id: 1,
    name: "Premium Bet UK",
    logo: "premium-bet-logo.png",
    bonusText: "Get up to £100 Welcome Bonus + 50 Free Spins",
    paymentMethods: [
      { id: 1, name: "Visa" },
      { id: 2, name: "Mastercard" },
      { id: 3, name: "PayPal" },
      { id: 4, name: "Skrill" },
    ],
    highlights: [
      { id: 1, text: "UK Gambling Commission Licensed" },
      { id: 2, text: "Same-Day Withdrawals" },
    ],
    partnerUrl: "https://example-betting-site.com?ref=",
    isMobile: false,
    partner: {
      name: "Premium Bet UK",
      logo: "premium-bet-logo.png",
    },
  },
];
