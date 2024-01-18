import React, { useEffect, useRef } from 'react'
import { Button } from './Elements/Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Templates = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          scrub: 1,
          end: '+=5000',
        },
      })
      const sections = gsap.utils.toArray(
        '.picture-container'
      ) as HTMLDivElement[]
      sections.forEach((section, index) => {
        const sectionTimeline = gsap.timeline()
        sectionTimeline.fromTo(
          section,
          {
            y: '100vh',
            scale: 1.5,
          },
          { y: -index * 100, ease: 'none' },
          0
        )
        sectionTimeline.to(section, {
          scale: 1,
        })
        masterTimeline.add(sectionTimeline, index * 0.7)
      })
      return () => masterTimeline.kill()
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const TEMPLATE_CONTENT_DATA = [
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
    <section className="h-screen mb-[100px]" ref={containerRef}>
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
      <div className="flex justify-center relative">
        <div className="absolute">
          {TEMPLATE_CONTENT_DATA.map((template, index) => {
            return (
              <div
                key={index}
                className={`w-[617px] picture-container -top-[110px] absolute left-[50%] -translate-x-[50%] z-[${
                  index * 1
                }]`}
              >
                <img src={template.img} alt="project-img" width={'100%'} />
                <div className="flex justify-between">
                  <p className="text-sm w-[160px]">{template.name}</p>
                  <p className="text-sm w-[160px] text-right">
                    {template.category}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-[250px] mr-[5%] flex flex-col items-end">
        <p className="w-[293px]">
          Consult our team to design and / or develop a custom-made portfolio
          for yourself or your brand.
        </p>
        <Button className="w-[293px]">LET&apos;S CONNECT</Button>
      </div>
    </section>
  )
}
