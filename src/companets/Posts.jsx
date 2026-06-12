import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UsersAdminTop from "./UsersAdminTop";
import UsersAdminBottom from "./UsersAdminBottom";
function Posts() {
  let [maqola, setMaqola] = useState([]);
  useEffect(() => {
    async function getmaqola() {
      try {
        let respons = await fetch("https://jsonbek.uz/api/posts?style=comedy");
        if (!respons.ok) {
          throw new Error("Xato");
        }
        let data = await respons.json();
        setMaqola(data);
      } catch (error) {
        console.log("Xatolik");
      }
    }
    getmaqola();
  }, []);
  return (
    <>
      <UsersAdminTop users={maqola} product={false} post={true} />
      <UsersAdminBottom users={maqola} product={false} post={true} />
    </>
  );
}

export default Posts;
