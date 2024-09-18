import React, { useState } from 'react';
import home from '../assets/img_image.png';

export default function Hero() {
  // Move the useState hook inside the functional component
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <section>
      <div className="MATTERRR -mb-20" >
        <h1 className="font-sans text-black text-5xl ml-36 mt-20">
          Find a Perfect Property <br />
          Where you'll love to live
        </h1>
        <p className="font-light text-xl m-10 ml-32">
          We help businesses customize, automate and scale up their ad <br />
          production and delivery.
        </p>
        <img src={home} alt="img" width="610px" className="ml-auto relative -top-56" />
      </div >



    
      <div class="relative mx-40 pb-10 -top-96">
        <button
          className={`text-5xl font-mono py-4 px-6 ${
            activeButton === 'Buy' ? 'bg-black text-white rounded-2xl' : 'bg-white text-black'
          }`}
          onClick={() => handleClick('Buy')}
        >
          Buy
        </button>
        <button
          className={`text-5xl font-mono py-4 px-6 ${
            activeButton === 'Sell' ? 'bg-black text-white  rounded-2xl' : 'bg-white text-black'
          }`}
          onClick={() => handleClick('Sell')}
        >
          Sell
        </button>
        <button
          className={`text-5xl font-mono py-4 px-6 ${
            activeButton === 'Rent' ? 'bg-black text-white  rounded-2xl' : 'bg-white text-black'
          }`}
          onClick={() => handleClick('Rent')}
        >
          Rent
        </button>
      </div>

      <div>
        <div className="text-2xl -top-96 mx-40 mt-5 relative w-5/12 rounded-lg border p-3 border-gray-600">
          <p className="text-gray-600">City/Street</p>
        </div>
        <div className="text-2xl -top-96 mx-40 mt-5 relative w-5/12 rounded-lg border p-3 border-gray-600">
          <p className="text-gray-600">Property Type</p>
        </div>
        <div className="text-2xl -top-96 mx-40 mt-5 relative w-5/12 rounded-lg border p-3 border-gray-600">
          <p className="text-gray-600">Price Range</p>
        </div>
      </div>

      
    </section>
  );
}
