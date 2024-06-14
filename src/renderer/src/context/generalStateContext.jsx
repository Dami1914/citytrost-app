import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const GeneralStateContext = createContext({})

const GeneralStateProvider = ({children}) => {
  const [dialogue,setDialogue] = useState()
  const occupation_by_sector = {
    
  }
  const [currentLoanCustomer,setCurrentLoanCustomer] = useState({})
  return (
    <GeneralStateContext.Provider value={{currentLoanCustomer,setCurrentLoanCustomer}}>{children}</GeneralStateContext.Provider>
  )
}

export default GeneralStateProvider

export function GeneralStateData(){
  return useContext(GeneralStateContext)
}