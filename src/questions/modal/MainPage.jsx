import React, { useState } from 'react'
import modal from "./modal/modal"

const MainPage = () => {
const [modal , setModal] = useStat(false)

const handleClick = () => {
  setModal(true)
}

const handleCloseClick = () => {
setModal(false)
}
  return (
    <>
    <div onClick={setModal(false)}>
    <h1>Modal Creation</h1>
    <button onClick={(e) => {
    e.stopPropagation() // Prevents the click event from bubbling up to the parent div
     handleClick()
    }}
    
    
    
    
    >Click Me For the Modal</button>
    {modal ? <modal onClick= {handleCloseClick}/>: null}
    </div>
    </>
  )
}

export default MainPage
