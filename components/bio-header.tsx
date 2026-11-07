import Image from 'next/image'
import { logoSrc } from '@/lib/links'

// The source PNG has wide empty margins; this window frames just the symbol + wordmark
// (source px: x 70–600, y 190–520 of a 720×697 image).
const LOGO_CROP = { x: 70, y: 190, width: 530, height: 330, sourceWidth: 720, sourceHeight: 697 }

export function BioHeader() {
  const { x, y, width, height, sourceWidth, sourceHeight } = LOGO_CROP

  return (
    <header className="relative flex flex-col items-center pb-7 pt-8 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-14 size-24 rounded-full bg-primary"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-36 rounded-full border border-primary/30"
      />

      <div
        className="relative z-10 w-full max-w-72 overflow-hidden bg-background"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={logoSrc}
          alt="Okamy Sushi Bar"
          width={sourceWidth}
          height={sourceHeight}
          priority
          sizes="(max-width: 480px) 390px, 390px"
          className="absolute max-w-none mix-blend-multiply brightness-[1.12] contrast-[1.25]"
          style={{
            width: `${(sourceWidth / width) * 100}%`,
            left: `${(-x / width) * 100}%`,
            top: `${(-y / height) * 100}%`,
          }}
        />
      </div>

      <div className="relative z-10 mt-3 flex items-center gap-3">
        <span className="h-px w-8 bg-foreground/25" aria-hidden="true" />
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-foreground">
          Sushi Bar
          <span className="mx-2 inline-block size-1 -translate-y-0.5 rounded-full bg-primary align-middle" aria-hidden="true" />
          Poranga, CE
        </p>
        <span className="h-px w-8 bg-foreground/25" aria-hidden="true" />
      </div>

      <h1 className="relative z-10 mt-3 max-w-xs text-balance font-serif text-2xl leading-snug text-foreground">
        Seu próximo momento especial começa aqui.
      </h1>
    </header>
  )
}
