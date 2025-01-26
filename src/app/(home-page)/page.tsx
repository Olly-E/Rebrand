'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  AnimatedLogo,
  Button,
  Navbar,
  ProjectSection,
  OurValues,
  LogoBoxes,
  ServicesWeOffer,
  Templates,
} from '../Components'
import Footer from '../features/layouts/Footer'
import { split } from '../animations/text'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import useSound from 'use-sound'
import { Draggable } from 'gsap/all'

gsap.registerPlugin(CustomEase)
gsap.registerPlugin(Draggable)

const Page = () => {
  const containerRef = useRef(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPlaying, setIsPlaying] = useState(false)

  const [play, { stop }] = useSound('/samba.mp3', { loop: true })

  useEffect(() => {
    if (isPlaying) {
      play()
    } else {
      stop()
    }
  }, [isPlaying, play, stop])

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
    <div className="text-gray-50 scrollbar-hide" ref={containerRef}>
      <section className="relative h-screen mb-24 drag-container">
        <div className="container">
          <div className="flex flex-col">
            <AnimatedLogo />
            <div className="flex items-start justify-between mt-10">
              <h5 className="font-[300] text-sm sm:text-[16px] text-gray-50 w-[296px] leading-[28px]">
                LOGOS, BRANDING, UI/UX, CREATIVE WEB DESIGN, TEMPLATES
              </h5>
              <div className="flex gap-20">
                <Navbar />
              </div>
            </div>
          </div>
          <div className="flex-col mt-[5%]">
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
      <section className="container">
        <p className="text-center font-[300] opacity-50 mb-4">GET IN TOUCH</p>
        <h3 className="w-[611px] text-head-300 text-center mx-auto leading-[70px]">
          LET&apos;S DISCUSS YOUR GREAT IDEA
        </h3>
        <Button className="mx-auto mt-8">LET&apos;S CONNECT</Button>
        <div className="mt-44 my-20">
          <img src="/assets/home/brand-logo.png" alt="brand-logo" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Page
