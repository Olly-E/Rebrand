import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const LogoBoxes = () => {
  const bentDivRef1 = React.useRef(null)
  const bentDivRef2 = React.useRef(null)
  const bentDivRef3 = React.useRef(null)
  const bentDivRef4 = React.useRef(null)
  const bentDivRef5 = React.useRef(null)
  const containerRef = React.useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          scrub: true,
          preventOverlaps: true,
        },
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
          duration: 2,
          rotate: 0,
          ease: 'elastic.out(0.2, 0.5)',
        }
      )

      return () => tl.kill()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="flex items-center justify-center h-full my-[300px]"
      ref={containerRef}
    >
      <div className="text-head-400 flex flex-col items-center">
        <div className="flex">
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] translate-y-[-28px] translate-x-[-120px] xl:translate-x-[-190px] rotate-[-12.05deg] bg-green-state text-black-state"
            ref={bentDivRef1}
          >
            THE
          </h2>
          <h2
            className="xl:py-[28px] py-[14px] leading-[50px] xl:leading-[80px] xl:px-[27px] px-[13px] rotate-[12.34deg] bg-yellow-state translate-y-[-19px] translate-x-[70px] xl:translate-x-[140px] text-white-state"
            ref={bentDivRef2}
          >
            BRAND
          </h2>
        </div>
        <div className="flex">
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] rotate-[12.79deg] translate-x-[-50px] bg-red-state text-white-state"
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
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] rotate-[-8.54deg] translate-x-[-50px] translate-y-[68px] translate bg-white-state text-black-state"
            ref={bentDivRef4}
          >
            BRAND
          </h2>
          <h2
            className="xl:py-[28px] py-[14px] xl:px-[27px] px-[13px] leading-[50px] xl:leading-[80px] translate-y-[90px] translate-x-[10px] xl:translate-x-[60px] rotate-[13.28deg] bg-black-state border border-white-state text-white-state"
            ref={bentDivRef5}
          >
            !!!
          </h2>
        </div>
      </div>
    </section>
  )
}
