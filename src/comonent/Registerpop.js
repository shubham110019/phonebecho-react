import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Apiurl from '../Apidata';

export default function Registerpop() {

    const history = useHistory();
    const[register,setRegister]=useState(false);
    useEffect(() => {
        if (localStorage.getItem('login')) {
            history.push('/dashboard');
        }
    }, [])

    const [userdata, setUserdata] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
    })

    const [usererrordata, setUsererrordata] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
    })

    const formdata = [
        { id: 61, type: "text", name: 'username', data: "modelname", error: usererrordata.username },
        { id: 62, type: "text", name: 'phone', data: "image", error: usererrordata.phone },
        { id: 62, type: "email", name: 'email', data: "pageurl", error: usererrordata.email },
        { id: 62, type: "password", name: 'password', data: "series", error: usererrordata.password },
    ]


    const [submit, setSubmit] = useState(false);

    const [apidata, setApidata] = useState();
    const [ssemail, setSsemail] = useState(false);


    const validate = () => {
        let username = "";
        let email = "";
        let phone = "";
        let password = "";
        if (!userdata.username) {
            username = "Username field is required";
        }
        if (!userdata.phone) {
            phone = "Phone field is required";
        }
        else {
            phone = "";
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        if (!userdata.email || reg.test(userdata.email) === false) {
            email = "Email Field is Invalid ";
        }
        if (!userdata.password) {
            password = "Password field is required";
        }

        else if (pwd.test(userdata.password) === false) {
            password = "Password is weak";
        }

        else if (ssemail) {
            password = "this email already exit";
        }
        else {
            password = "";
        }
        if (email || username || password || phone) {
            setUsererrordata({ ...usererrordata, username, email, password, phone });
            return false;
        }
        return true;
    }

    const Handmodelupdate = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...userdata,
            [name]: value,
        });
    }



    const userSubmit = async (e) => {

        if (validate()) {


            let result = await fetch(`${Apiurl}user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(userdata)
            });

            result = await result.json();
            console.log(result);

            if (!result.token) {
                setUsererrordata({ ...usererrordata, email: result.emailError })
            }

            setRegister(true);
        }
        else {
            console.log('not submit')
        }
    }

  return (
    <>

{
                            register?
                <div class="alert alert-success" role="alert">
                your account has been successfully activated 
              </div>
              : <></>
            }
            
        {
                            formdata.map((item) => {
                                return (
                                    <>


                                        <div class="mb-3">
                                           
                                            <input type={item.type} className="lgn-input form-control" name={item.name} onChange={(e) => { Handmodelupdate(e) }} required placeholder={item.name}/>
                                        </div>
                                        <p style={{ 'color': 'red', 'fontSize': '12px' }}>{item.error}</p>

                                    </>
                                )
                            })
                        }

<div className="text-start pt-4">
                        <button type="submit" className="btn btn-lgn" onClick={() => { userSubmit() }}>Register</button>
                        </div>
    </>
  )
}
