import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const OurValuesGrid = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline({ repeat: -1 })

      const reevaluateTl = gsap.timeline()

      reevaluateTl.to('.reevaluate-bg', {
        backgroundColor: '#EFD05C',
        delay: 1,
      })
      reevaluateTl.to('.reevaluate-bg', {
        backgroundColor: '#51BA81',
        delay: 1,
      })
      reevaluateTl.to('.reevaluate-bg', {
        backgroundColor: '#3C83EC',
        delay: 1,
      })
      reevaluateTl.to('.reevaluate-bg', {
        backgroundColor: '#EC3C3C',
        delay: 1,
      })

      const arrowBgTl = gsap.timeline()

      arrowBgTl.to('.arrowdown-bg', {
        backgroundColor: '#51BA81',
        borderColor: '#51BA81',
        delay: 1,
      })

      arrowBgTl.to('.arrowdown-bg', {
        backgroundColor: 'transparent',
        borderColor: '#3C83EC',
        delay: 1,
      })

      arrowBgTl.to('.arrowdown-bg', {
        backgroundColor: '#EC3C3C',
        borderColor: '#EC3C3C',
        delay: 1,
      })

      arrowBgTl.to('.arrowdown-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EFD05C',
        delay: 1,
      })

      const arrowColorTl = gsap.timeline()

      arrowColorTl.to('.arrowColor', {
        stroke: '#000',
        delay: 1,
      })

      arrowColorTl.to('.arrowColor', {
        stroke: '#3C83EC',
        delay: 1,
      })

      arrowColorTl.to('.arrowColor', {
        stroke: '#000',
        delay: 1,
      })

      arrowColorTl.to('.arrowColor', {
        stroke: '#EFD05C',
        delay: 1,
      })

      const enhanceBgTl = gsap.timeline()

      enhanceBgTl.to('.enhance-bg', {
        backgroundColor: '#3C83EC',
        borderColor: '#3C83EC',
        color: '#000',
        delay: 1,
      })

      enhanceBgTl.to('.enhance-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EC3C3C',
        color: '#EC3C3C',
        delay: 1,
      })

      enhanceBgTl.to('.enhance-bg', {
        backgroundColor: '#EFD05C',
        borderColor: '#EFD05C',
        color: '#000',
        delay: 1,
      })

      enhanceBgTl.to('.enhance-bg', {
        backgroundColor: 'transparent',
        borderColor: '#51BA81',
        color: '#51BA81',
        delay: 1,
      })

      const buildBgTl = gsap.timeline()

      buildBgTl.to('.build-bg', {
        backgroundColor: '#EC3C3C',
        borderColor: '#EC3C3C',
        color: '#ffff',
        delay: 1,
      })

      buildBgTl.to('.build-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EFD05C',
        color: '#EFD05C',
        delay: 1,
      })

      buildBgTl.to('.build-bg', {
        backgroundColor: '#51BA81',
        borderColor: '#51BA81',
        color: '#ffff',
        delay: 1,
      })

      buildBgTl.to('.build-bg', {
        backgroundColor: 'transparent',
        borderColor: '#3C83EC',
        color: '#3C83EC',
        delay: 1,
      })

      const arrowRightBgTl = gsap.timeline()

      arrowRightBgTl.to('.arrowright-bg', {
        backgroundColor: '#EFD05C',
        borderColor: '#EFD05C',
        delay: 1,
      })

      arrowRightBgTl.to('.arrowright-bg', {
        backgroundColor: 'transparent',
        borderColor: '#51BA81',
        delay: 1,
      })

      arrowRightBgTl.to('.arrowright-bg', {
        backgroundColor: '#3C83EC',
        borderColor: '#3C83EC',
        delay: 1,
      })

      arrowRightBgTl.to('.arrowright-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EC3C3C',
        delay: 1,
      })

      const arrowColorRightTl = gsap.timeline()

      arrowColorRightTl.to('.arrowColorRight', {
        stroke: '#000',
        delay: 1,
      })

      arrowColorRightTl.to('.arrowColorRight', {
        stroke: '#51BA81',
        delay: 1,
      })

      arrowColorRightTl.to('.arrowColorRight', {
        stroke: '#000',
        delay: 1,
      })

      arrowColorRightTl.to('.arrowColorRight', {
        stroke: '#EC3C3C',
        delay: 1,
      })

      const representBgTl = gsap.timeline()

      representBgTl.to('.represent-bg', {
        backgroundColor: '#51BA81',
        borderColor: '#51BA81',
        color: '#000',
        delay: 1,
      })

      representBgTl.to('.represent-bg', {
        backgroundColor: 'transparent',
        borderColor: '#3C83EC',
        color: '#3C83EC',
        delay: 1,
      })

      representBgTl.to('.represent-bg', {
        backgroundColor: '#EC3C3C',
        borderColor: '#EC3C3C',
        color: '#000',
        delay: 1,
      })

      representBgTl.to('.represent-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EFD05C',
        color: '#EFD05C',
        delay: 1,
      })

      const advanceBgTl = gsap.timeline()

      advanceBgTl.to('.advance-bg', {
        backgroundColor: 'transparent',
        borderColor: '#3C83EC',
        color: '#3C83EC',
        delay: 1,
      })

      advanceBgTl.to('.advance-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EC3C3C',
        color: '#EC3C3C',
        delay: 1,
      })

      advanceBgTl.to('.advance-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EFD05C',
        color: '#EFD05C',
        delay: 1,
      })

      advanceBgTl.to('.advance-bg', {
        backgroundColor: 'transparent',
        borderColor: '#51BA81',
        color: '#51BA81',
        delay: 1,
      })

      const longArrowLeftBgTl = gsap.timeline()

      longArrowLeftBgTl.to('.longArrowleft-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EC3C3C',
        delay: 1,
      })

      longArrowLeftBgTl.to('.longArrowleft-bg', {
        backgroundColor: '#EFD05C',
        borderColor: '#EFD05C',
        delay: 1,
      })

      longArrowLeftBgTl.to('.longArrowleft-bg', {
        backgroundColor: 'transparent',
        borderColor: '#51BA81',
        delay: 1,
      })

      longArrowLeftBgTl.to('.longArrowleft-bg', {
        backgroundColor: '#3C83EC',
        borderColor: '#3C83EC',
        delay: 1,
      })

      const longArrowColorLeftTl = gsap.timeline()

      longArrowColorLeftTl.to('.longArrowColorLeft', {
        stroke: '#EC3C3C',
        delay: 1,
      })

      longArrowColorLeftTl.to('.longArrowColorLeft', {
        stroke: '#000',
        delay: 1,
      })

      longArrowColorLeftTl.to('.longArrowColorLeft', {
        stroke: '#51BA81',
        delay: 1,
      })

      longArrowColorLeftTl.to('.longArrowColorLeft', {
        stroke: '#fff',
        delay: 1,
      })

      const longArrowRightBgTl = gsap.timeline()

      longArrowRightBgTl.to('.longArrowRight-bg', {
        backgroundColor: '#fff',
        borderColor: '#fff',
        delay: 1,
      })

      longArrowRightBgTl.to('.longArrowRight-bg', {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        delay: 1,
      })

      longArrowRightBgTl.to('.longArrowRight-bg', {
        backgroundColor: '#fff',
        borderColor: '#fff',
        delay: 1,
      })

      longArrowRightBgTl.to('.longArrowRight-bg', {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        delay: 1,
      })

      const longArrowColorRightTl = gsap.timeline()

      longArrowColorRightTl.to('.longArrowColorRight', {
        stroke: '#000',
        delay: 1,
      })

      longArrowColorRightTl.to('.longArrowColorRight', {
        stroke: '#fff',
        delay: 1,
      })

      longArrowColorRightTl.to('.longArrowColorRight', {
        stroke: '#000',
        delay: 1,
      })

      longArrowColorRightTl.to('.longArrowColorRight', {
        stroke: '#fff',
        delay: 1,
      })

      const nutureBgTl = gsap.timeline()

      nutureBgTl.to('.nuture-bg', {
        backgroundColor: '#EFD05C',
        borderColor: '#EFD05C',
        color: '#000',
        delay: 1,
      })

      nutureBgTl.to('.nuture-bg', {
        backgroundColor: 'transparent',
        borderColor: '#51BA81',
        color: '#51BA81',
        delay: 1,
      })

      nutureBgTl.to('.nuture-bg', {
        backgroundColor: '#3C83EC',
        borderColor: '#3C83EC',
        color: '#000',
        delay: 1,
      })

      nutureBgTl.to('.nuture-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EC3C3C',
        color: '#EC3C3C',
        delay: 1,
      })

      const differentiateTl = gsap.timeline()

      differentiateTl.to('.differentiate-bg', {
        backgroundColor: '#51BA81',
        delay: 1,
      })

      differentiateTl.to('.differentiate-bg', {
        backgroundColor: '#3C83EC',
        delay: 1,
      })

      differentiateTl.to('.differentiate-bg', {
        backgroundColor: '#EC3C3C',
        delay: 1,
      })

      differentiateTl.to('.differentiate-bg', {
        backgroundColor: '#EFD05C',
        delay: 1,
      })

      const arrowLeftBgTl = gsap.timeline()

      arrowLeftBgTl.to('.arrowleft-bg', {
        backgroundColor: '#3C83EC',
        borderColor: '#3C83EC',
        delay: 1,
      })

      arrowLeftBgTl.to('.arrowleft-bg', {
        backgroundColor: 'transparent',
        borderColor: '#EC3C3C',
        delay: 1,
      })

      arrowLeftBgTl.to('.arrowleft-bg', {
        backgroundColor: '#EFD05C',
        borderColor: '#EFD05C',
        delay: 1,
      })

      arrowLeftBgTl.to('.arrowleft-bg', {
        backgroundColor: 'transparent',
        borderColor: '#51BA81',
        delay: 1,
      })

      const arrowColorLeftTl = gsap.timeline()

      arrowColorLeftTl.to('.arrowColorLeft', {
        stroke: '#000',
        delay: 1,
      })

      arrowColorLeftTl.to('.arrowColorLeft', {
        stroke: '#EC3C3C',
        delay: 1,
      })

      arrowColorLeftTl.to('.arrowColorLeft', {
        stroke: '#000',
        delay: 1,
      })

      arrowColorLeftTl.to('.arrowColorLeft', {
        stroke: '#51BA81',
        delay: 1,
      })

      masterTimeline.add([
        reevaluateTl,
        arrowBgTl,
        arrowColorTl,
        enhanceBgTl,
        buildBgTl,
        arrowRightBgTl,
        arrowColorRightTl,
        representBgTl,
        advanceBgTl,
        longArrowLeftBgTl,
        longArrowColorLeftTl,
        longArrowRightBgTl,
        longArrowColorRightTl,
        nutureBgTl,
        differentiateTl,
        arrowLeftBgTl,
        arrowColorLeftTl,
      ])
    }, containerRef)

    return () => ctx.revert()
  }, [])



  return (
    <div className="md:w-[454px] md:mx-0 mx-auto" ref={containerRef}>
      <div className="flex gap-[10px]">
        <span className="text-head-100 lg:text-head-200 lg:font-recoleta text-black bg-red-state h-[64px] flex-1 flex items-center justify-center reevaluate-bg">
          RE-EVALUATE
        </span>
        <div className="border border-yellow-state flex justify-center items-center w-[64px] min-w-[64px] h-[64px] arrowdown-bg">
          {' '}
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.39555 11.3932L6.05748 20.9783L15.6426 21.3164"
              stroke="#EFD05C"
              className="arrowColor"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M20.9766 7.05566L7.21981 19.8751"
              stroke="#EFD05C"
              className="arrowColor"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-[10px] mt-[10px]">
        <span className="text-head-100 lg:text-head-200 lg:px-0 px-4 lg:font-recoleta bg-black-state text-green-state border border-green-state h-[64px] flex-1 flex items-center justify-center enhance-bg">
          ENHANCE
        </span>
        <span className="bg-black-state border border-blue-state text-blue-state text-head-100 lg:text-head-200 lg:font-recoleta flex justify-center items-center w-[172px] min-w-[64px] h-[64px] build-bg">
          BUILD
        </span>
      </div>
      <div className="flex gap-[10px] mt-[10px]">
        <div className="border border-red-state bg-black flex justify-center items-center w-[64px] min-w-[64px] h-[64px] arrowright-bg">
          {' '}
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6064 19.2904L23.3966 12.5168L16.623 5.72656"
              stroke="#EC3C3C"
              className="arrowColorRight"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M3.40234 12.457L22.2062 12.4802"
              stroke="#EC3C3C"
              className="arrowColorRight"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-head-100 lg:text-head-200 lg:font-recoleta text-yellow-state bg-black border border-yellow-state h-[64px] flex-1 flex items-center justify-center represent-bg">
          REPRESENT
        </span>
      </div>
      <div className="flex gap-[10px] mt-[10px]">
        <span className="text-head-100 lg:text-head-200 lg:font-recoleta bg-black-state text-green-state border border-green-state h-[64px] flex-1 flex items-center justify-center advance-bg">
          ADVANCE
        </span>
        <div className="border border-blue-state bg-blue-state text-blue-state text-head-100 lg:text-head-200 lg:font-recoleta flex justify-center items-center w-[145.7px] min-w-[64px] h-[64px] longArrowleft-bg">
          <svg
            width="105"
            height="28"
            viewBox="0 0 105 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_562_644)">
              <path
                d="M13.1183 20.4359L6.32801 13.6623L13.1016 6.87207"
                stroke="#FBF5ED"
                className="longArrowColorLeft"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M106.416 13.6807L8.37346 13.6807"
                stroke="#FBF5ED"
                className="longArrowColorLeft"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_562_644">
                <rect
                  width="27.234"
                  height="103.489"
                  fill="white"
                  transform="translate(104.416 0.0634766) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex gap-[10px] mt-[10px]">
        <div className="bg-black-state border border-white-state text-head-100 lg:text-head-200 lg:font-recoleta flex justify-center items-center w-[145.7px] min-w-[64px] h-[64px] longArrowRight-bg">
          <svg
            width="105"
            height="28"
            viewBox="0 0 105 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_562_644)">
              <path
                d="M13.1183 20.4359L6.32801 13.6623L13.1016 6.87207"
                stroke="#FBF5ED"
                className="longArrowColorRight"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M106.416 13.6807L8.37346 13.6807"
                stroke="#FBF5ED"
                className="longArrowColorRight"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_562_644">
                <rect
                  width="27.234"
                  height="103.489"
                  fill="white"
                  transform="translate(104.416 0.0634766) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="text-head-100 lg:text-head-200 lg:font-recoleta bg-black-state text-red-state border border-red-state h-[64px] flex-1 flex items-center justify-center nuture-bg">
          NURTURE
        </span>
      </div>
      <div className="flex gap-[10px] mt-[10px]">
        <span className="text-head-100 lg:text-head-200 lg:font-recoleta text-black bg-yellow-state h-[64px] flex-1 flex items-center justify-center differentiate-bg">
          DIFFERENTIATE
        </span>
        <div className="border border-green-state flex justify-center items-center w-[64px] min-w-[64px] h-[64px] arrowleft-bg">
          {' '}
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_562_1151)">
              <path
                d="M12.3936 19.2904L5.6034 12.5168L12.377 5.72656"
                stroke="#51BA81"
                className="arrowColorLeft"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M26.5977 12.457L7.79381 12.4802"
                stroke="#51BA81"
                className="arrowColorLeft"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_562_1151">
                <rect
                  width="26.8148"
                  height="26.8148"
                  fill="white"
                  transform="translate(27.4355 0.0634766) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
