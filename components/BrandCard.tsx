"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Partner } from "@/lib/mockDev";
import { calculateRating, calculateStars, getImageUrl } from "@/lib/utils";
import { getStoredGclid } from "@/lib/cookies";

interface BrandCardProps {
  partner: Partner;
  order: number;
  isMobile: boolean;
}

export default function BrandCard({
  partner,
  order,
  isMobile,
}: BrandCardProps) {
  const [linkUrl, setLinkUrl] = useState(partner.partnerUrl);
  const [imageError, setImageError] = useState(false);
  const rating = calculateRating(order);
  const stars = calculateStars(order);
  const votes = Math.floor(Math.random() * 5000) + 1000;

  useEffect(() => {
    // Get stored gclid
    const gclid = getStoredGclid();
    
    // Append gclid to partner URL (only the value, not the parameter name)
    if (gclid) {
      setLinkUrl(`${partner.partnerUrl}${gclid}`);
    }
  }, [partner.partnerUrl]);

  const logoPath = partner.partner?.logo || partner.logo;
  const imageUrl = logoPath 
    ? `https://api.britwager.org/api/v1/files/partners/${logoPath}`
    : "/placeholder.svg";
  const displayImageUrl = imageError ? "/placeholder.svg" : imageUrl;

  if (isMobile) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-panel border border-cta/30 rounded-lg p-4 hover:border-cta transition-colors"
      >
        {/* Top Section - 2 columns */}
        <div className="flex justify-between gap-4 mb-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <div className="w-44 h-28 bg-background-light rounded-lg overflow-hidden border border-cta/20 flex items-center justify-center">
              {displayImageUrl.startsWith("http") ? (
                <img
                  src={displayImageUrl}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-2"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={displayImageUrl}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                    unoptimized
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: Rating, Stars, Votes */}
          <div className="flex flex-col justify-center flex-shrink-0">
            <div className="text-2xl font-bold text-cta mb-1">{rating}</div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(stars)
                      ? "text-yellow-400"
                      : i < stars
                      ? "text-yellow-400 opacity-50"
                      : "text-text/30"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-xs text-text/60">{votes} votes</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-3">
          <p className="text-sm text-text/90 font-medium">{partner.bonusText}</p>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-cta text-background rounded-lg hover:bg-cta/90 transition-colors font-semibold text-sm"
          >
            <span>🎁</span>
            <span>Claim Bonus</span>
          </a>
          <p className="text-xs text-text/60">Minimum deposit: £10</p>
        </div>
      </a>
    );
  }

  // Desktop Layout
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-panel border border-cta/30 rounded-lg p-6 hover:border-cta transition-all hover:shadow-lg hover:shadow-cta/20"
    >
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-44 h-44 bg-background-light rounded-lg overflow-hidden border border-cta/20 flex items-center justify-center">
            {displayImageUrl.startsWith("http") ? (
              <img
                src={displayImageUrl}
                alt={partner.name}
                className="max-w-full max-h-full object-contain p-4"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={displayImageUrl}
                  alt={partner.name}
                  fill
                  className="object-contain p-4"
                  unoptimized
                  onError={() => setImageError(true)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-cta">{rating}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(stars)
                        ? "text-yellow-400"
                        : i < stars
                        ? "text-yellow-400 opacity-50"
                        : "text-text/30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-text/60">({votes} votes)</span>
            </div>
          </div>

          <p className="text-text/90 mb-4">{partner.bonusText}</p>

          {/* Highlights */}
          {partner.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {partner.highlights.map((highlight) => (
                <span
                  key={highlight.id}
                  className="px-2 py-1 bg-cta/10 border border-cta/30 rounded text-xs text-cta"
                >
                  {highlight.text}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA - Right Side */}
        <div className="flex-shrink-0">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-background rounded-lg hover:bg-cta/90 transition-colors font-semibold whitespace-nowrap"
          >
            <span>⚡</span>
            <span>Visit Site & Claim Bonus</span>
          </a>
        </div>
      </div>
    </a>
  );
}
