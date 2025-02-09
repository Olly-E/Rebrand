import { NextResponse } from 'next/server'
import { getSpotifyPlaylist } from '../features/music/api/spotify'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const playlistId = searchParams.get('playlistId')

    if (!playlistId) {
      console.error('❌ Missing playlist ID in request.')
      return NextResponse.json(
        { error: 'Missing playlist ID' },
        { status: 400 }
      )
    }

    console.log('✅ Fetching playlist for ID:', playlistId)

    const playlist = await getSpotifyPlaylist(playlistId)

    console.log('✅ Successfully fetched playlist:', playlist?.name)

    return NextResponse.json(playlist)
  } catch (error) {
    console.error('❌ Error fetching playlist:', error)
    return NextResponse.json(
      { error: 'Failed to fetch playlist' },
      { status: 500 }
    )
  }
}
