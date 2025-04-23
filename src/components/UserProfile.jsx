/** @format */

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function UserProfile({ user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <div className="relative">
      <img
        src={`https://ui-avatars.com/api/?name=${user.email}&background=random`}
        alt="profile"
        className="w-8 h-8 rounded-full border cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
          <div className="p-4 border-b">
            <p className="text-sm font-semibold">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
