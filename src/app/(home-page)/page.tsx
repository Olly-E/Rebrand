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
          <div className="flex-col mt-40">
            <div className="h-fit flex justify-center">
              <img
                src={'/assets/home/green-circle.svg'}
                alt="green circle"
                className="green-circle"
              />
              <img
                src={'/assets/home/blue-rectangle.svg'}
                alt="blue rectangle"
                className="-mt-[30px] -ml-[5px] blue-rectangle"
              />
            </div>
            <Button className="w-[244px] h-[59.69px] mx-auto">
              LET&apos;S CONNECT
            </Button>
          </div>
          <div className="mt-[10%] flex gap-10 flex-col lg:flex-row items-center justify-between relative">
            <div className="relative">
              <img
                src="/assets/home/yellow oval.svg"
                alt="oval"
                className="absolute -top-[100px] yellow-oval"
              />
              <img
                src="/assets/home/red triangle.svg"
                alt="oval"
                className="absolute -right-[100px] bottom-0 red-triangle"
              />
              <h5
                className="text-sm sm:text-[16px] font-[700] sm:w-[569px] leading-[30px] text-center lg:text-left"
                data-animation="paragraph"
              >
                WE BELIEVE THAT EVERY BRAND IS MORE THAN JUST A LOGO OR A
                WEBSITE. OUR TEAM OF EXPERIENCED DESIGNERS AND DEVELOPERS CREATE
                VISUAL SOLUTIONS THAT CONNECT WITH YOUR AUDIENCE.
              </h5>
            </div>
            <div className="w-full sm:w-auto ">
              <div className="flex items-center justify-between relative">
                <img
                  src="/assets/home/white semicircle.svg"
                  alt="oval"
                  className="absolute top-[0px] right-[0px] white-semicircle"
                />
                <h2 className="text-head-100 sm:text-[48px] text-red-state leading-[70px] explore-text">
                  THE BRAND -
                </h2>
              </div>
              <h2 className="text-head-100 sm:text-[48px] text-white-state leading-[40px]">
                FOR YOUR BRAND
              </h2>
            </div>
          </div>
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
