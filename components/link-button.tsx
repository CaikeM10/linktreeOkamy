import { ArrowUpRight } from 'lucide-react'
import type { BioLink } from '@/lib/links'
import { cn } from '@/lib/utils'

export function LinkButton({ label, href, icon: Icon, variant }: BioLink) {
  const isPrimary = variant === 'primary'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex min-h-14 items-center gap-4 rounded-xl border px-5 py-4 transition-[background-color,color,transform,box-shadow] duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background',
        'active:scale-[0.985]',
        isPrimary
          ? 'border-primary bg-primary text-primary-foreground hover:bg-primary-hover'
          : 'border-foreground bg-background text-foreground hover:bg-foreground hover:text-background',
      )}
    >
      <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      <span className="flex-1 text-left text-base font-medium tracking-tight">{label}</span>
      <ArrowUpRight
        className={cn(
          'size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
          isPrimary ? 'opacity-90' : 'opacity-60 group-hover:opacity-100',
        )}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  )
}
