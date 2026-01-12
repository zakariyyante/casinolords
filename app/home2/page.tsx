import { headers } from "next/headers";
import { fetchGametypes, fetchPartners } from "@/lib/api";
import { isMobileDevice } from "@/lib/utils";
import Hero from "@/components/Hero";
import BrandList from "@/components/BrandList";
import LargeContentSection from "@/components/LargeContentSection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const gametypes = await fetchGametypes();
  const secondaryGametype = gametypes.find((g) => g.order === 2);
  
  return {
    title: secondaryGametype?.pageTitle || "BritWager - UK's Premier Betting Affiliate Platform",
    description: secondaryGametype?.headParagraph || "Discover the best UK betting brands with exclusive bonuses and offers",
  };
}

export default async function HomePage2() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = isMobileDevice(userAgent);

  const gametypes = await fetchGametypes();
  const secondaryGametype = gametypes.find((g) => g.order === 2) || gametypes[0];

  // Fetch partners
  const partners = await fetchPartners(secondaryGametype.id, isMobile);

  return (
    <>
      <Hero
        headText={secondaryGametype.headText}
        headParagraph={secondaryGametype.headParagraph}
        isMobile={isMobile}
      />
      <BrandList partners={partners} isMobile={isMobile} />
      <LargeContentSection />
      <FAQ />
    </>
  );
}
