import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../companets/Product";
function ProductsPage() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      try {
        let respons = await fetch(
          "https://jsonbek.uz/api/products?style=comedy",
        );

        if (!respons.ok) {
          throw new Error("Xato");
        }

        let data = await respons.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);
  return (
    <div>
      {product &&
        product.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
}

export default ProductsPage;
