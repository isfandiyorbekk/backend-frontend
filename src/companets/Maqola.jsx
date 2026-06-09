import React from "react";

function Maqola({ item }) {
  return (
    <div className="flex justify-center py-10">
      <div className="w-[600px] bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {item.category}
          </span>

          <span className="text-gray-500">{item.date}</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>

        <p className="text-gray-600 leading-7">{item.body}</p>

        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">{item.author}</h3>
            <p className="text-gray-500 text-sm">Muallif</p>
          </div>

          <div className="flex items-center gap-2 text-red-500 font-bold">
            ❤️ {item.likes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maqola;
