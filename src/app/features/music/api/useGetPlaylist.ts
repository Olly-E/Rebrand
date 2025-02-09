import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { PLAYLIST_ID } = process.env // Add your playlist ID in .env.local

  const tokenRes = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/spotify-token`
  )
  
  const { access_token } = await tokenRes.json()

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  const data = await response.json()
  res.status(200).json(data)
}
