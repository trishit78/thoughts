import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from '../../../public/image1.png'
import ButtonCard from '../Button/Button';
const Feature = () => {
  return (
    <div className='bg-[#1b181f] pb-16'>
        <div className=' pt-16 pb-16 '>
            <div className='text-5xl md:text-9xl font-bold text-center text-[#fde1c2]'>FEATURES WITH</div>
            <div className='text-5xl md:text-9xl font-bold text-center text-[#fde1c2]'>MORE WONDERS</div>
        </div>

        <div className=' '>
            <div className=' md:flex md:space-x-8 ml-[8%] mr-[8%]' >

            <div className='   md:w-[40%] '>
            <div className='   mb-6  flex justify-between'>
                <div className='text-2xl font-semibold text-[#fde1c2]'>THOUGHTS SHARING</div>
                {/* <div className='flex items-center '> */}
                <div className='p-3 border border-[#fde1c2] rounded-full'>
                <FaLongArrowAltRight
                color='#fde1c2'
                />
                 </div>
                {/* </div> */}
            </div>
            
            
            <div className=' mb-6  p-1 pl-2 pr-2 rounded-xl flex justify-between bg-white'>
                <div className='text-2xl font-semibold text-black'>PERSONALISED BLOG</div>
                <div className='flex items-center '>
                <div className='p-3  border border-black rounded-full'>
                <FaLongArrowAltRight
                
                />
                 </div>
                </div>
            </div>
            
            <div className=' mb-6  flex justify-between'>
                <div className='text-2xl font-semibold text-[#fde1c2]'>PODCAST LISTENING</div>
                <div className='flex items-center '>
                <div className='p-3 border border-[#fde1c2] rounded-full'>
                <FaLongArrowAltRight
                color='#fde1c2'
                />
                 </div>
                </div>
            </div>
            <div className=' mb-6  flex justify-between'>
                <div className='text-2xl font-semibold text-[#fde1c2]'>LISTEN WITH AUDIO</div>
                <div className='flex items-center '>
                <div className='p-3 border border-[#fde1c2] rounded-full'>
                <FaLongArrowAltRight
                color='#fde1c2'
                />
                 </div>
                </div>
            </div>
            <div className=' mb-6  flex justify-between'>
                <div className='text-2xl font-semibold text-[#fde1c2]'>CYBERGAURD SECURITY</div>
                <div className='flex items-center '>
                <div className='p-3 border border-[#fde1c2] rounded-full'>
                <FaLongArrowAltRight
                color='#fde1c2'
                />
                 </div>
                </div>
            </div>


            </div>
            










            <div className='md:w-2/3 bg-white rounded-3xl'>
                <div className=' md:flex space-x-6' >
                    <img
                    className=' ml-4 mt-6 rounded-2xl h-[18rem]'
                    src={img1} alt="" />
                    <div className='mt-6 pr-4'>
                        <p className='text-xl'>
                        Lorem ipsum dolexercitationem laudantium deleniti maiores quasi harum velit impedit, quia doloribus voluptatibus est neque, vero minima facilis iste? Commodi vero quisquam expedita quasi suscipit iure consectetur, ea deserunt vel. Dignissimos tempora dicta, cum debitis omnis magnam assumenda nihil porro, placeat saepe harum dolore rem
                        </p> 
                        <div className='mt-6 flex justify-end'>

                        <ButtonCard name={"TRY NOW"} />
                        </div>
                        </div>
                </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Feature
