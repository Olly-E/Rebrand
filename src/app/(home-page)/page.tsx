'use client'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { AnimatedLogo, Button, Navbar, ProjectSection } from '../Components'
import Footer from '../features/layouts/Footer'
import { split } from '../animations/text'
import OurValues from '../Components/OurValues'

const Page = () => {
  const bentDivRef1 = React.useRef(null)
  const bentDivRef2 = React.useRef(null)
  const bentDivRef3 = React.useRef(null)
  const bentDivRef4 = React.useRef(null)
  const bentDivRef5 = React.useRef(null)
  const transformingDivRef = React.useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    split()

    gsap.to(bentDivRef1.current, {
      scrollTrigger: {
        trigger: transformingDivRef.current,
        start: 'top 40%',
        scrub: 1,
      },
      x: 0,
      y: 0,
      duration: 2,
      rotate: 0,
      ease: 'elastic.out(0.2, 0.5)',
    })
    gsap.to(bentDivRef2.current, {
      scrollTrigger: {
        trigger: transformingDivRef.current,
        start: 'top 40%',
        scrub: 1,
      },
      x: 0,
      y: 0,
      duration: 2,
      rotate: 0,
      ease: 'elastic.out(0.2, 0.5)',
    })
    gsap.to(bentDivRef3.current, {
      scrollTrigger: {
        trigger: transformingDivRef.current,
        start: 'top 40%',
        scrub: 1,
      },
      x: 0,
      y: 0,
      duration: 2,
      rotate: 0,
      ease: 'elastic.out(0.2, 0.5)',
    })
    gsap.to(bentDivRef4.current, {
      scrollTrigger: {
        trigger: transformingDivRef.current,
        start: 'top 40%',
        scrub: 1,
      },
      x: 0,
      y: 0,
      duration: 2,
      rotate: 0,
      ease: 'elastic.out(0.2, 0.5)',
    })
    gsap.to(bentDivRef5.current, {
      scrollTrigger: {
        trigger: transformingDivRef.current,
        start: 'top 40%',
        scrub: 1,
      },
      x: 0,
      y: 0,
      duration: 2,
      rotate: 0,
      ease: 'elastic.out(0.2, 0.5)',
    })

    // gsap.to(designBrandingTextRef.current, {
    //   scrollTrigger: {
    //     trigger: designBrandingTextRef.current,
    //     start: 'top center',
    //     end: 'top 20%',
    //     scrub: 2,
    //     // pin: designBrandingTextRef.current,
    //     // pinSpacing: true,

    //     toggleActions: 'restart none none none',
    //     toggleClass: 'do-this',
    //   },
    //   x: 400,
    //   // left: "-200px",
    //   // opacity: 1,
    // })

    //for timeline
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: designBrandingTextRef.current,
    //     // scrub: 1,

    //     start: 'top 70%',
    //     end: "top 10%",
    //   },
    // })

    // tl.to(designBrandingTextRef.current, {x: 400, duration: 10})
    // .to(designBrandingTextRef.current, {y: 200, duration: 10})
    // .to(designBrandingTextRef.current, {rotate: 90, repeat: 2, duration: 1})

    // .addLabel("rotate", 19)
    // tl.play("rotate")

    // ScrollTrigger.create({
    //   trigger: designBrandingTextRef.current,
    //   start: 'top 80%',
    //   end: 'top 30%',
    //   markers: false,
    //   // toggleClass: "box-red", //if you want it reversing back to it's previous state
    //   // onEnter: () => designBrandingTextRef.current.classList.add('box-red'), if you don't want the class reversing back to the previous state
    //   scrub: true,
    // })
  }, [])

  return (
    <div className="text-gray-50 scrollbar-hide">
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
          <div className="mt-[10%] flex gap-10 flex-col lg:flex-row items-center justify-between">
            <h5
              className="text-sm sm:text-[16px] font-[700] sm:w-[569px] leading-[30px] text-center lg:text-left"
              data-animation="paragraph"
            >
              WE BELIEVE THAT DESIGN SHOULD BE BOTH BEAUTIFUL AND FUNCTIONAL.
              OUR TEAM OF EXPERIENCED DESIGNERS CREATES VISUAL SOLUTIONS THAT
              CONNECT WITH YOUR AUDIENCE AND INSPIRE ACTION. FROM BRANDING TO
              WEBSITES, WE&apos;LL HELP YOU COMMUNICATE YOUR MESSAGE IN A WAY
              THAT RESONATES WITH YOUR CUSTOMERS.
            </h5>
            <div className="w-full sm:w-auto ">
              <div className="flex items-center justify-between ">
                <h2 className="text-head-100 sm:text-head-300 text-red-state leading-[70px]">
                  EXPLORE -
                </h2>
                <p className="text-sm w-[108px] sm:mr-10 font-[300]">
                  THE BRAND FOR YOUR BRAND💖
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
      <section
        className="container flex items-center justify-center h-[843px]"
        ref={transformingDivRef}
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
      <section className="container">
        <div className="mt-10 mb-24">
          <div>
            <p data-animation="paragraph">WHAT WE DO</p>
            <h3 className="text-head-300" data-animation="header">
              SERVICES WE OFFER
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="h-[492px] bg-red-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container">
            <div className="relative w-[101px] h-[101px] bg-black">
              <div className="min-w-[17.5px] min-h-[17.5px] rounded-full bg-white-state absolute top-4 left-4 first-white-circle" />
              <div className="min-w-[17.5px] min-h-[17.5px] rounded-full bg-white-state right-4 bottom-4 absolute second-white-circle" />
            </div>
            <div className="spring">
              <p className="text-black-state font-bold mt-4">01.</p>
              <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700]">
                Brand Logos and Posters
              </h3>
              <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state">
                We create unique and memorable brand logos and posters that
                effectively communicate your brand&apos;s identity. Our design
                process involves understanding your brand&apos;s values, target
                audience, and unique selling proposition to create a logo that
                stands out in the market.
              </p>
            </div>
          </div>
          <div className="h-[492px] bg-yellow-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container">
            <div className="relative w-[101px] h-[101px] bg-white white-container-circle flex items-center justify-center">
              <div className="bg-yellow-state yellow-circle" />
            </div>
            <div className="spring">
              <p className="text-black-state mt-4 font-bold">02.</p>
              <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700]">
                Brand Identity Package
              </h3>
              <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state">
                We develop comprehensive brand identity guidelines that ensure
                consistency across all platforms and touch-points. These
                guidelines include logo usage, typography, color palette, and
                imagery standards, ensuring that your brand&apos;s identity is
                accurately represented on all platforms.
              </p>
            </div>
          </div>
          <div className="h-[492px] bg-green-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container">
            <div className="relative w-[102px] h-[101px] poka-bg overflow-hidden">
              <img src="/assets/home/pokadot.svg" alt="" className="pokadot" />
              <img
                src="/assets/home/pokadot2.svg"
                alt=""
                className="pokadot2"
              />
            </div>
            <div className="spring">
              <p className="text-black-state font-bold mt-4">03.</p>
              <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700]">
                UI/UX Design for Brand Website
              </h3>
              <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state">
                Our UI/UX design services focus on creating intuitive,
                user-friendly, and aesthetically pleasing website designs. Your
                website is the first point of contact for your customers, and we
                ensure that it reflects your brand&apos;s identity and values.
              </p>
            </div>
          </div>
          <div className="h-[492px] bg-blue-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container">
            <div className="relative w-[102px] h-[101px] poka-bg">
              <img
                src="/assets/home/diagonal.svg"
                alt=""
                className="diagonal"
              />
              <img
                src="/assets/home/diagonal2.svg"
                alt=""
                className="diagonal2"
              />
            </div>
            <div className="spring">
              <p className="text-black-state font-bold mt-4">04.</p>
              <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700]">
                Brand Website Development
              </h3>
              <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state">
                We bring your creative web projects to life. Our combined
                expertise in design and development ensures that your web
                projects are not only visually appealing but also functional and
                user-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <ProjectSection />
      </section>
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
      <style jsx>{``}</style>
    </div>
  )
}

export default Page
