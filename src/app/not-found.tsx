import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[70vh] grid place-items-center overflow-hidden hero-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
      />
      <div className="relative text-center px-5">
        <p className="label-mono text-yellow">Ressource introuvable</p>
        <h1
          className="font-display font-black leading-[0.92] tracking-[-0.025em] mt-6"
          style={{ fontSize: "clamp(6rem, 22vw, 18rem)" }}
        >
          404
        </h1>
        <p className="mt-6 max-w-md mx-auto text-white/75 leading-relaxed">
          La page demandée ne figure pas dans le catalogue. Retournez à
          l&apos;accueil ou contactez-nous pour une référence spécifique.
        </p>
        <Link href="/" className="btn-primary mt-10 inline-flex">
          Retour à l&apos;accueil
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  );
}
