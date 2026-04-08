import HeroGradientBlob from "@/components/blocks/HeroGradientBlob";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";

export default function AboutPage() {
  return (
    <main>
      <HeroGradientBlob />
      <FeaturesGrid />
      <FeaturesCards3D />
      <StatsCounter />
      <TestimonialsAnimated />
    </main>
  );
}
