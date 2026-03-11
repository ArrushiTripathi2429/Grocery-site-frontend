import React from "react";
import { useAppContext } from "../lib/context";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { assets } from "../assets/greencart_assets/greencart_assets/assets";

const ProductCard = ({ product }) => {
  const { currency, addtoCart, removeFromCart, cartItems } = useAppContext();
  const navigate = useNavigate(); // ✅ Use useNavigate hook

  return (
    product && (
      <div
        onClick={() =>
          navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
        }
        className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white w-full max-w-sm cursor-pointer"
      >
        {/* Image */}
        <div className="group flex items-center justify-center p-4 bg-gray-100 rounded-t-lg">
          <img
            className="group-hover:scale-110 transition-transform duration-300 h-40 object-contain"
            src={product.image[0]}
            alt={product.name}
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-gray-500 text-sm mb-1">{product.category}</p>
          <p className="text-gray-800 font-semibold text-lg truncate w-full mb-2">
            {product.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="w-4 h-4"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star icon"
                />
              ))}
            <p className="text-gray-600 text-sm">(4)</p>
          </div>

          {/* Price + Add to Cart */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-bold text-green-600">
              {currency} ${product.offerPrice}{" "}
              <span className="text-gray-400 text-sm line-through ml-2">
                {currency}${product.price}
              </span>
            </p>

            <div className="text-green-600">
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-2 bg-green-100 border border-green-300 w-24 h-10 rounded-full text-green-700 font-semibold hover:bg-green-200 transition-all"
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ Prevent card click
                    addtoCart(product._id);
                  }}
                >
                  <img src={assets.cart_icon} alt="cart" className="w-5 h-5" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 w-24 h-10 bg-green-500 text-white rounded-full select-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // ✅ Prevent card click
                      removeFromCart(product._id);
                    }}
                    className="cursor-pointer text-lg px-3 h-full"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // ✅ Prevent card click
                      addtoCart(product._id);
                    }}
                    className="cursor-pointer text-lg px-3 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
