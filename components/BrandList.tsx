import { Partner } from '@/lib/mockDev';
import BrandCard from './BrandCard';
import BrandModal from './BrandModal';

interface BrandListProps {
  partners: Partner[];         // desktop brands — always shown
  mobilePartners: Partner[];   // mobile brands — shown in modal on mobile + gclid only
  isMobile: boolean;
}

export default function BrandList({ partners, mobilePartners, isMobile }: BrandListProps) {
  if (partners.length === 0) {
    return (
      <section className='container mx-auto px-4 py-8'>
        <p className='text-center text-text/60'>No partners available at the moment.</p>
      </section>
    );
  }

  const sorted = [...partners].sort((a, b) => a.order - b.order);
  // Always show top 3 desktop brands in the main list
  const featured = sorted.slice(0, 3);

  return (
    <section className='container mx-auto px-4 py-8'>
      <div className={`flex flex-col gap-4 ${isMobile ? 'max-w-md mx-auto' : 'max-w-5xl mx-auto'}`}>
        {featured.map((partner, index) => (
          <BrandCard
            key={partner.id}
            partner={partner}
            order={index + 1}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Modal only shows on mobile + gclid, with mobile-specific brands */}
      {mobilePartners.length > 0 && (
        <div className={isMobile ? 'max-w-md mx-auto' : 'max-w-5xl mx-auto'}>
          <BrandModal extraPartners={mobilePartners} isMobile={isMobile} />
        </div>
      )}
    </section>
  );
}
