import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { BigInfiniteRibbon, Icon, InfiniteRibbon } from '../Components'
import { ArrowRight } from 'iconsax-react'

const NAV_LINKS = [
  {
    id: 1,
    title: 'ABOUT US',
    href: '#about-us',
  },
  {
    id: 2,
    title: 'SERVICES',
    href: '#services',
  },
  {
    id: 3,
    title: 'PORTFOLIO',
    href: '#contact',
  },
  {
    id: 4,
    title: 'CONTACT US',
    href: '#contact-us',
  },
]

const SERVICES_AND_SOLUTIONS = [
  {
    name: 'COMPLETE BRANDING',
    description:
      'We help you create a unique and compelling brand identity that resonates with your target audience.',
    id: 1,
  },
  {
    name: 'CREATIVE WEB DEVELOPMENT',
    description:
      "We design and develop visually appealing and user-friendly websites that not only meet your functional needs but also align with your brand's aesthetic",
    id: 2,
  },
  {
    name: 'UI / UX DESIGNS',
    description:
      'Our UI/UX design services focus on creating intuitive, user-friendly, and aesthetically pleasing website designs. ',
    id: 3,
  },
  {
    name: 'APPLICATION DEVELOPMENT',
    description:
      'We offer custom software development services, helping you create tailored solutions to meet your specific needs.',
    id: 4,
  },
]

