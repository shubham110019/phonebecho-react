import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";
import Apiurl from "../Apidata";

function Loginpopup() {

    const{loginck,loginupdate,loginout}= useContext(StateContent);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[passwordError,setPasswordError]=useState("");
    const[emailError,setEmailError]=useState("");
    const [login, setLogin] = useState(false);
    const [error,setError]=useState();
  
    const history = useHistory();

  
    const loginFrom = async () =>{
  
      const userdata = { email, password };
  
      if(email && password)
      {
        let result = await fetch(`${Apiurl}user/login`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(userdata)
        });
    
        result = await result.json();
        console.log(result);
        
        if(!result.token)
        {
          setEmailError(result.emailError);
          setPasswordError(result.passwordError)
        }
        else{
          localStorage.setItem("login",JSON.stringify({token: result.token,email:result.email}));
          localStorage.setItem("username",result.username)
          localStorage.setItem("email",result.email)
          localStorage.setItem("usertype",result.userType)
          localStorage.setItem("userid",result.userId)
  
          if(result.userType === "admin"){
            history.push("/admin/dashboard");
            loginout();
          }
          else{
            window.location.reload(); 
            
          }
          
        }
  
      }
      else{
        alert("fill the input");
      }
    }

  return (
    <>
    
     <div className="mb-4">
         <input
                type="text"
                className="lgn-input form-control"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
               <p style={{"color":"red","fontSize":"12px"}}>{emailError}</p>
            </div>
            <div className="mb-4">
             
              <input
                type="password"
                className="lgn-input form-control"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{"color":"red","fontSize":"12px"}}>{passwordError}</p>
            </div>
            <div className="text-start pt-2">
            <button
              type="submit"
              className="btn btn-lgn"
              onClick={() => {
                loginFrom();
              }}
            >
              Sign in
            </button>
            </div>
    </>
  )
}

export default Loginpopup;
