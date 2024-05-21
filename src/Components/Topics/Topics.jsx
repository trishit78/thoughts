import React from 'react'
import Card from "../Card/Card";
import ButtonCard from "../Button/Button";
import Card2 from '../Card/Card2';
import sampleData from '../../../data/data2';


const Topics = () => {
  return (
    <div className="bg-gray-200  pt-10 pb-16">
      <div className="text-center text-5xl font-bold">
        EXPLORE YOUR FAVOURITE TOPICS
      </div>
      <div className="mt-4">
        <div className="text-center text-lg text-gray-600">
          Explore our curated collection of thoughts and perspectives designed to empower and educate on matters of health
        </div>
        <div className="text-center text-lg text-gray-600">
          and well-being.We hope you will love exploring thoughts of different people around the world.
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex p-2 space-x-6 rounded-full pr-3 pl-3 mt-8 bg-[#eeeeee]">
          <div className="text-sm text-center bg-white p-2 font-bold pr-2 pl-2 rounded-full">
            Health Care
          </div>
          <div className="text-sm mt-2">Technology</div>
          <div className="text-sm mt-2">Fashion</div>
          <div className="hidden md:block text-sm mt-2">Self Growth</div>
          <div className="text-sm mt-2">Business</div>
          <div className="text-sm mt-2">Sports</div>
          
        </div>
      </div>

      <div className="mt-16 pl-8 pr-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
  sampleData.map((e,index)=>{
    //console.log(e.category)
    return(
      <Card2 key={index} photo={e.photo} name={e.name} title={e.title} text={e.text} ig_count={e.ig_count}
      repost={e.repost}
      share={e.share}
      date={e.date}
      img={e.img}
      category={e.category}
      /> 
    );
  })
}
        
      </div>
      <div className="mt-12">
        <ButtonCard name={"EXPLORE MORE"} />
      </div>
    </div>
  )
}

export default Topics
