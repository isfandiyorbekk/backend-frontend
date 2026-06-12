import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-slate-900 text-white p-6 flex flex-col shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>

        <Link
          to="usersAdmin"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
        >
          Users
        </Link>

        <Link
          to="productAdmin"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
        >
          Products
        </Link>

        <Link
          to="postsAdmin"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
        >
          Posts
        </Link>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
