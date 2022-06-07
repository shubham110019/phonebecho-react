import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Protected = (prop) =>{

    const history = useHistory();

    useEffect(()=>{

        if(!localStorage.getItem('login'))
        {
            history.push('/wp-login');
        }

    },[])

    const Cmd = prop.Cmd;
    return(
        <>
        <Cmd/>
        </>
    )
}

export default Protected;