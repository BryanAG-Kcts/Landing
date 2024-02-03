'use client'
import { useEffect, useRef } from 'react'
import { Row } from './row'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export const Carrousel = (): JSX.Element => {
  const section = useRef<HTMLDivElement>(null)
  const technologies = [
    {
      name: 'Next',
      color: 'text-blue-900'
    },
    {
      name: 'tailwind',
      color: 'text-blue-500'
    },
    {
      name: 'react',
      color: 'text-blue-400'
    },
    {
      name: 'three',
      color: 'text-blue-300'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 'top bottom',
          end: 'bottom top',
          scrub: 4,
          pin: true
        }
      })

      tl.fromTo(
        '.rowAnimate',
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400)
          }
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400)
          },
          ease: 'power1.inOut'
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={section} className='text-3xl sm:text-8xl uppercase font-semibold overflow-hidden'>
      {
        technologies.map(({ color, name }) => <Row key={name} color={color} name={name} />)
      }
    </section>
  )
}
