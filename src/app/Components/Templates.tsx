import React, { useEffect, useRef } from 'react'
import { Button } from './Elements/Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Templates = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({})

      const sections = gsap.utils.toArray('.horizontal-scroll-container')

      tl.to(sections, {
        xPercent: -57 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          scrub: 1,
          end: '+=3000',
        },
      })

      return () => tl.kill()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="h-screen" ref={containerRef}>
      <h3 className="text-[230px] text-center text-white-state leading-[180px] pt-[10px]">
        TEMPLATES
      </h3>
      <div className="mt-[50px] ml-[5%]">
        <p className="w-[293px]">
          We create and sell ready-made portfolio designs for designers,
          developers and other tech enthusiasts
        </p>
        <Button className="mt-8 w-[293px]">VIEW TEMPLATES</Button>
      </div>
      <div className="mt-[250px] mr-[5%] flex flex-col items-end">
        <p className="w-[293px]">
          We create and sell ready-made portfolio designs for designers,
          developers and other tech enthusiasts
        </p>
        <Button className="w-[293px]">VIEW TEMPLATES</Button>
      </div>
    </section>
  )
}
