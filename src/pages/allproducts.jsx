import React, { useEffect, useState } from "react"; // ✅ Added useState
import { useAppContext } from "../lib/context";
import ProductCard from "../features/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext(); 
  const [filterProducts, setFilterProducts] = useState([]); // ✅ Correct naming and useState

  useEffect(() => {
    if (searchQuery?.length > 0) {
      setFilterProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col bg-black ">
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-white">All Products</p>
        <div className="w-16 h-0.5 rounded-full bg-white" />
      </div>

      <div className="grid grid-col-2 sm:grid-col-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filterProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts; // ✅ Component name should be capitalized