const PORTFOLIO = [
  {
    title: 'Feyzo! Signatures',
    tags: ['WEB DESIGN', 'BRANDING'],
    image: '',
  },
  {
    title: 'Rebrand — TheBrand ™',
    tags: ['WEB DESIGN', 'BRANDING'],
    image: '',
  },
]
const CONTACT_LINK = [
  {
    name: 'X',
    icon: <Icon id="x-icon" height="42" width="45" color="#E5E1E6" />,
    href: '#',
    id: 1,
  },
  {
    name: 'instagram',
    icon: <Icon id="instagram-icon" height="52" width="53" color="#E5E1E6" />,
    href: '#',
    id: 2,
  },
  {
    name: 'email',
    icon: '',
    href: '#',
    id: 3,
  },
]
const Page = () => {
  return (
    <div className=" text-white">
      <section className="relative h-[calc(100vh-100px)] w-screen">
        <div className="flex flex-col container justify-between h-full">
          <div className="flex flex-col h-full sm:flex-row sm:items-start sm:justify-between mt-[9px]">
            <div className="text-[13px] w-[238px] leading-[22.5px] text-center mx-auto sm:mr-auto sm:ml-0 sm:text-left">
              <p className="">
                Detail Dive is a multi-disciplinary agency focused on creating
                unique, end-to-end experiences and environments.
              </p>
              <p className="mt-6">
                We believe that every project is unique and deserves a
                personalized approach and that every detail counts.
              </p>
            </div>
            <div className="text-end text-[13px] text-gray-50 hidden sm:block">
              {NAV_LINKS.map((link, index) => {
                return (
                  <Link
                    className={clsx('block', index > 0 && 'mt-5')}
                    href={link.href}
                    key={link.id}
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
            <div className='flex items-center text-[80px]  mx-auto sm:w-auto sm:text-[170px] sm:-mt-[100px] sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:h-[494px] sm:absolute mt-2 w-[290px] justify-center h-full '>
            <div className="">
              <h1 className="tracking-[-0.12em] ml-5 sm:ml-0 sm:leading-[150px] text-primary">
                DETAIL
              </h1>
              <div className="flex items-end gap-3 ml-5 sm:ml-0 sm:gap-10 sm:my-8">
                <h1 className="tracking-[-0.12em] sm:leading-[130px] leading-[60px] text-primary">
                  DIVE
                </h1>
                <p className="rounded-full whitespace-nowrap text-[8px] sm:text-[13px] font-semibold sm:px-[14px] px-[7px] sm:py-[16px] py-[12px] border border-white-state text-white-state">
                  CREATIVE - DIGITAL
                </p>
              </div>
              <h1 className="tracking-[-0.12em] sm:leading-[150px] ml-[-20px] sm:ml-[-60px] text-primary">
                AGENCY<span className="text-primary inline sm:hidden"> .</span>
              </h1>
            </div>

            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-between mb-[60px]">
            <div className="text-[32px]">
              <p className="font-[600]">Design, Branding</p>
              <p className="italic">& Development</p>
            </div>
            <div className="h-[104px] relative min-h-[104px] w-[104px] min-w-[104px] perfect-circle">
              <Icon
                color="#E5E1E6"
                id="circular-text"
                height="104"
                width="104"
              />
              <div className="absolute rotate-[47.016deg] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ArrowRight variant="Linear" size={19.69} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px] container">
        <p className="font-semibold text-[13px] text-primary xl:text-left text-center">WHAT WE DO</p>
        <div className="text-[50px] sm:text-[128px] sm:leading-[120px] xl:-mt-[30px] mb-20">
          <div className="xl:pr-[300px] text-center xl:text-end">
            <h3 className=''>WE INSPIRE</h3>
            <h3>THE FUTURE OF <span className='sm:hidden'>BRANDS</span></h3>
          </div>
          <h3 className='text-center mt-[-80px] sm:mt-auto text-[50px] sm:text-[128px]'>
            <span className='hidden sm:contents'>BRANDS{' '}</span> 
            <br className='sm:hidden'/>
            <i className="font-normal text-[50px] sm:text-[120px]">
              <span className="text-primary">&</span> businesses
            </i>
          </h3>
        </div>
        <div className="md:w-[679px] sm:flex-row gap-8 flex-col text-center sm:text-left font-[400] grid-cols-2 text-white-state mx-auto leading-[26px] justify-between text-[13px] mt-4 sm:mt-8 flex items-start">
          <div className="mx-auto xs:w-[333px]">
            <p>
              based in Lagos, Nigeria <br /> & Working worldwide
            </p>
          </div>
          <div className="mx-auto xs:w-[333px]">
            <p className="">
              Detail Dive Agency was founded with the belief that every project
              is unique and deserves a personalized approach.
            </p>
            <p className="mt-5">
              We are dedicated to understanding your needs, goals, and
              aspirations, and we work closely with you to develop a solution
              that exceeds your expectations.
            </p>
          </div>
        </div>
      </section>
      <InfiniteRibbon />
      <section className="relative">
        <div className="container">
          <p className="font-semibold text-center sm:text-left text-[13px] text-primary mt-14">
            SERVICES AND SOLUTIONS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 relative -mt-[70px]">
            <div className=" perfect-circle z-[10] w-[50px] min-w-[50px] bg-black-state h-[50px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-[50px]">
              <div className="w-[14px] h-[14px] perfect-circle bg-primary" />
            </div>
            <div className="border-b border-b-gray-50 border-opacity-20 h-[1px] w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            {SERVICES_AND_SOLUTIONS.map((service, index) => {
              return (
                <div
                  className={clsx(
                    'h-[442px] flex items-center justify-center',
                    (index === 0 || index === 2) &&
                      'md:border-r border-b md:border-b-0 border-b-gray-50 md:border-r-gray-50 border-opacity-20 md:border-opacity-20'
                  )}
                  key={service.id}
                >
                  <div className="text-center">
                    <p className="text-20px w-[110px]">{service.name}</p>
                    {/* <p>{service.description}</p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="2xl:text-[260px] xl:text-[220px] lg:text-[180px] md:text-[120px] sm:text-[100px]  text-[60px] text-center tracking-[-0.12em] 2xl:leading-[180px]">
            PORTFOLIO <span className="hidden xs:inline">.</span>
          </h3>
        </div>
        <div className="w-screen mt-36 overflow-x-hidden mb-14">
          <div className="flex items-center w-[110%] mx-auto justify-end gap-8">
            {PORTFOLIO.map((item, index) => {
              return (
                <div key={index} className="w-[627px] min-w-[627px]">
                  <div className="w-[627px] h-[435px] rounded-[10px] bg-gray-450"></div>
                  <div className="w-full flex items-center justify-between mt-4">
                    <p className="text-[15px]">{item.title}</p>
                    <div className="flex items-center gap-2">
                      {item.tags.map((tag, index) => {
                        return (
                          <div
                            key={index}
                            className="rounded-full text-[13px] px-[9px] py-[7px] border border-primary"
                          >
                            {tag}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <BigInfiniteRibbon />
      <section>
        <div className="grid w-screen md:px-10 px-0 sm:w-full max-w-[1440px] mx-auto grid-cols-2 xl:grid-cols-4">
          <div className="h-[513px] flex justify-between pt-16 pb-12 border-b border-b-gray-50 border-opacity-20 flex-col pl-8 xl:border-x border-r border-x-gray-50">
            <div className="flex items-start">
              <p className="font-[500] text-[28px] sm:text-[38px] md:text-[50px]">
                Say <i className="font-[300]">Hello</i>
              </p>
              <div className="rotate-[-47.02deg]">
                <ArrowRight size={30.55} color="#E5E1E6" variant="Linear" />
              </div>
            </div>
            <div className="sm:w-[236px] relative">
              <div className="perfect-circle h-[28px] w-[28px] bg-primary absolute top-0 -left-2"></div>
              <h3 className="relative z-[5] font-[600] text-sm sm:text-head-100">
                BEGIN YOUR JOURNEY WITH US!
              </h3>
              <p className="text-[13px] leading-[28px] text-white-state font-[300] mt-4">
                We believe that every project is unique and deserves a
                personalized approach and that every detail counts.
              </p>
            </div>
          </div>
          {CONTACT_LINK.map((link, index) => {
            return (
              <div
                className={clsx(
                  'h-[513px] px-8 flex justify-between w-full pt-16 pb-12 flex-col  border-r-gray-50 border-opacity-20 border-b border-b-gray-50', index == 2 ? 'border-r-0 xl:border-r' : index === 0 ? 'border-r-0 xl:border-r' : 'border-r'
                )}
                key={index}
              >
                {index === 2 ? (
                  <img
                    src="/assets/home/envelope-love.svg"
                    alt=""
                    className="w-[53px] h-[53px]"
                  />
                ) : (
                  <div>{link.icon}</div>
                )}
                <div className="rotate-[-47.02deg] h-[57.55px] ml-auto w-[57.55px]">
                  <ArrowRight size={57.55} color="#E5E1E6" variant="Linear" />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Page
