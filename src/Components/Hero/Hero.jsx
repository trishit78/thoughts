import React from 'react' 
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './hero.css'
import ButtonCard from '../Button/Button';
const Hero = () => {
  return (
    <div className='bg-[#ffe0c2] pt-10'>
      <div className='flex-col -space-y-10 ' >

      
       <div className='text-[#995d29] text-center   kalam-regular text-4xl  '
      
       >Share Your Independent Thoughts!!</div>
        <div className='text-center '>
            <h1 className='text-[#1b181f] text-5xl md:text-9xl font-bold'>WHERE EVERY</h1>
            <h1 className='text-[#1b181f] text-5xl md:text-9xl font-bold'>THOUGHT IS</h1>
                <h1 className=' text-[#1b181f] text-5xl md:text-9xl font-bold'>HEARD.</h1>
        </div> 
        </div>  
    
    
        <div className='flex justify-center items-center '>
    <div className='flex items-center justify-center mt-8 space-x-3 pt-1 pb-1 pr-2 pl-2 rounded-full bg-[#ffe7d1] w-30% '>
    <AvatarGroup 
    
    max={6}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1310524/pexels-photo-1310524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      sx={{ width: 32, height: 32 }}
      />
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
      sx={{ width: 32, height: 32 }}
      /><Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      sx={{ width: 32, height: 32 }}
      />
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
      sx={{ width: 32, height: 32 }}
      />
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      sx={{ width: 32, height: 32 }}
      />
    </AvatarGroup>

    <div>+100K WorldWide users</div>
    </div>
    </div>


    <div className='text-center mt-8'>
        <p>Introducing Thoughts-Where every voice and every thought can be shared effortlessly via tweets or in form of engaging blogs</p>

    </div>

    <div className='text-center mt-8 '>

    <ButtonCard name={"GET STARTED"} />
    </div>
    
    </div>
  )
}

export default Hero
