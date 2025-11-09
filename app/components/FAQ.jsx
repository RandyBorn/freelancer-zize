"use client";

export default function FAQ() {
  const items = [
    {
      q: "Wie lange dauert ein One‑Pager?",
      a: "In der Regel 5–7 Werktage ab Kickoff.",
    },
    {
      q: "Wie läuft die Zahlung?",
      a: "50 % vor Start, 50 % bei Übergabe. PayPal oder Stripe.",
    },
    {
      q: "Können Inhalte nachträglich ergänzt werden?",
      a: "Ja – kleine Updates sind möglich, größere Änderungen als Mini‑Angebot.",
    },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-50">FAQ</h2>
        <div className="mt-8 space-y-4">
          {items.map((it) => (
            <details
              key={it.q}
              className="rounded-xl border border-white/10 bg-white/10 p-4 text-white"
            >
              <summary className="cursor-pointer font-semibold">{it.q}</summary>
              <p className="mt-2 text-white/80 text-sm">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
