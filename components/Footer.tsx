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
      icon: "🛡️",
    },
    {
      href: "https://www.gamcare.org.uk",
      label: "GamCare",
      icon: "💚",
    },
    {
      href: "https://www.gamblingtherapy.org",
      label: "Gambling Therapy",
      icon: "🤝",
    },
    {
      href: "https://www.gamblersanonymous.org.uk",
      label: "Gamblers Anonymous",
      icon: "📞",
    },
  ];

  return (
    <footer className="bg-background border-t border-cta/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* 18+ Disclaimer */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 rounded-lg border border-cta/30">
            <span className="text-2xl font-bold">18+</span>
            <span className="text-sm">
              You must be 18 or over to use this service. Please play responsibly.
            </span>
          </div>
        </div>

        {/* Regulatory Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {regulatoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-panel rounded-lg border border-cta/20 hover:border-cta transition-colors text-sm"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Responsible Gaming Disclaimer */}
        <div className="text-center mb-6 text-sm text-text/80 max-w-3xl mx-auto">
          <p className="mb-2">
            <strong>Responsible Gaming:</strong> Entertainment can be addictive.
            Please play responsibly. If you need help,
            seek support immediately from the organizations listed above.
          </p>
          <p>
            All platforms featured on this site are licensed by the UK
            Gambling Commission. We are an independent affiliate website and are
            not responsible for the content or services of third-party platforms.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/" className="text-text hover:text-cta transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="text-text hover:text-cta transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-text hover:text-cta transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/terms"
            className="text-text hover:text-cta transition-colors"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-text hover:text-cta transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-text/60 border-t border-cta/10 pt-6">
          <p>
            © {currentYear} BritWager.org | Last updated: {currentMonth}{" "}
            {currentYear}
          </p>
          <p className="mt-2">
            This website is operated by an independent affiliate. All
            platforms are licensed by the UK Gambling Commission.
          </p>
        </div>
      </div>
    </footer>
  );
}
