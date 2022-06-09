import React, { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";



const Navbar = () => {

  const{loginck,loginupdate}= useContext(StateContent);

  console.log(loginck)
 
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    loginupdate();
    history.push("/wp-login");
  };

  return (
    <>
 
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>PhoneBecho</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/brand">
                  Brand
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/content">
                  Content
                </Link>
              </li>
              {!localStorage.getItem('login') ? (
                <>

<li className="nav-item">
                    <Link className="nav-link" to="/wp-login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/wp-singup">
                      Sing up
                    </Link>
                  </li>
                 </>
              ) : (
                <>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                  Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
