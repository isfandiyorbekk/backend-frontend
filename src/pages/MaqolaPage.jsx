import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Maqola from "../companets/Maqola";
function MaqolaPage() {
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
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10">
      {maqola &&
        maqola.map((item) => {
          return <Maqola key={item.id} item={item} />;
        })}
    </div>
  );
}

export default MaqolaPage;
