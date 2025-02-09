import React, { useState, useEffect } from 'react'
import { AssetsLoadedAtom } from '../store'
import { useSetAtom } from 'jotai'

export const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const setIsAssetsLoaded = useSetAtom(AssetsLoadedAtom)

  useEffect(() => {
    const assets = [
      '/assets/home/a-letter.svg',
      '/assets/home/b-letter.svg',
      '/assets/home/brand-logo.png',
      '/assets/home/diagonal.svg',
      '/assets/home/diagonal2.svg',
      '/assets/home/e-letter.svg',
      '/assets/home/n-letter.svg',
      '/assets/home/pokadot.svg',
      '/assets/home/pokadot2.svg',
      '/assets/home/project1.png',
      '/assets/home/project2.png',
      '/assets/home/project3.png',
      '/assets/home/project4.png',
      '/assets/home/r-letter.svg',
      '/assets/home/the-brand.svg',
    ]

    const totalAssets = assets.length - 1
    let loadedAssets = 0

    const checkAssetsLoaded = () => {
      loadedAssets += 1
      if (loadedAssets === totalAssets) {
        setTimeout(() => {
          setIsAssetsLoaded({ isAssetsLoaded: true })
        }, 1000)
      }
    }

    const updateLoadingProgress = () => {
      const progress = (loadedAssets / totalAssets) * 100
      setLoadingProgress(progress)
    }

    const loadAssets = () => {
      assets.forEach((path) => {
        const img = new Image()
        img.onload = () => {
          updateLoadingProgress()
          checkAssetsLoaded()
        }
        img.onerror = (error) => {
            console.error(`Error loading asset: ${path}`, error)
          checkAssetsLoaded()
        }
        img.src = path
      })
    }

    loadAssets()
  }, [setIsAssetsLoaded])

  return (
    <div className="h-screen relative z-[999999]">
      <p className="absolute bottom-0 text-[100px] pl-2">
        {Math.min(loadingProgress, 100).toFixed(0).padStart(3, '0')}%
      </p>
    </div>
  )
}