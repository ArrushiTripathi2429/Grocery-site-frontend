import React from "react";
import Navbar from "./components/shared/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./features/Footer";
import { useAppContext } from "./lib/context";
import Login from "./features/Login";
import AllProducts from "./pages/allproducts"; // ✅ fixed
import ProductCategories from "./pages/ProductCategories";
import ProductDetails from "./pages/ProductDetails";

import MyOrders from "./pages/MyOrders";



const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<AllProducts />} /> 
          <Route path="/category/:category" element={<ProductCategories />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
            <Route path="/my-orders" element={<MyOrders/>} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
