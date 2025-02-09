import Image from 'next/image'

export const PlaylistCard = () => {
  return (
    <div className="h-[145px] w-[107px] flex flex-col gap-2">
      <div className="h-[107px] w-[107px] rounded-[5px] overflow-hidden relative">
        <Image
          src="/assets/home/playlistCard.png"
          alt="track-cover"
          fill
          draggable="false"
        />
      </div>
      <div className="rounded-[5px] bg-[#393939] h-[28px]"></div>
    </div>
  )
}
