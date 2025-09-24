import RollingGallery from "../components/ui/RollingGallery";


export const CreativeSpace = () => {
  return (
    <section
      id="travel-gallery"
      className="px-4 relative overflow-hidden"
      style={{ minHeight: "50vh" }}
    >

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-glow">Glimpse</span> Into My Creative Side
        </h2>

        <h3 className="text-muted-foreground mb-12">
            Showcasing a collection of logos and illustrations I've crafted over the years as a personal passion :)
        </h3>
        </div>

        <RollingGallery autoplay={true} pauseOnHover={true} />

      </div>
    </section>
  );
};