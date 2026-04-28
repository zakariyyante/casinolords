import { headers, cookies } from 'next/headers';
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

  // Check gclid from URL param or stored cookie
  const gclidFromUrl = searchParams.gclid || '';
  const cookieStore = cookies();
  const gclidFromCookie = cookieStore.get('gclid')?.value || '';
  const hasGclid = !!(gclidFromUrl || gclidFromCookie);

  // mobile + gclid → mobile brands; everything else → desktop brands
  const showMobileBrands = isMobile && hasGclid;

  const gametypes = await fetchGametypes();
  const primaryGametype = gametypes.find((g) => g.order === 1) || gametypes[0];
  const partners = await fetchPartners(primaryGametype.id, showMobileBrands);

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
