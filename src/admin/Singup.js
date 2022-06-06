import React, { useState } from 'react';

const Singup = () => {

    const[username,setUsername]=useState();
    const[phone,setPhone]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();


    const userSubmit = (e) =>{

        const data = [username,phone,email,password];
        fetch('http://localhost:9000/user/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        })

        console.log(JSON.stringify(data))
    }

    return (
        <>

        <div className='container'>
            <div className='row py-5'>
                <div className='col-md-6 offset-md-3 p-5 shadow'>
                <div class="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" onChange={(e)=>{setUsername(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label className="form-label">phone</label>
                    <input type="text" className="form-control" onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>{userSubmit()}}>Submit</button>
                </div></div>
        </div>
        </>
    )
}
export default Singup;