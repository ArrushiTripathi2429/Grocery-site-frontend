import React from "react";
import { useAppContext } from "../lib/context";
import { useParams } from "react-router-dom";
import { categories } from "../assets/greencart_assets/greencart_assets/assets";
import ProductCard from "../features/ProductCard";

const ProductCategories = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  // Find category metadata
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-6">
      {searchCategory && (
        <div className="flex flex-col items-start mb-6 text-center">
          <p className="text-4xl font-bold text-white ">
            {searchCategory.text}
          </p>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
