import { Award } from "lucide-react";

export const Achievements = () => {
  return (
    <section className="rounded-2xl border p-6 shadow-sm">
      <div className="flex flex-col items-center text-center mb-4">
        <Award size={35} className="text-primary" />
        <h3 className="mt-2 text-xl font-semibold">Achievements</h3>
      </div>

      <div className="relative mt-2">
        {/* timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <ul className="space-y-5">
          <li className="relative pl-12">
            <span className="absolute left-2 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <Award className="h-3.5 w-3.5 text-primary" />
            </span>
            <div className="rounded-lg border bg-card/50 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-foreground">University of Huddersfield</p>
                <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">2023</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Ranked in top 20 students in Year 1 Computer Science.
              </p>
            </div>
          </li>

          <li className="relative pl-12">
            <span className="absolute left-2 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <Award className="h-3.5 w-3.5 text-primary" />
            </span>
            <div className="rounded-lg border bg-card/50 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-foreground">Lahore Grammar School — Grammarfest</p>
                <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">2022</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Director of IT — creative design & website making.
              </p>
            </div>
          </li>

          <li className="relative pl-12">
            <span className="absolute left-2 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <Award className="h-3.5 w-3.5 text-primary" />
            </span>
            <div className="rounded-lg border bg-card/50 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-foreground">LGS — Vice Captain</p>
                <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">2020–2022</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Teamwork, critical thinking, and leadership.
              </p>
            </div>
          </li>

          <li className="relative pl-12">
            <span className="absolute left-2 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <Award className="h-3.5 w-3.5 text-primary" />
            </span>
            <div className="rounded-lg border bg-card/50 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-foreground">LGS — Computer Representative</p>
                <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">2019–2020</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Problem solving, flexibility, troubleshooting.
              </p>
            </div>
          </li>

          <li className="relative pl-12">
            <span className="absolute left-2 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <Award className="h-3.5 w-3.5 text-primary" />
            </span>
            <div className="rounded-lg border bg-card/50 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-foreground">LGS MUN — Director of Logistics</p>
                <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">2019</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Time management, organisation, collaboration.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
