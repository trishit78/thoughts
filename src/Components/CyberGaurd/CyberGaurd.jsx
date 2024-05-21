import React from "react";

const CyberGaurd = () => {
  return (
    <div className="mt-16 pb-16 bg-[#f8f9fbef]">
      <div className="text-center text-5xl font-bold">POWERFUL SECURITY BY</div>
      <div className="text-center text-6xl lg:text-9xl font-bold">CYBERGAURD</div>
      <div className="mt-6">
        <p className="text-center">
          Empower ideas,Elevating Voices:Your gateway to insightful
          Blogging,Thoughtful Sharing, and
        </p>
        <p className="text-center">
          Dynamic Podcasting with <strong> CyberGaurd </strong> security welcome
          to a world beyond words.{" "}
        </p>
      </div>

      <div className="flex items-center justify-center mt-8">
        <iframe
          className="w-[350px] h-[400px]  md:w-[900px] md:h-[500px]  video"
          src="https://www.youtube.com/embed/W5PRZuaQ3VM?si=zEOUPtyzriYnHCFY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default CyberGaurd;
