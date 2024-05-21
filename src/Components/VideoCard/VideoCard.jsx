import React from 'react' 

import './video.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const VideoCard = () => {
  return (
    <div className='bg-[#ffe0c2] pt-8 pb-16'>
        <div className='flex items-center justify-center '>

        <iframe 
         className='w-[350px] h-[400px] md:w-[900px] md:h-[500px]  video'
        src="https://www.youtube.com/embed/W5PRZuaQ3VM?si=zEOUPtyzriYnHCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>


        <div className=' md:flex items-center justify-center pt-8 mr-[8%] space-x-12 '>
            <div className='flex items-center space-x-8 bg-[#ffe7d1] p-4 ml-[12%] videoitem'>
            <div className='flex items-center space-x-2'>
            <CheckCircleOutlineIcon style={{ fontSize: 26,marginTop:4 }} />
                <div className='text-3xl font-bold'>30K</div>
            </div>
            <div className='text-lg'>

            Daily Thoughts
            </div>
            </div>

            <div className='flex items-center space-x-8 bg-[#ffe7d1] p-4 videoitem'>
            <div className='flex items-center space-x-2'>
            <CheckCircleOutlineIcon style={{ fontSize: 26,marginTop:4 }} />
                <div className='text-3xl font-bold'>25K</div>
            </div>
            <div className='text-lg'>

            Daily Blogs
            </div>
            </div>
            <div className='flex items-center space-x-8 bg-[#ffe7d1] p-4 videoitem'>
            <div className='flex items-center space-x-2'>
            <CheckCircleOutlineIcon style={{ fontSize: 26,marginTop:4 }} />
                <div className='text-3xl font-bold'>22K</div>
            </div>
            <div className='text-lg'>

            Daily Podcast
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default VideoCard
