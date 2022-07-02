import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";

const Updatemodel = () => {

    const { id } = useParams();

    const [phonedata, setPhonedata] = useState();

    const fetchaptdata = () => {
        fetch(`http://localhost:9000/model/${id}`).then((resq) => {
            resq.json().then((result) => {
                setPhonedata(result.data)
                console.log("data : " + result.data)
            })
        }).catch(err => {
            console.log(err)
        })

    }

    const phoneissuedata = [
        // { id: 1, name: 'Display Not Work', price: phonedata.display},
        // { id: 2, name: 'Display Glass crack', price: phonedata.displayglass },
        // { id: 3, name: 'Front Camera not working', price: phonedata.frontcamera },
        // { id: 4, name: 'Back Camera not working', price: phonedata.backcamera },
        // { id: 5, name: 'Volume Button not working', price: phonedata.volumebutton },
        // { id: 6, name: 'Finger Touch not working', price: phonedata.fingertouch },
        // { id: 7, name: 'WiFi not working', price: phonedata.wifi },
        // { id: 8, name: 'Battery Faulty', price: phonedata.battery },
        // { id: 9, name: 'Speaker Faulty', price: phonedata.speaker },
        // { id: 10, name: 'Power Button not working', price: phonedata.powerbutton },
        // { id: 11, name: 'charging port not working', price: phonedata.chargingport },
        // { id: 12, name: 'Face Sensor not working', price: phonedata.facesensor },
        // { id: 13, name: 'Silent Button not working', price: phonedata.silentbutton },
        // { id: 14, name: 'Audio Receiver not working', price: phonedata.audioreceiver },
        // { id: 15, name: 'Camera Glass Broken', price: phonedata.cameraglass },
        // { id: 16, name: 'Bluetooth not working', price: phonedata.bluetooth },
        // { id: 17, name: 'Vibrator is not working', price: phonedata.vibrator },
        // { id: 18, name: 'Microphone not working', price: phonedata.microphone },
        // { id: 19, name: 'Proximity Sensor not working', price: phonedata.proximitysensor },
        // { id: 20, name: 'Audio Jack not working', price: phonedata.audiojack }
    ]


    useEffect(() => {

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
                                <div className='border p-3 bg-white'>


                                    <div className='col-md-12'>
                                        <h4>Functional or Physical Problems</h4>

                                    </div>

                                    {
                                        phoneissuedata ?
                                            <>
                                                {
                                                    phoneissuedata.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3 col-md-4">
                                                                    <label className="form-label">{item.name}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        
                                                                        name="modelname"
                                                                    />
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }


                                            </>
                                            : null
                                    }

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
