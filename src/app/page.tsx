import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductTour } from "@/components/ProductTour";
import { KnowledgeBuild } from "@/components/KnowledgeBuild";
import { WhyUs } from "@/components/WhyUs";
import { Personalizer } from "@/components/Personalizer";
import { Pricing } from "@/components/Pricing";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <IndustryMarquee />
        <Problem />
        <HowItWorks />
        <ProductTour />
        <KnowledgeBuild />
        <WhyUs />
        <Personalizer />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
