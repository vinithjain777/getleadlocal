import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Industries } from "@/components/industries";
import { Services } from "@/components/services";
import { SystemFlow } from "@/components/system-flow";
import { Process } from "@/components/process";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Industries />
      <Services />
      <SystemFlow />
      <Process />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
