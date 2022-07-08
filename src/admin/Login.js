import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";


const Login = () => {
  const{loginck,loginupdate,loginout}= useContext(StateContent);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [error,setError]=useState();

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      history.push("/dashboard");
    }
  }, []);

  const loginFrom = async () =>{

    const userdata = { username, password };

    if(username && password)
    {
      let result = await fetch(`https://phonebecho-api.herokuapp.com/user/login`,{
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
        setError(result.mess);
      }
      else{
        localStorage.setItem("login",JSON.stringify({token: result.token,username:result.username}));
        localStorage.setItem("username",result.username)
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
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 offset-md-3 p-5 shadow">
            <h2 className="mb-4 text-center">Login page</h2>

            <p>{error}</p>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                loginFrom();
              }}
            >
              Submit
            </button>


            <h3 className="mt-4"><strong>Admin login</strong></h3>
            <p><strong>username</strong>:shubham  <strong>password</strong>:123</p>

            <h3 className="mt-4"><strong>User login</strong></h3>
            <p><strong>username</strong>:niitka  <strong>password</strong>:123</p>

          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
