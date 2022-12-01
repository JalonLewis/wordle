import { useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

function Navigation() {
  let h1Text = "Wordle+";
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShow(true);

  const handleHomeClick = () => {
    navigate("/");
    navigate(0)
    setShowModal(false)
  };

  const handleCancelClick = () => {
    setShowModal(false)
  };

  const handleTitleClick = () => {
    setShowModal(true)
    console.log(showModal)
  };

  if (useLocation().pathname.includes("wordle")) {
    h1Text = "Wordle";
  } else if (useLocation().pathname.includes("qourdle")) {
    h1Text = "Qourdle";
  } else if (useLocation().pathname.includes("octordle")) {
    h1Text = "Octordle";
  }
  return (
    <div>
      <button onClick={handleTitleClick} className={`bg-transparent border-0 position-relative top-0 start-50 translate-middle-x`}>
        <h1 className={`text-dark`}>{h1Text}</h1>
      </button>
      <Modal show={showModal}>
        <ModalBody>Are you sure you would like to exit this game?</ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleHomeClick}>
            Home
          </button>
        </ModalFooter>
      </Modal>
      <Outlet />
    </div>
  );
}

export default Navigation;
