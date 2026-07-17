import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Industries } from "@/components/industries";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Process } from "@/components/process";
import { MarketingTech } from "@/components/marketing-tech";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Industries />
      <Services />
      <Process />
      <WhyChooseUs />
      <MarketingTech />
      <FAQ />
      <FinalCTA />
    </>
  );
}
