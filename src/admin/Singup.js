import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Singup = () => {

    const history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem('login'))
        {
            history.push('/dashboard');
        }
    },[])

    const[username,setUsername]=useState();
    const[phone,setPhone]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[submit,setSubmit]=useState(false);


    const userSubmit = (e) =>{
        const data = {username,phone,email,password};
        fetch('http://localhost:9000/user/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>{console.log(res);
            setSubmit(true);
        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        <>

        <div className='container'>
            <div className='row py-5'>
                <div className='col-md-6 offset-md-3 p-5 shadow'>
                    {
                        submit? `data submit`: null
                    }
                <div class="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" onChange={(e)=>{setUsername(e.target.value)}} required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">phone</label>
                    <input type="text" className="form-control" onChange={(e)=>{setPhone(e.target.value)}} required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>{userSubmit()}}>Submit</button>
                </div></div>
        </div>
        </>
    )
}
export default Singup;