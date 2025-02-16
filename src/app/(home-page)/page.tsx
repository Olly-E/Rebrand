'use client'

import React, { useEffect, useRef } from 'react'
import {
  AnimatedLogo,
  Button,
  ProjectSection,
  OurValues,
  LogoBoxes,
  ServicesWeOffer,
  Templates,
} from '../Components'
import GravityShapes from '../features/physics/GravityShapes'
import Footer from '../features/layouts/Footer'
import { CustomEase } from 'gsap/CustomEase'
import { split } from '../animations/text'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/all'
import { gsap } from 'gsap'
import FirstSectionShapes from '../features/physics/FirstSectionshapes'

gsap.registerPlugin(CustomEase)
gsap.registerPlugin(Draggable)

const Page = () => {
  const containerRef = useRef(null)

  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing once visible
        }
      },
      { threshold: 0.5 } // 50% of the section must be in view
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useGSAP(
    () => {
      split()

      const colors = ['#EC3C3C', '#EFD05C', '#51BA81', '#3C83EC']

      const tl = gsap.timeline({ repeat: -1 })

      colors.forEach((color, index) => {
        tl.to('.explore-text', {
          duration: 1,
          color: color,
          ease: 'power1.inOut',
          delay: index * 1,
        })
      })

      tl.to('.explore-text', {
        duration: 1,
        color: colors[0],
        ease: 'power1.inOut',
        delay: 2,
      })

      return () => tl.kill()
    },
    { scope: containerRef }
  )

  useEffect(() => {
    Draggable.create(
      [
        '.green-circle',
        '.blue-rectangle',
        '.red-triangle',
        '.white-semicircle',
        '.yellow-oval',
      ],
      {
        bounds: '.drag-container',
      }
    )
  }, [])

  return (
    <div className="text-gray-50 scrollbar-hide relative" ref={containerRef}>
      <section className="relative h-screen mb-24 drag-container">
        <div className="container">
          <div className="flex flex-col">
            <AnimatedLogo />
          </div>
          <FirstSectionShapes />
        </div>
      </section>
      <OurValues />
      <LogoBoxes />
      <ServicesWeOffer />
      <ProjectSection />
      <Templates />
      <section className="container h-[60vh] relative" ref={sectionRef}>
        <p className="text-center font-[300] opacity-50 mb-4">GET IN TOUCH</p>
        <h3 className="w-[879px] text-[64px] text-center mx-auto leading-[70px]">
          LET&apos;S DISCUSS YOUR GREAT IDEA
        </h3>
        <Button className="mx-auto mt-8">LET&apos;S CONNECT</Button>
        {isVisible && <GravityShapes sectionRef={sectionRef} />}
      </section>

      <Footer />
    </div>
  )
}

export default Page
