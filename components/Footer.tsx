import Link from "next/link";

interface FooterProps {
  currentYear: number;
  currentMonth: string;
}

export default function Footer({ currentYear, currentMonth }: FooterProps) {
  const regulatoryLinks = [
    {
      href: "https://www.begambleaware.org",
      label: "BeGambleAware",
      logo: "/gambleaware.png",
    },
    {
      href: "https://www.gamcare.org.uk",
      label: "GamCare",
      logo: "/gamcare.png",
    },
    {
      href: "https://www.gamstop.co.uk",
      label: "GamStop",
      logo: "/gamestop.png",
    },
    {
      href: "https://www.gamblingtherapy.org",
      label: "Gambling Therapy",
      logo: null,
    },
  ];

  return (
    <footer className="bg-background border-t border-cta/20 mt-16">
      <div className="container mx-auto px-4 py-8">

        {/* 18+ Disclaimer */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 px-5 py-3 bg-cta/10 rounded-xl border border-cta/30">
            <img src="/18plus.png" alt="18+" className="w-9 h-9 object-contain" />
            <span className="text-sm text-text/90">
              You must be 18 or older to use this service. Gamble responsibly.
            </span>
          </div>
        </div>

        {/* Regulatory Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          {regulatoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 px-4 py-2 bg-white/5 rounded-lg border border-cta/10 hover:border-cta/40 transition-colors"
            >
              {link.logo ? (
                <img src={link.logo} alt={link.label} className="max-h-9 w-auto object-contain" />
              ) : (
                <span className="text-sm text-text/70 hover:text-cta transition-colors">
                  {link.label}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Responsible Gambling Disclaimer */}
        <div className="text-center mb-6 text-sm text-text/70 max-w-3xl mx-auto">
          <p className="mb-2">
            <strong className="text-text/90">Responsible Gambling:</strong>{" "}
            Gambling can be addictive. Please set limits and gamble within your
            means. If you need assistance, contact the organisations above
            immediately.
          </p>
          <p>
            All operators showcased on this site hold licences from the UK
            Gambling Commission. CasinoLords is an independent affiliate and
            accepts no responsibility for the content or practices of
            third-party operators.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link href="/" className="text-text/70 hover:text-cta transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-text/70 hover:text-cta transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-text/70 hover:text-cta transition-colors">
            Contact Us
          </Link>
          <Link href="/terms" className="text-text/70 hover:text-cta transition-colors">
            Terms and Conditions
          </Link>
          <Link href="/privacy" className="text-text/70 hover:text-cta transition-colors">
            Privacy Policy
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-xs text-text/50 border-t border-cta/10 pt-6">
          <p>
            © {currentYear} CasinoLords.org | Last updated: {currentMonth}{" "}
            {currentYear}
          </p>
          <p className="mt-1">
            This site is run by an independent affiliate. All featured operators
            hold valid UK Gambling Commission licences.
          </p>
        </div>
      </div>
    </footer>
  );
}
