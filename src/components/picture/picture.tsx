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

      if (element != null) {
        gsap.fromTo('.h2-name',
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
            duration: 0.5,
            scrollTrigger: {
              trigger: section.current,
              start: 'top 80%',
              end: '+=300'
            }
          })
      }

      window.addEventListener('mousemove', e => {
        const width = window.innerWidth
        const height = window.innerHeight

        const x = e.clientX / width - 0.55
        const y = e.clientY / height - 0.8

        gsap.to('.kcts-image',
          {
            rotateY: x * 50,
            rotateX: -y * 50
          })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={section} className=' flex flex-col gap-4 items-center'>
      <h2 className='h2-name text-lg md:text-2xl text-green-400'>Bryan David Álvarez Galvis</h2>
      <picture className='max-w-xl'>
        <img className='kcts-image w-full h-full object-cover aspect-square rounded-xl' src='/me.webp' alt='Kactuswow :0' />
      </picture>
    </section>
  )
}
