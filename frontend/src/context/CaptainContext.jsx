import React from 'react'
import { useState, createContext, useEffect } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({children}) => {
    const [ captain, setCaptain ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateCaptain = (captainData) => {
    
      setCaptain(captainData); // Update state
    };
    

    const value ={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }
    // console.log("Captain state:", captain);
 
      
  return (
    <div>
        <CaptainDataContext.Provider value={value}>
        {children}
        </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext