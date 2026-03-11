// This is the BottomBanner component, which is a feature component responsible for displaying a banner at the bottom of the homepage.
// It includes a background image and a list of features with icons and descriptions.

import React from 'react'; // Imports the React library to create a functional component.
import bottomBanner from "../assets/greencart_assets/greencart_assets/bottom_banner_image.png"; // Imports the background image for the banner.
import mobileBottomBanner from "../assets/greencart_assets/greencart_assets/bottom_banner_image_sm.png"; // Imports the background image for mobile.
import { features } from '../assets/greencart_assets/greencart_assets/assets'; // Imports the features data from the assets file.

// Defines the BottomBanner functional component.
const BottomBanner = () => {
  // Returns the JSX to be rendered for the BottomBanner.
  return (
    // The main container for the banner with a relative position to allow for absolute positioning of child elements.
    <div className='relative mt-24'>
      {/* The background image for desktop screens, hidden on mobile. */}
      <img className='w-full hidden md:block rounded-xl' src={bottomBanner} alt="bottom banner" />
      {/* The background image for mobile screens, hidden on desktop. */}
      <img className='w-full md:hidden rounded-xl' src={mobileBottomBanner} alt="mobile banner" />

      {/* The overlay content, which is positioned on top of the background image. */}
      <div className='absolute inset-0 flex flex-col items-center md:items-end justify-center px-4 md:px-24 text-white text-center md:text-right bg-black bg-opacity-40 rounded-xl'>
        {/* The main headline with a modern, bold style. */}
        <h1 className='text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg'>Why Choose DadiHills?</h1>

        {/* The container for the list of features. */}
        <div className="flex flex-col gap-4">
          {/* Maps over the features array to create a feature item for each. */}
          {features.map((feature, index) => (
            // The container for a single feature item.
            <div key={index} className='flex items-center gap-4 bg-black/40 p-4 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-all'>
              {/* The icon for the feature. */}
              <img src={feature.icon} className='w-12 h-12' alt="feature icon" />
              {/* The container for the feature title and description. */}
              <div>
                <h3 className='text-xl font-semibold'>{feature.title}</h3>
                <p className='text-base'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner; // Exports the BottomBanner component to be used in other parts of the application.