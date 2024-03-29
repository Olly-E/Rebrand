import React, { useRef } from 'react'
import { OurValuesGrid } from './OurValuesGrid'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const OurValues = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        fastScrollEnd: true,
        start: 'top top',
        toggleActions: 'play none none reverse',
        preventOverlaps: true,
        scrub: true,
        pin: true,
      },
    })

    tl.fromTo(
      '.values-grid',
      {
        xPercent: 70,
        scale: 2,
      },
      {
        xPercent: 0,
        duration: 1,
        scale: 1,
      }
    )

    tl.fromTo(
      '.header',
      {
        yPercent: 105,
        opacity: 0,
        rotateX: 50,
        transformStyle: 'preserve-3d',
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        ease: 'easeOut',
        duration: 0.25,
        stagger: 3,
      }
    )

    tl.fromTo(
      '.values-text',
      {
        yPercent: 105,
        opacity: 0,
        rotateX: 50,
        transformStyle: 'preserve-3d',
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        ease: 'easeOut',
        duration: 0.4,
        stagger: 2,
      }
    )
  })

  return (
    <section className="relative container" ref={containerRef}>
      <h5 className="absolute top-8 left-10">ABOUT</h5>
      <h3 className="text-head-200 sm:text-head-300 text-center header sm:mt-auto mt-[50px]">OUR VALUES</h3>
      <div className="mt-[140px] sm:mx-[10%] gap-10 flex items-center justify-between lg:flex-row flex-col">
        <div className="values-grid">
          <OurValuesGrid />
        </div>
        <div className="flex gap-[51px] text-white-state font-[300]">
          <p
            className="sm:w-[500px] text-justify sm:text-[20px] uppercase leading-[189.675%] xl:w-[435px]  values-text"
            data-animation="paragraph"
          >
            Welcome to Rebrand — TheBrand ™ - Where brands find their rhythm,
            creativity takes flight, and ideas know how to HAVE A GOOD TIME.
            We&apos;re the AGENCY that fearlessly challenges THE norm and
            champions the beauty of simplicity. LEADING brands choose us because
            we MAINTAIN the brand language AND constantly PUSH THE boundaries.
          </p>
        </div>
      </div>
    </section>
  )
}
