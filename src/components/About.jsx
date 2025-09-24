import { GraduationCap, Handshake } from "lucide-react";
import { Achievements } from "../components/Achievements";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span>About Me</span>
        </h2>

        {/* Top row: Education (left), Achievements (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* EDUCATION — single box */}
          <section className="rounded-2xl border p-6 shadow-sm">
            <div className="flex flex-col items-center text-center mb-4">
              <GraduationCap size={35} className="text-primary" />
              <h3 className="mt-2 text-xl font-semibold">Education</h3>
            </div>

            {/* University of Huddersfield */}
            <div className="rounded-xl ">
              <header className="flex flex-col items-center text-center gap-1">
                <h4 className="text-2xl font-semibold">University of Huddersfield</h4>
                <p className="text-sm italic text-muted-foreground">Jan 2023 – Jul 2025</p>
                <p className="mt-1 text-muted-foreground">
                  BSc Computer Science with Artificial Intelligence
                </p>
              </header>

              <details className="mt-4 group">
                <summary className="cursor-pointer select-none text-sm font-medium text-primary hover:underline">
                  Core modules
                </summary>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Artificial Intelligence</p>
                    <p>Introduction to AI, Data-driven AI, Knowledge-based AI</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Programming & Development</p>
                    <p>
                      Advanced Web Programming, Distributed & Client-Server Systems, Data
                      Structures & Algorithms, Computing
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Mathematics & Logic</p>
                    <p>Computational Mathematics 1, Mathematics 1 & 2</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Cyber & Systems</p>
                    <p>Cybersecurity, Hardware & Networks</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Projects & Professional Practice</p>
                    <p>
                      Individual Project (AI-Integrated Art-Based Web App), Team Project (Hangman
                      Game), The Professional Engineer
                    </p>
                  </div>
                </div>
              </details>
            </div>

            {/* LGS */}
            <div className="mt-6 rounded-xl">
              <header className="flex flex-col items-center text-center gap-1">
                <h4 className="text-2xl font-semibold">Lahore Grammar School</h4>
                <p className="text-sm italic text-muted-foreground">2020 – 2022</p>
              </header>

              <details className="mt-4 group">
                <summary className="cursor-pointer select-none text-sm font-medium text-primary hover:underline">
                  Details
                </summary>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">A-Levels</p>
                    <p>Mathematics (C), Physics (C), Computer Science (D)</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GCSEs</p>
                    <p>
                      2 A*s, 5 As, 2 Bs (9 subjects) incl. Computer Science, Mathematics, Biology,
                      Chemistry, Physics
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          <Achievements />

          {/* VOLUNTEERING — bottom center, spans both columns */}
          <section className="lg:col-span-2 mx-auto max-w-2xl rounded-2xl border p-6 shadow-sm">
            <div className="flex flex-col items-center text-center mb-2">
              <Handshake size={35} className="text-primary" />
              <h3 className="mt-2 text-xl font-semibold">Volunteering & Leadership</h3>
              <p className="text-sm italic text-muted-foreground">
                International Counselling Centre — Sep 2022 to Dec 2022
              </p>
            </div>

            <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Guided students on university selection aligned to goals and academic strengths.</li>
              <li>Delivered personalised mock interviews to build confidence and communication.</li>
              <li>Provided targeted feedback to improve CVs and personal statements.</li>
            </ul>
          </section>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a
            href="/CV_Hassan_Shahid.pdf"
            download="CV_Hassan_Shahid.pdf"
            className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
