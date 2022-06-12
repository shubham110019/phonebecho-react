import React from "react";
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";

const Addmodel = () => {
  return (
    <>
      <Menu />

      <section className="home-section">
        <Topmenu />

        <div className="home-content">
          <div className="container">
            <h2>Add Model</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addmodel;
