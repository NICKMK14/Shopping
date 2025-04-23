/** @format */

import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Checkout
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 mb-4 last:border-b-0">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <p className="text-lg font-semibold text-gray-800">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full hover:bg-green-700 transition mt-4">
              Pay Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}
