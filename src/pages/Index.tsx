import { Hero } from "@/components/Hero";
import { Speakers } from "@/components/Speakers";
import { Topics } from "@/components/Topics";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Speakers />
      <Topics />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
