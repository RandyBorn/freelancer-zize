"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white hover:opacity-90">
          Randy Born
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/projekte" className="text-white/80 hover:text-white">
            Projekte
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white">
            Kontakt
          </Link>
          <Link
            href="/pricing"
            className="hidden sm:inline text-white/80 hover:text-white"
          >
            Pakete
          </Link>
        </div>
      </nav>
    </header>
  );
}
