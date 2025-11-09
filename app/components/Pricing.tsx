"use client";
import Link from "next/link";
import { PAYMENT_LINKS } from "../../lib/payments"; // nimm relativ, falls @/ zickt

function Card(props: {
  title: string;
  price: string;
  href: string;
  ctaLabel: string;
  children: React.ReactNode;
}) {
  const { title, price, children, ctaLabel, href } = props;
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-6 text-white shadow-lg transition-all hover:bg-white/15 hover:-translate-y-0.5">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-3xl font-extrabold">{price}</p>
      <div className="mt-4 text-sm leading-relaxed text-white/90">
        {children}
      </div>
      <Link
        href={href}
        target="_blank"
        rel="noopener"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-amber-300 px-4 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      >
        {ctaLabel}
      </Link>
      <p className="mt-3 text-[13px] text-white/70">
        Kleinunternehmer nach § 19 UStG – keine USt. ausgewiesen.
      </p>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-16" id="angebote">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-50">
          Pakete & Festpreise
        </h2>
        <p className="mt-2 text-center text-white/70">
          50 % vor Start, 50 % bei Übergabe. Lieferzeit je nach Paket.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="One-Pager Basic"
            price="499 €"
            href={PAYMENT_LINKS.onePagerDeposit}
            ctaLabel="Anzahlung 50 % (249,50 €)"
          >
            Landingpage (Hero, Leistungen, Kontakt), mobil-optimiert,
            SEO-Basics, Deployment auf Vercel. 1 Korrekturrunde. Lieferzeit 5–7
            Werktage.
          </Card>

          <Card
            title="Bug-Buster"
            price="199 €"
            href={PAYMENT_LINKS.bugBusterFull}
            ctaLabel="Jetzt buchen (199 €)"
          >
            4 Stunden Fehlerbehebung/kleine Features. Kurzreport + 1
            Nachbesserung. Ideal für schnelle Hilfe.
          </Card>

          <Card
            title="MVP-Starter"
            price="1.290 €"
            href={PAYMENT_LINKS.mvpDeposit}
            ctaLabel="Anzahlung 50 % (645 €)"
          >
            Next.js-App mit Login, 1 Datenmodell (CRUD), einfaches Admin-UI,
            Deployment. 2 Korrekturrunden. Lieferzeit 7–10 Werktage.
          </Card>
        </div>
      </div>
    </section>
  );
}
