import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

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

      gsap.to(springClassName, {
        marginTop: '80%',
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
      <div className="grid grid-cols-4">
        <div
          className="h-[492px] bg-red-state hover:bg-black-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
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
          <div className="relative w-[101px] h-[101px] bg-black-state dot-container">
            <div className="min-w-[17.5px] min-h-[17.5px] rounded-full bg-white-state absolute top-4 left-4 first-white-circle" />
            <div className="min-w-[17.5px] min-h-[17.5px] rounded-full bg-white-state right-4 bottom-4 absolute second-white-circle" />
          </div>
          <div className="red-spring mt-[80%]">
            <p className="text-black-state font-bold mt-4 text-red">01.</p>
            <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700] text-red">
              Brand Logos and Posters
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state text-red">
              We create unique and memorable brand logos and posters that
              effectively communicate your brand&apos;s identity. Our design
              process involves understanding your brand&apos;s values, target
              audience, and unique selling proposition to create a logo that
              stands out in the market.
            </p>
          </div>
        </div>
        <div
          className="h-[492px] bg-yellow-state hover:bg-black-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
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
          <div className="relative w-[101px] h-[101px] bg-white white-container-circle flex items-center justify-center">
            <div className="bg-yellow-state yellow-circle" />
          </div>
          <div className="yellow-spring mt-[80%]">
            <p className="text-black-state mt-4 font-bold text-yellow">02.</p>
            <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700] text-yellow">
              Brand Identity Package
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state text-yellow">
              We develop comprehensive brand identity guidelines that ensure
              consistency across all platforms and touch-points. These
              guidelines include logo usage, typography, color palette, and
              imagery standards, ensuring that your brand&apos;s identity is
              accurately represented on all platforms.
            </p>
          </div>
        </div>
        <div
          className="h-[492px] bg-green-state hover:bg-black-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
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
          <div className="relative w-[102px] h-[101px] poka-bg overflow-hidden">
            <img src="/assets/home/pokadot.svg" alt="" className="pokadot" />
            <img
              src="/assets/home/pokadot2.svg"
              alt=""
              className="pokadot2 bg-green-state"
            />
          </div>
          <div className="green-spring mt-[80%]">
            <p className="text-black-state font-bold mt-4 text-green">03.</p>
            <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700] text-green">
              UI/UX Design for Brand Website
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state text-green">
              Our UI/UX design services focus on creating intuitive,
              user-friendly, and aesthetically pleasing website designs. Your
              website is the first point of contact for your customers, and we
              ensure that it reflects your brand&apos;s identity and values.
            </p>
          </div>
        </div>
        <div
          className="h-[492px] bg-blue-state hover:bg-black-state px-[24px] pt-[29px] pb-[24px] overflow-hidden spring-container"
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
          <div className="relative w-[102px] h-[101px] poka-bg">
            <img src="/assets/home/diagonal.svg" alt="" className="diagonal" />
            <img
              src="/assets/home/diagonal2.svg"
              alt=""
              className="diagonal2 bg-blue-state"
            />
          </div>
          <div className="blue-spring mt-[80%]">
            <p className="text-black-state font-bold mt-4 text-blue">04.</p>
            <h3 className="text-head-100 mt-1 text-black-state leading-[120%] font-[700] text-blue">
              Brand Website Development
            </h3>
            <p className="leading-[150%] mt-4 font-[300] pt-4 border-t border-t-[#03030333] border-opacity-20 text-black-state text-blue">
              We bring your creative web projects to life. Our combined
              expertise in design and development ensures that your web projects
              are not only visually appealing but also functional and
              user-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
