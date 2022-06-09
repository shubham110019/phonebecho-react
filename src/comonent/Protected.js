import React, { useEffect, } from 'react';
import { useHistory } from 'react-router-dom';
import { StateContent } from '../StateProvider';

const Protected = (prop) =>{


    const history = useHistory();

    useEffect(()=>{

        if(!localStorage.getItem('login'))
        {
            history.push('/wp-login');
            localStorage.clear();
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