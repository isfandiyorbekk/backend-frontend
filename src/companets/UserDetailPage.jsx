import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function UserDetailPage() {
  const { id } = useParams();
  let [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      if (!response.ok) {
        throw new Error("Xaato");
      }
      let data = await response.json();
      setUser(data);
    }
    getUser();
  }, []);
  return (
    <>
      {user && (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-6">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-blue-100">@{user.username}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Personal Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                  Personal Info
                </h2>

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">ID:</span> {user.id}
                  </p>

                  <p>
                    <span className="font-semibold">Email:</span> {user.email}
                  </p>

                  <p>
                    <span className="font-semibold">Phone:</span> {user.phone}
                  </p>

                  <p>
                    <span className="font-semibold">Website:</span>{" "}
                    {user.website}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                  Address
                </h2>

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Street:</span>{" "}
                    {user.address.street}
                  </p>

                  <p>
                    <span className="font-semibold">Suite:</span>{" "}
                    {user.address.suite}
                  </p>

                  <p>
                    <span className="font-semibold">City:</span>{" "}
                    {user.address.city}
                  </p>

                  <p>
                    <span className="font-semibold">Zip Code:</span>{" "}
                    {user.address.zipcode}
                  </p>

                  <p>
                    <span className="font-semibold">Latitude:</span>{" "}
                    {user.address.geo.lat}
                  </p>

                  <p>
                    <span className="font-semibold">Longitude:</span>{" "}
                    {user.address.geo.lng}
                  </p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="p-6 border-t">
              <h2 className="text-xl font-semibold mb-4">
                Company Information
              </h2>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="mb-2">
                  <span className="font-semibold">Company:</span>{" "}
                  {user.company.name}
                </p>

                <p className="mb-2">
                  <span className="font-semibold">Catch Phrase:</span>{" "}
                  {user.company.catchPhrase}
                </p>

                <p>
                  <span className="font-semibold">Business:</span>{" "}
                  {user.company.bs}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetailPage;
