import React from 'react'
import "./Dialogue.css";
const Dialogue = ( { isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
   <>
      <div className="full-screen-dialog">
      <div className="dialog-content">
        <h4>It will make food ordering easier for customers. 
            It ends up saving much time as 
            it saves the time that a mediator takes to pen down the entire order.
             It is also easy to track the order delivery over a mobile application.</h4>
     <button className="close-button" onClick={onClose}>

          Download The App
        </button>
        </div>
        </div>
   </>
  )
}

export default Dialogue