import toast from "react-hot-toast";
import "./style.css";

const ModalRemove = ({ closeModal, user, getUsers }) => {
  const handleRemoveShirt = async () => {
    const baseURL = "http://localhost:3001";

    const res = await fetch(`${baseURL}/users/${user.id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (res.status !== 200) {
      return toast.error("Erro ao deletar usuário.");
    }

    closeModal();
    getUsers();
    toast.success("Uusário deletado.");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-remove">
        <div className="modal-header">
          <button onClick={closeModal}>X</button>
        </div>
        <h3>Remover {user.name}? </h3>
        <button className="cancel" onClick={closeModal}>
          No
        </button>
        <button className="confirm" onClick={handleRemoveShirt}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default ModalRemove;
