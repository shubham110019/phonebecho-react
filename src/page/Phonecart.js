import React, { useState } from 'react'
import Footer from '../comonent/Footer'
import Navbar from '../comonent/Navbar';
import Apiurl from '../Apidata';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Loginpopup from '../comonent/Loginpopup';
import { useHistory } from 'react-router-dom';
import Registerpop from '../comonent/Registerpop';

export default function Phonecart() {

    const [userdata, setUserdata] = useState({
        fullname: "",
        email: "",
        phone: "",
        pincode: "",
        city: "",
        address: "",
        pickupdate: "",
    })
    const [formErrors, setFormErrors] = useState({});
    const[popcheck,setpopcheck]=useState(true);


    const userdatafull = [
        { id: 61, type: 'text', title: 'Full Name', name: 'fullname', value: userdata.fullname },
        { id: 62, type: 'email', title: 'Email', name: 'email', value: userdata.email },
        { id: 63, type: 'number', title: 'Phone', name: 'phone', value: userdata.phone },
        { id: 64, type: 'number', title: 'Zip Postal Code', name: 'pincode', value: userdata.pincode },
        { id: 65, type: 'text', title: 'Select City', name: 'city', value: userdata.city },
        { id: 66, type: 'date', title: 'Pickup Date', name: 'pickupdate', value: userdata.pickupdate, min: new Date().toISOString().slice(0, 10) },
        { id: 67, type: 'text', title: 'Address', name: 'address', value: userdata.address },
    ]


    const history = useHistory();


    const[nextprice,setNextprice]=useState(false);



    var val = localStorage.getItem('pkeydata');

    console.log(val);

    console.log('retrievedValue: ', JSON.parse(val));

    const vardata = JSON.parse(val);

    console.log(vardata);

    if (!vardata) {
        history.push("/");
    }

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
                "phoneissues": vardata.Xphonedata,
            }

            const phoneacessories = {
                "phoneacessories": vardata.Xphoneasdata,
            }

            const phoneage = {
                "phoneage": vardata.Xphoneagedata,
            }

            const phonecondition = {
                "phonecondition": vardata.Xphonecdata,
            }

            const pickupprice = {
                "pickupprice": vardata.Xmainprice,
            }

            const bookingtype = {
                "bookingtype": "mobile",
            }


            const modelnamefull =
            {
                "modelnamefull": vardata.fullmobilename,
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


    return (
        <>

            <Navbar />

            <div className="alt-topsell ptb-50">
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'>
                            <h2 className='mb-5'>Sell Old {vardata.fullmobilename}</h2>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-md-4'>
                            <div className='box rounded p-4 border'>

                                <div className='phone-top-data d-flex flex-row align-items-center'>
                                    <img src={vardata.Xphoneimg} style={{ height: "100px" }} />
                                    <h5>{vardata.fullmobilename}</h5>
                                </div>

                                <hr />

                                <div class="overflow-auto h-300 font-18">


                                    {
                                        vardata.Xphonedata.length ?
                                            <>
                                                <h5>Please select the issues of your Phone</h5>
                                                <ul>

                                                    {vardata.Xphonedata.map((item, i) => {
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
                                        vardata.Xphoneasdata.length ?
                                            <>

                                                <h5>Available Acessories</h5>

                                                <ul>
                                                    {vardata.Xphoneasdata.map(item => {
                                                        return (
                                                            <li>{item}</li>
                                                        )
                                                    })}
                                                </ul>

                                            </>
                                            : null
                                    }


                                    {
                                        vardata.Xphoneagedata ?
                                            <>
                                                <h5>Please select the age of your device</h5>
                                                <ul>
                                                    <li>{vardata.Xphoneagedata}</li>
                                                </ul>
                                            </>
                                            : null
                                    }

                                    {
                                        vardata.Xphonecdata ?
                                            <>
                                                <h5>Please select Phone condition</h5>
                                                <ul>
                                                    <li>{vardata.Xphonecdata}</li>
                                                </ul>
                                            </>
                                            : null
                                    }


                                </div>
                            </div>
                        </div>


                        <div className='col-md-8 px-2'>
                            <div className='box rounded p-4 border'>
                                <div className={`data-box text-center ${nextprice? 'd-none': ''}`}>
                                    <h2>Your Device price is </h2>

                                    <h1 className='my-4'>₹ {vardata.Xmainprice}</h1>

                                    {
                                        localStorage.getItem("login") ? <button className=' btn btn-main' onClick={()=>{setNextprice(true)}}>Next</button> :
                                            <Popup
                                                trigger={<button className="button btn btn-info"> Continue </button>}
                                                modal
                                                nested
                                            >
                                                {close => (
                                                    <div className="modal">
                                                        <button className="close" onClick={close}>
                                                            &times;
                                                        </button>
                                                        <div className="header">
                                                            <button className={`${popcheck? 'active' :''}`} onClick={()=>{setpopcheck(true)}}>Sign in</button>    
                                                            <button className={`${popcheck? '' :'active'}`} onClick={()=>{setpopcheck(false)}}>Register</button>    
                                                        </div>
                                                        <div className="content">
                                                            <div className={`login ${popcheck? '' :'d-none'}`}>
                                                            <Loginpopup />
                                                            </div>

                                                            <div className={`register ${popcheck? 'd-none' :''}`}>
                                                                <Registerpop/>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )}
                                            </Popup>
                                    }




                                </div>

                                <div className={`data-box ${nextprice? '': 'd-none'}`}>
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


<button className='btn btn-info' onClick={() => (modelbooking())}> Submit</button>


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
