import { headers } from 'next/headers';
import { fetchGametypes, fetchPartners } from '@/lib/api';
import { isMobileDevice } from '@/lib/utils';
import BrandCard from '@/components/BrandCard';

export default async function HomePage2() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = isMobileDevice(userAgent);

  const gametypes = await fetchGametypes();
  const primaryGametype = gametypes.find((g) => g.order === 1) || gametypes[0];

  // Fetch partners - ALWAYS fetch mobile brands (isMobile: true)
  const partners = await fetchPartners(primaryGametype.id, true);

  return (
    <div className='relative overflow-hidden bg-slate-950'>
      {/* Minimal Hero Section */}
      <section className='relative py-12'>
        {/* Subtle background gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-violet-950/30'></div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center space-y-6'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400'>
                Premium
              </span>{' '}
              <span className='text-white'>UK Betting Sites</span>
            </h1>

            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
              Compare trusted operators with exclusive bonuses and instant
              withdrawals
            </p>

            {/* Trust Badges */}
            <div className='flex flex-wrap justify-center gap-3 pt-4'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 border border-purple-500/30 rounded-full'>
                <span className='text-purple-400 text-sm font-medium'>
                  🛡️ UKGC Licensed
                </span>
              </div>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 border border-purple-500/30 rounded-full'>
                <span className='text-purple-400 text-sm font-medium'>
                  ⚡ Fast Payouts
                </span>
              </div>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 border border-purple-500/30 rounded-full'>
                <span className='text-purple-400 text-sm font-medium'>
                  🔒 Secure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Brands Section - No Title */}
      <section id='brands' className='py-8 bg-slate-950'>
        <div className='container mx-auto px-4'>
          {partners.length === 0 ? (
            <div className='text-center py-20'>
              <div className='text-6xl mb-4'>🔍</div>
              <p className='text-gray-500 text-lg'>
                Loading premium operators...
              </p>
            </div>
          ) : (
            <div className='max-w-5xl mx-auto space-y-6'>
              {partners.map((partner, index) => (
                <div key={partner.id} className='mb-6'>
                  <BrandCard
                    partner={partner}
                    isMobile={isMobile}
                    order={index + 1}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
