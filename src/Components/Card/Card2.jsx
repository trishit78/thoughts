import React from 'react'
import Avatar from "@mui/material/Avatar";
import { FaHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import img1 from '../../../public/image2.png'

const Card2 = ({photo,name, title, text, ig_count,category,img,
  repost,
  share,
  date}) => {

    console.log(img)



  return (
    <div>
        <div className=" rounded-xl  bg-white  p-4">
          <div className="flex justify-between items-center">
            <div className="flex ">
              <Avatar
                alt="Remy Sharp"
                src={photo}
                sx={{ width: 40, height: 40 }}
              />
              <div className='ml-1'>
                <div className="flex  space-x-2 items-center">
                  <h1 className='font-bold'> {name}</h1>
                  <img
                    className="h-4 w-4 "
                    src="https://cdn-icons-png.freepik.com/512/7641/7641727.png"
                    alt=""
                  />
                </div>
                <p className='text-sm text-gray-500'>{title}</p>
              </div>
            </div>

            <div className='flex items-center'> 
                <div className='text-sm p-1 rounded-xl pr-2 pl-2 bg-slate-200'>{category}</div>
            <BsThreeDotsVertical />
            </div>
          </div>

          <h1 className="mt-4">{text}</h1>


          {img && (
          <img
            src={img}
            className="rounded-xl mt-4 h-[15rem] w-full"
            alt=""
          />
        )}

            
            
          
          
          <hr className="border-t border-gray-300 mt-8" />


        <div className="flex items-center justify-between">
          <div className="flex space-x-3 mt-2 ">

          <div className="flex items-center">
          <FaHeart 
          className="mt-1 mr-1"
          color="red"/>
          <p>{ig_count}</p>
          </div>
          <div className="flex items-center">
          <BiRepost
          className="mt-1 mr-1"
          color="gray"
          size={25}/>
          <p>{repost}</p>
          </div>
          <div className="flex items-center">
          <IoIosShareAlt
          className='mr-1'
          color="gray"
          size={23}/>
          <p>{share}</p>
          </div>
          </div>
          <div className="text-sm font-semibold text-gray-600">{date}</div>
        </div>




        </div>
      
    </div>
  )
}

export default Card2
