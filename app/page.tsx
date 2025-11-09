"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Nav from "./components/Nav";

export default function HomePage() {
  const fullText =
    "Willkommen auf meiner Seite! Ich bin Randy Born, Frontend‑Entwickler aus Oberhausen (NRW). Ich entwickle performante Websites und kleine MVPs mit JavaScript/TypeScript, React und Next.js sauber, mobil‑optimiert und schnell online. Erfahrung mit Auth & CRUD, REST‑APIs (Node.js/Express), MongoDB, Tailwind CSS und Deployments auf Vercel. Schau dir meine Skills und Projekte an und wenn es passt, bringen wir deine Idee in wenigen Tagen live.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplayedText(fullText);
      setIsDone(true);
      return;
    }

    let index = 0;
    const speed = 35;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

  const tools = useMemo(
    () => [
      {
        title: "TypeScript",
        body: "Typsicheres JavaScript für robuste Frontends.",
      },
      {
        title: "Next.js",
        body: "SSG/SSR, App Router, schnelle Deploys auf Vercel.",
      },
      {
        title: "Tailwind",
        body: "Designsystem im Code – schnell & konsistent.",
      },
    ],
    []
  );

  return (
    <div className="relative">
      {/* Background Accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-72  bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-[1.1]">
            Hallo zusammen! Ich bin Randy Born 👋
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed min-h-[6rem] whitespace-pre-wrap">
            {displayedText}
            <span
              className={`ml-0.5 ${isDone ? "opacity-0" : "animate-blink"}`}
              aria-hidden
            >
              |
            </span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="#angebote"
              className="inline-flex items-center justify-center rounded-md bg-amber-300 px-5 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Pakete ansehen
            </Link>

            <Link
              href="/projekte"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Zu den Projekten"
            >
              Projekte
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* Technologien & Tools */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-50">
            Technologien & Tools
          </h2>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <li key={t.title} className="list-none">
                <div className="h-full bg-white/10 border border-white/10 rounded-xl p-6 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:-translate-y-[2px]">
                  <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Pricing />
      <CTA />

      {/* Footer */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16 mb-14">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mt-4 text-sm text-white/60">
            © {new Date().getFullYear()} Randy Born · Next.js & TypeScript ·{" "}
            <a href="/impressum" className="underline">
              Impressum
            </a>{" "}
            ·{" "}
            <a href="/datenschutz" className="underline">
              Datenschutz
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
