// This is the Home page component, which is the main page of the application.
// It brings together all the feature components to create the homepage layout.

import React from 'react'; // Imports the React library to create a functional component.
import MainBanner from '../features/MainBanner'; // Imports the MainBanner component.
import Categories from '../features/Categories'; // Imports the Categories component.
import BestSeller from '../features/BestSeller'; // Imports the BestSeller component.
import BottomBanner from '../features/BottomBanner'; // Imports the BottomBanner component.
import Newsletter from '../features/Newsletter';
import Footer from '../features/Footer';

// Defines the Home functional component.
const Home = () => {
  // Returns the JSX to be rendered for the Home page.
  return (
    // The main container for the Home page with a modern, clean layout.
    <div className='w-full mx-auto'>
      {/* The MainBanner component is placed at the top of the page. */}
      <MainBanner />
      {/* The container for the main content of the page. */}
      <div className="px-4 md:px-8 lg:px-16">
        {/* The Categories component is placed below the main banner. */}
        <Categories />
        {/* The BestSeller component is placed below the categories. */}
        <BestSeller />
        {/* The BottomBanner component is placed at the bottom of the page. */}
        <BottomBanner />
        <Newsletter/>
        
      </div>
    </div>
  );
};

export default Home; // Exports the Home component to be used in other parts of the application.