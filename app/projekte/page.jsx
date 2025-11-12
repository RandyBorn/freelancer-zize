import Link from "next/link";

export const metadata = { title: "Projekte" };

const projects = [
  {
    title: "Polls Umfrage Tool – Next.js + TypeScript",
    href: "https://my-next-app-typescript-1nqk.vercel.app/",
    badge: "Neu",
    description:
      "Umfragen ohne DB: Server Actions, API-Route fürs Voting, strikte TS-Typen und Zod-Validierung.",
    stack: ["Next.js", "TypeScript", "Zod", "API Routes", "Server Actions"],
    cta: "Live ansehen",
  },
  {
    title: "Projekt Liefrik – Lieferando-Klon",
    href: "https://liefrik.vercel.app/",
    badge: "Abschlussprojekt",
    description:
      "E2E Essensbestell-Plattform: Restaurants anlegen, Speisekarten anzeigen, Warenkorb & Checkout, Benutzer-Auth (Rollen: Admin/User), Bestell- und Admin-Verwaltung.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT"],
    cta: "Live ansehen",
  },
  {
    title: "Schere, Stein, Papier – Mini-Game",
    href: "https://schere-stein-papier.vercel.app/",
    badge: "Mini-Game",
    description:
      "Kleines Browser-Game: Schere-Stein-Papier mit klarer UI und flüssigen Interaktionen in TypeScript.",
    stack: ["HTML", "TypeScript", "JavaScript", "CSS"],
    cta: "Jetzt spielen",
  },
  {
    title: "Globale Themen Projekt",
    href: "https://globale-themen.vercel.app/",
    description:
      "Moderne HTML/CSS-Seite über globale Herausforderungen (Umwelt, Bildung, Gesundheit) mit Kontaktformular.",
    stack: ["HTML", "CSS", "JavaScript"],
    cta: "Live ansehen",
  },
  {
    title: "Auto Next.js Projekt",
    href: "https://auto-nextjs-project-ebon.vercel.app/",
    description:
      "Responsives Next.js-Template mit TailwindCSS – optimiert für Performance, ideal als Produkt-/Showcase-Basis.",
    stack: ["Next.js", "TailwindCSS"],
    cta: "Live ansehen",
  },
  {
    title: "Jobportal Backend API",
    href: "https://backend-test-gbj6.onrender.com/",
    description:
      "REST-API (Node.js/Express/MongoDB). Unternehmen posten Jobs, Bewerbende bewerben sich.",
    stack: ["Node.js", "Express", "MongoDB", "REST"],
    cta: "API öffnen",
  },
  {
    title: "Fullstack Book Tracker",
    href: "https://fullstack-frontend-backend-book-tra.vercel.app/",
    description:
      "React-Frontend + Express-Backend mit Benutzer-Auth und Buchverwaltung. Responsiv und performant.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    cta: "Live ansehen",
  },
  {
    title: "Projekt GYM FIT",
    href: "https://projekt-bay-eight.vercel.app/",
    description:
      "Kreative One-Pager-Webapp mit klarem Layout und schnellen Ladezeiten – ideal für Fitness-Studios.",
    stack: ["HTML", "CSS"],
    cta: "Live ansehen",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative">
      {/* Background Accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-82 w-82 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-82 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      <main className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto text-white">
        {/* Mini-Nav zurück zur Startseite */}
        <nav className="mb-8">
          <Link href="/" className=" text-white/80 hover:text-white">
            ← Zur Startseite
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-center">Ausgewählte Projekte</h1>
        <p className="mt-2 text-center text-white/70">
          Live-Demos & Repos von One-Pager & Mini-Games bis zu Fullstack & APIs.
        </p>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <li key={p.title} className="list-none">
              <div className="h-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-5 text-white shadow-lg transition-all hover:bg-white/15 hover:-translate-y-[2px]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold leading-tight">
                    {p.title}
                  </h3>
                  {p.badge && (
                    <span className="shrink-0 rounded-full bg-amber-300 text-gray-900 text-xs font-semibold px-2 py-0.5">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-white/90 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] rounded border border-white/20 bg-white/5 px-2 py-1 text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center rounded-md bg-amber-300 px-3 py-1.5 text-sm font-semibold text-gray-900 shadow hover:bg-amber-400"
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
