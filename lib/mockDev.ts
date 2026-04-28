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
    headText: "CasinoLords - The UK's Leading Casino Guide",
    headParagraph:
      "Explore the finest UK-licensed casinos and betting sites. Compare exclusive bonuses, payment options, and trusted operators all in one place.",
    pageTitle: "CasinoLords - Top UK Casino & Betting Sites",
  },
];

// Add your brands here
export const mockPartners: Partner[] = [];
