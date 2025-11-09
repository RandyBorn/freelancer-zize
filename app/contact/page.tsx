import Link from "next/link";

export const metadata = { title: "Kontakt & Buchung" };

export default function ContactPage() {
  const email = "Randyborn677@yahoo.com";
  const subject = encodeURIComponent(
    "Projektanfrage: One-Pager / Bug-Buster / MVP"
  );
  const body = encodeURIComponent(
    [
      "Hallo Randy,",
      "",
      "ich interessiere mich für:",
      "- ( ) One-Pager – einseitige Website (schnell online)",
      "- ( ) Bug-Buster (4h) – Fehlerbehebung/kleine Verbesserungen",
      "- ( ) MVP – kleine erste App-Version (Login + CRUD)",
      "",
      "Kurz zum Projekt:",
      "Ziel / Branche:",
      "Deadline (Datum):",
      "Vorhandene Inhalte (Logo/Texte/Bilder/Farben):",
      "",
      "Viele Grüße",
    ].join("\n")
  );

  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="relative">
      {/* ONE Background Accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      <main className="px-4 sm:px-6 lg:px-8 py-16 max-w-3xl mx-auto text-white">
        {/* Mini-Nav zurück zur Startseite */}
        <nav className="mb-8">
          <Link
            href="/"
            className=" text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded"
          >
            ← Zur Startseite
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Kontakt & Buchung</h1>
          <p className="mt-3 text-white/80">
            Am schnellsten per E-Mail. Schick mir kurz Ziel, Deadline und was
            schon da ist – dann klären wir alles in einem 15-Minuten-Call.
          </p>
        </div>

        {/* Kontakt-CTA */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-white/60">
                E-Mail
              </p>
              <a
                href={mailto}
                className="text-lg font-semibold underline break-all"
              >
                {email}
              </a>
              <p className="mt-2 text-sm text-white/70">
                Antwortzeit:{" "}
                <span className="font-medium text-white">unter 24 h</span> ·
                Standort: Oberhausen (NRW)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="inline-flex items-center justify-center rounded-md bg-amber-300 px-4 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                E-Mail starten
              </a>
              <Link
                href="/projects" /* falls dein Pfad /projekte ist: einfach ändern */
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 py-2.5 font-semibold text-white hover:bg-white/15"
              >
                Projekte ansehen
              </Link>
              <Link
                href="/#angebote"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 py-2.5 font-semibold text-white hover:bg-white/15"
              >
                Pakete & Preise
              </Link>
            </div>
          </div>
        </div>

        {/* Erklärungen (simple) */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Was passt für dich?</h2>
          <ul className="mt-3 space-y-3">
            <li>
              <p className="font-medium">One-Pager</p>
              <p className="text-white/80 text-sm">
                Eine einseitige Website (Hero, Leistungen, Kontakt). Ideal für
                schnelle Sichtbarkeit – später erweiterbar.
              </p>
            </li>
            <li>
              <p className="font-medium">Bug-Buster (4h)</p>
              <p className="text-white/80 text-sm">
                Fehlerbehebung/kleine Verbesserungen an einer bestehenden Seite
                oder App (z. B. Layout-Bug, Formular, kleine Funktion).
              </p>
            </li>
            <li>
              <p className="font-medium">MVP (Minimum Viable Product)</p>
              <p className="text-white/80 text-sm">
                Eine kleine erste Version deiner Web-App, um deine Idee schnell
                zu testen (z. B. Login + CRUD) – zügig live, später ausbaubar.
              </p>
            </li>
          </ul>

          {/* Briefing-Hilfe */}
          <h3 className="mt-6 text-lg font-semibold">Deine kurze Nachricht</h3>
          <ul className="mt-2 list-disc pl-5 text-white/80 space-y-2">
            <li>Worum geht’s? (One-Pager / Bug-Buster / MVP)</li>
            <li>Deadline / gewünschter Go-Live</li>
            <li>Vorhandene Inhalte: Logo, Texte, Bilder, Farben</li>
            <li>Beispiele, die dir gefallen (optional)</li>
          </ul>
          <p className="mt-4 text-sm text-white/70">
            Zahlungsmodell: 50 % vor Start, 50 % bei Übergabe (Kleinunternehmer
            nach § 19 UStG – keine USt.).
          </p>
        </div>
      </main>
    </div>
  );
}
