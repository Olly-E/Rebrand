import { Rotate as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

export const Navbar = () => {
  const NAV_LINKS = [
    {
      id: 1,
      title: 'OUR VALUES',
      href: '#our-values',
    },
    {
      id: 2,
      title: 'SERVICES',
      href: '#services',
    },
    {
      id: 3,
      title: 'TEMPLATES',
      href: '#templates',
    },
    {
      id: 4,
      title: 'PROJECTS',
      href: '#projects',
    },
    {
      id: 5,
      title: 'REACH-OUT',
      href: '#reach-out',
    },
  ]

  const [isOpen, setOpen] = React.useState(false)

  return (
	<>
    <nav className="w-[295px] font-[300] hidden sm:flex justify-end items-center gap-x-8 gap-y-2 flex-wrap">
      <div>
      </div>
      {NAV_LINKS.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={clsx('text-sm text-gray-50')}
          >
            {link.title}
          </Link>
        )
      })}
    </nav>
	<div className="sm:hidden block">
	<Hamburger toggled={isOpen} toggle={setOpen} />

	</div>
	</>
  )
}

export default Navbar
