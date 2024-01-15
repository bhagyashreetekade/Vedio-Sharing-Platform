import React, { useState } from 'react';
import Cards from './Cards';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Bottom = () => {
  //Initializes the state variable startIndex using the useState hook. This variable will keep track of the index of the first card to be displayed.
  const [startIndex, setStartIndex] = useState(0);
  // indicating the number of cards to be displayed at a time.
  const cardsPerPage = 4;

  const data = [
    // Your card data here
    {
      image: require('../Images/coverpage.jpg'),
      title: 'Discover Amazing Destinations',
      author: 'Travel Explorer',
      views: '2.3K views',
      date: '3 months ago',
    },
    {
      image: require('../Images/coverpage3.jpg'),
      title: '50 Best Places to Visit in Europe - Travel Guide',
      author: 'Touropia',
      views: '1.5K views',
      date: '1 year ago',
    },
    {
      image: require('../Images/coverpage2.jpg'),
      title: '50 Best Places to Visit in Europe - Travel Guide',
      author: 'Touropia',
      views: '1.5K views',
      date: '1 year ago',
    },
    {
      image: require('../Images/coverpage3.jpg'),
      title: '50 Best Places to Visit in Europe - Travel Guide',
      author: 'Touropia',
      views: '1.5K views',
      date: '1 year ago',
    },
    {
      image: require('../Images/coverpage2.jpg'),
      title: '50 Best Places to Visit in Europe - Travel Guide',
      author: 'Touropia',
      views: '1.5K views',
      date: '1 year ago',
    },
    {
      image: require('../Images/coverpage.jpg'),
      title: '50 Best Places to Visit in Europe - Travel Guide',
      author: 'Touropia',
      views: '1.5K views',
      date: '1 year ago',
    },
  ];

  const totalCards = data.length;

  const handleNext = () => {
  const newIndex = startIndex + 1;

  if (newIndex <= totalCards - cardsPerPage) {
    setStartIndex(newIndex);
  } else {
    // If moving one card forward exceeds the total cards - cardsPerPage,
    // display the last set of cards
    setStartIndex(0); // Set the startIndex to 0 to display the first set of 4 cards
  }
};


const handlePrev = () => {
  const newIndex = startIndex - 1;
  if (newIndex >= 0) {
    setStartIndex(newIndex);
  } else {
    // If less than 4 cards are remaining on the left, display the first set of 4 cards
    setStartIndex(0);
  }
};

  return (
    <div className="mx-auto">
      <div className="relative">
        <div className="flex justify-between items-center">
          <GrPrevious onClick={handlePrev} className='text-white text-4xl  cursor-pointer' />
          <div className="flex space-x-3">
            {data.slice(startIndex, startIndex + cardsPerPage).map((card, index) => (
              <Cards
                key={index}
                image={card.image}
                title={card.title}
                author={card.author}
                views={card.views}
                date={card.date}
              />
            ))}
          </div>
          <GrNext onClick={handleNext} className='text-white text-4xl cursor-pointer' />
        </div>
        
      </div>
    </div>
  );
};

export default Bottom;
