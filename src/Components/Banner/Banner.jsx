import React from 'react'
import ButtonCard from '../Button/Button'

const Banner = () => {
  return (
    <div className='bg-[#1b181f] pt-12 pb-12'>
        <div className='text-center text-5xl md:text-7xl font-bold text-[#ffe0c2]'>COLLECT STORIES & SEEK</div>
        <div className='text-center text-5xl md:text-7xl font-bold text-[#ffe0c2]'>INSPIRATIONS!</div>
        <div className='mt-10'>
            <ButtonCard
            name={'SIGN UP NOW'}
            color1={'[#ffe0c2]'}
            iconColor={'#ffe0c2'}
            />
        </div>
    </div>
  )
}

export default Banner
