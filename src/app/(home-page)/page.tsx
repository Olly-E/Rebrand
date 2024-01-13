'use client'

import React, { useEffect, useRef } from 'react'
import {
  AnimatedLogo,
  Button,
  Navbar,
  ProjectSection,
  OurValues,
  MarqueeSection,
  LogoBoxes,
  ServicesWeOffer,
} from '../Components'
import Footer from '../features/layouts/Footer'
import { split } from '../animations/text'
import { gsap } from 'gsap'

const Page = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    split()

    const colors = ['#EC3C3C', '#EFD05C', '#51BA81', '#3C83EC']

    const ctx = gsap.context(() => {
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="text-gray-50 scrollbar-hide" ref={containerRef}>
      <section className="relative h-screen mb-24">
        <div className="container">
          <div className="flex flex-col">
            <AnimatedLogo />
            <div className="flex items-start justify-between mt-10">
              <h5 className="font-[300] text-sm sm:text-[16px] text-gray-50 w-[296px] leading-[28px]">
                LOGOS, BRANDING, UI/UX, CREATIVE WEB DESIGN, TEMPLATES
              </h5>
              <Navbar />
            </div>
          </div>
          <Button className="w-[244px] h-[59.69px] mt-[10%] mx-auto">
            LET&apos;S CONNECT
          </Button>
          <div className="mt-[10%] flex gap-10 flex-col lg:flex-row items-center justify-between relative">
            <div className="relative">
              <img
                src="/assets/home/yellow oval.svg"
                alt="oval"
                className="absolute -top-[100px]"
              />
              <img
                src="/assets/home/red triangle.svg"
                alt="oval"
                className="absolute -right-[100px] bottom-0"
              />
              <h5
                className="text-sm sm:text-[16px] font-[700] sm:w-[569px] leading-[30px] text-center lg:text-left"
                data-animation="paragraph"
              >
                WE BELIEVE THAT EVERY BRAND IS MORE THAN JUST A LOGO OR A
                WEBSITE. OUR TEAM OF EXPERIENCED DESIGNERS AND DEVELOPERS
                CREATE VISUAL SOLUTIONS THAT CONNECT WITH YOUR AUDIENCE AND
                INSPIRE ACTION. FROM BRANDING TO WEBSITES, WE&apos;LL HELP YOU
                COMMUNICATE YOUR MESSAGE IN A WAY THAT RESONATES WITH YOUR
                CUSTOMERS.
              </h5>
            </div>
            <div className="w-full sm:w-auto ">
              <div className="flex items-center justify-between relative">
                <img
                  src="/assets/home/white semicircle.svg"
                  alt="oval"
                  className="absolute -top-[70px] right-[40px]"
                />
                <h2 className="text-head-100 sm:text-head-300 text-red-state leading-[70px] explore-text">
                  EXPLORE -
                </h2>
                <p className="text-sm w-[108px] sm:mr-10 font-[300]">
                  THE BRAND FOR YOUR BRAND ❤️
                </p>
              </div>
              <h2 className="text-head-100 sm:text-head-300 text-white-state leading-[60px]">
                & GET INSPIRED.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <OurValues />
      <MarqueeSection />
      <LogoBoxes />
      <ServicesWeOffer />
      <ProjectSection />
      <section className="container">
        <h3 className="text-[230px] text-white-state leading-[180px]">
          TEMPLATES
        </h3>
        <div>
          <p className="w-[293px]">
            We create and sell ready-made portfolio designs for designers,
            developers and other tech enthusiasts
          </p>
          <Button className="mt-8">VIEW TEMPLATES</Button>
        </div>
      </section>
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
