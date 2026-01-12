import { Partner } from "@/lib/mockDev";
import BrandCard from "./BrandCard";

interface BrandListProps {
  partners: Partner[];
  isMobile: boolean;
}

export default function BrandList({ partners, isMobile }: BrandListProps) {
  if (partners.length === 0) {
    return (
      <section className="container mx-auto px-4 py-8">
        <p className="text-center text-text/60">
          No betting partners available at the moment.
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-cta mb-8 text-center">
        Top UK Betting Brands
      </h2>
      <div
        className={`flex flex-col gap-4 ${
          isMobile ? "max-w-md mx-auto" : "max-w-5xl mx-auto"
        }`}
      >
        {partners.map((partner, index) => (
          <BrandCard
            key={partner.id}
            partner={partner}
            order={index + 1}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}
