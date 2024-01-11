'use client'
import React from 'react'
import gsap from 'gsap'

export const AnimatedLogo = () => {
  const redCircleRef = React.useRef<HTMLDivElement>(null)
  const blueCircleRef = React.useRef<HTMLDivElement>(null)
  const greenCircleRef = React.useRef<HTMLDivElement>(null)
  const yellowCircleRef = React.useRef<HTMLDivElement>(null)
  const theBrandWordRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const tl = gsap.timeline()

    const redBall = gsap.to(redCircleRef.current, {
      y: 0,
      duration: 3,
      ease: 'elastic.out(1, 0.3)',
    })
    const blueBall = gsap.to(blueCircleRef.current, {
      y: 0,
      duration: 3,
      ease: 'elastic.out(0.2, 0.5)',
    })

    const greenBall = gsap.to(greenCircleRef.current, {
      y: 0,
      duration: 3,
      ease: 'elastic.out(1, 0.3)',
    })

    const yellowBall = gsap.to(yellowCircleRef.current, {
      y: 0,
      duration: 3,
      ease: 'elastic.out(0.2, 0.5)',
    })

    const brandWordRef = gsap.to(theBrandWordRef.current, {
      y: 0,
      duration: 2,
   
    })

    tl.add(redBall, 0)
      .add(blueBall, '-=2')
      .add(greenBall, '-=2')
      .add(yellowBall, '-=2')
      .add(brandWordRef, '-=3')
  }, [])

  return (
    <div className="flex gap-[2px] sm:gap-2 md:gap-4 pt-4 sm:pt-10 select-none items-start overflow-y-hidden">
      <div className=" w-full flex items-start justify-between">
        <img
          src="/assets/home/r-letter.svg"
          alt="letter"
          className="max-w-[50%]"
        />
        <div
          className="w-full aspect-square rounded-full bg-red-state translate-y-[-130px]"
          ref={redCircleRef}
        />
      </div>
      <div className=" w-full flex items-start relative overflow-hidden">
        <img src="/assets/home/e-letter.svg" alt="letter" />
        <div
          className="w-[82.24px] max-w-[50%] aspect-square rounded-full absolute bottom-0 right-0 bg-blue-state translate-y-[130px]"
          ref={blueCircleRef}
        />
      </div>
      <div className=" w-full">
        <img src="/assets/home/b-letter.svg" alt="letter" />
      </div>
      <div className=" w-full flex items-stretch justify-between">
        <img
          src="/assets/home/r-letter.svg"
          alt="letter"
          className="max-w-[50%]"
        />
        <div className="flex flex-col justify-between w-full min-h-full items-center">
          <div
            className="w-full aspect-square rounded-full bg-green-state translate-y-[-130px]"
            ref={greenCircleRef}
          />

          <p ref={theBrandWordRef} className="text-gray-50 translate-y-[130px] opacity-60 sm:ml-2 ml-[2px] md:leading-[14px] sm:leading-[14px] lg:leading-[18px] leading-[8px] lg:text-[16px] md:text-[12px] sm:text-[11px] text-[6px]">
            THE <br /> BRAND
          </p>
        </div>
      </div>
      <div className=" w-full flex items-start relative">
        <img src="/assets/home/a-letter.svg" alt="letter" />
        <div
          className="w-[82.24px] max-w-[50%] aspect-square rounded-full absolute top-0 left-0 bg-yellow-state translate-y-[-130px]"
          ref={yellowCircleRef}
        />
      </div>
      <div className=" w-full">
        <img src="/assets/home/n-letter.svg" alt="letter" />
      </div>
      <div className=" w-full">
        <img src="/assets/home/a-letter.svg" alt="letter" />
      </div>
      <p className="text-gray-50 opacity-60 sm:ml-2 ml-[2px] md:leading-[14px] sm:leading-[14px] lg:leading-[18px] leading-[8px] lg:text-[16px] md:text-[12px] sm:text-[11px] text-[6px]">
        TM
      </p>
    </div>
  )
}
