'use client';

import { useState, useEffect } from 'react';
import { Partner } from '@/lib/mockDev';
import { calculateRating, calculateStars, getImageUrl } from '@/lib/utils';
import { getStoredGclid } from '@/lib/cookies';
import { track } from '@vercel/analytics';

interface BrandCardProps {
  partner: Partner;
  order: number;
  isMobile: boolean;
}

function StarRow({ stars }: { stars: number }) {
  return (
    <div className='flex items-center gap-0.5'>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < Math.floor(stars)
              ? 'text-yellow-400'
              : i < stars
              ? 'text-yellow-400 opacity-50'
              : 'text-text/30'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function BrandCard({ partner, order, isMobile }: BrandCardProps) {
  const [linkUrl, setLinkUrl] = useState(partner.partnerUrl);
  const [imageError, setImageError] = useState(false);
  const [votes, setVotes] = useState(0);

  const rating = calculateRating(order);
  const stars = calculateStars(order);

  useEffect(() => {
    setVotes(Math.floor(Math.random() * 5000) + 1000);
    const gclid = getStoredGclid();
    if (gclid) setLinkUrl(`${partner.partnerUrl}${gclid}`);
  }, [partner.partnerUrl]);

  const logoPath = partner.partner?.logo || partner.logo;
  const imageUrl = getImageUrl(logoPath);
  const displayImageUrl = imageError ? '/placeholder.svg' : imageUrl;

  const handleClick = () => {
    const name = partner?.partner?.name || partner.name;
    track('partner_click', { partner_name: name });
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('partner_click', { partner_name: name });
    }
  };

  const logoBoxClass = (size: 'sm' | 'lg') =>
    `${size === 'lg' ? 'w-44 h-44' : 'w-44 h-28'} bg-background-light rounded-lg overflow-hidden border border-cta/20 flex items-center justify-center flex-shrink-0`;

  const renderLogo = (size: 'sm' | 'lg') => (
    <div className={logoBoxClass(size)}>
      <img
        src={displayImageUrl}
        alt={partner.name}
        className={`max-w-full max-h-full object-contain ${size === 'lg' ? 'p-4' : 'p-2'}`}
        onError={() => setImageError(true)}
      />
    </div>
  );

  if (isMobile) {
    return (
      <div className='bg-panel border border-cta/30 rounded-lg p-4 hover:border-cta transition-colors'>
        <div className='flex justify-between gap-4 mb-4'>
          {renderLogo('sm')}
          <div className='flex flex-col justify-center flex-shrink-0'>
            <div className='text-2xl font-bold text-cta mb-1'>{rating}</div>
            <StarRow stars={stars} />
            {votes > 0 && (
              <div className='text-xs text-text/60 mt-1'>{votes.toLocaleString()} votes</div>
            )}
          </div>
        </div>
        <div className='space-y-3'>
          <p className='text-sm text-text/90 font-medium'>{partner.bonusText}</p>
          <a
            href={linkUrl}
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleClick}
            className='flex items-center justify-center w-full px-4 py-3 bg-cta text-background rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-opacity'
          >
            Claim Bonus
          </a>
          <p className='text-xs text-text/50 text-center'>Min. deposit: £10 | T&Cs apply</p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-panel border border-cta/30 rounded-lg p-6 hover:border-cta transition-all hover:shadow-lg hover:shadow-cta/20'>
      <div className='flex items-center gap-6'>
        {renderLogo('lg')}
        <div className='flex-1'>
          <div className='mb-3 flex items-center gap-3'>
            <span className='text-2xl font-bold text-cta'>{rating}</span>
            <StarRow stars={stars} />
            {votes > 0 && (
              <span className='text-sm text-text/60'>({votes.toLocaleString()} votes)</span>
            )}
          </div>
          <p className='text-text/90 mb-4'>{partner.bonusText}</p>
          <a
            href={linkUrl}
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleClick}
            className='flex items-center justify-center w-full py-3 bg-cta text-background rounded-lg hover:opacity-90 transition-opacity font-bold text-base tracking-wide'
          >
            Claim Bonus
          </a>
        </div>
      </div>
    </div>
  );
}
