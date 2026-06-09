import React from "react";

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
      <ul className="flex items-center gap-6 font-medium text-gray-700">
        <li className="cursor-pointer hover:text-blue-600">Users</li>

        <li className="cursor-pointer hover:text-blue-600">Products</li>

        <li className="cursor-pointer hover:text-blue-600">Maqollar</li>
      </ul>
    </nav>
  );
}

export default Navbar;
