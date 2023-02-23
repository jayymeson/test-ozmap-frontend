import "./App.css";
import Home from "./components/Home";
import Header from "./components/Headers";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [users, setUsers] = useState([]);

  const baseUrl = "http://localhost:3001";

  const getUsers = async () => {
    const res = await fetch(`${baseUrl}/users`, {
      method: "GET",
      mode: "cors",
    });
    const usersList = await res.json();
    console.log(usersList);
    setUsers(usersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getUsers={getUsers} />
      <Home users={users} getUsers={getUsers} />
    </>
  );
};

export default App;
