import pythonLogo from "../assets/python.png"
import cLogo from "../assets/c.png"
import vueLogo from "../assets/vue.png"
import sqlLogo from "../assets/mysql.png"
import gitLogo from "../assets/git.png"
import jsLogo from "../assets/javascript.png"
import phpLogo from "../assets/php.png"
import htmlLogo from "../assets/html.png"
import laravelLogo from "../assets/laravel.png"
import fastapiLogo from "../assets/fastapi.png"
import jsonLogo from "../assets/json.png"
import linuxLogo from "../assets/linux.png"

export const TechStack = () => {
    return (
        <section id="techstack" className="py-24 px-4 bg-background">
  <div className="container mx-auto max-w-5xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      A <span> <a className="text-glow">Tech Stack</a></span> for Innovation
    </h2>

        <h3 className="text-muted-foreground mb-6">Turning vision into digital reality, from first glimpse to final build.a time.</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 back ">
      {[
        { name: "Python",        description: "AI/ML & Scripting",     src: pythonLogo },
        { name: "C / C++",       description: "Systems & Embedded",     src: cLogo },
        { name: "JavaScript",    description: "Frontend & Node.js",     src: jsLogo },
        { name: "PHP",           description: "Server-Side Web",        src: phpLogo },
        { name: "HTML",          description: "Markup & Semantics",     src: htmlLogo },
        { name: "Laravel",       description: "PHP Backend Framework",  src: laravelLogo },
        { name: "Vue",           description: "Frontend Framework",     src: vueLogo },
        { name: "MySQL",         description: "Relational Database",    src: sqlLogo },
        { name: "FastAPI",       description: "Python Web Framework",   src: fastapiLogo },
        { name: "Git",           description: "Version Control",        src: gitLogo },
        { name: "JSON",          description: "Data Interchange",       src: jsonLogo },
        { name: "Linux / Bash",  description: "OS & Scripting",         src: linuxLogo },

      ].map((tech, index) => (
        <div
          key={index}
          className="group relative bg-muted p-6 rounded-xl shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />
          <img src={tech.src} alt={tech.name} className="h-12 mx-auto mb-2" />
          <p className="text-sm font-medium text-foreground mb-1">{tech.name}</p>
          <p className="text-xs font-medium text-muted-foreground">{tech.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    )
}