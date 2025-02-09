import { Expand } from 'lucide-react'
import React from 'react'
import clsx from 'clsx'

import FullPlayer from './FullPlayer'
import { StaticImageData } from 'next/image'

interface MusicPlayerProps {
  playListId: {
    name: string
    id: string
    image: StaticImageData
  }
  miniPlayer: boolean
  setMiniPlayer: React.Dispatch<React.SetStateAction<boolean>>
}
export const MusicPlayer = ({
  playListId,
  setMiniPlayer,
  miniPlayer,
}: MusicPlayerProps) => {
  const NAV_LINKS = [
    {
      name: 'About',
      id: 'about',
      href: '#about',
    },
    {
      name: 'Services',
      id: 'services',
      href: '#services',
    },
    {
      name: 'Project',
      id: 'project',
      href: '#project',
    },
  ]

  const handleSwitchPlayerSize = () => {
    setMiniPlayer(!miniPlayer)
  }

  return (
    <div className="flex gap-1 items-start">
      <div
        className={clsx(
          'overflow-hidden transition-all',
          miniPlayer ? 'h-[130px] w-[450px]' : 'h-[500px] w-[450px]'
        )}
      >
        <FullPlayer
          navLinks={NAV_LINKS}
          miniPlayer
          playListId={playListId.id}
        />
      </div>

      <button
        onClick={handleSwitchPlayerSize}
        type="button"
        className="w-[24px] h-[24px] bg-[#050505]/50 overflow-hidden border border-[#FAFAFA]/10 backdrop-blur-[61.13px] flex items-center justify-center rounded-[5px]"
      >
        <Expand size={14} color="#FBF5ED" />
      </button>
    </div>
  )
}
