import Image, { StaticImageData } from 'next/image'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Next } from 'iconsax-react'
import React from 'react'

interface PlaylistSelectMini {
  playlist: {
    name: string
    id: string
    image: StaticImageData
    index: number
  }[]
  playListId: {
    name: string
    id: string
    image: StaticImageData
    index: number
  }
  handleSelectPlaylist: (playlist: {
    name: string
    id: string
    image: StaticImageData
    index: number
  }) => void
  miniPlayer: boolean
  handleNext: () => void
  playListIndex: number
}
export const PlaylistSelectMini = ({
  playlist,
  miniPlayer,
  handleSelectPlaylist,
  playListId,
  handleNext,
  playListIndex,
}: PlaylistSelectMini) => {
  const [isClosing, setIsClosing] = React.useState(false)
  const [showFullPlaylist, setShowFullPlaylist] = React.useState(false)

  const handleSwitch = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowFullPlaylist((prev) => !prev) // Toggle UI
      setTimeout(() => setIsClosing(false), 200) // Open after a short delay
    }, 500)
  }

  const nextPlayListIndex = playListIndex < 2 ? playListIndex + 1 : 0

  return (
    <motion.div
      className="h-[300px] w-[280px] overflow-hidden border flex flex-col justify-between border-[#FAFAFA]/10 backdrop-blur-[61.13px] rounded-[14px]"
      animate={
        isClosing || miniPlayer
          ? { clipPath: 'inset(50% 0 50% 0)' }
          : { clipPath: 'inset(0% 0% 0% 0%)' }
      }
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <p className="py-2 text-sm px-4 border-b border-b-[#FAFAFA]/10">
        SELECT PLAYLIST
      </p>

      {showFullPlaylist ? (
        <div className="text-center py-4 w-full ">
          <div className="flex items-center gap-4 px-4 overflow-x-auto scrollbar-hide">
            {playlist.map((playlist) => {
              return (
                <div key={playlist.id}>
                  <button
                    onClick={() => handleSelectPlaylist(playlist)}
                    className="min-w-[140px] h-[140px] relative rounded-[12px] overflow-hidden"
                  >
                    <Image
                      alt="cover"
                      src={playlist.image}
                      fill
                      draggable="false"
                    />
                  </button>
                  <div className="h-[28px] truncate bg-[#393939] text-[#FBF5ED80] text-sm flex items-center px-2 rounded-[8px] text-center w-full justify-center">
                    {playlist.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="py-8 text-center">
            <p className="text-sm">Now Playing</p>
            <p className="text-[24px] font-bold uppercase">{playListId.name}</p>
            <p className="text-sm">Mario</p>
          </div>
          <div className="px-4">
            <button
              onClick={() => handleNext()}
              type="button"
              className="px-5 text-start py-3 flex justify-between items-center w-full rounded-[14px] border border-[#FAFAFA]/10 hover:bg-white/10 transition-colors"
            >
              <div>
                <p className="text-sm">Next up</p>
                <p className="font-bold">{playlist[nextPlayListIndex]?.name}</p>
              </div>
              <Next className="text-white" variant="Bold" size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleSwitch}
        type="button"
        className="border-t flex items-center px-4 justify-between border-t-[#FAFAFA]/10 w-full py-[6px] text-sm"
      >
        <p>{!showFullPlaylist ? 'Choose a playlist' : 'Show Minified view'}</p>
        <ChevronDown className="text-white" size={16} />
      </button>
    </motion.div>
  )
}
