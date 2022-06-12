import React, { useEffect } from "react";
import Menu from "./cmp/Menu";
import "./style/main.css";
import Topmenu from "./cmp/Topmenu";

const Profile = () => {
  return (
    <>
      <Menu />

      <section className="home-section">
        <Topmenu />

        <div className="home-content">
          <div className="container">
            <h1>profile page</h1>
          </div>
        </div>

        <div className="container py-5 text-center"></div>
      </section>
    </>
  );
};
export default Profile;
