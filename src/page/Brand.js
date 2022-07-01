import React, { useState } from "react";
import Card from "../comonent/Card";
import Navbar from "../comonent/Navbar";
import Footer from "../comonent/Footer";
const Brand = () => {
  const [brand, setBrand] = useState();

  fetch("https://phonebecho-api.herokuapp.com/phone/").then((resq) => {
    resq
      .json()
      .then((result) => {
        // console.log(result.brandapi);
        setBrand(result.brandapi);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
    <Navbar/>
      <div className="alt-topsell ptb-50">
        <div className="container">
          <div className="row mb-4 ">
            <div className="col-md-12 alt-title">
              <h2 className="mb-5">Sell Old Mobile Phone</h2>
              <h4>Select Brand</h4>
            </div>
          </div>

          <div className="row">
            {brand
              ? brand.map((item, i) => {
                  return (
                    <>
                      <Card value={item} link={`brand/${item.brand}`}/>
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Brand;