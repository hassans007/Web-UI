import { ThemeToggle } from "../components/ThemeToggle";
import { CustomBackground } from "../components/CustomBackground";
import { AboutNav } from "../components/AboutNav";
import { AboutHero } from "../components/AboutHero";
import { TravelGallery } from "../components/TravelGallery";
import { CreativeSpace } from "../components/CreativeSpace";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AboutNav />
      <CustomBackground />
      <ThemeToggle />

      <main>
        <AboutHero />
        <TravelGallery />
        <CreativeSpace />
      </main>

      <Footer />
    </div>
  );
};