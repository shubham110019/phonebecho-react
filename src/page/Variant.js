import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';
import '../css/Formpage.css';




const Variant = (props) => {

    const [phoneoncheck, setPhoneoncheck] = useState();
    const [phoneonc, setPhoneonc] = useState();
    const [issues, setIssues] = useState(false);
    const [issuedata, setIssuedata] = useState([]);
    const [phoneasdata, setPhoneasdata] = useState([]);
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

    const phoneisse = useRef(null);

    const [userinfo, setUserInfo] = useState({
        response: []
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





    const [ist, setIst] = useState();

    const phoneissuedata = [
        { id: 1, name: 'Display Not Work', price: phonedata.display },
        { id: 2, name: 'Display Glass crack', price: phonedata.displayglass },
        { id: 3, name: 'Front Camera not working', price: phonedata.frontcamera },
        { id: 4, name: 'Back Camera not working', price: phonedata.backcamera },
        { id: 5, name: 'Volume Button not working', price: phonedata.volumebutton },
        { id: 6, name: 'Finger Touch not working', price: phonedata.fingertouch },
        { id: 7, name: 'WiFi not working', price: phonedata.wifi },
        { id: 8, name: 'Battery Faulty', price: phonedata.battery },
        { id: 9, name: 'Speaker Faulty', price: phonedata.speaker },
        { id: 10, name: 'Power Button not working', price: phonedata.powerbutton },
        { id: 11, name: 'charging port not working', price: phonedata.chargingport },
        { id: 12, name: 'Face Sensor not working', price: phonedata.facesensor },
        { id: 13, name: 'Silent Button not working', price: phonedata.silentbutton },
        { id: 14, name: 'Audio Receiver not working', price: phonedata.audioreceiver },
        { id: 15, name: 'Camera Glass Broken', price: phonedata.cameraglass },
        { id: 16, name: 'Bluetooth not working', price: phonedata.bluetooth },
        { id: 17, name: 'Vibrator is not working', price: phonedata.vibrator },
        { id: 18, name: 'Microphone not working', price: phonedata.microphone },
        { id: 19, name: 'Proximity Sensor not working', price: phonedata.proximitysensor },
        { id: 20, name: 'Audio Jack not working', price: phonedata.audiojack }
    ]

    const phoneacessories = [
        { id: 31, name: "Original Phone Box", price: phonedata.box},
        { id: 32, name: "Original Charger", price: phonedata.originalcharger},
        { id: 33, name: "Original invoice", price: 0},
    ]




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

    const HandPhoneissues = (e, i) => {



        const { name, checked, id, value } = e.target;

        var updatedList = [...issuedata];

        if (checked === true) {

            updatedList = [...issuedata, name];

            const data = parseInt(mainprice) - parseInt(value)
            setIssues(false)
            setMainprice(data)
        }
        else if (checked === false) {

            updatedList.splice(issuedata.indexOf(name), 1);

            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)
            setIssues(true)
        }

        setIssuedata(updatedList);



    }

    const HandlePhoneacessories = (e) => {

        const { name, checked, id, value } = e.target;

        var updatedList = [...phoneasdata];

        if (checked === true) {

            if(id === '33')
            {
                setOldphone(true);
            }

            updatedList = [...phoneasdata, name];

            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)

           
        }
        else if (checked === false) {

            if(id === '33')
            {
                setOldphone(false);
            }
            updatedList.splice(phoneasdata.indexOf(name), 1);
            const data = parseInt(mainprice) - parseInt(value)
            setMainprice(data)
        }

        setPhoneasdata(updatedList);

     

    }

    const Phoneold = (e) => {
        const { name, checked, id, value } = e.target;

        if (checked === true) {
            const data = parseInt(mainprice) + parseInt(value)
            setMainprice(data)

        }
        else if (checked === false) {
            const data = parseInt(mainprice) - parseInt(value)
            setMainprice(data)
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

                                <div class="overflow-auto h-300">

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
                                        issuedata ?
                                            <>
                                                <h5>Please select the issues of your Phone</h5>
                                                <ul>

                                                    {issuedata.map((item, i) => {
                                                        return (
                                                            <>
                                                                <li>{item}</li>
                                                            </>
                                                        )
                                                    })}

                                                </ul>
                                            </>

                                            : null
                                    }

                                    {
                                        phoneasdata?
                                            <>

                                            <h5>Available Acessories</h5>

                                            <ul>
                                               {phoneasdata.map(item=>{
                                                return(
                                                    <li>{item}</li>
                                                )
                                               })}
                                            </ul>
                                            
                                            </>
                                        :null
                                    }

                                  

                                    <h5>Please select the age of your device</h5>
                                    <ul>
                                        <li></li>
                                    </ul>

                                    <h5>Please select Phone condition</h5>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>

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
                                        {phoneissuedata.map((item, i) => {
                                            return <>
                                                <div className="form-check cat action" key={i}>
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" name={item.name} value={item.price} id={item.id} onChange={(e) => { HandPhoneissues(e); }} />
                                                        <span>{item.name}</span>
                                                    </label>
                                                </div>
                                            </>
                                        })}

                                    </div>
                                    <button className='btn btn-info mt-4' onClick={() => { setIssecheck(true); setPhoneas(true) }}>Next</button>
                                </div>

                                <div className={`${phoneas ? '' : 'd-none'}`}>

                                    <h2>Please select the available acessories</h2>
                                    <div className='dfr my-4'>


                                        {phoneacessories.map(item=>{
                                            return(
                                                <>
                                                    
                                                    <div className="form-check cat sports">
                                                        <label className="form-check-label" htmlFor={item.id}>
                                                            <input className="form-check-input" type="checkbox" name={item.name} value={item.price} id={item.id} onClick={(e) => { HandlePhoneacessories(e) }} />
                                                            <span>{item.name}</span>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        })
                                        }


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


                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="old1">
                                                <input className="form-check-input" type="radio" name="phoneage" id="old1" value={phonedata.bill3} onChange={(e) => { Phoneold(e) }} />

                                                <span>0-3 Months</span>
                                            </label>
                                        </div>


                                        <div className="form-check ">
                                            <label className="form-check-label" htmlFor="old2">
                                                <input className="form-check-input" type="radio" name="phoneage" id="old2" value={phonedata.bill3to6} onChange={(e) => { Phoneold(e) }} />

                                                <span>3-6 Months</span>
                                            </label>
                                        </div>

                                        <div className="form-check ">
                                            <label className="form-check-label" htmlFor="old3">
                                                <input className="form-check-input" type="radio" name="phoneage" id="old3" value={phonedata.bill6to11} onChange={(e) => { Phoneold(e) }} />

                                                <span> 6-11 Months</span>
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="old4">
                                                <input className="form-check-input" type="radio" name="phoneage" id="old4" value={phonedata.bill11out} onChange={(e) => { Phoneold(e) }} />

                                                <span>11 Months</span>
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
                                        <div className="form-check cat sports">
                                            <label className="form-check-label" htmlFor="Good">
                                                <input className="form-check-input" type="checkbox" name="Good" id="Good" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }} />

                                                <span>Good</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat sports">
                                            <label className="form-check-label" htmlFor="Average">
                                                <input className="form-check-input" htmlFor="checkbox" name="Average" id="Average" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }} />

                                                <span>Average</span>
                                            </label>
                                        </div>

                                        <div className="form-check cat sports">
                                            <label className="form-check-label" htmlFor="Below">
                                                <input className="form-check-input" type="checkbox" name="Below" id="Below" value={phonedata.bill3} onClick={(e) => { Phoneold(e) }} />

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
                                        <div className="form-group col-md-6 mb-2">
                                            <label htmlFor="exampleInputEmail1">Full Name</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-group col-md-6 mb-2">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="email" className="form-control" />
                                        </div>

                                        <div className="form-group col-md-6 mb-2">
                                            <label htmlFor="exampleInputEmail1">Phone</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-group col-md-6 mb-2">
                                            <label htmlFor="exampleInputEmail1">Zip Postal Code</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-group col-md-6 mb-2">
                                            <label htmlFor="exampleInputEmail1">Select City</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-group col-md-6 mb-2">
                                            <label htmlFor="exampleInputEmail1">Pickup Date</label>
                                            <input type="date" className="form-control" />
                                        </div>



                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Address</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
