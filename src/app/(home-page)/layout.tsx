'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

import { MusicPlayer } from '../features/music/components/MusicPlayer'
import Cursor from '../Components/Elements/Cursor'
import { AssetsLoadedAtom } from '../store'
import Loader from '../Components/Loader'

interface WebsiteLayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  const isAssetsLoaded = useAtomValue(AssetsLoadedAtom)

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
      locomotiveScroll
    })()
  }, [])

  // Ref for drag constraints
  const constraintsRef = useRef(null)

  // State to store position
  const [position, setPosition] = useState({ x: 50, y: 50 })
  position

  useEffect(() => {
    const handleScroll = () => {
      setPosition((prev) => ({ x: prev.x, y: window.scrollY + 50 })) // Adjust offset
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black-state root-container relative select-none">
      <Cursor />
      {!isAssetsLoaded.isAssetsLoaded && <Loader />}
      {isAssetsLoaded.isAssetsLoaded && <div className="">{children}</div>}

      <motion.div
        ref={constraintsRef}
        className="fixed inset-0 z-[-1]"
      ></motion.div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={true}
        dragTransition={{
          power: 0.1,
          timeConstant: 300,
        }}
        className="fixed top-[500px] left-10 w-[567px] flex items-center"
      >
        <MusicPlayer />
      </motion.div>
    </div>
  )
}

export default Layout
