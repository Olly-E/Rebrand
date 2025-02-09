import { Next, Previous } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PlayButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.0004V8.44038C4 4.02038 7.13 2.21038 10.96 4.42038L14.05 6.20038L17.14 7.98038C20.97 10.1904 20.97 13.8104 17.14 16.0204L14.05 17.8004L10.96 19.5804C7.13 21.7904 4 19.9804 4 15.5604V12.0004Z"
        fill="#FBF5ED"
        fillOpacity="0.5"
      />
    </svg>
  )
}

interface MiniPlayerProps {
  navLinks: {
    id: string
    name: string
    href: string
  }[]
}
const MiniPlayer = ({ navLinks }: MiniPlayerProps) => {
  return (
    <div className="w-full h-full bg-[#050505]/50 overflow-hidden border border-[#FAFAFA]/10 backdrop-blur-[61.13px] rounded-[5px]">
      <div className="h-[82px] justify-between flex items-center pl-2 pr-4">
        <div className="relative h-[64px] w-[64px] rounded-[5px] overflow-hidden select-none">
          <Image
            src="/assets/home/music.png"
            alt="song-cover"
            fill
            draggable="false"
          />
        </div>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            return (
              <Link
                className="font-resolve text-[11px] uppercase"
                key={link.id}
                href={link.href}
                draggable="false"
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-2">
          <button type="button">
            <Previous size={24} color="#FBF5ED80" variant="Bold" />
          </button>

          <button type="button">
            <PlayButton />
          </button>
          <button type="button">
            <Next size={24} color="#FBF5ED80" variant="Bold" />
          </button>
          <div className="min-w-[24px] ml-2">
            <Image
              src="/assets/home/youtubeMusic.svg"
              alt="song-cover"
              width={24}
              height={24}
              draggable="false"
            />
          </div>
        </div>
      </div>
      <div className="h-[36px] w-full border-t-[#FAFAFA]/10 border-t text-[13px] flex items-center justify-between px-4">
        <p className="">R—TB 🎷</p>
        <p>Afrò Invasion 🦍</p>
        <p>Love, Mario 🥀</p>
      </div>
    </div>
  )
}

export default MiniPlayer
