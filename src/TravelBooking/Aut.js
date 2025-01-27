import React, { useContext, useState } from 'react'
const AutContext = React.createContext();
export default function Aut(props) {
    const[user,setuser]=useState(null)
    const login = (user)=>{
        setuser(user)
    }
    const logout = ()=>{
        setuser(null)
    }
  return (
    <div>
        <AutContext.Provider value={{user,login,logout}}>
            {props.children}
        </AutContext.Provider>

    </div>
  )
}
export const useAuth =()=>{
    return  useContext(AutContext)
}
