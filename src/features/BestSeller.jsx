// This is the BestSeller component, which is a feature component responsible for displaying the best-selling products on the homepage.
// It fetches the products from the AppContext and displays them in a grid format.

import React from 'react'; // Imports the React library to create a functional component.
import ProductCard from './ProductCard'; // Imports the ProductCard component to display each product.
import { useAppContext } from '../lib/context'; // Imports the useAppContext hook to access the global state.

// Defines the BestSeller functional component.
const BestSeller = () => {
  // Destructures the products array from the AppContext.
  const { products } = useAppContext();

  // Returns the JSX to be rendered for the BestSeller section.
  return (
    // The main container for the BestSeller section with margin and width.
    <div className='mt-20 w-full px-8'>
      {/* The section title with a modern, bold style. */}
      <p className='text-3xl font-bold mb-8 text-center text-gray-800'>Our Best Sellers</p>

      {/* The grid container for the product cards, with responsive columns and gap. */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6'>
        {/* Filters the products to show only those in stock, slices the first 5, and maps over them to create a ProductCard for each. */}
        {products
          .filter((product) => product.inStock) // Filters for in-stock products.
          .slice(0, 5) // Takes the first 5 products.
          .map((product, index) => (
            // Renders a ProductCard for each product.
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  )
}

export default BestSeller; // Exports the BestSeller component to be used in other parts of the application.