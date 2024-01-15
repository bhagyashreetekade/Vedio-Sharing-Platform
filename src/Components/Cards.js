import React from 'react';

const Cards = ({ image, title, author, views, date }) => {
  return (
    <div className='w-80 pl-3 pt-6 flex flex-col text-white space-y-1'>
      <img src={image} className="rounded-2xl" alt="Card cover" />
      <p className="font-semibold">{title}</p>
      <div className="flex flex-row space-x-2 items-center cursor-pointer">
        <img src={require('../Images/coverpage.jpg')} className="rounded-full w-10 h-10" alt="Author avatar" />
        <h1 className="font-medium">{author}</h1>
      </div>
      <div className="space-x-4 flex flex-row">
        <h1>{views}</h1>
        <h1>{date}</h1>
      </div>
    </div>
  );
};

export default Cards;
