import { Hero } from "@/components/Hero";
import { DestinationGrid } from "@/components/DestinationGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { Tiers } from "@/components/Tiers";
import { Testimonials } from "@/components/Testimonials";
import { ConciergeForm } from "@/components/ConciergeForm";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationGrid />
      <ExperienceList />
      <Tiers />
      <Testimonials />
      <ConciergeForm />
    </>
  );
}
