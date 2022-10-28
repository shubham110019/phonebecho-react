import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';
import Apiurl from '../Apidata';
import '../css/Formpage.css';


const Variant = (props) => {

    const history =useHistory();

    const [phoneoncheck, setPhoneoncheck] = useState();
    const [phoncheck, setPhoncheck] = useState(true);
    const [phoneonc, setPhoneonc] = useState();
    const [issues, setIssues] = useState(false);
    const [issuedata, setIssuedata] = useState([]);
    const [phoneasdata, setPhoneasdata] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [mainprice, setMainprice] = useState(50);
    const [issecheck, setIssecheck] = useState(false);
    const [phoneold, setPhoneold] = useState(false);
    const [oldphone, setOldphone] = useState(false);
    const [condition, setCondition] = useState(false);
    const [priceshow, setPriceshow] = useState(false);
    const [formsb, setFormsb] = useState(false);
    const [notbuy, setNotbuy] = useState(false);
    const [checked, setChecked] = useState({});
    const [agephone, setAgephone] = useState(0);
    const [phoneagedata, setPhoneagedata] = useState("");
    const [agebtn, setAgebtn] = useState(true);
    const [conditionbtn, setConditionbtn] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [pricevalue, setPricevalue] = useState(true);
    const [fullmodelname, setFullmodelname] = useState("");

    const [phonecdata, setPhonecdata] = useState();
    const [phonecprice, setPhonecprice] = useState(0);

    const [userdata, setUserdata] = useState({
        fullname: "",
        email: "",
        phone: "",
        pincode: "",
        city: "",
        address: "",
        pickupdate: "",
    })

    const [buttond, setButtond] = useState(true);


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

    const userdatafull = [
        { id: 61, type: 'text', title: 'Full Name', name: 'fullname', value: userdata.fullname },
        { id: 62, type: 'email', title: 'Email', name: 'email', value: userdata.email },
        { id: 63, type: 'number', title: 'Phone', name: 'phone', value: userdata.phone },
        { id: 64, type: 'number', title: 'Zip Postal Code', name: 'pincode', value: userdata.pincode },
        { id: 65, type: 'text', title: 'Select City', name: 'city', value: userdata.city },
        { id: 66, type: 'date', title: 'Pickup Date', name: 'pickupdate', value: userdata.pickupdate, min: new Date().toISOString().slice(0, 10) },
        { id: 67, type: 'text', title: 'Address', name: 'address', value: userdata.address },
    ]

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
        { id: 31, name: "Original Phone Box", price: phonedata.box },
        { id: 32, name: "Original Charger", price: phonedata.originalcharger },
        { id: 33, name: "Original invoice", price: 0 },
    ]

    const ageDevice = [
        { id: 41, name: "0-3 Months", price: phonedata.bill3 },
        { id: 42, name: "3-6 Months", price: phonedata.bill3to6 },
        { id: 43, name: "6-11 Months", price: phonedata.bill6to11 },
        { id: 44, name: "11 Months", price: phonedata.bill11out },
    ]

    const conditiondata = [
        { id: 51, name: "Good Condition", price: phonedata.conditiongood },
        { id: 52, name: "Average Condition", price: phonedata.conditionbelow },
        { id: 53, name: "Below Average Condition", price: phonedata.conditionpoor },
    ]



    const phoneOncheck = (check) => {

        if (check === "no") {
            setPhoneoncheck(true)
            setPhoneonc('No')
            setNotbuy(true)
            setPricevalue(false)
        }
        else {
            setPhoneoncheck(true)
            setPhoneonc('Yes')
            setPhoncheck(false)
        }

    }

    const HandPhoneissues = (e, price, i) => {

        const { name, checked, id, value } = e.target;

        var updatedList = [...issuedata];

        if (checked === true) {

            updatedList = [...issuedata, name];

            const data = parseInt(mainprice) - parseInt(price)
            setIssues(false)
            setMainprice(data)
        }
        else if (checked === false) {

            updatedList.splice(issuedata.indexOf(name), 1);

            const data = parseInt(mainprice) + parseInt(price)
            setMainprice(data)
            setIssues(true)
        }

        setIssuedata(updatedList);



    }

    const HandlePhoneacessories = (e, price) => {

        const { name, checked, id, value } = e.target;

        var updatedList = [...phoneasdata];

        if (checked === true) {

            if (id === '33') {
                setOldphone(true);
            }

            updatedList = [...phoneasdata, name];

            const data = parseInt(mainprice) + parseInt(price)
            setMainprice(data)


        }
        else if (checked === false) {

            if (id === '33') {
                setOldphone(false);
            }
            updatedList.splice(phoneasdata.indexOf(name), 1);
            const data = parseInt(mainprice) - parseInt(price)
            setMainprice(data)
        }

        setPhoneasdata(updatedList);
    }

    const HandPhoneold = (e, data, price) => {
        const { name, checked, id, value } = e.target;

        setAgebtn(false)
        setButtond(false)
        setPhoneagedata(data)
        setAgephone(price)
    }

    const Handaddage = () => {
        const data = parseInt(mainprice) + parseInt(agephone)
        setMainprice(data)
    }

    const Handsubage = (e) => {
        const data = parseInt(mainprice) - parseInt(e)
        setMainprice(data)
    }

    const HandPhonecondition = (e, data, price) => {
        const { name, checked, id, value } = e.target;

        setConditionbtn(false)
        setPhonecdata(data)
        setPhonecprice(price)
    }

    const Handaddcd = (e) => {
        const data = parseInt(mainprice) + parseInt(e)
        setMainprice(data)
    }

    const Handsubcd = (e) => {
        const data = parseInt(mainprice) - parseInt(phonecprice)
        setMainprice(data)
    }

    useEffect(() => {

        fetch(`${Apiurl}model/${pid}`).then((resq) => {
            resq.json().then((result) => {
                const data = result.data;
                setPhonedata(result.data)
                // console.log(result.data)

                const ph = result.data.variant

                // console.log(ph)

                ph.map((item, i) => {
                    if (item._id === slug) {
                        setPhoneprice(item)
                        setFullmodelname(result.data.modelname + " " + item.phonedata)
                        setMainprice(item.phoneprice)
                    }
                })

                // if()

            })
        }).catch(err => {
            console.log(err)
        })



    }, [])


    const Handleuserinput = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...userdata,
            [name]: value
        })

        console.log(userdata)
    }

  

    const modelbooking = () => {

        if (!userdata.fullname || !userdata.email || !userdata.phone || !userdata.pincode || !userdata.city || !userdata.pickupdate || !userdata.address) {
            alert("fill the form")
        }
        else {
            alert("submit")
            const phoneissues = {
                "phoneissues": issuedata,
            }

            const phoneacessories = {
                "phoneacessories": phoneasdata,
            }

            const phoneage = {
                "phoneage": phoneagedata,
            }

            const phonecondition = {
                "phonecondition": phonecdata,
            }

            const pickupprice = {
                "pickupprice": mainprice,
            }

            const bookingtype = {
                "bookingtype": "mobile",
            }


            const modelnamefull =
            {
                "modelnamefull": fullmodelname,
            }

            const fulldata = { ...phoneissues, ...phoneacessories, ...phoneage, ...phonecondition, ...pickupprice, ...bookingtype, ...userdata, ...modelnamefull }


            fetch(`${Apiurl}phonebook`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(fulldata)
            }).then((res) => {
                console.log(res);
                console.log(fulldata)

            }).catch((err) => {
                console.log(err);
            })

        }

    }

    const Phonecart = () =>{


        var cartdata = {
            "fullmobilename": fullmodelname,
            "Xmainprice": mainprice,
             "Xphonedata": issuedata,
             "Xphoneasdata": phoneasdata,
             "Xphoneagedata": phoneagedata,
             "Xphonecdata": phonecdata,
             "Xphoneimg": phonedata.image,

        }

        localStorage.setItem("pkeydata",JSON.stringify(cartdata));

        // localStorage.setItem("fullmobilename",fullmodelname);
        // localStorage.setItem("Xmainprice",mainprice);
        // localStorage.setItem("Xphonedata",issuedata);
        // localStorage.setItem("Xphoneasdata",phoneasdata);
        // localStorage.setItem("Xphoneagedata",phoneagedata);
        // localStorage.setItem("Xphonecdata",phonecdata);
        // localStorage.setItem("Xphoneimg",phonedata.image);

        history.push("/cart");
    }

    useEffect(() => {
        if (mainprice < 10) {
            setPricevalue(false);
        }


    }, [mainprice])



    return (
        <>
            <Navbar />
            <div className="alt-topsell ptb-50">
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h2 className='mb-5'>Sell Old {fullmodelname}</h2>
                        </div>
                    </div>
                    <div className='row'>


                        <div className='col-md-4'>
                            <div className='box rounded p-4 border'>
                                <div className='phone-top-data d-flex flex-row align-items-center'>
                                    <img src={phonedata.image} style={{ height: "100px" }} />


                                    <h5>{fullmodelname}</h5>
                                   

                                </div>

                                <div className='box'>

                                </div>

                                <hr />

                                <div class="overflow-auto h-300 font-18">

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
                                        issuedata.length ?
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
                                        phoneasdata.length ?
                                            <>

                                                <h5>Available Acessories</h5>

                                                <ul>
                                                    {phoneasdata.map(item => {
                                                        return (
                                                            <li>{item}</li>
                                                        )
                                                    })}
                                                </ul>

                                            </>
                                            : null
                                    }

                                    {
                                        phoneagedata ?
                                            <>
                                                <h5>Please select the age of your device</h5>
                                                <ul>
                                                    <li>{phoneagedata}</li>
                                                </ul>
                                            </>
                                            : null
                                    }


                                    {
                                        phonecdata ?
                                            <>
                                                <h5>Please select Phone condition</h5>
                                                <ul>
                                                    <li>{phonecdata}</li>
                                                </ul>
                                            </>
                                            : null
                                    }

                                </div>

                            </div>
                        </div>



                        <div className='col-md-8 px-2'>


                            <div className={`box rounded p-4 border text-center ${pricevalue ? 'd-none' : ''}`}>
                                <h2 className='text-center'>Your Price is very low</h2>

                                
                                <button  onClick={() => {
                    history.goBack();
                }} className="mt-4 btn btn-main">Home</button>
                            </div>

                            <div className={`box rounded p-4 border ${pricevalue ? '' : 'd-none'}`}>


                                <div className={`phone-on-check ${phoneoncheck ? 'd-none' : ''} radio-toolbar`}>
                                    <h2>Does your device switch On?</h2>
                                    <div className='my-4 row'>
                                        <div className="form-check col-md-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="yes" id="phonecheck1" onClick={(e) => phoneOncheck(e.target.value)} />
                                            <label className="form-check-label check-btn check-btn-yes" htmlFor="phonecheck1">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check col-md-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="no" id="phonecheck2" onClick={(e) => phoneOncheck(e.target.value)} />
                                            <label className="form-check-label check-btn check-btn-no" htmlFor="phonecheck2">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${phoncheck ? '' : 'd-none'}`}>

                                </div>

                                <div className={`${phoncheck ? 'd-none' : ''}`}>

                                    <div className={`function-check ${phoneoncheck ? '' : 'd-none'} ${issecheck ? 'd-none' : ''}`}>
                                        <h2>Please select the issues of your Phone</h2>
                                        <div className='dfr mt-4'>
                                            {phoneissuedata.map((item, i) => {
                                                return <>
                                                    <div className={`form-check cat action ${item.price ? '' : 'd-none'}`} key={i}>
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" name={item.name} id={item.id} onChange={(e) => { HandPhoneissues(e, item.price); }} />
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


                                            {phoneacessories.map(item => {
                                                return (
                                                    <>

                                                        <div className="form-check cat sports">
                                                            <label className="form-check-label" htmlFor={item.id}>
                                                                <input className="form-check-input" type="checkbox" name={item.name} id={item.id} onClick={(e) => { HandlePhoneacessories(e, item.price) }} />
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
                                                    <> <button className='btn btn-info' onClick={() => { setPhoneas(false); setCondition(true) }}>Next</button></>
                                            }

                                        </div>
                                    </div>

                                    <div className={`${phoneold ? '' : 'd-none'}`}>
                                        <h2>Please select the age of your device</h2>

                                        <div className='dfr my-4'>


                                            {
                                                ageDevice.map(item => {
                                                    return (
                                                        <>
                                                            <div className="form-check cat sports">
                                                                <label className="form-check-label" htmlFor={item.id}>
                                                                    <input className="form-check-input" type="radio" name="phoneage" id={item.id} onChange={(e) => { HandPhoneold(e, item.name, item.price) }} />

                                                                    <span>{item.name}</span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }


                                        </div>

                                        <div className='col-md-12'>
                                            <button className="btn btn-dark" onClick={() => { setPhoneold(false); setPhoneas(true) }}>Back</button>

                                            {
                                                agebtn ?
                                                    <button className='btn btn-info'
                                                        disabled>
                                                        Next</button>
                                                    :
                                                    <button className='btn btn-info'
                                                        onClick={() => {
                                                            setPhoneas(false);
                                                            setPhoneold(false);
                                                            setCondition(true);
                                                            Handaddage();
                                                        }}>
                                                        Next</button>
                                            }

                                        </div>

                                    </div>

                                    <div className={`${condition ? '' : 'd-none'}`}>
                                        <h2>Please select the Phone condition</h2>

                                        <div className='dfr my-4'>


                                            {
                                                conditiondata.map(item => {
                                                    return (
                                                        <>
                                                            <div className="form-check cat sports">
                                                                <label className="form-check-label" htmlFor={item.id}>
                                                                    <input className="form-check-input" type="radio" name="phone" id={item.id} onChange={(e) => { HandPhonecondition(e, item.name, item.price) }} />

                                                                    <span>{item.name}</span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }


                                        </div>


                                        <div className='col-md-12'>

                                            {
                                                oldphone ?
                                                    <button className="btn btn-dark" onClick={() => { setCondition(false); setPhoneold(true); Handsubage(agephone) }}>Back</button>
                                                    : <button className="btn btn-dark" onClick={() => { setCondition(false); setPhoneas(true); }}>Back</button>
                                            }

                                            {
                                                conditionbtn ?
                                                    // <button className='btn btn-info' disabled>Next</button>

                                                    <button className="btn btn-info" disabled>Continue</button>
                                                    :
                                                    // <button className='btn btn-info' onClick={() => { setCondition(false); setPriceshow(true); Handsubcd(); }}>Next</button>
                                                    <button onClick={()=>{Phonecart()}} className="btn btn-info">Continue</button>
                                            }       


                                        </div>


                                    </div>

                                    <div className={`${priceshow ? '' : 'd-none'} text-center`}>
                                        <h2>Your Device price is </h2>

                                        <h1 className='my-4'>₹ {mainprice}</h1>

                                        <div className='col-md-12'>
                                            {/* <button className="btn btn-dark" onClick={() => { setPriceshow(false); setCondition(true); Handaddcd(phonecprice) }}>Back</button> */}

                                            <button onClick={()=>{Phonecart()}} className="btn btn-info">Continue</button>
                                            {/* {
                                                localStorage.getItem("login") ? <button className='btn btn-info' onClick={() => { setPriceshow(false); setFormsb(true) }}>Next</button> : <button>login</button>

                                            } */}
                                        </div>
                                    </div>


                                    <div className={`${formsb ? '' : 'd-none'}`}>
                                        <h2>Billing Address</h2>

                                        <div className='row mt-4'>

                                            {
                                                userdatafull.map((item) => {
                                                    return (
                                                        <>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label htmlFor="exampleInputEmail1">{item.title}</label>
                                                                <input type={item.type} className="form-control" name={item.name} value={item.value} onChange={(e) => Handleuserinput(e)} min={item.min} />
                                                                <span>{formErrors.name}</span>
                                                            </div>

                                                        </>
                                                    )
                                                })
                                            }



                                            <div className='col-md-12 mt-4'>
                                                <button className="btn btn-dark" onClick={() => { setFormsb(false); setPriceshow(true); }}>Back</button>
                                                <button className='btn btn-info' onClick={() => (modelbooking())}> Submit</button>
                                            </div>


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
