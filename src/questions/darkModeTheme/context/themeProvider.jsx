import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

const [toggle, setToggle] = useState(false)
const handleToggle = () => {
setToggle(!toggle)
}


// so the interview said like after some seconds of time the page should automatically get into dark mode

useEffect(() => {
let timeOut = setTimeout(() => {
setToggle(!toggle)
},500000)

return () => {
clearTimeout(!timeOut)
}
},[])

return (
<ThemeContext.Provider value={{toggle, handleToggle}}>
{children}
</ThemeContext.Provider>
)
}
