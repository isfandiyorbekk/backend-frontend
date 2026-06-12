import React from "react";

function UsersAdminTop({ users, product, post }) {
  return (
    <div className="flex gap-20">
      <div className="w-80 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">
            {product
              ? "Available Product"
              : post
                ? "Total Posts"
                : "Total Users"}
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
            +12%
          </span>
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mt-6">
          {product ? 8 : users.length}
        </h1>
      </div>
      <div className="w-80 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">
            {product ? "Not Available" : post ? "Likes" : "Companies"}
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
            +12%
          </span>
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mt-6">
          {product ? 2 : post ? 519 : users.length}
        </h1>
      </div>
      <div className="w-80 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">
            {product ? "Total Products" : post ? "ID" : "Active Users"}
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
            +12%
          </span>
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mt-6">
          {product ? 10 : post ? 10 : 7}
        </h1>
      </div>
      <div className="w-80 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">
            {product ? "Average Score" : post ? "body" : "Inactive Users"}
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
            +12%
          </span>
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mt-6">
          {product ? 9.2 + "⭐" : post ? 10 : 3}
        </h1>
      </div>
    </div>
  );
}

export default UsersAdminTop;
