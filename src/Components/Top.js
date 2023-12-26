import React from "react";
import { FaSearch } from "react-icons/fa"; // Uncomment this line to import FaSearch

const Top = () => {
  return (
    <div className="h-[60%]">
      <div
        className="bg-cover h-full w-full"
        style={{
          backgroundImage: `url(${require("../Images/coverpage3.jpg")})`,
        }}
      >
        <div className="relative top-7 left-10 w-[35rem] rounded-full bg-[#0d1113] ">
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
      </div>
    </div>
  );
};

export default Top;
