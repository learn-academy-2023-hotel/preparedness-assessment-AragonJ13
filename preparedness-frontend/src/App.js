import React, { useState} from "react"
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"




 
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [userName, setUserName] = useState("")

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  }

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  }

  const resetInput = () => {
    setUserName("")
  }

  return (
   
    <div className="entire-content background-image">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" id="name" value={userName} onChange={handleNameChange} />
        </div>
        <div className="button-container">
         <Button  onClick={toggleModal}>Click Me</Button>
          <Button  onClick={resetInput}>Reset</Button>
        </div>
        <ModalComponent  isOpen={isModalOpen} toggleModal={toggleModal} userName={userName}/>
         
      </div>
     
    </div>
    
  )
}

export default App
