import clsx from 'clsx'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from './Elements/Button'

gsap.registerPlugin(ScrollTrigger)

export const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({})

      const sections = gsap.utils.toArray('.horizontal-scroll-container')

      tl.to(sections, {
        xPercent: -57 * (sections.length + 3),
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
    },
    { scope: containerRef }
  )

  const PROJECT_CONTENT_DATA = [
    {
      name: 'CARTIZN',
      tags: ['brand logo', 'brand identity', 'portfolio'],
      img: '/assets/home/project1.png',
    },
    {
      name: 'JAM BAR',
      tags: ['brand logo ', 'brand identity'],
      img: '/assets/home/project2.png',
    },
    {
      name: 'IT - THE BRAND',
      tags: ['brand logo ', 'brand identity'],
      img: '/assets/home/project3.png',
    },
    {
      name: 'POPIN',
      tags: ['branding', 'web and project design'],
      img: '/assets/home/project4.png',
    },
    {
      name: 'YADSALE',
      tags: ['brand logo'],
      img: '/assets/home/project5.png',
    },
    {
      name: 'IFÉ KULTURE',
      tags: ['brand logo', 'brand identity'],
      img: '/assets/home/project6.png',
    },
    {
      name: 'THELLY’S DELIGHT',
      tags: ['WEBSITE RE - DESIGN X DEVELOPMENT'],
      img: '/assets/home/project7.png',
    },
    {
      name: 'BUK - MARIS',
      tags: ['RE - BRANDING', 'Package design'],
      img: '/assets/home/project8.png',
    },
    {
      name: 'GEMS - CONTINENTAL',
      tags: ['brand logo'],
      img: '/assets/home/project9.png',
    },
    {
      name: 'THELLY’S DELIGHT',
      tags: ['brand logo', 'brand identity'],
      img: '/assets/home/project10.png',
    },
    {
      name: 'FUTURE FORGE LABS',
      tags: ['brand logo'],
      img: '/assets/home/project11.png',
    },
    {
      name: 'HUNKUTECH',
      tags: ['brand logo'],
      img: '/assets/home/project12.png',
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
                  key={index}
                >
                  <img src={data.img} alt="project-img" />
                  <div className="">
                    <p className="text-base w-[160px] mt-1">{data.name}</p>
                    <div className="w-[160px] text-right flex gap-2 mt-3 text-sm">
                      {data.tags.map((tag, index) => {
                        return (
                          <span
                            className="px-2 py-1 rounded-[5px] whitespace-nowrap w-fit uppercase bg-[#FBF5ED1A]"
                            key={index}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>
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
