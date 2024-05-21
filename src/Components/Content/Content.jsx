import React from 'react'
import ButtonCard from '../Button/Button'

const Content = () => {
  return (
    <div className='bg-[#ffe0c2] pt-8 pb-16  md:flex space-x-4'>
      <div className='w-full md:w-[30%] mt-16 md:ml-[8%]'>
        <div className='text-6xl text-center md:text-left font-bold'>IMMERSE IN</div>
        <div  className='text-6xl font-bold text-center md:text-left'>ENGAGING</div>
        <div  className='text-6xl font-bold text-center md:text-left'>CONTENT</div>
        <div className='mt-4'>
            <h1 className='text-xl text-center md:text-left'>Dive into the ocean of content from thought provoking ideas, in depth blogs and insightful podcasts.</h1>
        </div>
        <div className='flex justify-center md:justify-start  mt-8'>
        <ButtonCard name={'EXPLORE NOW'} />
        </div>
      </div>
      <div className='md:w-[55%] mt-4 md:mt-0'>
      <div className='flex items-center justify-center '>

<iframe 
 className='w-[350px] h-[400px] md:w-[900px] md:h-[500px]  video'
src="https://www.youtube.com/embed/W5PRZuaQ3VM?si=zEOUPtyzriYnHCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
      </div>
    </div>
  )
}

export default Content
