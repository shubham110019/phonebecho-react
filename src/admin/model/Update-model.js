import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";

const Updatemodel = () => {

    const { id } = useParams();

    const ref = useRef();
    const [phonedata, setPhonedata] = useState("0");
    const [phoneissedata, setPhoneissedata] = useState(0);
    const [apibrand, setApibrand] = useState("");
    const [variant, setVariant] = useState([{ variant: "" }]);
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


    const fetchaptdata = () => {
        fetch(`http://localhost:9000/model/${id}`).then((resq) => {
            resq.json().then((result) => {
                // console.log(result.data)
                setPhonedata(result.data)
                setState(result.data);
                setVariantdata(result.data.variant)
            })
        }).catch(err => {
            console.log(err)
        })

    }

    const apiData = async () => {
        const apidata = await fetch("http://localhost:9000/phone/");
        const brandapidata = await apidata.json();
        const fullbrand = brandapidata.brandapi;
        setApibrand(fullbrand);
    };


    const modeldetail = [
        { id: 61, name: "phone Name", value: phonedata.modelname, data: "modelname" },
        { id: 62, name: "Image link", value: phonedata.image, data: "image" },
        { id: 62, name: "Page Url", value: phonedata.pageurl, data: "pageurl" },
        { id: 62, name: "Model Series", value: phonedata.series, data: "series" },
    ]



    const phoneissuedata = [
        { id: 1, name: 'Display Not Work', value: phonedata.display, data: "display" },
        { id: 2, name: 'Display Glass crack', value: phonedata.displayglass, data: "displayglass" },
        { id: 3, name: 'Front Camera not working', value: phonedata.frontcamera, data: "frontcamera" },
        { id: 4, name: 'Back Camera not working', value: phonedata.backcamera, data: "backcamera" },
        { id: 5, name: 'Volume Button not working', value: phonedata.volumebutton, data: "volumebutton" },
        { id: 6, name: 'Finger Touch not working', value: phonedata.fingertouch, data: "fingertouch" },
        { id: 7, name: 'WiFi not working', value: phonedata.wifi, data: "wifi" },
        { id: 8, name: 'Battery Faulty', value: phonedata.battery, data: "battery" },
        { id: 9, name: 'Speaker Faulty', value: phonedata.speaker, data: "speaker" },
        { id: 10, name: 'Power Button not working', value: phonedata.powerbutton, data: "powerbutton" },
        { id: 11, name: 'charging port not working', value: phonedata.chargingport, data: "chargingport" },
        { id: 12, name: 'Face Sensor not working', value: phonedata.facesensor, data: "facesensor" },
        { id: 13, name: 'Silent Button not working', value: phonedata.silentbutton, data: "silentbutton" },
        { id: 14, name: 'Audio Receiver not working', value: phonedata.audioreceiver, data: "audioreceiver" },
        { id: 15, name: 'Camera Glass Broken', value: phonedata.cameraglass, data: "cameraglass" },
        { id: 16, name: 'Bluetooth not working', value: phonedata.bluetooth, data: "bluetooth" },
        { id: 17, name: 'Vibrator is not working', value: phonedata.vibrator, data: "vibrator" },
        { id: 18, name: 'Microphone not working', value: phonedata.microphone, data: "microphone" },
        { id: 19, name: 'Proximity Sensor not working', value: phonedata.proximitysensor, data: "proximitysensor" },
        { id: 20, name: 'Audio Jack not working', value: phonedata.audiojack, data: "audiojack" }
    ]

    const phoneacessories = [
        { id: 31, name: "Original Phone Box", value: phonedata.box, data: "box" },
        { id: 32, name: "Original Charger", value: phonedata.originalcharger, data: "originalcharger" },
    ]

    const ageDevice = [
        { id: 41, name: "0-3 Months", value: phonedata.bill3, data: "bill3" },
        { id: 42, name: "3-6 Months", value: phonedata.bill3to6, data: "bill3to6" },
        { id: 43, name: "6-11 Months", value: phonedata.bill6to11, data: "bill6to11" },
        { id: 44, name: "11 Months", value: phonedata.bill11out, data: "bill11out" },
    ]

    const conditiondata = [
        { id: 51, name: "Good Condition", value: phonedata.conditiongood, data: "conditiongood" },
        { id: 52, name: "Average Condition", value: phonedata.conditionbelow, data: "conditionbelow" },
        { id: 53, name: "Below Average Condition", value: phonedata.conditionpoor, data: "conditionpoor" },
    ]


    const handleVariant = (e, index) => {

        const { name, value } = e.target;
        const list = [...variantdata];
        list[index][name] = value;
        setVariantdata(list);

        // setVariantdata({
        //     ...variantdata,
        //     [name]: value,
        // });

        console.log(variantdata);

    }

    const Handmodelupdate = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });

        console.log(state)
    }

    const variantAdd = () => {
        setVariant([ { variant: "" }]);
        setVariantdata([...variantdata, { phonedata: "", phoneurl: "", phoneprice: "", }])
    };

    const variantRemove = (index) => {
        const list = [...variant];
        list.splice(index, 1);
        setVariant(list);
    };

    const fmupdate = (e) => {

        const data = {
            "variant": variantdata,
        }
        const fulldata = { ...state, ...data }

        console.log(fulldata);
    }

    useEffect(() => {

        apiData();
        fetchaptdata();

    }, [])
    return (
        <>
            <Menu />
            <section className="home-section">
                <Topmenu />
                <div className="home-content">
                    <div className="container px-4">
                        <div className='row align-items-center'>
                            <div className='col-md-6'><h2>Update Model</h2></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 p-2'>
                                <div className='border p-3 bg-white row'>


                                    <div className='col-md-12 my-3'>
                                        <h4>Model detail</h4>
                                    </div>

                                    <div className="mb-3 col-md-4">
                                        <label className="form-label">Brand Name</label>
                                        <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            name="brandname"
                                            defaultValue={phonedata.brandname}
                                            onChange={(e) => Handmodelupdate(e)}
                                        >
                                            <option>select one</option>
                                            {apibrand ? (
                                                apibrand.map((item, i) => {
                                                    return (
                                                        <>
                                                            <option value={item.brand} key={i} >
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


                                    {
                                        modeldetail ?
                                            <>
                                                {
                                                    modeldetail.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3 col-md-4" key={i}>
                                                                    <label className="form-label">{item.name}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={item.value}
                                                                        name={item.data}
                                                                        onChange={(e) => { Handmodelupdate(e) }}


                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }


                                            </>
                                            : null
                                    }


                                    <div className='col-md-12 my-3'>
                                        <h4>Variant</h4>
                                    </div>

                                    {
                                        phonedata.variant ?
                                            phonedata.variant.map((item, index) => {
                                                return (
                                                    <>

<div className="mb-3 col-md-4">
                                                                        <label className="form-label">Ram and Rom</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="6Gb / 128GB"
                                                                            defaultValue={item.phonedata}
                                                                            onChange={(e) => { handleVariant(e, index) }}
                                                                            name="phonedata"
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-md-3">
                                                                        <label className="form-label">Price</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            defaultValue={item.phoneprice}
                                                                            onChange={(e) => { handleVariant(e, index) }}
                                                                            name="phoneprice"
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-md-4">
                                                                        <label className="form-label">url</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            defaultValue={item.phoneurl}
                                                                            onChange={(e) => { handleVariant(e, index) }}
                                                                            name="phoneurl"
                                                                        />
                                                                    </div>

                                                                   
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
                                                                    
                                                                    

                                                                    </>
                                                )
                                            })

                                            : null
                                    }
                                                        {variant.map((element, index) => {
                                                            return (
                                                                <>
                                                                    <div className="mb-3 col-md-4">
                                                                        <label className="form-label">Ram and Rom</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="6Gb / 128GB"
                                                                            
                                                                            onChange={(e) => { handleVariant(e, index) }}
                                                                            name="phonedata"
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-md-3">
                                                                        <label className="form-label">Price</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            
                                                                            onChange={(e) => { handleVariant(e, index) }}
                                                                            name="phoneprice"
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-md-4">
                                                                        <label className="form-label">url</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                          
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




                                    <div className='col-md-12 my-3'>
                                        <h4>Functional or Physical Problems</h4>

                                    </div>

                                    {
                                        phoneissuedata ?
                                            <>
                                                {
                                                    phoneissuedata.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3 col-md-4" key={i}>
                                                                    <label className="form-label">{item.name}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={item.value}
                                                                        name={item.data}
                                                                        onChange={(e) => { Handmodelupdate(e) }}
                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }


                                            </>
                                            : null
                                    }


                                    <div className='col-md-12 my-3'>
                                        <h4>Accessories</h4>

                                    </div>


                                    {
                                        phoneacessories ?
                                            <>
                                                {
                                                    phoneacessories.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3 col-md-4" key={i}>
                                                                    <label className="form-label">{item.name}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={item.value}
                                                                        name={item.data}
                                                                        onChange={(e) => { Handmodelupdate(e) }}
                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }


                                            </>
                                            : null
                                    }

                                    <div className='col-md-12 my-3'>
                                        <h4>Bill</h4>
                                    </div>

                                    {
                                        ageDevice ?
                                            <>
                                                {
                                                    ageDevice.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3 col-md-3" key={i}>
                                                                    <label className="form-label">{item.name}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={item.value}
                                                                        name={item.data}
                                                                        onChange={(e) => { Handmodelupdate(e) }}
                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }


                                            </>
                                            : null
                                    }

                                    <div className='col-md-12 my-3'>
                                        <h4>Condition</h4>
                                    </div>

                                    {
                                        conditiondata ?
                                            <>
                                                {
                                                    conditiondata.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3 col-md-4" key={i}>
                                                                    <label className="form-label">{item.name}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={item.value}
                                                                        name={item.data}
                                                                        onChange={(e) => { Handmodelupdate(e) }}
                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }


                                            </>
                                            : null
                                    }

                                    <div className='col-md-12 py-3'>
                                        <button className='btn btn-info' onClick={() => { fmupdate() }}>Update</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Updatemodel;
