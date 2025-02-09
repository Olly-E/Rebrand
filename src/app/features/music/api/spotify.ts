export async function getSpotifyPlaylist(playlistId: string) {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret || !playlistId) {
    console.error('❌ Missing required credentials or playlist ID.')
    throw new Error('Missing Spotify credentials or playlist ID.')
  }

  console.log('✅ Getting Spotify access token...')

  // Step 1: Get Access Token
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  })

  if (!tokenResponse.ok) {
    console.error('❌ Failed to fetch Spotify access token.')
    throw new Error('Failed to get Spotify access token.')
  }

  const { access_token } = await tokenResponse.json()
  console.log(
    '✅ Got Spotify access token:',
    access_token ? 'SUCCESS' : 'FAILED'
  )

  // Step 2: Fetch Playlist Data
  console.log(`✅ Fetching playlist: ${playlistId}`)
  const playlistResponse = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  )

  if (!playlistResponse.ok) {
    console.error(
      `❌ Failed to fetch playlist. Status: ${playlistResponse.status}`
    )
    const errorText = await playlistResponse.text()
    console.error('Spotify API Error:', errorText)
    throw new Error('Failed to fetch playlist data from Spotify.')
  }

  const playlistData = await playlistResponse.json()
  console.log('✅ Playlist fetched successfully:', playlistData.name)

  return playlistData
}
