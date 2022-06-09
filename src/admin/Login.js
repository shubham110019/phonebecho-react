import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";


const Login = () => {
  const{loginck,loginupdate,loginout}= useContext(StateContent);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      history.push("/dashboard");
    }
  }, []);

  const loginFrom = () => {
    const userdata = { username, password };

    fetch("http://localhost:9000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userdata),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result.token);
        localStorage.setItem(
          "login",
          JSON.stringify({
            Login: true,
            token: result.token,
          })
        );
        setLogin(true);
        loginout();
        // loginck(false);

        history.push("/dashboard");
      });
    });
  };

  return (
    <>
    {/* {
      console.log("login check " + logincheck)
    } */}
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 offset-md-3 p-5 shadow">
            <h2 className="mb-4 text-center">Login page</h2>
            {login ? "user login working" : null}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
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
