import React, { useEffect,useState } from "react";
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";

const Addmodel = () => {

  const [apibrand, setApibrand] = useState();

  const apiData = async () => {
    const apidata = await fetch('http://localhost:9000/phone/');
    // setData(await apidata.json());
    const brandapidata = await apidata.json();
    const fullbrand = brandapidata.brandapi;
    setApibrand(fullbrand);
}

useEffect(()=>{
  apiData();
},[])

  return (
    <>
      <Menu />

      <section className="home-section">
        <Topmenu />

        <div className="home-content">
          <div className="container px-4">
            <h2>Add Model</h2>

              <div className="row">
              <div className="col-md-12 p-2">
                <div className="border p-3 bg-white row">

                <div className="mb-3 col-md-4">
                    <label className="form-label">Model Name</label>
                    <select class="form-select" aria-label="Default select example">
                    {
                                      apibrand ?
                                      apibrand.map((item,i)=>{
                                      return(<>
                                      <option value={item.brand} key={i}>{item.brand}</option>
                                      </>
                                      )}):<>data not fetch</>
                                }
                    </select>
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Model Name</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-md-4">
                    <label className="form-label">url</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Price</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Image link</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <h4 className="my-4">Functional or Physical Problems</h4>
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Display not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Display Glass</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Front Camera not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Back Camera not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Volume Button not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Finger Touch not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">WiFi not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Battery Faulty</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Speaker Faulty</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Power Button not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Charging Port not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Face Sensor not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Silent Button not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Audio Receiver not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Camera Glass Broken</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Bluetooth not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Vibrator is not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Microphone not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Proximity Sensor not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Audio Jack not working</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <h4 className="my-4">Accessories</h4>
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Box</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Original Charger</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <h4 className="my-4">Bill</h4>
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">Below 3 months</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">3 months - 6 months</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">6 months - 11 months</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">Above 11 months</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <h4 className="my-4">Condition</h4>
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Good</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">below</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Not Good</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>


                  <div className="mb-3 col-md-12">
                   <button className="btn btn-info">submit</button>
                  </div>
                  

             
                </div>
              </div>
              </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Addmodel;
