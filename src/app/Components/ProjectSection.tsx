import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from './Elements/Button'

gsap.registerPlugin(ScrollTrigger)

export const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({})

      const sections = gsap.utils.toArray('.horizontal-scroll-container')

      tl.to(sections, {
        xPercent: -57 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
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

  const PROJECT_CONTENT_DATA = [
    {
      name: 'CARTIZN',
      category: 'BRANDING/WEB DESIGN/DEVELOPMENT',
      img: '/assets/home/project1.png',
    },
    {
      name: 'DETAIL DIVE',
      category: 'BRANDING/WEB DESIGN',
      img: '/assets/home/project2.png',
    },
    {
      name: 'FUTURE FORGE LABS',
      category: 'BRAND LOGO CONCEPT',
      img: '/assets/home/project3.png',
    },
    {
      name: 'THELLY’S DELIGHT',
      category: 'BRANDING',
      img: '/assets/home/project4.png',
    },
    {
      name: 'CARTIZN',
      category: 'BRANDING/WEB DESIGN/DEVELOPMENT',
      img: '/assets/home/project1.png',
    },
    {
      name: 'DETAIL DIVE',
      category: 'BRANDING/WEB DESIGN',
      img: '/assets/home/project2.png',
    },
    {
      name: 'FUTURE FORGE LABS',
      category: 'BRAND LOGO CONCEPT',
      img: '/assets/home/project3.png',
    },
    {
      name: 'THELLY’S DELIGHT',
      category: 'BRANDING',
      img: '/assets/home/project4.png',
    },
  ]

  return (
    <section
      className="relative pt-[200px] w-full overflow-hidden"
      ref={containerRef}
    >
      <div>
        <p className="mt-14 text-center text-[16px] font-bold">OUR CLIENTS</p>
        <h4
          className="mt-14 text-center block mx-auto w-[768px] text-[64px] font-bold"
          data-animation="header"
        >
          BRANDS WE&apos;VE WORKED WITH
        </h4>
        <Button className="w-[244px] h-[59.69px] mx-auto">
          LET&apos;S CONNECT
        </Button>
      </div>
      <div>
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[25vw]" />
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[50vw]" />
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[75vw]" />
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[100vw]" />
      </div>
      <div className="text-head-300">
        <div className="flex gap-10 h-screen w-full" ref={triggerRef}>
          <div className="flex relative z-10 mt-32">
            {PROJECT_CONTENT_DATA.map((data, index) => {
              return (
                <div
                  className={clsx(
                    'horizontal-scroll-container w-[25vw] px-[35px]',
                    index % 2 !== 0 && 'translate-y-[50%]'
                  )}
                  key={data.name}
                >
                  <img src={data.img} alt="project-img" />
                  <div className="flex justify-between">
                    <p className="text-base w-[160px]">{data.name}</p>
                    <p className="text-base w-[160px] text-right">
                      {data.category}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
