import React, { useState } from 'react'

const index = () => {

let limit = 5;

cosnt[rating , setRating] = useState(2)


const handleClick = (i) => {
setRating(i+1)
}
  return (
    <>
    
    {[...Array(limit).map((_ , i)=> {
       <span onClick={() => handleClick(i)}>
      {i < rating ? "*" : "*"}
       </span>
    })]}
    
    
    </>
  )
}

export default index
