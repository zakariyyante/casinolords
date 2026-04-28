"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-background border-b border-cta/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* 18+ Disclaimer */}
        <div className="flex items-center justify-center gap-3 py-2 border-b border-cta/10">
          <img src="/18plus.png" alt="18+" className="w-5 h-5 object-contain" />
          <span className="text-xs text-text/60">
            BeGambleAware.org | Gamble Responsibly
          </span>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            {/* Crown icon */}
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" fill="#0A0A0F" stroke="#F59E0B" strokeWidth="1.2"/>
              {/* Crown base */}
              <rect x="9" y="26" width="22" height="3.5" rx="1.2" fill="#F59E0B"/>
              {/* Crown spikes */}
              <polygon points="9,26 9,17 13.5,22" fill="#F59E0B"/>
              <polygon points="13.5,26 20,13 26.5,26" fill="#F59E0B"/>
              <polygon points="31,26 31,17 26.5,22" fill="#F59E0B"/>
              {/* Left chip jewel */}
              <circle cx="10.5" cy="17.5" r="2" fill="#0A0A0F" stroke="#F59E0B" strokeWidth="0.8"/>
              <circle cx="10.5" cy="17.5" r="0.8" fill="#F59E0B"/>
              {/* Centre 7 jewel */}
              <circle cx="20" cy="12.5" r="2.6" fill="#0A0A0F" stroke="#F59E0B" strokeWidth="0.9"/>
              <text x="20" y="13.8" textAnchor="middle" fontSize="3.8" fontWeight="900" fill="#F59E0B" fontFamily="Arial Black, Arial">7</text>
              {/* Right chip jewel */}
              <circle cx="29.5" cy="17.5" r="2" fill="#0A0A0F" stroke="#F59E0B" strokeWidth="0.8"/>
              <circle cx="29.5" cy="17.5" r="0.8" fill="#F59E0B"/>
              {/* Base dots */}
              <circle cx="14" cy="27.7" r="1" fill="#0A0A0F"/>
              <circle cx="20" cy="27.7" r="1" fill="#0A0A0F"/>
              <circle cx="26" cy="27.7" r="1" fill="#0A0A0F"/>
            </svg>
            {/* Wordmark */}
            <span className="text-xl font-black leading-none">
              <span className="text-cta">Casino</span>
              <span className="text-white">Lords</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-cta transition-colors ${
                  pathname === link.href ? "text-cta" : "text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger Menu */}
          <button
            className="md:hidden text-text hover:text-cta transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-cta/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`hover:text-cta transition-colors ${
                    pathname === link.href ? "text-cta" : "text-text"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
