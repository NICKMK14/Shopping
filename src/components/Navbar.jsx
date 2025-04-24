/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const { cart } = useCart();
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-500 text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-x-4">
        <span className="text-yellow-400 font-bold">Shoppi</span>
        <Link
          to="/"
          className={`text-sm ${
            isActive("/") ? "text-white font-bold" : "text-gray-300"
          } hover:text-white`}>
          All
        </Link>
        <Link
          to="/category/clothes"
          className={`text-sm ${
            isActive("/category/clothes")
              ? "text-white font-bold"
              : "text-gray-300"
          } hover:text-white`}>
          Cloths
        </Link>
        <Link
          to="/category/electronics"
          className={`text-sm ${
            isActive("/category/electronics")
              ? "text-white font-bold"
              : "text-gray-300"
          } hover:text-white`}>
          Electronics
        </Link>
        <Link
          to="/category/furniture"
          className={`text-sm ${
            isActive("/category/furniture")
              ? "text-white font-bold"
              : "text-gray-300"
          } hover:text-white`}>
          Furnitures
        </Link>
        <Link
          to="/category/miscellaneous"
          className={`text-sm ${
            isActive("/category/miscellaneous")
              ? "text-white font-bold"
              : "text-gray-300"
          } hover:text-white`}>
          Toys
        </Link>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="relative">
          <Link to="/checkout">
            <img src={"/cart-color-icon.svg"} alt="Cart" className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {user ? (
          <UserProfile user={user} />
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
