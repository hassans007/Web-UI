import CircularGallery from "../components/ui/CircularGallery";
import RollingGallery from "../components/ui/RollingGallery";
import Galaxy from "../components/ui/Galaxy";


export const TravelGallery = () => {
  return (
    <section
      id="travel-gallery"
      className="py-24 px-4 relative overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      {/* Softer but more visible Galaxy Background */}
      {/* <div className="absolute inset-0 z-0 opacity-85 blur-[0.7px]">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.7}
          glowIntensity={0.3}
          saturation={0.4}
          hueShift={150}
        />
      </div> */}

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-glow">Journey</span> Through My Adventures
          </h2>

          <h3 className="text-muted-foreground mb-12">
            Exploring and capturing places, and moments that rejuvenate me &lt;3
          </h3>
        </div>

        {/* Full-width Circular Gallery */}
        <div
          style={{
            height: "400px",
            position: "relative",
            width: "100vw",
          }}
        >
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
};