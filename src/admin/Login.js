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
      let result = await fetch("http://localhost:9000/user/login",{
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
        localStorage.setItem("login",JSON.stringify({token: result.token}));
        history.push("/dashboard");
        loginout();
      }

    }
    else{
      alert("fill the input");
    }
  }

  // const loginFrom = () => {

  //   if(username && password){
  //   const userdata = { username, password };

  //   fetch("http://localhost:9000/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //     body: JSON.stringify(userdata),
  //   }).then((resp) => {
  //     resp.json().then((result) => {
  //       // console.log(result.token);
  //       localStorage.setItem(
  //         "login",
  //         JSON.stringify({
  //           Login: true,
  //           token: result.token,
  //         })
  //       );
        
  //       setLogin(true);
  //       history.push("/dashboard");
  //       loginout();
  //       // loginck(false);

       
  //     });
  //   });
  // }
  // else{

  // }
  // };

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
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
