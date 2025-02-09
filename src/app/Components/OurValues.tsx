import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { OurValuesAnimation } from './OurValuesAnimation'
import { EyeMouseEffectAnimation } from './EyeMouseAnimation'

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
    <section className="relative container" ref={containerRef} id="about">
      <h5 className="text-center mt-6">OUR VALUES</h5>
      <h3 className="text-head-200 sm:text-head-300 text-center header sm:mt-auto mt-[50px]">
        ABOUT US
      </h3>
      <div className="mt-[140px] sm:mx-[10%] gap-10 flex items-center justify-between lg:flex-row flex-col">
        <div className="values-grid">
          {/* <OurValuesGrid /> */}
          <EyeMouseEffectAnimation />
          <OurValuesAnimation />
        </div>
        <div className="">
          <p className="sm:w-[500px] text-justify sm:text-[20px] uppercase leading-[189.675%] xl:w-[435px] values-text text-white/50">
            <span className="font-medium" style={{ color: 'white' }}>
              Rebrand — TheBrand ™{' '}
            </span>
            is a design agency that helps companies and brands bridge the gap
            between wow and everyday life. <br /> <br /> we take a holistic
            approach to branding, ensuring that every aspect of your brand
            reflects it’s identity and resonates with your target audience
          </p>
        </div>
      </div>
    </section>
  )
}
