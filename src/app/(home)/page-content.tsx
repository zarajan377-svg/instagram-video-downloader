import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { Testimonials } from "./_components/testimonials";
import { FrequentlyAsked } from "./_components/frequently-asked";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

            {/* Whatsapp No: Section */}
      <+923296521799/>
              
      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FrequentlyAsked />
    </div>
  );
}
