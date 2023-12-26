import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdOutlineHistory } from 'react-icons/md';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOutlineHelp } from 'react-icons/md';
import { RiFeedbackLine } from 'react-icons/ri';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Navbar = () => {
  const iconSize = 23; // You can adjust this size as needed

  return (
    <div>
      <ul className='flex flex-col justify-start items-start space-y-7 pt-10 text-white bg-black h-screen'>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <IoLogoYoutube className='hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Youtube</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <IoMdHome  className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Home</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <SiYoutubeshorts  className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Shorts</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <MdSubscriptions  className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Subscriptions</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <FaUser className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Your channel</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <MdOutlineHistory className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>History</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <MdOutlineWatchLater className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Watch Later</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:rounded-br-full hover:border-[#e8317e]'>
          <AiOutlineLike className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Liked vedios</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e] '>
          <IoSettingsSharp className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Settings</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <MdOutlineHelp className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Help</span>
        </li>
        <li className='flex flex-row pl-7 space-x-7 cursor-pointer hover:border-l-8 hover:border-[#e8317e]'>
          <RiFeedbackLine className=' hover:fill-[#e8317e] ' style={{ fontSize: `${iconSize}px` }}/>
          <span>Send feedback</span>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
