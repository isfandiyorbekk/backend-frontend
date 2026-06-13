import React from "react";
function UsersAdminBottom({ users, product, post }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-20">
      <h2 className="text-xl font-bold">
        {product ? "Products" : post ? "Posts" : "Users"}
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Manage and monitor {product ? "products" : post ? "posts" : "users"}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-3">{product ? "ID" : post ? "ID" : "users"}</th>
              <th>{product ? "Title" : post ? "Title" : "Username"}</th>
              <th>{product ? "Description" : post ? "" : "Email"}</th>
              <th>{product ? "Rate" : post ? "Author" : "City"}</th>
              <th>{product ? "Origin" : post ? "Date" : "Company"}</th>
              <th>{product ? "Available" : post ? "Likes" : "Phone"}</th>
              <th>{product ? "Price" : post ? "Category" : "Website"}</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 text-sm">
                  <td className="py-3 px-2">
                    {product ? item.id : post ? item.id : item.name}
                  </td>
                  <td className="py-3 px-2">
                    {product ? item.title : post ? item.title : item.username}
                  </td>
                  <td className="py-3 px-2">
                    {product ? item.description : post ? "" : item.email}
                  </td>
                  <td className="py-3 px-2">
                    {product
                      ? item.rate
                      : post
                        ? item.author
                        : item.address?.city || item.city}
                  </td>
                  <td className="py-3 px-2">
                    {product
                      ? item.origin
                      : post
                        ? item.date
                        : item.company?.name || item.company}
                  </td>
                  <td className="py-3 px-2">
                    {product
                      ? item.available === true
                        ? "Yes"
                        : "No"
                      : post
                        ? item.likes
                        : item.phone}
                  </td>
                  <td className="py-3 px-2">
                    {product ? item.price : post ? item.category : item.website}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersAdminBottom;
