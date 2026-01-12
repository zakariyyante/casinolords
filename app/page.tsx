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
    title: "BritWager - UK's Premier Affiliate Platform",
    description:
      'Discover the best UK platforms with exclusive bonuses and offers',
  };
}

export default async function HomePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = isMobileDevice(userAgent);

  // Fetch gametypes and use order === 1 for hero
  const gametypes = await fetchGametypes();
  const primaryGametype = gametypes.find((g) => g.order === 1) || gametypes[0];

  // Fetch partners
  const partners = await fetchPartners(primaryGametype.id, isMobile);

  return (
    <>
      <Hero
        headText={"BritWager - UK's Premier Gaming Platform"}
        headParagraph={
          'Discover the best UK platforms with exclusive bonuses and offers'
        }
        isMobile={isMobile}
      />
      <BrandList partners={partners} isMobile={isMobile} />
      <LargeContentSection />
      <FAQ />
    </>
  );
}
