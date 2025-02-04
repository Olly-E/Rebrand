import Lottie from 'lottie-react'
import React from 'react'

import rebrandAnim from '../../../public/assets/home/rebrandAnim.json'

export const OurValuesAnimation = () => {
  return (
    <div className="h-[464px] w-[464px] bg-black">
      {' '}
      {/* Adjust size as needed */}
      <Lottie animationData={rebrandAnim} loop={true} />
    </div>
  )
}
