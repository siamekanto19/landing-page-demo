import React from 'react'

const TopBanner = () => {
  return (
    <div
      style={{ background: 'linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)' }}
      className='w-screen h-[76px] lg:h-[46px] fixed top-0 lg:static z-30 flex items-center text-center justify-center text-white font-extrabold text-[16px] lg:text-[22px]'
    >
      <div className='x-container'>
        <span className='text-[hsl(184,100%,49%)]'>
          🚀 FRESH BEGINNINGS SALE:
        </span>{' '}
        Extra 25% OFF, Limited Spots - start your journey today!
      </div>
    </div>
  )
}

export default TopBanner
