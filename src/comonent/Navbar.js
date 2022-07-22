import React, { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";



const Navbar = () => {

  return (
    <>
 
      <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom p-3">
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
                <Link className="nav-link" to="/sell-old-mobile-phone">
                  Sell Phone
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/sell-old-mobile-phone/brand" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sell Phone
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><Link className="dropdown-item" to="/sell-old-mobile-phone/brand">More</Link></li>
                </ul>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/sell-old-tablet">
                  Sell Tablet
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sell-old-tablet">
                  Sell Laptop
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

                {localStorage.getItem('usertype') === 'admin' ?
                 <>
                   <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                  Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/logout"
                    >
                      Logout
                    </Link>
                  </li>
                </> 
                : 
                <>


              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/sell-old-mobile-phone/brand" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><a className="dropdown-item" href="#">Setting</a></li>
                  <hr/>
                  <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                </ul>
              </li>
                

                
                </>}
                

                 
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
