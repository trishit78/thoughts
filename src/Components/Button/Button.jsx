import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const ButtonCard = ({name,color1,iconColor}) => {

  const buttonClass = `bg-${color1?color1:'black'} font-semibold p-2 pr-4 pl-4 text-${color1?"black":'white'} rounded-full`
  const border = `p-3 border border-${color1?color1:'black'} rounded-full `
  
  return (
    <div className='flex items-center justify-center -space-x-2'>
      <button className={buttonClass}>{name}</button>
        <div className={border}>
        <FaLongArrowAltRight
         color={iconColor ? iconColor : 'black'}
        
        />
        </div>
    </div>
  )
}

export default ButtonCard

