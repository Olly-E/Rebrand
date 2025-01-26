import React, { useRef } from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import Link from 'next/link'

type ContainerProps = {
  className: string
  color?: '#EC3C3C' | '#030303' | '#EFD05C' | '#51BA81' | '#3C83EC'
  dotContainer?: boolean
  springClassName: string
}

export const ServicesWeOffer = () => {
  const containerRef = useRef(null)

  const { contextSafe } = useGSAP({ scope: containerRef })

  const onContainerHover = contextSafe(
    ({ className, color, dotContainer, springClassName }: ContainerProps) => {
      gsap.to(className, {
        color: color,
      })

      {
        dotContainer &&
          gsap.to('.dot-container', {
            backgroundColor: '#EC3C3C',
          })
      }

      gsap.to('.desc', {
        color: '#FBF5ED',
      })

      gsap.to('.button-class-cus', {
        borderColor: '#FBF5ED33',
      })

      gsap.to(springClassName, {
        marginTop: 0,
        delay: 0.2,
        ease: 'power1.out',
      })
    }
  )

  const onContainerLeave = contextSafe(
    ({ className, dotContainer, springClassName }: ContainerProps) => {
      gsap.to(className, {
        color: '#030303',
      })

      {
        dotContainer &&
          gsap.to('.dot-container', {
            backgroundColor: '#030303',
          })
      }
      gsap.to('.desc', {
        color: '#000000',
      })

      gsap.to('.button-class-cus', {
        borderColor: '#FBF5ED33',
      })

      gsap.to(springClassName, {
        marginTop: springClassName === '.red-spring' ? '94%' : '83%',
        delay: 0.2,
      })
    }
  )

  return (
    <section className="container" ref={containerRef}>
      <div className="mt-10 mb-24">
        <div>
          <p data-animation="paragraph">WHAT WE DO</p>
          <h3 className="text-head-300" data-animation="header">
            SERVICES WE OFFER
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div
          className="h-[492px] bg-red-state hover:bg-black-state transition-color duration-500 rounded-[5px] px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
          onMouseEnter={() => {
            onContainerHover({
              className: '.text-red',
              color: '#EC3C3C',
              dotContainer: true,
              springClassName: '.red-spring',
            })
          }}
          onMouseLeave={() =>
            onContainerLeave({
              className: '.text-red',
              dotContainer: true,
              springClassName: '.red-spring',
            })
          }
        >
          <div className="relative w-[101px] h-[101px] bg-black-state rounded-[5px] dot-container">
            <div className="min-w-[17.5px] min-h-[17.5px] rounded-full bg-white-state absolute top-4 left-4 first-white-circle" />
            <div className="min-w-[17.5px] min-h-[17.5px] rounded-full bg-white-state right-4 bottom-4 absolute second-white-circle" />
          </div>
          <div className="red-spring mt-[94%]">
            <p className="text-black-state font-bold mt-4 text-red">01.</p>
            <h3 className="text-[25px] uppercase mt-1 text-black-state leading-[120%] font-[700] text-red">
              Brand Logos and Posters
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#FBF5ED1A] border-opacity-20 text-black-state desc">
              We create unique and memorable brand logos and posters that
              effectively communicate your brand&apos;s identity.
            </p>
          </div>
          <Link
            href="/"
            className="bg-transparent h-[59.69px] border flex items-center justify-center text-center button-class-cus rounded-[5px] mt-5 uppercase border-black w-full hover:bg-[#EC3C3C] duration-500 transition-colors hover:text-black"
          >
            let&apos;s Connect
          </Link>
        </div>
        <div
          className="h-[492px] bg-yellow-state hover:bg-black-state transition-colors duration-500 rounded-[5px] px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
          onMouseEnter={() => {
            onContainerHover({
              className: '.text-yellow',
              color: '#EFD05C',
              springClassName: '.yellow-spring',
            })
          }}
          onMouseLeave={() =>
            onContainerLeave({
              className: '.text-yellow',
              springClassName: '.yellow-spring',
            })
          }
        >
          <div className="relative w-[101px] h-[101px] bg-black rounded-[5px] white-container-circle flex items-center justify-center">
            <div className="bg-yellow-state yellow-box h-[57px]" />
          </div>
          <div className="yellow-spring mt-[80%]">
            <p className="text-black-state mt-4 font-bold text-yellow">02.</p>
            <h3 className="text-[25px] uppercase mt-1 text-black-state leading-[120%] font-[700] text-yellow">
              Brand Identity Package
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#FBF5ED1A] border-opacity-20 text-black-state text-yellow desc">
              We develop comprehensive brand identity guidelines that ensure
              consistency across all touch-points.
            </p>
          </div>
          <Link
            href="/"
            className="bg-transparent h-[59.69px] border flex items-center justify-center text-center button-class-cus rounded-[5px] mt-5 uppercase border-black w-full hover:bg-[#EFD05C] duration-500 transition-colors hover:text-black"
          >
            let&apos;s Connect
          </Link>
        </div>
        <div
          className="h-[492px] bg-green-state hover:bg-black-state transition-colors duration-500 rounded-[5px] px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
          onMouseEnter={() => {
            onContainerHover({
              className: '.text-green',
              color: '#51BA81',
              springClassName: '.green-spring',
            })
          }}
          onMouseLeave={() =>
            onContainerLeave({
              className: '.text-green',
              springClassName: '.green-spring',
            })
          }
        >
          <div className="relative w-[102px] h-[101px] overflow-hidden">
            <img src="/assets/home/pokadot.svg" alt="" className="pokadot" />
            <img src="/assets/home/pokadot2.svg" alt="" className="pokadot2" />
          </div>
          <div className="green-spring mt-[83%]">
            <p className="text-black-state font-bold mt-4 text-green">03.</p>
            <h3 className="text-[25px] uppercase mt-1 text-black-state leading-[120%] font-[700] text-green">
              UI/UX Design for Brand Website
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#FBF5ED1A] border-opacity-20 text-black-state text-green desc">
              Our UI/UX design services focus on creating intuitive,
              user-friendly, and aesthetically pleasing website designs.
            </p>
            <Link
              href="/"
              className="bg-transparent h-[59.69px] border flex items-center justify-center text-center button-class-cus rounded-[5px] mt-5 uppercase border-black w-full hover:bg-[#51BA81] duration-500 transition-colors hover:text-black"
            >
              let&apos;s Connect
            </Link>
          </div>
        </div>
        <div
          className="h-[492px] bg-blue-state hover:bg-black-state transition-colors duration-500 rounded-[5px] px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
          onMouseEnter={() => {
            onContainerHover({
              className: '.text-blue',
              color: '#3C83EC',
              springClassName: '.blue-spring',
            })
          }}
          onMouseLeave={() =>
            onContainerLeave({
              className: '.text-blue',
              springClassName: '.blue-spring',
            })
          }
        >
          <div className="relative w-[102px] h-[101px]">
            <img src="/assets/home/diagonal1.svg" alt="" className="diagonal" />
          </div>
          <div className="blue-spring mt-[83%]">
            <p className="text-black-state font-bold mt-4 text-blue">04.</p>
            <h3 className="text-[25px] uppercase mt-1 text-black-state leading-[120%] font-[700] text-blue">
              Brand Website Development
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#FBF5ED1A] border-opacity-20 text-black-state text-blue desc">
              We ensure that your web projects are not only visually appealing
              but also functional and user-friendly.
            </p>
          </div>
          <Link
            href="/"
            className="bg-transparent h-[59.69px] border flex items-center justify-center text-center button-class-cus rounded-[5px] mt-5 uppercase border-black w-full hover:bg-[#3C83EC] duration-500 transition-colors hover:text-black"
          >
            let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  )
}
