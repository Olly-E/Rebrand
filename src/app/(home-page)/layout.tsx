'use client'
import React, { useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

import { PlaylistSelectMini } from '../features/music/components/PlaylistSelectMini'
import { MusicPlayer } from '../features/music/components/MusicPlayer'
import Cursor from '../Components/Elements/Cursor'
import { AssetsLoadedAtom } from '../store'
import { Loader } from '../Components/Loader'

import afro_invasion from '../../../public/assets/home/afro_invasion.png'
import love_mario from '../../../public/assets/home/love_mario.png'
import r_tb from '../../../public/assets/home/r_tb.png'
import clsx from 'clsx'

interface WebsiteLayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  const MARIO_PLAY = [
    {
      name: 'Love, Mario 🥀',
      id: '4irpbgsZR9u2RngHG2QF7D',
      image: love_mario,
      index: 0,
    },
    {
      name: 'Afrò Invasion 🦍',
      id: '5myzcwc8yPptLhR1xKW8ZS',
      image: afro_invasion,
      index: 1,
    },
    {
      name: 'R—TB 🎷',
      id: '4FwgLGPvWtxdYI0iNjeEd9',
      image: r_tb,
      index: 2,
    },
  ]

  const [playListId, setPlayListId] = React.useState(MARIO_PLAY[0])
  const [miniPlayer, setMiniPlayer] = React.useState(true)
  const [playListIndex, setPlayListIndex] = React.useState(0)

  const handleSelectPlaylist = (playlist: {
    name: string
    id: string
    image: StaticImageData
    index: number
  }) => {
    setPlayListId(playlist)
    setPlayListIndex(playlist.index)
  }

  const handleNext = () => {
    if (playListIndex > 1) {
      setPlayListIndex(0)
      setPlayListId(MARIO_PLAY[0])
    } else {
      setPlayListIndex(playListIndex + 1)
      setPlayListId(MARIO_PLAY[playListIndex + 1])
    }
  }

  console.log(playListIndex)

  const isAssetsLoaded = useAtomValue(AssetsLoadedAtom)

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
      locomotiveScroll
    })()
  }, [])

  const constraintsRef = useRef(null)

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
      {isAssetsLoaded.isAssetsLoaded && (
        <div className="bg-black">{children}</div>
      )}

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
        className={clsx(
          'top-[150px] left-10 flex items-center gap-4 z-[1]',
          isAssetsLoaded.isAssetsLoaded ? 'fixed' :'hidden' 
        )}
      >
        <MusicPlayer
          playListId={playListId}
          miniPlayer={miniPlayer}
          setMiniPlayer={setMiniPlayer}
        />
        <PlaylistSelectMini
          playlist={MARIO_PLAY}
          handleSelectPlaylist={handleSelectPlaylist}
          miniPlayer={miniPlayer}
          playListId={playListId}
          handleNext={handleNext}
          playListIndex={playListIndex}
        />
      </motion.div>
    </div>
  )
}

export default Layout
