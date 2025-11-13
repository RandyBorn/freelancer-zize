// app/contact/page.tsx
import Link from "next/link";

export const metadata = { title: "Kontakt & Buchung" };

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Next 15+: searchParams ist ein Promise → auflösen
  const params = await searchParams;
  const successValue = params?.success;
  const success =
    (Array.isArray(successValue) ? successValue[0] : successValue) === "1";

  // ✅ Formsubmit-Endpoint mit deinem Token (aus der Aktivierungs-Mail)
  const FORMSUBMIT_ACTION =
    "https://formsubmit.co/a27463617d1626078784687e053c2685";

  // ✅ ABSOLUTER Redirect nach Erfolg → deine Vercel-URL
  const REDIRECT_URL = "https://freelancer-zize.vercel.app/contact?success=1";

  const email = "Randyborn677@yahoo.com";

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
            Schreib mir kurz Ziel, Deadline und was schon da ist dann klären wir
            alles in einem 15-Minuten-Call.
          </p>
        </div>

        {/* Erfolgsmeldung nach Submit (?success=1) */}
        {success && (
          <div className="mb-6 rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-200">
            ✅ Danke für deine Nachricht! Ich melde mich innerhalb von{" "}
            <b>24&nbsp;Stunden</b>.
          </div>
        )}

        {/* Kontakt-Box (Links + Formular) */}
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/7 p-6">
          {/* Direkt per Mail öffnen */}
          <div>
            <p className="text-sm uppercase tracking-wide text-white/60">
              Direkt per E-Mail
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  "Projektanfrage: One-Pager / Bug-Buster / MVP"
                )}`}
                className="inline-flex items-center justify-center rounded-md bg-amber-300 px-4 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400"
              >
                E-Mail senden
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  email
                )}&su=${encodeURIComponent(
                  "Projektanfrage: One-Pager / Bug-Buster / MVP"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 py-2.5 font-semibold text-white hover:bg-white/15"
              >
                In Gmail öffnen
              </a>
            </div>
            <p className="mt-2 text-sm text-white/70">
              Adresse: <span className="underline">{email}</span> · Antwortzeit:{" "}
              <span className="font-medium text-white">unter 24&nbsp;h</span>
            </p>
          </div>

          {/* Formular mit echtem "Senden" (Formsubmit) */}
          <form action={FORMSUBMIT_ACTION} method="POST" className="grid gap-4">
            {/* Formsubmit-Settings */}
            <input
              type="hidden"
              name="_subject"
              value="Neue Projektanfrage über freelancer-zize.vercel.app"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={REDIRECT_URL} />
            <input
              type="hidden"
              name="_autoresponse"
              value="Danke für deine Nachricht! Ich melde mich innerhalb von 24 Stunden. Randy"
            />
            {/* Reply-To auf Absender setzen */}
            <input type="hidden" name="_replyto" value="{{email}}" />
            {/* optional: Kopie an zweite Adresse */}
            {/* <input type="hidden" name="_cc" value="zweite.mail@beispiel.de" /> */}
            {/* Quelle/Tracking (optional) */}
            <input type="hidden" name="source" value="contact-page" />

            {/* Honeypot (Spam-Schutz) */}
            <input
              type="text"
              name="_honey"
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
            />

            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-amber-300"
                placeholder="Dein Name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/80">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-amber-300"
                placeholder="dein@mail.de"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="paket" className="text-sm text-white/80">
                Paket
              </label>
              <select
                id="paket"
                name="paket"
                className="w-full rounded-md border border-white bg-amber-50/10 px-3 py-2 text-blue-600 outline-none focus:border-amber-300"
                defaultValue="One-Pager (499 €)"
              >
                <option>One-Pager (499 €)</option>
                <option>Bug-Buster (199 € / 4h)</option>
                <option>MVP-Starter (1.290 €)</option>
                <option>Unentschieden / Sonstiges</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-white/80">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-amber-300"
                placeholder="Ziel, Deadline, Inhalte (Logo/Texte/Bilder/Farben)…"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-amber-300 px-5 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400"
            >
              Senden
            </button>

            <p className="text-xs text-white/60">
              Mit dem Senden akzeptierst du die Verarbeitung deiner Angaben zur
              Beantwortung der Anfrage. <span className="mx-1">·</span>
              <a href="/impressum" className="underline">
                Impressum
              </a>{" "}
              /{" "}
              <a href="/datenschutz" className="underline">
                Datenschutz
              </a>
            </p>
          </form>
        </div>

        {/* Erklärungen */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Was passt für dich?</h2>
          <ul className="mt-3 space-y-3">
            <li>
              <p className="font-medium">One-Pager</p>
              <p className="text-white/80 text-sm">
                Eine einseitige Website (Hero, Leistungen, Kontakt). Ideal für
                schnelle Sichtbarkeit später erweiterbar.
              </p>
            </li>
            <li>
              <p className="font-medium">Bug-Buster (4h)</p>
              <p className="text-white/80 text-sm">
                Fehlerbehebung/kleine Verbesserungen an einer bestehenden Seite
                oder App (z. B. Layout-Bug, Formular, kleine Funktion).
              </p>
            </li>
            <li>
              <p className="font-medium">MVP (Minimum Viable Product)</p>
              <p className="text-white/80 text-sm">
                Eine kleine erste Version deiner Web-App, um deine Idee schnell
                zu testen (z. B. Login + CRUD) – zügig live, später ausbaubar.
              </p>
            </li>
          </ul>

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
