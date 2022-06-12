import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
     <div className='container'>
            
      <ul className="nav border-bottom p-2">
        <li className="nav-item">
          <Link className="nav-link active" to="/dashboard">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-brand">
            Add Brand
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-model">
            Add model
          </Link>
        </li>
   
      </ul>
      </div>
    </>
  )
}

export default Menu;
