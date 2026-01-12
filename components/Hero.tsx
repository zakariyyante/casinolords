interface HeroProps {
  headText: string;
  headParagraph: string;
  isMobile: boolean;
}

export default function Hero({ headText, headParagraph, isMobile }: HeroProps) {
  const badges = [
    "🛡️ Certified & Protected",
    "⚡ Same-Day Withdrawals",
    "📄 Minimal Documentation",
    "👁️ Privacy-First Gaming",
  ];

  if (isMobile) {
    return (
      <section className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-cta mb-3">{headText}</h1>
        <p className="text-sm text-text/80 mb-4">{headParagraph}</p>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3 py-1.5 bg-panel border border-cta/30 rounded-full text-xs whitespace-nowrap"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-cta mb-6">{headText}</h1>
        <p className="text-xl text-text/90 mb-8 max-w-2xl mx-auto">
          {headParagraph}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-panel border border-cta/30 rounded-lg text-sm"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
