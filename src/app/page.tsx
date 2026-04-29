import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { ServicesGrid } from "@/components/services-grid";
import { AboutPreview } from "@/components/about-preview";
import { Atelier } from "@/components/atelier";
import { PortsOverview } from "@/components/ports-overview";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { ContactCTA } from "@/components/contact-cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesGrid />
      <AboutPreview />
      <Atelier />
      <PortsOverview />
      <Process />
      <WhyUs />
      <ContactCTA />
    </main>
  );
}
