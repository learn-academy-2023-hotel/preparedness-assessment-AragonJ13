import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


const ModalComponent = ({ isOpen, toggleModal, userName }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Hello, {userName}</ModalHeader>
      
      <ModalBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</p>
      </ModalBody>
      
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>OK</Button>{' '}
        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent
