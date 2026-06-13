import React from "react";

function Product({ product }) {
  return (
    <div className="flex justify-center py-10">
      <div className="w-[380px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition">
        <img
          src={product.image}
          className="w-full h-60 object-cover bg-gray-100"
        />

        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h2>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              {product.rate} ⭐
            </span>
          </div>

          <p className="text-gray-600 mt-3">{product.description}</p>

          <div className="mt-5 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Narxi:</span>
              <span className="font-bold text-blue-600">{product.price}</span>


              
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Kelib chiqishi:</span>
              <span>{product.origin}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Mavjud:</span>
              <span className="text-green-600 font-medium">
                {product.available ? "Ha" : "Yo'q"}
              </span>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Sotib olish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
