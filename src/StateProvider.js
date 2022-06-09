import React,{createContext, useState} from 'react';

export const StateContent = createContext();

const StateProvider = ({children}) =>{

    const[loginck,setLoginck]= useState(true);

    const loginupdate = (item)=>{
        setLoginck(true);
    }
    const loginout = (item) =>{
        setLoginck(false);
    }
    return(
        <>
        <StateContent.Provider value={{loginck:loginck,loginupdate:loginupdate,loginout:loginout}}>
            {children}
        </StateContent.Provider>
        </>
    )
}
export default StateProvider;