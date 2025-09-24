import { ArrowDown } from "lucide-react";
import ProfileCard from "./PictureCard";
import avatar from "../assets/smol.png";
import Aurora from "../components/ui/Aurora";
import BlurText from "../components/ui/BlurText";
import ShinyText from "../components/ui/ShinyText";

export const AboutHero = () => {
  const handleAnimationComplete = () => {
    console.log("Intro animation completed!");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Aurora background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Foreground content */}
      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col items-center justify-center space-y-10">
        {/* Text and Button */}
        <div className="space-y-6 mt-32">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-snug">
            <BlurText
                text="Hi, Again!"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-6xl font-bold tracking-tight text-glow"
            />
            </h1>

            {/* Fun Subheading */}
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            <ShinyText 
                text="Let's do this a little differently" 
                speed={3}
                disabled={false} 
                className="font-medium"
            />
            </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 -mt-3 mb-1">
            <a href="#travel-gallery" className="cosmic-button animate-float">
              A sneak peek into my life
            </a>
          </div>
        </div>

        {/* Profile Card below text */}
        <div className="flex flex-col items-center justify-center scale-90 -mt-10 space-y-10">
          <ProfileCard
            name="Maaz Shahid"
            title="Curiosity & Discovery"
            handle=""
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />

          {/* Arrow Down */}
          <a href="#next-section" className="animate-bounce mt-6">
            <ArrowDown className="h-8 w-8 text-primary opacity-80 hover:opacity-100 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};