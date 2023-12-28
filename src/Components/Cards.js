import React from 'react'

const Cards = () => {
  return (
    <div className='mx-auto'>
      <div className="w-80 pl-3 pt-6 flex flex-col text-white space-y-1">
        <img
          src={require("../Images/coverpage2.jpg")}
          className="rounded-2xl"
        />
        <p className="font-semibold">
          50 Best Places to Visit in Europe - Travel Guide
        </p>
        <div className="flex flex-row space-x-2  items-center cursor-pointer">
          <img
            src={require("../Images/coverpage.jpg")}
            className="rounded-full w-10 h-10 "
          />
          <h1 className="font-medium">Touropia</h1>
        </div>
        <div className="space-x-4 flex flex-row">
          <h1>1.5K views</h1>
          <h1>1 year ago</h1>
        </div>
      </div>
    </div>
  )
}

export default Cards
