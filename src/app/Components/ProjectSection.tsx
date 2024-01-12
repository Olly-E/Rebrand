import clsx from 'clsx'
import React from 'react'

export const ProjectSection = () => {
  const PROJECT_CONTENT_DATA = [
    {
      name: 'CARTIZN',
      category: 'BRANDING/WEB DESIGN/DEVELOPMENT',
      img: '/assets/home/project1.png',
    },
    {
      name: 'DETAIL DIVE',
      category: 'BRANDING/WEB DESIGN',
      img: '/assets/home/project2.png',
    },
    {
      name: 'FUTURE FORGE LABS',
      category: 'BRAND LOGO CONCEPT',
      img: '/assets/home/project3.png',
    },
    {
      name: 'THELLY’S DELIGHT',
      category: 'BRANDING',
      img: '/assets/home/project4.png',
    },
  ]

  return (
    <div className="relative min-h-[1344px] h-full pt-[100px] w-full">
      <div>
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[20%]" />
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[40%]" />
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[60%]" />
        <div className="h-full w-[1px] border-r border-opacity-20 border-r-white-state absolute top-0 left-[80%]" />
      </div>
      <div className="text-head-300 ">
        <p className="mt-14 text-center text-[16px] font-bold">OUR CLIENTS</p>
        <h4
          className="mt-14 text-center block mx-auto w-[768px] text-[64px] font-bold"
          data-animation="header"
        >
          BRANDS WE&apos;VE WORKED WITH
        </h4>

        <div className="grid grid-cols-4 relative z-10 mt-32">
          {PROJECT_CONTENT_DATA.map((data, index) => {
            return (
              <div
                className={clsx(
                  '',
                  (index === 1 || index === 3) && 'translate-y-[462px]'
                )}
                key={data.name}
              >
                <img src={data.img} alt="project-img" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
