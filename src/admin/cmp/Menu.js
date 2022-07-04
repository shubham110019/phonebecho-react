import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">PhoneBecho</span>
        </div>
        <ul className="nav-links p-0">
          <li>
            <Link to="/admin/dashboard" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/add-brand">
              <i className="bx bx-box"></i>
              <span className="links_name">Phone Brand</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/view-model">
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Phone Model</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/view-booking">
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Booking</span>
            </Link>
          </li>

          <li className="log_out">
            <Link to="/logout">
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
