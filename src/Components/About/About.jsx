import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./about.css";
import ButtonCard from "../Button/Button";

import HorizontalScroll from "../Scroll/HorizontalScroll";

// import pic1 from '../../../public/pic1.jpeg'
// import pic2 from '../../../public/pic2.jpeg'
// import pic3 from '../../../public/pic3.jpeg'
// import pic4 from '../../../public/pic4.webp'

// const HorizontalScroll = () => {
//     const [items, setItems] = useState([
//       {
//           //photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
//           photo1:pic1,
//           name: "Albert Kyle",

//         text:
//           "Thoughts is a platform that gives voice to the voiceless in a metaphorical sense.I've been here for 1 and a half years and I've sucessfully changed the lives of many through my thoughts about life as a whole",
//           star:4.0,
//           thoughts:'36K',
//           blogs:'189',
//           podcasts:'122'
//       },
//       {
//           //photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
//           photo1:pic2,
//           name: "John Martin",

//         text:
//           "I've been using Thoughts to cpature my journey and share it with others.It's tremendously wonderful to see how my ideas connect with people from all areas of life.Thank you,Thoughts, for encouraging ",
//           star:4.0,
//           thoughts:'22K',
//           blogs:'89',
//           podcasts:'161'
//       },

//       {
//          // photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//          photo1:pic3,
//           name: "Lucas Ryan",
//           text:
//           "Thoughts is a platform that gives voice to the voiceless in a metaphorical sense.I've been here for 1 and a half years and I've sucessfully changed the lives of many through my thoughts about life as a whole",
//           star:3.0,
//           thoughts:'36K',
//           blogs:'189',
//           podcasts:'122'
//       },
//       {
//           //photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//           photo1:pic4,
//           name: "Cally Yuri",
//           text:
//           "I've been using Thoughts to cpature my journey and share it with others.It's tremendously wonderful to see how my ideas connect with people from all areas of life.Thank you,Thoughts, for encouraging ",
//           star:4.0,
//           thoughts:'22K',
//           blogs:'89',
//           podcasts:'161'
//       },
//   ]);

//     const fetchMoreData = () => {
//       // Simulate fetching more data
//       setTimeout(() => {
//         setItems(items.concat(Array.from({ length: 4 })));
//       }, 1500);
//     };

//     return (
//       <div className="mt-12 pl-[8%] flex overflow-x-scroll hide-scrollbar">
//         <InfiniteScroll
//           dataLength={items.length}
//           next={fetchMoreData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//           horizontal={true}
//           className="flex space-x-4"
//           scrollableTarget="scrollableDiv"
//         >
//           {items.map((e, index) => {
//             // console.log(e.photo)
//             return(
//             <div key={index} className="flex w-[29rem] bg-gray-100 rounded-xl ">
//               <img
//                 className="h-[15rem] m-4 w-[10rem] rounded-xl"
//                 src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//                 alt=""
//               />
//               <div className="mt-3">
//                 <div className="flex">
//                 <p>{parseFloat(e.star)}</p>
//                   <div className='flex'>
//                   {
//                     Array(e.star).fill().map((_,i)=>(
//                         <p>⭐</p>
//                     ))
//                 }
//                   </div>

//                 </div>
//                 <p className="mt-2">
//                  {e.text}
//                 </p>
//                 <div className="flex space-x-4 mt-4 mb-4">
//                   <div className='bg-white p-2'>
//                     <h1 className='text-center font-bold text-2xl text-gray-700'>{e.thoughts}</h1>
//                     <p className='text-sm text-gray-600'>Thoughts</p>
//                   </div>

//                   <div className='bg-white p-2'>
//                     <h1 className='text-center font-bold text-2xl text-gray-700'>{e.blogs}</h1>
//                     <p className='text-sm text-gray-600 text-center' >Blogs</p>
//                   </div>
//                   <div className='bg-white p-2'>
//                     <h1 className='text-center font-bold text-2xl text-gray-700'>{e.podcasts}</h1>
//                     <p className='text-sm text-gray-600 text-center'>Podcasts</p>
//                   </div>

//                 </div>
//               </div>
//             </div>
//             );
// })}
//         </InfiniteScroll>
//       </div>
//     );
//   };

const About = () => {
  return (
    <div className="mt-16 pb-20">
      <div className="text-center font-bold text-4xl">
        WHAT OUR USERS SAY ABOUT US
      </div>
      <div className="mt-6">
        <p className="text-center text-gray-500">
          Thoughts is rulling in the Digital World and Our users has something
          to say about the same.Do
        </p>
        <p className="text-center text-gray-500">
          check their indivisual stories of transformation and get inspired
          today!
        </p>
      </div>
      <HorizontalScroll />
      <div className="mt-16">
        <ButtonCard name={"ALL VIEW"}></ButtonCard>
      </div>
    </div>
  );
};

export default About;
