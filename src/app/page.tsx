import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { CapabilitiesGrid } from "@/components/capabilities-grid";
import { Atelier } from "@/components/atelier";
import { Sectors } from "@/components/sectors";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { ContactCTA } from "@/components/contact-cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <CapabilitiesGrid />
      <Atelier />
      <Sectors />
      <Process />
      <WhyUs />
      <ContactCTA />
    </main>
  );
}
