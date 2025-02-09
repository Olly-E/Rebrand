import Link from 'next/link'
import React from 'react'


interface FullPlayerProps {
  navLinks: {
    id: string
    name: string
    href: string
  }[]
  miniPlayer: boolean
  playListId: string
}

const FullPlayer = ({ navLinks, playListId }: FullPlayerProps) => {
  return (
    <div className=" bg-[#050505]/50 h-full w-full overflow-hidden border border-[#FAFAFA]/10 backdrop-blur-[61.13px] rounded-[14px] px-2 pb-2">
      <div className="flex items-center gap-6 py-3 w-full justify-center">
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
      <div className="rounded-[12px] h-full select-none">
        <iframe
          style={{ borderRadius: '12px', userSelect: 'none' }}
          className="select-none"
          src={`https://open.spotify.com/embed/playlist/${playListId}?utm_source=generator`}
          width="100%"
          height="92%"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      {/* <PlaylistFull /> */}
    </div>
  )
}

export default FullPlayer
