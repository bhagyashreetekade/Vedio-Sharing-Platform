import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Navbar = () => {
  const iconSize = 23; // You can adjust this size as needed
  const [open, setOpen] = useState(false); // State for menu open/closed

  return (
    <div>
      <div>
        {/* Responsive menu icons */}
        <div className="absolute flex justify-center mt-3 items-center space-x-2">
          <HiOutlineMenuAlt1
            className={`text-3xl text-white z-50 cursor-pointer ${
              open ? "hidden" : "block "
            }`}
            onClick={() => setOpen(!open)}
          />
          <GrClose
            className={`text-3xl text-white z-50 cursor-pointer ${
              open ? "block" : "hidden"
            }`}
            onClick={() => setOpen(false)}
          />
        </div>
      </div>

      <ul
        className={`${
          open
            ? " fixed top-20 left-0 z-40 bg-black flex flex-col justify-start items-start space-y-7 pt-10 text-white  h-screen"
            : "hidden"
        }`}
      >
        <li
          className="flex flex-row px-10  cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Youtube"
        >
          <IoLogoYoutube
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Home"
        >
          <IoMdHome
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 space-x-7 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Shorts"
        >
          <SiYoutubeshorts
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>

        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Subscriptions"
        >
          <MdSubscriptions
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Your channel"
        >
          <FaUser
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="History"
        >
          <MdOutlineHistory
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Watch later"
        >
          <MdOutlineWatchLater
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Liked vedios"
        >
          <AiOutlineLike
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10  cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Settings"
        >
          <IoSettingsSharp
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Help"
        >
          <MdOutlineHelp
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
        <li
          className="flex flex-row px-10 cursor-pointer border-l-[6px] border-transparent hover:border-[#e8317e]"
          title="Send feedback"
        >
          <RiFeedbackLine
            className=" hover:fill-[#e8317e] "
            style={{ fontSize: `${iconSize}px` }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
