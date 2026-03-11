import { useEffect, useState } from "react";
import { useAppContext } from "../lib/context";
import { useParams, useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/greencart_assets/greencart_assets/assets";
import ProductCard from "../features/ProductCard";

const ProductDetails = () => {
  const { products, currency, addtoCart } = useAppContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item._id === id);

  const [thumbnail, setThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (product) {
      setThumbnail(product.image[0]); // ✅ assuming `image` is an array
      const filtered = products.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setRelatedProducts(filtered);
    }
  }, [products, product]);

  if (!product) {
    return <p className="p-4">Loading product...</p>;
  }

  return (
    <div className="max-w-6xl w-full px-6">
      {/* Breadcrumb Navigation */}
      <p>
        <Link to={"/"}>Home</Link> / <Link to={"/products"}>Products</Link> /{" "}
        <Link to={`/products/${product.category.toLowerCase()}`}>
          {product.category}
        </Link>{" "}
        / <span className="text-indigo-500">{product.name}</span>
      </p>

      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-16 mt-4">
        {/* Left: Images */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.image.map((img, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(img)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          {/* Star Ratings */}
          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={
                    i < product.rating
                      ? assets.star_icon
                      : assets.star_dull_icon
                  }
                  alt="rating"
                />
              ))}
            <p className="text-base ml-2">({product.rating})</p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: ${product.price}
            </p>
            <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          {/* Description */}
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => addtoCart(product)}
              className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addtoCart(product);
                navigate("/my-orders");
              }}
              className="w-full py-3.5 cursor-pointer font-medium  text-white hover:bg-green-700 transition bg-green-600"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="flex flex-col items-start mt-20">
        <div className="flex flex-col items-start w-max">
          <p className="text-4xl font-semibold">Related Products</p>
          <div className="w-20 h-0.5 mt-2 bg-gray-300"></div>
        </div>

        <div className="mt-6 w-full overflow-x-auto">
          <div className="flex gap-4 w-max">
            {relatedProducts
              .filter((product) => product.inStock)
              .map((product, index) => (
                <div key={index} className="min-w-[200px]">
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/products");
          }}
          className="border rounded mx-auto cursor-pointer text-white bg-green-600 my-6 py-2.5 px-6 border-none"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
