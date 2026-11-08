import Image from "next/image";
import { logoSrc } from "@/lib/links";

export function BioHeader() {
  return (
    <header className="relative flex flex-col items-center pb-7 pt-14 text-center sm:pt-16">
      {/* Decoração superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-20 rounded-full bg-primary"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-14 size-28 rounded-full border border-primary/25"
      />

      {/* Logo da Okamy */}
      <div className="relative z-10 flex w-full max-w-[320px] items-center justify-center">
        <Image
          src={logoSrc}
          alt="Okamy Sushi Bar"
          width={1840}
          height={855}
          priority
          sizes="(max-width: 640px) 80vw, 320px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Localização */}
      <div className="relative z-10 mt-5 flex items-center gap-3">
        <span className="h-px w-6 bg-foreground/25 sm:w-8" aria-hidden="true" />

        <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground sm:tracking-[0.28em]">
          Sushi Bar
          <span
            className="mx-2 inline-block size-1 -translate-y-0.5 rounded-full bg-primary align-middle"
            aria-hidden="true"
          />
          Poranga, CE
        </p>

        <span className="h-px w-6 bg-foreground/25 sm:w-8" aria-hidden="true" />
      </div>

      {/* Frase principal */}
      <h1 className="relative z-10 mt-3 max-w-xs text-balance font-serif text-2xl leading-snug text-foreground sm:text-[27px]">
        Seu próximo momento especial começa aqui.
      </h1>
    </header>
  );
}
