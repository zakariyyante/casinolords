"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
        <div className="text-center py-2 text-xs text-cta border-b border-cta/10">
          <span className="font-semibold">18+</span> | BeGambleAware.org | Play
          Responsibly
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-cta">
            BritWager
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
