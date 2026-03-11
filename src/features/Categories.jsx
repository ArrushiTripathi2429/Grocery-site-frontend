// This is the Categories component, which is a feature component responsible for displaying the product categories on the homepage.
// It uses a card-based design to showcase each category with an image and a title.

import React from "react"; // Imports the React library to create a functional component.
import { Link } from "react-router-dom"; // Imports the Link component from react-router-dom to handle client-side navigation.
import { categories } from "../assets/greencart_assets/greencart_assets/assets.js"; // Imports the categories data from the assets file.

// Defines the Categories functional component.
const Categories = () => {
  // Returns the JSX to be rendered for the Categories section.
  return (
    // The main container for the categories section with padding.
    <div className="p-8">
      {/* The section title with a modern, bold style. */}
      <p className="text-3xl font-bold mb-8 text-center text-gray-800">Shop by Category</p>

      {/* The grid container for the category cards, with responsive columns. */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Maps over the categories array to create a card for each category. */}
        {categories.map((category, index) => (
          // The Link component makes the entire card clickable and navigates to the category's page.
          <Link
            to={`/category/${category.path}`} // Sets the navigation path for the category.
            key={index} // Provides a unique key for each card.
            className="flex flex-col items-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: category.bgColor }} // Sets the background color for the card.
          >
            {/* The category image with a modern, clean style. */}
            <img
              src={category.image} // The source of the category image.
              alt={category.text} // The alt text for the image.
              className="w-24 h-24 object-contain mb-4" // Styles for the image.
            />
            {/* The category title with a modern, clean style. */}
            <p className="text-lg font-semibold text-gray-800">{category.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories; // Exports the Categories component to be used in other parts of the application.