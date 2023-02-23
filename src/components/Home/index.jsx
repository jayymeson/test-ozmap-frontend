import Card from "../Card/index";
import React, { useState, useEffect } from "react";

function Home({ user, getUsers }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setUsers(Object.values(data))) // transformando objeto em array
      .catch((err) => console.log(err));
  }, []);

  console.log(users);
  return (
    <div className="home-conteiner">
      <h1 className="h1">Usuários</h1>
      {users[0] && users[0].map((item) => (
        <Card key={item.id} user={item} getUsers={getUsers} />
      ))}
    </div>
  );
}

export default Home;
