import { Github } from "lucide-react";
import net from "../assets/netSim.jpg";
import web from "../assets/webSPA.png";
import Orb from "../components/ui/Orb";

const projects = [
  {
    id: 1,
    img: web, // replace with a real screenshot if you have one
    descriptor: "AI & Web",
    title: "AI-Integrated Art-Based Web App",
    description:
      "Educational platform using Laravel, Vue.js, and FastAPI to analyse and critique artworks with CNN & BLIP, plus real-time chat and gamified tools.",
    tags: ["Laravel", "Vue", "FastAPI", "CNN", "BLIP"],
    source: "https://github.com/hassans007/Art-Based-Web-Application-With-Integrated-AI",
  },
  {
    id: 2,
    img: web, // optional: use a different image
    descriptor: "Web",
    title: "RecipeBook Website",
    description:
      "Online platform to view, search, and manage recipes with Laravel MVC, JavaScript, and pagination for smooth navigation.",
    tags: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"],
    source:
      "https://github.com/hassans007/RecipeBook_Website",
  },
  {
    id: 3,
    img: net, // swap for a gameplay screenshot if available
    descriptor: "Python",
    title: "Hangman Game",
    description:
      "Interactive game featuring difficulty levels, categories, and animated pineapple-slicing visuals.",
    tags: ["Python", "Pygame"],
    source: "https://github.com/hassans007/Hangman-Pineapple",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Orb background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={280} // purple-pink glow
          forceHoverState={false}
        />
      </div>

      {/* Foreground content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center relative z-20 
            text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          Featured Projects
        </h2>

        <p
          className="text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-20 
            text-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          >
          <p className="text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-20 text-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            AI web platform, Laravel/Vue products, and Python & Java work—featured projects below.
          </p>

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300 hover:backdrop-blur-md hover:bg-white/5 hover:border hover:border-white/60 hover:ring-1 hover:ring-white/80 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-2 right-2 bg-primary/60 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {project.descriptor}
                </span>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="mt-2 flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button inline-flex items-center justify-center px-4 py-2"
                    >
                      Visit Website
                    </a>
                  )}

                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      See Here
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/hassans007"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Github />
          </a>
        </div>
      </div>
    </section>
  );
};
