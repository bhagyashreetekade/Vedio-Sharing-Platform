import React from "react";
import { FaSearch } from "react-icons/fa"; // Uncomment this line to import FaSearch
import { IoNotifications } from "react-icons/io5";
import { BsCameraVideoFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoLogoYoutube } from 'react-icons/io5';

const Top = () => {
  const iconSize = 20;
  return (
    // Search Bar
    <div className="h-[60%] ">
      <div
        className="bg-cover h-full w-full "
        style={{
          backgroundImage: `url(${require("../Images/coverpage3.jpg")})`,
          overflow: 'hidden',
          boxShadow: 'inset 0 0 150px 40px rgba(0,0,0,0.8)' // Adjusting the shadow effect
        }}
      >

        {/* top side  */}
        <div className="flex flex-row relative top-7 justify-between items-center mx-10">
          <div className=" w-[27rem] rounded-full bg-[#0d1113] ">
            <form className="flex flex-row items-center ">
              <FaSearch className="text-white ml-5 text-xl" />
              <input
                className="outline-none bg-[#0d1113] text-[#fbf9f9] px-7 w-full py-2 rounded-l-full"
                placeholder="Enter the search thing"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#e8317e] text-[#fbf9f9] rounded-full"
              >
                Search
              </button>
            </form>
          </div>
          <div>
            <ul className="flex flex-row space-x-7 justify-center items-center  ">
              <BsCameraVideoFill className="fill-white cursor-pointer" style={{ fontSize: `${iconSize}px` }} />
              <IoNotifications className="fill-white cursor-pointer" style={{ fontSize: `${iconSize}px` }} />
              <CgProfile className=" cursor-pointer" style={{ fontSize: 30, color: 'white' }} />
            </ul>
          </div>
        </div>

        {/* bottom side */}

        <div className="relative top-10 mx-12 grid grid-cols-2 gap-52">
          <div className="">
            <h1 className="text-5xl font-bold font-serif py-12">Your gateway to unlimited entertainment</h1>
            <p className="text-white font-light">With our seamless streaming technology, you can effortlessly discover and enjoy content that resonates with your interest</p>
          </div>
          <div>
            <div className="relative flex flex-row space-x-4 justify-center top-64 items-center">
              <p className="text-[#f2f8fa] font-medium">Top 10 most interesting places in the world. Must visit!</p>
              <IoLogoYoutube className='fill-[#e8317e] cursor-pointer' style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
