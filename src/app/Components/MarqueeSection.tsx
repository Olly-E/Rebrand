import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const MarqueeSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
        '.red-state',
        {
          xPercent: 90,
        },
        {
          //   xPercent: -20,
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
        }
      )

      tl.fromTo(
        '.yellow-state',
        {
          xPercent: 90,
        },
        {
          //   xPercent: -45,
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
          stagger: 2,
        }
      )

      tl.fromTo(
        '.blue-state',
        {
          xPercent: 90,
        },
        {
          //   xPercent: -35,
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
          stagger: 3,
        }
      )

      tl.fromTo(
        '.green-state',
        {
          xPercent: 90,
        },
        {
          //   xPercent: -45,
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
          stagger: 4,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="w-full flex flex-col mt-[200px] min-h-screen h-full"
      ref={containerRef}
    >
      <div className="w-full h-[25%] bg-red-state whitespace-nowrap overflow-hidden flex flex-col justify-center pl-[2%]">
        <h1 className="text-[66px] red-state">WE BELIEVE THAT EVERY BRAND</h1>
      </div>
      <div className="w-full h-[25%] bg-yellow-state whitespace-nowrap overflow-hidden flex flex-col justify-center px-[2%]">
        <h2 className="text-[66px] whitespace-nowrap yellow-state">
          IS A SUPERHERO WITH UNIQUE POWERS
        </h2>
      </div>
      <div className="w-full h-[25%] bg-blue-state whitespace-nowrap overflow-hidden flex flex-col justify-center px-[2%]">
        <h3 className="text-[66px] blue-state">
          AND WITH GREAT & UNIQUE POWERS
        </h3>
      </div>
      <div className="w-full h-[25%] bg-green-state whitespace-nowrap overflow-hidden flex flex-col justify-center px-[2%]">
        <h4 className="text-[66px] green-state">
          COMES EVEN BIGGER RESPONSIBILITIES
        </h4>
      </div>
    </div>
  )
}
