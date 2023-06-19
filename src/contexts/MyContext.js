import React, { createContext, useState } from 'react';
const MyContext = createContext();



function MyContextProvider({children}) {

const [count,setCount]=useState(0) ;

const contextValue={
  count,setCount
}
  return(
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
  
}
export {MyContextProvider}

export default MyContext