import React, { useContext, useState } from 'react'

const index = () => {

// const[toggle, setToggle] = useState('light')
// const handleToggle = () => {
//     if(toggle === 'light'){
//         setToggle('dark')
// } else {
//     setToggle('light');
// }

// };


// another way of doing things
// const [toggle, setToggle] = useState(false);
// return (
// <div>
// {toggle ? "dark-mode" : "light-mode"}
// <button onClick={() => setToggle(!toggle)}></button>      
// </div>
//   )
// }

// export default index

// another way of doing things using useContext api instead of wrinting in every page


const {toggle, handleToggle} = useContext(ThemeContext)

return (
    <div>
    {toggle ? "dark-mode" : "light-mode"}
    <button onClick={() => handleToggle(!toggle)}></button>      
    </div>
      )
    }
    
    export default index


    // wrap the themeProvide thing in app.js 
    // like  <themeProvider> </themeProvider>