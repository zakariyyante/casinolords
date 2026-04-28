import { headers } from 'next/headers';
import { fetchGametypes, fetchPartners } from '@/lib/api';
import { isMobileDevice } from '@/lib/utils';
import Hero from '@/components/Hero';
import BrandList from '@/components/BrandList';
import LargeContentSection from '@/components/LargeContentSection';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const gametypes = await fetchGametypes();
  const primaryGametype = gametypes.find((g) => g.order === 1);

  return {
    title: "CasinoLords - Top UK Casino & Betting Sites",
    description:
      'Find the finest UK-licensed casinos and betting platforms with top bonuses and fast payouts',
  };
}

export default async function HomePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = isMobileDevice(userAgent);

  const gametypes = await fetchGametypes();
  const primaryGametype = gametypes.find((g) => g.order === 1) || gametypes[0];

  // Always fetch desktop brands for the main list
  const desktopPartners = await fetchPartners(primaryGametype.id, false);
  // Fetch mobile brands — shown in the modal only on mobile + gclid
  const mobilePartners = await fetchPartners(primaryGametype.id, true);

  return (
    <>
      <Hero
        headText={"CasinoLords - The UK's Leading Casino Guide"}
        headParagraph={
          'Explore the finest UK-licensed casinos and betting sites, handpicked for top bonuses and fast payouts'
        }
        isMobile={isMobile}
      />
      <BrandList
        partners={desktopPartners}
        mobilePartners={mobilePartners}
        isMobile={isMobile}
      />
      <LargeContentSection />
      <FAQ />
    </>
  );
}
