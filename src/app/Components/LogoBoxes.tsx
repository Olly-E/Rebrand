import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const LogoBoxes = () => {
  const bentDivRef1 = useRef(null)
  const bentDivRef2 = useRef(null)
  const bentDivRef3 = useRef(null)
  const bentDivRef4 = useRef(null)
  const bentDivRef5 = useRef(null)
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          scrub: true,
          preventOverlaps: true,
          end: '+=1000',
        },
      })

      gsap.set(bentDivRef1.current, {
        translateX: '-190px',
        translateY: '-28px',
        rotate: '-12.05deg',
        borderRadius: '5px',
      })

      gsap.set(bentDivRef2.current, {
        translateX: '140px',
        translateY: '-19px',
        rotate: '12.34deg',
        borderRadius: '5px',
      })

      gsap.set(bentDivRef3.current, {
        translateX: '-50px',
        rotate: '12.74deg',
        borderRadius: '5px',
      })

      gsap.set(bentDivRef4.current, {
        translateX: '-50px',
        rotate: '-8.54deg',
        translateY: '68px',
        borderRadius: '5px',
      })

      gsap.set(bentDivRef5.current, {
        translateX: '10px',
        rotate: '13.28deg',
        translateY: '90px',
        borderRadius: '5px',
      })

      tl.to(
        [
          bentDivRef1.current,
          bentDivRef2.current,
          bentDivRef3.current,
          bentDivRef4.current,
          bentDivRef5.current,
        ],
        {
          x: 0,
          y: 0,
          borderRadius: '0px',
          duration: 2,
          rotate: 0,
          ease: 'elastic.out(0.2, 0.5)',
        }
      )

      return () => tl.kill()
    },
    { scope: containerRef }
  )

  return (
    <section
      className="flex items-center justify-center h-full my-[300px]"
      ref={containerRef}
    >
      <div className="text-head-400 flex flex-col items-center">
        <div className="flex">
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] bg-green-state text-black-state"
            ref={bentDivRef1}
          >
            THE
          </h2>
          <h2
            className="xl:py-[28px] py-[14px] leading-[50px] xl:leading-[80px] xl:px-[27px] px-[13px] bg-yellow-state text-white-state"
            ref={bentDivRef2}
          >
            BRAND
          </h2>
        </div>
        <div className="flex">
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] bg-red-state text-white-state"
            ref={bentDivRef3}
          >
            FOR
          </h2>
          <h2 className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] bg-blue-state text-black-state ">
            YOUR
          </h2>
        </div>
        <div className="flex">
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] bg-white-state text-black-state"
            ref={bentDivRef4}
          >
            BRAND
          </h2>
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] bg-black-state border border-white-state text-white-state"
            ref={bentDivRef5}
          >
            !!!
          </h2>
        </div>
      </div>
    </section>
  )
}
