import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="w-6 h-6"
        />
      </div>

      {/* Menu */}
      <div className="flex items-center gap-6 font-medium text-gray-700">
        <Link className="cursor-pointer hover:text-blue-600" to={"/"}>
          Users
        </Link>

        <Link className="cursor-pointer hover:text-blue-600" to={"/products"}>
          Products
        </Link>

        <Link className="cursor-pointer hover:text-blue-600" to={"/maqollar"}>
          Maqollar
        </Link>
        <Link className="cursor-pointer hover:text-blue-600" to={"/admin"}>
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
