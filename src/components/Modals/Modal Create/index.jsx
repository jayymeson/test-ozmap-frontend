import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalCreate = ({ closeModal, getUsers }) => {
  const [name, setnName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const baseURL = "http://localhost:3001";

  const handleCreateUsers = async () => {
    const newUsers = {
      name,
      email,
      password,
      img,
      description,
    };

    console.log(newUsers);

    const res = await fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newUsers),
    });

    console.log(res);

    if (res.status !== 201) {
      return toast.error("Criação de usuário falhou");
    }

    setnName("");
    setEmail("");
    setPassword("");
    setDescription("");
    setImg("");
    closeModal();
    await getUsers();
    toast.success("Usuário cadastrado com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteiner">
        <div>
          <h3>Adicione novo usuário</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={name}
          onChange={(event) => setnName(event.target.value)}
          name="nome"
          type="text"
          placeholder="Nome do usuário"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          type="text"
          placeholder="E-mail do usuário"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          type="password"
          placeholder="Senha do usuário"
        />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
          type="text"
          placeholder="Descrição do usuário"
        />
        <input
          value={img}
          onChange={(event) => setImg(event.target.value)}
          name="img"
          type="text"
          placeholder="Link da foto do usuário"
        />
        <button
          className="button-add"
          onClick={handleCreateUsers}
          type="submit"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ModalCreate;
