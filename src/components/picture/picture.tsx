'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

export const Picture = (): JSX.Element => {
  const section = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = section.current

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top 80%',
          end: '+=300'
        }
      })

      if (element != null) {
        tl.fromTo(element,
          {
            opacity: 0,
            scale: 3,
            y: 100
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: 'elastic.out(1, 0.2)',
            duration: 0.5
          })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section className='overflow-hidden'>
      <div className='flex flex-col gap-4 items-center' ref={section}>
        <h2 className='h2-name text-lg md:text-2xl text-green-400'>Bryan David Álvarez Galvis</h2>
        <picture className='max-w-xl'>
          <img className='kcts-image w-full h-full object-cover aspect-square rounded-xl' src='/me.webp' alt='Kactuswow :0' />
        </picture>
      </div>
    </section>
  )
}
