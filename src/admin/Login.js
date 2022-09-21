import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";
import Apiurl from "../Apidata";
import Navbar from "../comonent/Navbar";
import Footer from "../comonent/Footer";

const Login = () => {
  const{loginck,loginupdate,loginout}= useContext(StateContent);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[passwordError,setPasswordError]=useState("");
  const[emailError,setEmailError]=useState("");
  const [login, setLogin] = useState(false);
  const [error,setError]=useState();

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      history.push("/dashboard");
    }
  }, []);

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
        // console.log("user id is : " + localStorage.getItem("userid"))
        // console.log("user type is : " + localStorage.getItem("usertype"))

        if(result.userType === "admin"){
          history.push("/admin/dashboard");
          loginout();
        }
        else{
          history.push("/");
        }
        
      }

    }
    else{
      alert("fill the input");
    }
  }


  return (
    <>
    {/* {
      console.log("login check " + logincheck)
    } */}
    {/* <Navbar/> */}
    <div className="loginfull">
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-md-5 m-auto p-5 mt-5 shadow bg-white rounded">
            <h2 className="mb-4 text-stat">Login </h2>

            <p>{error}</p>

            <div className="mb-3">
              
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
              <Link to="/wp-singup" className="ms-4">Register</Link>
            </div>


            {/* <h3 className="mt-4"><strong>Admin login</strong></h3>
            <p><strong>username</strong>:shubham  <strong>password</strong>:123</p>

            <h3 className="mt-4"><strong>User login</strong></h3>
            <p><strong>username</strong>:niitka  <strong>password</strong>:123</p> */}

          </div>
        </div>
      </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};
export default Login;
