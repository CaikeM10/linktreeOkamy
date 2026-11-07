import { BioFooter } from '@/components/bio-footer'
import { BioHeader } from '@/components/bio-header'
import { LinkButton } from '@/components/link-button'
import { bioLinks } from '@/lib/links'

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-120 flex-col overflow-hidden px-6">
      <BioHeader />

      <nav aria-label="Links da Okamy Sushi Bar" className="pb-12">
        <ul className="flex flex-col gap-3">
          {bioLinks.map((link) => (
            <li key={link.label}>
              <LinkButton {...link} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <BioFooter />
      </div>
    </main>
  )
}
