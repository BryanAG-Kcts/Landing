'use client'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const LettersBoing = (): JSX.Element => {
  const h1Hero = useRef<HTMLHeadingElement>(null)
  const heroName = 'Kactus'
  const splitHeroName = heroName.split('')

  const subName = 'WOW'
  const splitSubName = subName.split('')

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.fromTo('.animate-letter-h1',
        {
          x: -100,
          opacity: 0,
          rotate: -10
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,

          ease: 'elastic.out(1,0.3)',
          duration: 1.2,
          transformOrigin: 'left top',
          stagger: { each: 0.1, from: 'random' }
        })

      tl.fromTo('.animate-letter-p', {
        x: 100,
        opacity: 0,
        rotate: 10,
        y: -100
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        y: 0,
        ease: 'elastic.out(1, 0.3)',
        duration: 1.5,
        transformOrigin: 'bottom bottom',
        stagger: { each: 0.1, from: 'random' }
      }, '-= 1.2')

      tl.fromTo('.animate-h2',
        {
          opacity: 0,
          scale: 1.5,
          y: 100
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'elastic.out(1, 0.3)',
          duration: 0.5,
          delay: 0.5
        }, '-=1.2')
    }, h1Hero)

    return () => context.revert()
  }, [])

  return (
    <article ref={h1Hero} className='overflow-hidden text-center md:text-left justify-center flex flex-col select-none flex-1 px-4 items-center'>
      <div>
        <div className='font-extrabold items-center flex-wrap w-full'>
          <h1 className='flex text-[clamp(1rem,12vmin,20rem)] lg:text-[clamp(1rem,15vmin,20rem)] justify-center md:justify-start'>
            {
           splitHeroName.map((letter, index) => <span className='animate-letter-h1' key={`${index} ${letter}`}>{letter}</span>)
          }
          </h1>
          <p className='flex text-[clamp(1rem,10vmin,20rem)] md:text-[clamp(1rem,12vmin,20rem)] text-green-300 justify-center md:justify-start'>
            {
            splitSubName.map((letter, index) => <span className='animate-letter-p' key={`${index} ${letter}`}>{letter}</span>)
          }
          </p>
        </div>
        <h2 className='animate-h2 text-[clamp(1rem,4vmin,20rem)] text-amber-300 md:text-start w-full'>Front end Developer</h2>
      </div>
    </article>
  )
}
