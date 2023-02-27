import "./style.css";
import edit from "../../assets/icons/escrever.png";
import remove from "../../assets/icons/remover.png";
import { useState } from "react";
import ModalEdit from "../Modals/Modal Edit";
import ModalRemove from "../Modals/Modal Remove";

const Card = ({ user, getUsers }) => {
  const [showRemoveModal, setshowRemoveModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setshowRemoveModal(!showRemoveModal);
  };

  const handleShowEditModal = () => {
    setshowEditModal(!showEditModal);
  };

  return (
    <>
      <div className="card-conteiner">
        <div className="card-header">
          <p>{`${user.name}`}</p>
          <img src={user.img} alt={`${user.name}`} />
        </div>
        <h3>{user.description}</h3>
        <p>{user.email}</p>
        <div className="card-body">
          <img
            onClick={handleShowEditModal}
            className="icons"
            src={edit}
            title="Edit"
            alt="Edit icon"
          />
          <img
            className="icons"
            onClick={handleShowRemoveModal}
            src={remove}
            title="Remove"
            alt="Remove icon"
          />
        </div>
      </div>

      {showRemoveModal && (
        <ModalRemove
          closeModal={handleShowRemoveModal}
          user={user}
          getUsers={getUsers}
        />
      )}
      {showEditModal && (
        <ModalEdit
          closeModal={handleShowEditModal}
          user={user}
          getUsers={getUsers}
        />
      )}
    </>
  );
};

export default Card;
