"use client";
import Link from "next/link";
import { CONTACT_EMAIL, PAYMENT_LINKS } from "@/lib/payments";

export default function CTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-amber-50">
          Bereit zu starten?
        </h3>
        <p className="mt-2 text-white/70">
          1) Kurz schreiben • 2) Festpreis bestätigen • 3) Kickoff (15 Min)
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`mailto:${CONTACT_EMAIL}?subject=Anfrage%20One-Pager`}
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Anfrage starten (E-Mail)
          </Link>
          <Link
            href={PAYMENT_LINKS.onePagerDeposit}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-md bg-amber-300 px-5 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            One-Pager Anzahlung
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/60">
          50 % vor Start, 50 % bei Übergabe. Storno bis 48 h vor Start: volle
          Erstattung.
        </p>
      </div>
    </section>
  );
}
