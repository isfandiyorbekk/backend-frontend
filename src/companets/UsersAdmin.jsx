import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../companets/Card";
import UsersAdminTop from "./UsersAdminTop";
import UsersAdminBottom from "./UsersAdminBottom";
function UsersAdmin() {
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
      <UsersAdminTop users={users} />
      <UsersAdminBottom users={users} />;
    </>
  );
}

export default UsersAdmin;
