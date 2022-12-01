// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";

// function EndGame(solved, guessCounter, showModal) {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate('/');
//   }

//   return (
//     <div>
//     <Modal show={showModal} >
//       <ModalHeader>
//         <ModalTitle>You Win!</ModalTitle>
//       </ModalHeader>
//       <ModalBody>You found the solution in {guessCounter} guesses</ModalBody>
//       <ModalFooter><button className="btn btn-primary" onClick={handleClick}>Home</button></ModalFooter>
//     </Modal>

//     <Modal show={showModal && !solved} >
//       <ModalHeader>
//         <ModalTitle>You ran out of guesses...</ModalTitle>
//       </ModalHeader>
//       <ModalBody>Better luck next time</ModalBody>
//       <ModalFooter><button className="btn btn-primary" onClick={handleClick}>Home</button></ModalFooter>
//     </Modal>
//     </div>
//   );
// }

// export default EndGame;