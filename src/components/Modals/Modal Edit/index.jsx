import toast from "react-hot-toast";
import { useState } from "react";
import "./style.css";

const ModalEdit = ({ closeModal, user, getUsers }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [img, setImg] = useState(user.img);
  const [description, setDescription] = useState(user.description);

  const baseURL = "http://localhost:3001";

  const handleEditUsers = async () => {
    const editUser = {
      name,
      email,
      password,
      img,
      description,
    };

    const res = await fetch(`${baseURL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(editUser),
    });

    if (res.status !== 200) {
      return toast.error("Edição falhou.");
    }

    closeModal();
    getUsers();
    toast.success("Usuário atualizado com sucesso!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteiner">
        <div>
          <h3>Atualize o usuário</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="club"
          type="text"
          placeholder="Nome do usuário"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          type="text"
          placeholder="Email do usuário."
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          type="password"
          placeholder="Senha do usuário."
        />
        <input
          value={img}
          onChange={(event) => setImg(event.target.value)}
          name="img"
          type="text"
          placeholder="Imagem do usuário."
        />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
          type="text"
          placeholder="Descrição do usuário."
        />
        <button onClick={handleEditUsers}>Edit</button>
      </div>
    </div>
  );
};

export default ModalEdit;
