import "./style.css";
import Add from "../../assets/icons/icons8-mais-28.38.png";
import ModalCreate from "../Modals/Modal Create";
import { useState } from "react";

const Header = ({ getUsers }) => {
  const [showModalCreate, setshowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setshowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div className="headerTitle-conteiner">
          <h2>Lista de usuários</h2>
        </div>
        <div className="headerOptions-conteiner">
          <img
            onClick={handleShowModalCreate}
            className="Icon"
            src={Add}
            alt="Add item"
          />
        </div>
      </div>
      {showModalCreate && (
        <ModalCreate closeModal={handleShowModalCreate} getUsers={getUsers} />
      )}
    </>
  );
};

export default Header;
