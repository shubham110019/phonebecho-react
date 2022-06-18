import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';

const Variant = () => {

    const [phoneoncheck, setPhoneoncheck] = useState();
    const [phoneonc, setPhoneonc] = useState();
    const [issues, setIssues] = useState(false);
    const [issuedata, setIssuedata] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [mainprice, setMainprice] = useState();

    const { id } = useParams();

     // page id
     const { pid } = useParams();


    // price id
    const { slug } = useParams();
   

    // console.log(slug);
    const [phonedata, setPhonedata] = useState('data');
    const [phoneprice, setPhoneprice] = useState('data');

 

 

    const phoneOncheck = (check) => {

        if (check === "no") {
            setPhoneoncheck(false)
            setPhoneonc('No')
        }
        else {
            setPhoneoncheck(true)
            setPhoneonc('Yes')
        }

        console.log(phoneoncheck);

    }

    const Phoneissues = (e, i) => {

        const { name, checked, id, value } = e.target;

        if (checked === true) {
            console.log(value)
           
            const data = parseInt(mainprice) - parseInt(value)
            setMainprice(data)
        }
        else if(checked === false && name === name)
        {
            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)
        }



    }

useEffect(()=>{
    fetch(`http://localhost:9000/model/${pid}`).then((resq) => {
        resq.json().then((result) => {
            const data = result.data;
            setPhonedata(result.data)
            // console.log(result.data)

            const ph = result.data.variant

            // console.log(ph)

          ph.map((item,i)=>{
              if(item._id === slug)
              {
                setPhoneprice(item)

                setMainprice(item.phoneprice)
              }
          })

            // if()
           
        })
    }).catch(err => {
        console.log(err)
    })
},[])



    return (
        <>
            <Navbar />
            <div className="alt-topsell ptb-50">
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h2 className='mb-5'>Sell Old Mobile Phone</h2>
                        </div>
                    </div>
                    <div className='row'>


                        <div className='col-md-4 p-2'>
                            <div className='box shadow-sm rounded p-4'>
                                <div className='phone-top-data d-flex flex-row align-items-center'>
                                    <img src={phonedata.image} style={{ height: "100px" }} />
                                    <h5>{phonedata.modelname} {phoneprice.phonedata}</h5>

                                </div>
                                <div className='box'>
                                    <h5>phone data:{phoneprice.phonedata}</h5> <h5>Price: {mainprice}</h5>
                                </div>

                                <hr />

                                {
                                    phoneonc ?
                                        <>
                                            <h5>Does your Phone Switch On ?</h5>


                                            <ul>
                                                <li>{phoneonc}</li>
                                            </ul>
                                        </>
                                        : null
                                }

                                {

                                    isChecked ?
                                        <>
                                            <h5>Please select the issues of your Phone</h5>
                                            <ul>



                                            </ul>
                                        </>

                                        : null
                                }



                            </div>
                        </div>

                        <div className='col-md-8 px-2'>
                            <div className='box shadow-sm rounded p-4'>


                                <div className={`phone-on-check ${phoneoncheck ? 'd-none' : ''}`}>

                                    <h2>Does your device switch On?</h2>
                                    <div className="form-check px-4 p-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" value="yes" id="phonecheck1" onClick={(e) => phoneOncheck(e.target.value)} />
                                        <label className="form-check-label" htmlFor="phonecheck1">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" value="no" id="phonecheck2" onClick={(e) => phoneOncheck(e.target.value)} />
                                        <label className="form-check-label" htmlFor="phonecheck2">
                                            No
                                        </label>
                                    </div>

                                </div>

                                <div className={`function-check ${phoneoncheck ? '' : 'd-none'}`}>
                                    <h2>Please select the issues of your Phone</h2>



                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="Display Not Work" value={phonedata.display} id="display" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" htmlFor="display">
                                            Display Not Work
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="Display Glass crack" value={phonedata.displayglass} id="displayglass" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="displayglass">
                                            Display Glass crack
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="Front Camera" value={phonedata.frontcamera} id="frontcamera" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="frontcamera">
                                            Front Camera not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="Back Camera" value={phonedata.backcamera} id="backcamera" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="backcamera">
                                            Back Camera not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="Volume Button" value={phonedata.volumebutton} id="VolumeButton" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="VolumeButton">
                                            Volume Button not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="FingerTouch" value={phonedata.fingertouch} onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="FingerTouch">
                                            Finger Touch not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.wifi} id="WiFi" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="WiFi">
                                            WiFi not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.battery}  id="Battery" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="Battery">
                                            Battery Faulty
                                        </label>
                                    </div>


                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.speaker} id="Speaker" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="Speaker">
                                            Speaker Faulty
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.powerbutton}  id="PowerButton" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="PowerButton">
                                            Power Button not working
                                        </label>
                                    </div>


                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.chargingport} id="FaceSensor" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="FaceSensor">
                                        charging port not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.facesensor} id="FaceSensor" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="FaceSensor">
                                            Face Sensor not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.silentbutton} id="SilentButton" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="SilentButton">
                                            Silent Button not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.audioreceiver} id="AudioReceiver" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="AudioReceiver">
                                            Audio Receiver not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.cameraglass} id="CameraGlass" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="CameraGlass">
                                            Camera Glass Broken
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.bluetooth} id="Bluetooth" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="Bluetooth">
                                            Bluetooth not working
                                        </label>
                                    </div>


                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.vibrator} id="Vibrator" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="Vibrator">
                                            Vibrator is not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.microphone} id="Microphone" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="Microphone">
                                            Microphone not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.proximitysensor} id="Proximity" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="Proximity">
                                            Proximity Sensor not working
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={phonedata.audiojack} id="AudioJack" onClick={(e) => { Phoneissues(e) }} />
                                        <label class="form-check-label" for="AudioJack">
                                            Audio Jack not working
                                        </label>
                                    </div>


                                    <button>Next</button>


                                </div>

                            </div>

                        </div>




                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Variant
