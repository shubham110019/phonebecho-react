import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';
import '../css/Formpage.css';

const Variant = () => {

    const [phoneoncheck, setPhoneoncheck] = useState();
    const [phoneonc, setPhoneonc] = useState();
    const [issues, setIssues] = useState(false);
    const [issuedata, setIssuedata] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [mainprice, setMainprice] = useState();
    const [issecheck, setIssecheck] = useState(false);
    const [phoneold, setPhoneold] = useState(false);
    const [oldphone, setOldphone] = useState(false);
    const [condition, setCondition] = useState(false);
    const [priceshow, setPriceshow] = useState(false);
    const [formsb, setFormsb] = useState(false);
    const [notbuy, setNotbuy] = useState(false);
    const [checked, setChecked] = useState({});

    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
      });

    
    const [phoneas, setPhoneas] = useState(false);

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
            setPhoneoncheck(true)
            setPhoneonc('No')
            setNotbuy(true)

        }
        else {
            setPhoneoncheck(true)
            setPhoneonc('Yes')
        }

    }

    const Phoneissues = (e, i) => {

        const { name, checked, id, value } = e.target;

       
        const { languages } = userinfo;

        if (checked) {
            setUserInfo({
              languages: [...languages, name],
              response: [...languages, name],
            });
          }
        
          // Case 2  : The user unchecks the box
          else {
            setUserInfo({
              languages: languages.filter((e) => e !== name),
              response: languages.filter((e) => e !== name),
            });
          }

          setIssuedata(userinfo.response)

        if (checked === true) {
            const data = parseInt(mainprice) - parseInt(value)
            setIssues(false)
            setMainprice(data)
        }
        else if (checked === false) {

            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)
            setIssues(true)
        }



    }

    const Phoneacessories = (e) => {

        const { name, checked, id, value } = e.target;

        if (checked === true) {
            console.log(value)

            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)
        }
        else if (checked === false) {
            const data = parseInt(mainprice) - parseInt(value)
            setMainprice(data)
        }

    }

    const Phoneold = (e) => {
        const { name, checked, id, value } = e.target;

   

        if (checked === true) {
            console.log(value)

            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)
        }
        else if (checked === false) {
            const data = parseInt(mainprice) - parseInt(value)
            setMainprice(data)
        }
    }

    const Phoneinvoice = (e) => {

        const { name, checked, id, value } = e.target;

        if (checked === true) {

            setOldphone(true);

        }
        else if (checked === false) {

            setOldphone(false);

        }

    }

    useEffect(() => {
        fetch(`http://localhost:9000/model/${pid}`).then((resq) => {
            resq.json().then((result) => {
                const data = result.data;
                setPhonedata(result.data)
                // console.log(result.data)

                const ph = result.data.variant

                // console.log(ph)

                ph.map((item, i) => {
                    if (item._id === slug) {
                        setPhoneprice(item)

                        setMainprice(item.phoneprice)
                    }
                })

                // if()

            })
        }).catch(err => {
            console.log(err)
        })
    }, [])



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

                          
                                         <h5>Please select the issues of your Phone</h5>
                                         <ul>
                                            {
                                                issuedata}
                                            
                                            
                                         
                                         </ul>
                                    
                                
                               
                          






                            </div>
                        </div>

                        <div className='col-md-8 px-2'>
                            <div className='box shadow-sm rounded p-4'>


                                <div className={`phone-on-check ${phoneoncheck ? 'd-none' : ''} radio-toolbar`}>

                                    <h2>Does your device switch On?</h2>
                                    <div className='my-4 row'>
                                        <div className="form-check col-md-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="yes" id="phonecheck1" onClick={(e) => phoneOncheck(e.target.value)} />
                                            <label className="form-check-label" htmlFor="phonecheck1">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check col-md-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="no" id="phonecheck2" onClick={(e) => phoneOncheck(e.target.value)} />
                                            <label className="form-check-label" htmlFor="phonecheck2">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                </div>



                                <div className={`function-check ${phoneoncheck ? '' : 'd-none'} ${issecheck ? 'd-none' : ''}`}>
                                    <h2>Please select the issues of your Phone</h2>


                                    <div className='dfr mt-4'>
                                        <div className="form-check cat action">
                                            <label className="form-check-label" htmlFor="display">
                                                <input className="form-check-input" type="checkbox" name="Display Not Work" value={phonedata.display} id="display" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Display Not Work</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label className="form-check-label" for="displayglass">
                                                <input className="form-check-input" type="checkbox" name="Display Glass crack" value={phonedata.displayglass} id="displayglass" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Display Glass crack</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label className="form-check-label" for="frontcamera">
                                                <input className="form-check-input" type="checkbox" name="Front Camera" value={phonedata.frontcamera} id="frontcamera" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Front Camera not working</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label className="form-check-label" for="backcamera">
                                                <input className="form-check-input" type="checkbox" name="Back Camera" value={phonedata.backcamera} id="backcamera" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Back Camera not working</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label className="form-check-label" for="VolumeButton">
                                                <input className="form-check-input" type="checkbox" name="Volume Button" value={phonedata.volumebutton} id="VolumeButton" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Volume Button not working</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label className="form-check-label" for="FingerTouch">
                                                <input className="form-check-input" type="checkbox" id="FingerTouch" value={phonedata.fingertouch} onClick={(e) => { Phoneissues(e) }} />

                                                <span>Finger Touch not working</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label className="form-check-label" for="WiFi">
                                                <input className="form-check-input" type="checkbox" value={phonedata.wifi} id="WiFi" onClick={(e) => { Phoneissues(e) }} />

                                                <span>WiFi not working</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat action">
                                            <label class="form-check-label" for="Battery">
                                                <input className="form-check-input" type="checkbox" value={phonedata.battery} id="Battery" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Battery Faulty</span>
                                            </label>
                                        </div>


                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="Speaker">
                                                <input class="form-check-input" type="checkbox" value={phonedata.speaker} id="Speaker" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Speaker Faulty</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="PowerButton">
                                                <input class="form-check-input" type="checkbox" value={phonedata.powerbutton} id="PowerButton" onClick={(e) => { Phoneissues(e) }} />

                                                <span>  Power Button not working</span>
                                            </label>
                                        </div>


                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="charging">
                                                <input class="form-check-input" type="checkbox" value={phonedata.chargingport} id="charging" onClick={(e) => { Phoneissues(e) }} />

                                                <span> charging port not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="FaceSensor">
                                                <input class="form-check-input" type="checkbox" value={phonedata.facesensor} id="FaceSensor" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Face Sensor not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="SilentButton">
                                                <input class="form-check-input" type="checkbox" value={phonedata.silentbutton} id="SilentButton" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Silent Button not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="AudioReceiver">
                                                <input class="form-check-input" type="checkbox" value={phonedata.audioreceiver} id="AudioReceiver" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Audio Receiver not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="CameraGlass">
                                                <input class="form-check-input" type="checkbox" value={phonedata.cameraglass} id="CameraGlass" onClick={(e) => { Phoneissues(e) }} />
                                                <span>Camera Glass Broken</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="Bluetooth">
                                                <input class="form-check-input" type="checkbox" value={phonedata.bluetooth} id="Bluetooth" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Bluetooth not working</span>
                                            </label>
                                        </div>


                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="Vibrator">
                                                <input class="form-check-input" type="checkbox" value={phonedata.vibrator} id="Vibrator" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Vibrator is not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="Microphone">
                                                <input class="form-check-input" type="checkbox" value={phonedata.microphone} id="Microphone" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Microphone not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="Proximity">
                                                <input class="form-check-input" type="checkbox" value={phonedata.proximitysensor} id="Proximity" onClick={(e) => { Phoneissues(e) }} />

                                                <span>Proximity Sensor not working</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat action">
                                            <label class="form-check-label" for="AudioJack">
                                                <input class="form-check-input" type="checkbox" value={phonedata.audiojack} id="AudioJack" onClick={(e) => { Phoneissues(e) }} />

                                                <span> Audio Jack not working</span>
                                            </label>
                                        </div>

                                    </div>

                                    <button className='btn btn-info mt-4' onClick={() => { setIssecheck(true); setPhoneas(true) }}>Next</button>


                                </div>

                                <div className={`${phoneas ? '' : 'd-none'}`}>

                                    <h2>Please select the available acessories</h2>
                                    <div className='dfr my-4'>
                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="box">
                                                <input class="form-check-input" type="checkbox" value={phonedata.box} id="box" onClick={(e) => { Phoneacessories(e) }} />

                                                <span>Original Phone Box</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="originalcharger">
                                                <input class="form-check-input" type="checkbox" value={phonedata.originalcharger} id="originalcharger" onClick={(e) => { Phoneacessories(e) }} />

                                                <span> Original Charger</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="invoice">
                                                <input class="form-check-input" type="checkbox" id="invoice" onClick={(e) => { Phoneinvoice(e) }} />

                                                <span> Original invoice</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <button className="btn btn-dark" onClick={() => { setIssecheck(false); setPhoneas(false) }}>Back</button>

                                        {
                                            oldphone ?
                                                <>
                                                    <button className='btn btn-info' onClick={() => { setPhoneas(false); setPhoneold(true) }}>Next</button>
                                                </>
                                                :
                                                <> <button className='btn btn-info' onClick={() => { setPhoneas(false); setCondition(true) }}>Next 2</button></>
                                        }

                                    </div>
                                </div>

                                <div className={`${phoneold ? '' : 'd-none'}`}>
                                    <h2>Please select the age of your device</h2>

                                    <div className='dfr my-4'>
                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="old1">
                                                <input class="form-check-input" type="checkbox" name="old1" id="old1" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }}/>

                                                <span>0-3 Months</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="old2">
                                                <input class="form-check-input" type="checkbox" name="old2" id="old2" value={phonedata.bill3to6} onClick={(e) => { Phoneold(e) }}/>

                                                <span>3-6 Months</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="old3">
                                                <input class="form-check-input" type="checkbox" name="old3" id="old3" value={phonedata.bill6to11} onClick={(e) => { Phoneold(e) }}/>

                                                <span> 6-11 Months</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="old4">
                                                <input class="form-check-input" type="checkbox" name="old4" id="old4" value={phonedata.bill11out} onClick={(e) => { Phoneold(e) }}/>

                                                <span> 11 Months</span>
                                            </label>
                                        </div>

                                    </div>

                                    <div className='col-md-12'>
                                        <button className="btn btn-dark" onClick={() => { setPhoneold(false); setPhoneas(true) }}>Back</button>
                                        <button className='btn btn-info' onClick={() => { setPhoneas(false); setPhoneold(false); setCondition(true) }}>Next</button>
                                    </div>

                                </div>

                                <div className={`${condition ? '' : 'd-none'}`}>
                                    <h2>Please select the Phone condition</h2>

                                    <div className='dfr my-4'>
                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="Good">
                                                <input class="form-check-input" type="checkbox" name="Good" id="Good" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }} />

                                                <span>Good</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="Average">
                                                <input class="form-check-input" type="checkbox" name="Average" id="Average" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }} />

                                                <span>Average</span>
                                            </label>
                                        </div>

                                        <div class="form-check cat sports">
                                            <label class="form-check-label" for="Below">
                                                <input class="form-check-input" type="checkbox" name="Below" id="Below" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }} />

                                                <span>Below Average</span>
                                            </label>
                                        </div>



                                    </div>


                                    <div className='col-md-12'>

                                        {
                                            oldphone ?
                                                <button className="btn btn-dark" onClick={() => { setCondition(false); setPhoneold(true) }}>Back</button>
                                                : <button className="btn btn-dark" onClick={() => { setCondition(false); setPhoneas(true) }}>Back</button>
                                        }

                                        <button className='btn btn-info' onClick={() => { setCondition(false); setPriceshow(true) }}>Next</button>
                                    </div>


                                </div>

                                <div className={`${priceshow ? '' : 'd-none'}`}>
                                    <h2>Your Device price is </h2>

                                    <h3>₹ {mainprice}</h3>

                                    <div className='col-md-12'>
                                        <button className="btn btn-dark" onClick={() => { setPriceshow(false); setCondition(true) }}>Back</button>
                                        <button className='btn btn-info' onClick={() => { setPriceshow(false); setFormsb(true) }}>Next</button>
                                    </div>
                                </div>


                                <div className={`${formsb ? '' : 'd-none'}`}>
                                    <h2>Billing Address</h2>

                                    <div className='row'>
                                        <div class="form-group col-md-6 mb-2">
                                            <label for="exampleInputEmail1">Full Name</label>
                                            <input type="text" class="form-control"/>
                                        </div>

                                        <div class="form-group col-md-6 mb-2">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" />
                                        </div>

                                        <div class="form-group col-md-6 mb-2">
                                            <label for="exampleInputEmail1">Phone</label>
                                            <input type="text" class="form-control"/>
                                        </div>

                                        <div class="form-group col-md-6 mb-2">
                                            <label for="exampleInputEmail1">Zip Postal Code</label>
                                            <input type="text" class="form-control" />
                                        </div>

                                        <div class="form-group col-md-6 mb-2">
                                            <label for="exampleInputEmail1">Select City</label>
                                            <input type="text" class="form-control"/>
                                        </div>

                                        <div class="form-group col-md-6 mb-2">
                                            <label for="exampleInputEmail1">Pickup Date</label>
                                            <input type="date" class="form-control"/>
                                        </div>

                                        

                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>

                                      


                                        <div className='col-md-12 mt-4'>
                                            <button className='btn btn-info'> Submit</button>
                                        </div>


                                    </div>
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
