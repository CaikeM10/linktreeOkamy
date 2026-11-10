import { instagramUrl } from "@/lib/links";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />

      <circle cx="12" cy="12" r="4" />

      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function BioFooter() {
  return (
    <footer className="flex flex-col items-center gap-4 pb-12 pt-3 text-center">
      {/* Divisor decorativo */}
      <div className="flex w-full items-center gap-4" aria-hidden="true">
        <span className="h-px flex-1 bg-foreground/15" />

        <span className="size-2 rounded-full bg-primary" />

        <span className="h-px flex-1 bg-foreground/15" />
      </div>

      {/* Instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Okamy Sushi Bar (abre em nova aba)"
        className="flex size-12 items-center justify-center rounded-full border border-foreground text-foreground transition-[background-color,border-color,color,transform] duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-safe:active:scale-95 motion-reduce:transition-none"
      >
        <InstagramIcon className="size-5" />
      </a>

      {/* Frase institucional */}
      <p className="max-w-64 text-pretty font-serif text-lg leading-snug text-foreground">
        Sabor, qualidade e uma experiência para lembrar.
      </p>

      {/* Assinatura da marca */}
      <p className="text-xs font-medium uppercase tracking-[0.24em]">
        <span className="text-black italic">Okamy</span>{" "}
        <span className="text-primary italic">Sushi Bar</span>
      </p>
      <br />
      {/* Crédito do desenvolvedor */}
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        Desenvolvimento por{" "}
        <a
          href="https://www.caikemarinho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors duration-300 hover:text-red-400 focus-visible:text-red-400"
        >
          Caike Marinho
        </a>
      </p>
    </footer>
  );
}
