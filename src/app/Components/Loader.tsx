import React, { useState, useEffect } from 'react'
import { AssetsLoadedAtom } from '../store'
import { useAtom } from 'jotai'

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [, setIsAssetsLoaded] = useAtom(AssetsLoadedAtom)

  useEffect(() => {
    const assets = [
      require('../../../public/assets/home/a-letter.svg'),
      require('../../../public/assets/home/b-letter.svg'),
      require('../../../public/assets/home/brand-logo.png'),
      require('../../../public/assets/home/diagonal.svg'),
      require('../../../public/assets/home/diagonal2.svg'),
      require('../../../public/assets/home/e-letter.svg'),
      require('../../../public/assets/home/n-letter.svg'),
      require('../../../public/assets/home/pokadot.svg'),
      require('../../../public/assets/home/pokadot2.svg'),
      require('../../../public/assets/home/project1.png'),
      require('../../../public/assets/home/project2.png'),
      require('../../../public/assets/home/project3.png'),
      require('../../../public/assets/home/project4.png'),
      require('../../../public/assets/home/r-letter.svg'),
      require('../../../public/assets/home/the-brand.svg'),
    ]

    const totalAssets = assets.length
    let loadedAssets = 0

    const checkAssetsLoaded = () => {
      loadedAssets += 1
      if (loadedAssets === totalAssets) {
        setIsAssetsLoaded({ isAssetsLoaded: true })
      }
    }

    const updateLoadingProgress = () => {
      const progress = (loadedAssets / totalAssets) * 100
      setLoadingProgress(progress)
    }

    const loadAsset = (path: string) => {
      const img = new Image()
      img.onload = () => {
        loadedAssets += 1
        updateLoadingProgress()
        checkAssetsLoaded()
      }
      img.onerror = (error) => {
        console.error(`Error loading asset: ${path}`, error)
        checkAssetsLoaded()
      }
      img.src = path
    }

    assets.forEach((path) => loadAsset(path))
  }, [setIsAssetsLoaded])

  return (
    <div className="h-screen">
      <p className="absolute bottom-0 text-[100px] pl-2">
        {Math.min(loadingProgress, 100).toFixed(0).padStart(3, '0')}%
      </p>
    </div>
  )
}

export default Loader
