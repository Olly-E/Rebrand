'use client'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import gsap from 'gsap'

export const AnimatedLogo = () => {
  const redCircleRef = React.useRef<HTMLDivElement>(null)
  const blueCircleRef = React.useRef<HTMLDivElement>(null)
  const greenCircleRef = React.useRef<HTMLDivElement>(null)
  const yellowCircleRef = React.useRef<HTMLDivElement>(null)
  const theBrandWordRef = React.useRef<HTMLImageElement>(null)

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(redCircleRef.current, {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: 'elastic.out(1, 0.3)',
    })

    gsap.to(blueCircleRef.current, {
      y: 0,
      duration: 3,
      delay: 1,
      ease: 'elastic.out(0.2, 0.5)',
    })

    gsap.to(greenCircleRef.current, {
      y: 0,
      opacity: 1,
      duration: 3,
      delay: 2,
      ease: 'elastic.out(1, 0.3)',
    })

    gsap.to(yellowCircleRef.current, {
      y: 0,
      duration: 3,
      delay: 3,
      opacity: 1,
      ease: 'elastic.out(0.2, 0.5)',
    })

    gsap.to(theBrandWordRef.current, {
      y: 0,
      duration: 2,
      delay: 4,
    })
  }, [])

  return (
    <div className="flex gap-4 mt-10 select-none">
      <div className="h-[174.08px] w-[177.43px] flex items-start justify-between">
        <img src="/assets/home/r-letter.svg" alt="letter" />
        <div
          className="w-[82.24px] h-[82.35px] rounded-full bg-red-state translate-y-[-120px] opacity-0"
          ref={redCircleRef}
        />
      </div>
      <div className="h-[174.08px]  flex items-end relative overflow-hidden">
        <img src="/assets/home/e-letter.svg" alt="letter" />
        <div
          className="w-[82.24px] h-[82.35px] rounded-full absolute bottom-0 right-0 bg-blue-state translate-y-[130px]"
          ref={blueCircleRef}
        />
      </div>
      <div className="h-[174.08px]">
        <img src="/assets/home/b-letter.svg" alt="letter" />
      </div>
      <div className="h-[174.08px] w-[177.43px] flex items-start justify-between">
        <img src="/assets/home/r-letter.svg" alt="letter" />
        <div className="h-full flex flex-col justify-between items-center">
          <div
            className="w-[82.24px] h-[82.35px] rounded-full bg-green-state translate-y-[-120px] opacity-0"
            ref={greenCircleRef}
          />
          <div className="overflow-hidden h-[30px]">
            <img
              ref={theBrandWordRef}
              src="/assets/home/the-brand.svg"
              alt="letter"
              className="w-[53px] h-[27px] translate-y-[60px]"
            />
          </div>
        </div>
      </div>
      <div className="h-[174.08px] flex items-start relative">
        <img src="/assets/home/a-letter.svg" alt="letter" />
        <div
          className="w-[82.24px] h-[82.35px] rounded-full absolute top-0 left-0 bg-yellow-state translate-y-[-120px] opacity-0"
          ref={yellowCircleRef}
        />
      </div>
      <div className="h-[174.08px]">
        <img src="/assets/home/n-letter.svg" alt="letter" />
      </div>
      <div className="h-[174.08px]">
        <img src="/assets/home/a-letter.svg" alt="letter" />
      </div>
      <p className="text-gray-50 opacity-70">TM</p>
    </div>
  )
}
