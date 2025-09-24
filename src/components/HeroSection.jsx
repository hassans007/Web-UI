import { ArrowDown } from "lucide-react";
import ProfileCard from "./ProfileCard";
import avatar from "../assets/avatar.png";
import Aurora from "../components/ui/Aurora";
import BlurText from "../components/ui/BlurText";
import ShinyText from "../components/ui/ShinyText";

export const HeroSection = () => {
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
              text="Hi, I'm Hassan"
              delay={150}
              animateBy="words"   // animate word by word
              direction="top"     // comes from top
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl md:text-6xl font-bold tracking-tight text-glow"
            />
          </h1>

          <p className="text-md md:text-lg max-w-2xl mx-auto">
            <ShinyText 
              text="Full Stack Developer" 
              speed={3}
              disabled={false} 
              className="text-muted-foreground"
            />
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 -mt-3 mb-1">
            <a href="#projects" className="cosmic-button animate-float">
              View My Work
            </a>
          </div>
        </div>

        {/* Profile Card below text */}
        <div className="flex justify-center scale-90 -mt-10">
          <ProfileCard
            name="Hassan Shahid"
            title="BSc Computer Science With Artificial Intelligence"
            handle=""
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </section>
  );
};