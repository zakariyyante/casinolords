import { headers } from 'next/headers';
import { fetchGametypes, fetchPartners } from '@/lib/api';
import { isMobileDevice } from '@/lib/utils';
import Hero from '@/components/Hero';
import BrandList from '@/components/BrandList';
import LargeContentSection from '@/components/LargeContentSection';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "CasinoLords - Top UK Casino & Betting Sites",
    description:
      'Find the finest UK-licensed casinos and betting platforms with top bonuses and fast payouts',
  };
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { gclid?: string };
}) {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = isMobileDevice(userAgent);

  // Only check URL param — cookie is only used for appending to affiliate links
  const hasGclid = !!(searchParams.gclid);

  const gametypes = await fetchGametypes();
  const primaryGametype = gametypes.find((g) => g.order === 1) || gametypes[0];

  // mobile + gclid → try mobile brands first, fall back to desktop if none exist
  let partners;
  if (isMobile && hasGclid) {
    const mobilePartners = await fetchPartners(primaryGametype.id, true);
    partners = mobilePartners.length > 0
      ? mobilePartners
      : await fetchPartners(primaryGametype.id, false);
  } else {
    partners = await fetchPartners(primaryGametype.id, false);
  }

  return (
    <>
      <Hero
        headText={"CasinoLords - The UK's Leading Casino Guide"}
        headParagraph={
          'Explore the finest UK-licensed casinos and betting sites, handpicked for top bonuses and fast payouts'
        }
        isMobile={isMobile}
      />
      <BrandList partners={partners} isMobile={isMobile} />
      <LargeContentSection />
      <FAQ />
    </>
  );
}
