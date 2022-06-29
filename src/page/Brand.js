import React, { useEffect, useState } from "react";
import Card from "../comonent/Card";
import Navbar from "../comonent/Navbar";
import Footer from "../comonent/Footer";
import { Link } from "react-router-dom";

const Brand = () => {
  const [brand, setBrand] = useState();



  useEffect(()=>{
    fetch("http://localhost:1337/api/phonebrands").then((resq) => {
      resq
        .json()
        .then((result) => {
          // console.log(result.brandapi);
          setBrand(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },[])
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

          <div className="row gy-4">
            {brand
              ? brand.map((item, i) => {
                  return (
                    <>
                      <div className="col-md-2">
                                    <div className="card">
                                       <Link to={`brand/${item.attributes.name}`}>
                                    <div className="card-body">
                                        <img src={item.attributes.image} />
                                        <p>{item.attributes.name}</p>
                                    </div>
                                    </Link>
                                    </div>
                      </div>
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
