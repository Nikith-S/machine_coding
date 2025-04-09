import React, { use, useState } from 'react';

const Modal = ({handleCloseClick}) => {


  const handleKeyDown = (e) => {
    console.log(`Key pressed: ${e.key}, KeyCode: ${e.keyCode}`);
  };


  useEffect(() => {

    function onKeyDown(event){
      if(event.keyCode == 27){
        handleCloseClick()
      }
    }
    document.addEventListener("keydown" , onKeyDown)
 return () => {

  document.removeEventListener("keydown", onKeyDown)
 }
  })


  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        maxWidth: '400px',
        margin: '20px auto',
      }}
    >
      <p id="modal-title">Hello, this is a modal requested by the interviewer.</p>
      <p id="modal-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt optio sapiente esse soluta! Ullam
        praesentium possimus pariatur officia, ipsum natus.
      </p>
      <button onClick={handleCloseClick}>Close</button>
    </div>
  );
};

export default Modal;