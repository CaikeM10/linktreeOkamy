import Image from "next/image";
import { logoSrc } from "@/lib/links";

const LOGO_CROP = {
  x: 70,
  y: 190,
  width: 530,
  height: 330,
  sourceWidth: 720,
  sourceHeight: 697,
};

export function BioHeader() {
  const { x, y, width, height, sourceWidth, sourceHeight } = LOGO_CROP;

  return (
    <header className="relative flex flex-col items-center pb-6 pt-5 text-center sm:pt-7">
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-20 rounded-full bg-primary"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-14 size-28 rounded-full border border-primary/25"
      />

      {/* Logo oficial */}
      <div
        className="relative z-10 w-full max-w-64 overflow-hidden bg-white sm:max-w-72"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={logoSrc}
          alt="Okamy Sushi Bar"
          width={sourceWidth}
          height={sourceHeight}
          priority
          sizes="(max-width: 639px) 360px, 392px"
          className="absolute max-w-none mix-blend-multiply brightness-[1.12] contrast-[1.25]"
          style={{
            width: `${(sourceWidth / width) * 100}%`,
            left: `${(-x / width) * 100}%`,
            top: `${(-y / height) * 100}%`,
          }}
        />
      </div>

      {/* Identificação e localização */}
      <div className="relative z-10 mt-3 flex items-center gap-3">
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

      {/* Mensagem principal */}
      <h1 className="relative z-10 mt-3 max-w-xs text-balance font-serif text-2xl leading-snug text-foreground sm:text-[27px]">
        Seu próximo momento especial começa aqui.
      </h1>
    </header>
  );
}
