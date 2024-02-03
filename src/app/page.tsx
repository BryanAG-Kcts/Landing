import { Carrousel } from '@/components/carrousel/carrousel'
import { Paragraphs } from '@/components/content/paragraphs'
import { LettersBoing } from '@/components/hero/lettersBoing'
import { Shapes } from '@/components/hero/shapes'
import { Picture } from '@/components/picture/picture'

export default function Home (): JSX.Element {
  return (
    <>
      <section className='md:flex'>
        <LettersBoing />
        <Shapes />
      </section>
      <Paragraphs />
      <Picture />
      <Carrousel />
    </>

  )
}
