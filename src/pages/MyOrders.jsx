import React, { useState, useEffect } from "react";
import { useAppContext } from "../lib/context";
import { dummyOrders } from "../assets/greencart_assets/greencart_assets/assets";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext(); 

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders); // Simulated fetch
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="py-8 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <p className="text-2xl uppercase font-bold">My Orders</p>
        <div className="w-16 h-0.5 bg-red-500 rounded-full mt-1"></div>
      </div>

      {/* Orders */}
      <div className="flex flex-col gap-6">
        {myOrders.length === 0 ? (
          <p className="text-gray-400">You have no orders yet.</p>
        ) : (
          myOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              {/* Left Info */}
              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-semibold">
                  Order ID: <span className="font-normal">{order._id}</span>
                </p>
                <p className="text-gray-600">
                  Payment Type: <span className="font-normal">{order.paymentType}</span>
                </p>
                <p className="text-gray-600">
                  Date: <span className="font-normal">{order.date}</span>
                </p>
              </div>

              {/* Amount */}
              <div className="text-red-600 font-bold text-lg mt-2 sm:mt-0">
                {currency}{order.amount}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
