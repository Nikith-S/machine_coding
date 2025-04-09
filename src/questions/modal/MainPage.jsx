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
    <h1>Modal Creation</h1>
    <button onClick={handleClick}>Click Me For the Modal</button>

    {modal ? <modal onClick= {handleCloseClick}/> : null}
    </>
  )
}

export default MainPage
