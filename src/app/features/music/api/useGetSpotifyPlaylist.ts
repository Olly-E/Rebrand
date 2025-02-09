'use client'

import { useState, useEffect } from 'react'

export function useGetSpotifyPlaylist(playlistId: string) {
  const [playlist, setPlaylist] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        setLoading(true)
        const res = await fetch(`/api?playlistId=${playlistId}`)
        if (!res.ok) throw new Error('Failed to fetch playlist')
        const data = await res.json()
        setPlaylist(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError(String(err))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPlaylist()
  }, [playlistId])

  return { playlist, loading, error }
}
