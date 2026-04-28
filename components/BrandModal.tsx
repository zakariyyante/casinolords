'use client';

import { useState, useEffect } from 'react';
import { Partner } from '@/lib/mockDev';
import BrandCard from './BrandCard';
import { getGclidFromUrl, getStoredGclid } from '@/lib/cookies';

interface BrandModalProps {
  extraPartners: Partner[];
  isMobile: boolean;
}

export default function BrandModal({ extraPartners, isMobile }: BrandModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only show on mobile with a gclid (URL param or stored cookie)
    const hasGclid = !!(getGclidFromUrl() || getStoredGclid());
    if (isMobile && hasGclid) {
      setShouldRender(true);
      setIsOpen(true);
    }
  }, [isMobile]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-end justify-center'
          onClick={() => setIsOpen(false)}
        >
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/70 backdrop-blur-sm' />

          {/* Bottom sheet */}
          <div
            className='relative z-10 w-full max-h-[88vh] bg-background-light border border-cta/20 rounded-t-2xl flex flex-col shadow-2xl shadow-black/60 animate-slide-up'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className='flex justify-center pt-3 pb-1 flex-shrink-0'>
              <div className='w-10 h-1 bg-cta/30 rounded-full' />
            </div>

            {/* Header */}
            <div className='flex items-center justify-between px-5 py-3 border-b border-cta/20 flex-shrink-0'>
              <div>
                <h2 className='text-lg font-bold text-cta'>More Casinos For You</h2>
                <p className='text-xs text-text/50 mt-0.5'>
                  {extraPartners.length} exclusive UKGC-licensed offers
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='w-8 h-8 flex items-center justify-center rounded-lg border border-cta/20 hover:border-cta text-text/60 hover:text-cta transition-colors text-xl leading-none'
                aria-label='Close'
              >
                ×
              </button>
            </div>

            {/* Scrollable list */}
            <div className='overflow-y-auto flex-1 p-4 space-y-4'>
              {extraPartners.map((partner, index) => (
                <BrandCard
                  key={partner.id}
                  partner={partner}
                  order={index + 4}
                  isMobile={true}
                />
              ))}
            </div>

            {/* Footer */}
            <div className='px-5 py-3 border-t border-cta/10 flex-shrink-0'>
              <p className='text-xs text-text/40 text-center'>
                18+ | Gamble Responsibly | BeGambleAware.org
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
