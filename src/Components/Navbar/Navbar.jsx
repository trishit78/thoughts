import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#ffe0c2] flex justify-between pl-[10%] pr-[10%] pt-4 pb-4">
      <div className="font-bold text-lg">Thoughts</div>
      <div className="flex space-x-8">
        <div className="hidden md:flex space-x-3 p-2">
          <div className="text-sm">Thoughts</div>
          <div className="text-sm">Blog</div>
          <div className="text-sm">Podcasts</div>
          <div className="text-sm">Pricing</div>
          <div className="text-sm">Contact Us</div>
        </div>
        <div className="flex space-x-4">
          <div className="text-black bg-white p-2 rounded-2xl font-semibold text-sm pl-3 pr-3">
            Login
          </div>
          <div className="bg-black text-white p-2 rounded-2xl font-semibold text-sm pl-3 pr-3">
            SignUp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
