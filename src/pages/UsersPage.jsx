import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../companets/Card";
function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        let respons = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!respons.ok) {
          throw new Error("xato");
        }
        let data = await respons.json();
        setUsers(data);
      } catch (error) {
        console.log("xato chiqdi");
      }
    }
    getUser();
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10">
        {users &&
          users.map((user) => {
            return <Card key={user.id} user={user} />;
          })}
      </div>
    </>
  );
}

export default Users;
