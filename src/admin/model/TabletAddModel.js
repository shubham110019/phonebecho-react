import React, { useEffect, useState } from "react";
import Menu from "../cmp/Menu";
import { useHistory } from "react-router-dom";
import Topmenu from "../cmp/Topmenu";
import Apiurl from "../../Apidata";

const TabletAddModel = () => {

  const history = useHistory();
  const [variantdata, setVariantdata] = useState([{
    phonedata: "",
    phoneurl: "",
    phoneprice: "",
  }]);

  const [state, setState] = useState({
    brandname: "",
    modelname: "",
    image: "",
    pageurl: "",
    series: "",
    display: "",
    displayglass: "",
    frontcamera: "",
    backcamera: "",
    volumebutton: "",
    fingertouch: "",
    wifi: "",
    battery: "",
    speaker: "",
    powerbutton: "",
    chargingport: "",
    facesensor: "",
    silentbutton: "",
    audioreceiver: "",
    cameraglass: "",
    bluetooth: "",
    vibrator: "",
    microphone: "",
    proximitysensor: "",
    audiojack: "",
    box: "",
    originalcharger: "",
    bill3: "",
    bill3to6: "",
    bill6to11: "",
    bill11out: "",
    conditiongood: "",
    conditionbelow: "",
    conditionpoor: "",
  });

  const [apibrand, setApibrand] = useState();
  const [variant, setVariant] = useState([{ variant: "" }]);



  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });

  };

  const handleVariant = (e, index) => {

    const { name, value } = e.target;
    const list = [...variantdata];
    list[index][name] = value;
    setVariantdata(list);
  };





  const modelsubmit = (e, index) => {

    const data = {
      "variant": variantdata,
    }
    const fulldata = { ...state, ...data }

    fetch(`${Apiurl}tabletmodel`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(fulldata)
    }).then((res)=>{
      history.push('./')
      // console.log("data submit" + res)

    }).catch((err)=>{
      console.log(err);
    })

  
  };


  const apiData = async () => {
    const apidata = await fetch(`${Apiurl}tablet/`);
    // setData(await apidata.json());
    const brandapidata = await apidata.json();
    const fullbrand = brandapidata.data;
    setApibrand(fullbrand);
  };

  const variantAdd = () => {
    setVariant([...variant, { variant: "" }]);
    setVariantdata([...variantdata, {phonedata: "", phoneurl: "", phoneprice: "", }])
  };
  const variantRemove = (index) => {
    const list = [...variant];
    list.splice(index, 1);
    setVariant(list);
  };



  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <Menu />

      <section className="home-section">
        <Topmenu />

        <div className="home-content">
          <div className="container px-4">
            <h2>Tablet Add Model</h2>

            <div className="row">
              <div className="col-md-12 p-2">
                <div className="border p-3 bg-white row">
                  <div className="mb-3 col-md-4">
                    <label className="form-label">Model Name</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={handleInputChange}
                      name="brandname"
                      value={state.brandname}
                    >
                      <option>select one</option>
                      {apibrand ? (
                        apibrand.map((item, i) => {
                          return (
                            <>
                              <option value={item.brand} key={i}>
                                {item.brand}
                              </option>
                            </>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">phone Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.modelname}
                      onChange={handleInputChange}
                      name="modelname"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Image link</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.image}
                      onChange={handleInputChange}
                      name="image"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">url</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.pageurl}
                      onChange={handleInputChange}
                      name="pageurl"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Series</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.series}
                      onChange={handleInputChange}
                      name="series"
                    />
                  </div>

                  <div className="col-md-12">
                    <h4 className="my-4">Variant</h4>
                  </div>

                  {variant.map((element, index) => {
                    return (
                      <>


                        <div className="mb-3 col-md-4">
                          
                          <label className="form-label">Ram and Rom</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="6Gb / 128GB"
                            value={element.phonedata}
                            onChange={(e) => { handleVariant(e, index) }}
                            name="phonedata"
                          />
                        </div>

                        <div className="mb-3 col-md-3">
                          <label className="form-label">Price</label>
                          <input
                            type="text"
                            className="form-control"
                            value={element.phoneprice}
                            onChange={(e) => { handleVariant(e, index) }}
                            name="phoneprice"
                          />
                        </div>

                        <div className="mb-3 col-md-4">
                          <label className="form-label">url</label>
                          <input
                            type="text"
                            className="form-control"
                            value={element.phoneurl}
                            onChange={(e) => { handleVariant(e, index) }}
                            name="phoneurl"
                          />
                        </div>


                        {variant.length > 1 && (
                          <div className="col-md-1">
                            <label className="form-label">&nbsp;</label>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                variantRemove();
                              }}
                            >
                              remove
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })}

                  <div className="col-md-12 text-right">
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        variantAdd();
                      }}
                    >
                      Add more
                    </button>
                  </div>

                  <div className="col-md-12">
                    <h4 className="my-4">Functional or Physical Problems</h4>
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Display not working</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.display}
                      onChange={handleInputChange}
                      name="display"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Display Glass</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.displayglass}
                      onChange={handleInputChange}
                      name="displayglass"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Front Camera not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.frontcamera}
                      onChange={handleInputChange}
                      name="frontcamera"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Back Camera not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.backcamera}
                      onChange={handleInputChange}
                      name="backcamera"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Volume Button not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.volumebutton}
                      onChange={handleInputChange}
                      name="volumebutton"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Finger Touch not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.fingertouch}
                      onChange={handleInputChange}
                      name="fingertouch"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">WiFi not working</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.wifi}
                      onChange={handleInputChange}
                      name="wifi"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Battery Faulty</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.battery}
                      onChange={handleInputChange}
                      name="battery"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Speaker Faulty</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.speaker}
                      onChange={handleInputChange}
                      name="speaker"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Power Button not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.powerbutton}
                      onChange={handleInputChange}
                      name="powerbutton"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Charging Port not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.chargingport}
                      onChange={handleInputChange}
                      name="chargingport"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Face Sensor not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.facesensor}
                      onChange={handleInputChange}
                      name="facesensor"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Silent Button not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.silentbutton}
                      onChange={handleInputChange}
                      name="silentbutton"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Audio Receiver not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.audioreceiver}
                      onChange={handleInputChange}
                      name="audioreceiver"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Camera Glass Broken</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.cameraglass}
                      onChange={handleInputChange}
                      name="cameraglass"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Bluetooth not working</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.bluetooth}
                      onChange={handleInputChange}
                      name="bluetooth"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Vibrator is not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.vibrator}
                      onChange={handleInputChange}
                      name="vibrator"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Microphone not working</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.microphone}
                      onChange={handleInputChange}
                      name="microphone"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">
                      Proximity Sensor not working
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.proximitysensor}
                      onChange={handleInputChange}
                      name="proximitysensor"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Audio Jack not working</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.audiojack}
                      onChange={handleInputChange}
                      name="audiojack"
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
                      value={state.box}
                      onChange={handleInputChange}
                      name="box"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Original Charger</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.originalcharger}
                      onChange={handleInputChange}
                      name="originalcharger"
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
                      value={state.bill3}
                      onChange={handleInputChange}
                      name="bill3"
                    />
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">3 months - 6 months</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.bill3to6}
                      onChange={handleInputChange}
                      name="bill3to6"
                    />
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">6 months - 11 months</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.bill6to11}
                      onChange={handleInputChange}
                      name="bill6to11"
                    />
                  </div>

                  <div className="mb-3 col-md-3">
                    <label className="form-label">Above 11 months</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.bill11out}
                      onChange={handleInputChange}
                      name="bill11out"
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
                      value={state.conditiongood}
                      onChange={handleInputChange}
                      name="conditiongood"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">below</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.conditionbelow}
                      onChange={handleInputChange}
                      name="conditionbelow"
                    />
                  </div>

                  <div className="mb-3 col-md-4">
                    <label className="form-label">Poor</label>
                    <input
                      type="text"
                      className="form-control"
                      value={state.conditionpoor}
                      onChange={handleInputChange}
                      name="conditionpoor"
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        modelsubmit();
                      }}
                    >
                      submit
                    </button>
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

export default TabletAddModel;
