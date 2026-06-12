import React from "react";

function Card({ user }) {
  const initials = user.name
    .split(" ")
    .map((item) => item[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex justify-center p-4">
      <div className="w-[280px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="h-28 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        <div className="px-6 pb-6 relative">
          <div className="absolute -top-10 left-6 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl font-bold text-blue-600">
            {initials}
          </div>

          <div className="pt-14">
            <h2 className="text-2xl font-bold text-gray-800 break-words">
              {user.name}
            </h2>

            <p className="text-gray-500">{user.username}</p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <span>📧</span>
                <p className="break-all">{user.email}</p>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <span>📞</span>
                <p>{user.phone}</p>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <span>🌐</span>
                <p className="break-all">{user.website}</p>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <span>📍</span>
                <p>{user.address.city}</p>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <span>🏢</span>
                <p>{user.company.name}</p>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Contact User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
