'use client'

const SpotifyPlayer = () => {

  return (
    <div>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/7xtp2a8SL3xDKAQJ90t0qO?utm_source=generator"
        width="100%"
        height="352"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default SpotifyPlayer
