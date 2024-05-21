import React from "react";
import Card from "../Card/Card";
import ButtonCard from "../Button/Button";
import sampleData from "../../../data/data";

const RecentPosts = () => {
  return (
    <div className="bg-gray-200  pt-10 pb-16">
      <div className="text-center text-5xl font-bold">
        DISCOVER THE MOST RECENT POSTS
      </div>
      <div className="mt-4">
        <div className="text-center text-lg text-gray-600">
          Empower Ideas,Elevating Voices: Your GateWay to Insightful
          Blogging,Thoughtful Sharing, and
        </div>
        <div className="text-center text-lg text-gray-600">
          Dynamic Podcasting with CyberGaurd Security Welcome to a World Beyond
          Words
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex p-2 space-x-6 rounded-full pr-3 pl-3 mt-8 bg-[#eeeeee]">
          <div className="text-sm bg-white p-2 font-bold pr-2 pl-2 rounded-full">
            Thoughts
          </div>
          <div className="text-sm mt-2">Blogs</div>
          <div className="text-sm mt-2">Podcast</div>
        </div>
      </div>

      <div className="mt-16 pl-8 pr-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{

sampleData.map((e,index)=>{
  console.log(e.ig_count);
  return(
    <Card key={index} photo={e.photo} name={e.name} title={e.title} text={e.text} ig_count={e.ig_count}
    repost={e.repost}
    share={e.share}
    date={e.date}
    /> 
    
  );
})

}

        
      </div>
      <div className="mt-12">
        <ButtonCard name={"VIEW MORE"} />
      </div>
    </div>
  );
};

export default RecentPosts;
