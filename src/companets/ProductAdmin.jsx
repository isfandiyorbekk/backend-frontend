import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UsersAdminTop from "./UsersAdminTop";
import UsersAdminBottom from "./UsersAdminBottom";
function ProductAdmin() {
  let [product, setProdct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      try {
        let response = await fetch(
          "https://jsonbek.uz/api/products?style=comedy",
        );
        if (!response.ok) {
          throw new Error("Xato");
        }
        let data = await response.json();
        setProdct(data);
      } catch (error) {
        console.log("Xato");
      }
    }
    getProduct();
  }, []);
  return (
    <>
      <UsersAdminTop users={product} product={true} />
      <UsersAdminBottom users={product} product={true} />
    </>
  );
}

export default ProductAdmin;
