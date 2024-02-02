import { LettersBoing } from '@/components/hero/lettersBoing'
import { Shapes } from '@/components/hero/shapes'

export default function Home (): JSX.Element {
  return (
    <main>
      <section className='md:flex'>
        <LettersBoing />
        <Shapes />
      </section>
    </main>
  )
}
