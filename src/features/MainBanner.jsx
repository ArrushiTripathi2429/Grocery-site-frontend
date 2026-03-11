// This is the MainBanner component, which is a feature component responsible for displaying the main banner on the homepage.
// It includes a background image, a headline, and a call-to-action button.

import React from 'react'; // Imports the React library to create a functional component.
import banner from "../assets/greencart_assets/greencart_assets/main_banner_bg.png"; // Imports the main banner image for desktop.
import mobileBanner from "../assets/greencart_assets/greencart_assets/main_banner_bg_sm.png"; // Imports the main banner image for mobile.
import { Link } from 'react-router-dom'; // Imports the Link component from react-router-dom to handle client-side navigation.
import arrowIcon from "../assets/greencart_assets/greencart_assets/white_arrow_icon.svg"; // Imports the white arrow icon for the button.

// Defines the MainBanner functional component.
const MainBanner = () => {
  // Returns the JSX to be rendered for the MainBanner.
  return (
    // The main container for the banner, with a relative position to allow for absolute positioning of child elements.
    <div className='relative w-full h-[80vh]'>
      {/* The background image for desktop screens, hidden on mobile. */}
      <img className='w-full h-full object-cover hidden md:block' src={banner} alt="banner" />
      {/* The background image for mobile screens, hidden on desktop. */}
      <img className='w-full h-full object-cover md:hidden' src={mobileBanner} alt="mobile banner" />

      {/* The overlay content, which is centered and positioned on top of the background image. */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-40'>
        {/* The main headline with a modern, bold style. */}
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-8 text-white leading-tight'>
          Fresh Groceries, Delivered to Your Doorstep
        </h1>

        {/* The call-to-action button that links to the products page. */}
        <Link
          to={"/products"}
          className='group flex items-center cursor-pointer rounded-full text-white gap-3 py-4 px-10 hover:bg-green-700 transition-all bg-green-600 shadow-lg'
        >
          Shop Now
          {/* The arrow icon that animates on hover. */}
          <img className='w-5 h-5 transition-transform group-hover:translate-x-2' src={arrowIcon} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default MainBanner; // Exports the MainBanner component to be used in other parts of the application.