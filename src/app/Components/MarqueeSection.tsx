import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ContainerProps = {
  className: string
  color?: '#EC3C3C' | '#EFD05C' | '#51BA81' | '#3C83EC'
}

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  // const [allowHover, setAllowHover] = useState(false)

  //ToDo: make onHover animation only active during scrollTrigger animation

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
          // onEnter: () => {
          //   setAllowHover(true)
          // },
          // onLeave: () => {
          //   setAllowHover(false)
          // },
          // onEnterBack: () => {
          //   setAllowHover(true)
          // },
          // onLeaveBack: () => {
          //   setAllowHover(false)
          // },
        },
      })

      tl.fromTo(
        '.red-state',
        {
          xPercent: 90,
        },
        {
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
        }
      )

      tl.fromTo(
        '.yellow-state',
        {
          xPercent: -90,
        },
        {
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
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
          stagger: 3,
        }
      )

      tl.fromTo(
        '.green-state',
        {
          xPercent: -90,
        },
        {
          xPercent: 0,
          duration: 2,
          ease: 'easeOut',
          stagger: 4,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const onContainerHover = ({ className, color }: ContainerProps) => {
    gsap.to(className, {
      color: color,
      overwrite: 'auto',
    })
  }

  const onContainerLeave = ({ className }: ContainerProps) => {
    gsap.to(className, {
      color: '#030303',
    })
  }

  return (
    <div
      className="w-full flex flex-col mt-[200px] min-h-screen h-full"
      ref={containerRef}
    >
      <div
        className={`w-full h-[25%] bg-red-state ${'hover:bg-black-state'} whitespace-nowrap overflow-hidden flex hover-container flex-col justify-center pl-[2%] red-bg`}
        onMouseEnter={() => {
          onContainerHover({
            className: '.red-state',
            color: '#EC3C3C',
          })
        }}
        onMouseLeave={() =>
          onContainerLeave({
            className: '.red-state',
          })
        }
      >
        <h1 className={`text-[66px] text-center red-state`}>
          WE BELIEVE THAT EVERY BRAND
        </h1>
      </div>
      <div
        className={`w-full h-[25%] bg-yellow-state ${'hover:bg-black-state'} whitespace-nowrap overflow-hidden flex hover-container flex-col justify-center px-[2%] yellow-bg`}
        onMouseEnter={() => {
          onContainerHover({
            className: '.yellow-state',
            color: '#EFD05C',
          })
        }}
        onMouseLeave={() =>
          onContainerLeave({
            className: '.yellow-state',
          })
        }
      >
        <h2 className="text-[66px] text-center whitespace-nowrap yellow-state">
          IS A SUPERHERO WITH UNIQUE POWERS
        </h2>
      </div>
      <div
        className={`w-full h-[25%] bg-blue-state ${'hover:bg-black-state'} whitespace-nowrap overflow-hidden flex hover-container flex-col justify-center px-[2%] blue-bg`}
        onMouseEnter={() => {
          onContainerHover({
            className: '.blue-state',
            color: '#3C83EC',
          })
        }}
        onMouseLeave={() =>
          onContainerLeave({
            className: '.blue-state',
          })
        }
      >
        <h3 className="text-[66px] text-center blue-state">
          AND WITH GREAT & UNIQUE POWERS
        </h3>
      </div>
      <div
        className={`w-full h-[25%] bg-green-state ${'hover:bg-black-state'} whitespace-nowrap overflow-hidden flex hover-container flex-col justify-center px-[2%] green-bg`}
        onMouseEnter={() => {
          onContainerHover({
            className: '.green-state',
            color: '#51BA81',
          })
        }}
        onMouseLeave={() =>
          onContainerLeave({
            className: '.green-state',
          })
        }
      >
        <h4 className="text-[66px] text-center green-state">
          COMES EVEN BIGGER RESPONSIBILITIES
        </h4>
      </div>
    </div>
  )
}
