import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";
import Apiurl from '../../Apidata';

const Bookingdetail = () => {

    const { id } = useParams();
    const [data, setData] = useState("");
    const [acessories, setAcessories] = useState("");


    const Apidata = () => {
        fetch(`${Apiurl}phonebook/${id}`).then((resq) => {
            resq.json().then((result) => {
                console.log(result)
                setData(result.data)

                setAcessories(result.data.phoneacessories[0])
            })
        })
    }

    console.log(acessories);

    useEffect(() => {
        Apidata()
    }, [])

    return (
        <>
            <Menu />

            <section className="home-section">
                <Topmenu />

                <div className="home-content">
                    <div className="container px-4">



                        <div className='row align-items-center'>
                            <div className='col-md-6'><h2>Booking Detail</h2></div>
                        </div>




                        <div className='row'>
                            <div className='col-md-12 bg-white'>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th>Model</th>
                                            <td>{data.modelnamefull}</td>
                                        </tr>
                                        <tr>
                                            <th>Pickup Price</th>
                                            <td>{data.pickupprice}</td>
                                        </tr>
                                        <tr>
                                            <th className='align-middle'>Phone Issues</th>
                                            <td>
                                                {
                                                    data.phoneissues?
                                                    data.phoneissues.map((item,i)=>{
                                                        return(
                                                            <li key={i}>{item}</li>
                                                        )
                                                    })
                                                    :null
                                                }
                                            </td>
                                        </tr>

                                        <tr>
                                            <th className='align-middle'>Phone Acessories</th>
                                            <td>
                                               {
                                                data.phoneacessories?
                                                data.phoneacessories.map((item,i)=>{
                                                    return(
                                                        <li key={i}>{item}</li>
                                                    )
                                                })
                                                :null
                                               }
                                              
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Phone Age</th>
                                            <td>
                                                {data.phoneage}
                                            </td>
                                        </tr>


                                        <tr>
                                            <th>phone Condition</th>
                                            <td>
                                                {data.phonecondition}
                                            </td>
                                        </tr>


                                        <tr>
                                            <th>Pickup Date</th>
                                            <td>
                                                {data.pickupdate}
                                            </td>
                                        </tr>


                                        <tr>
                                            <th>User Name</th>
                                            <td>
                                                {data.fullname}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Phone</th>
                                            <td>
                                                {data.phone}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Email</th>
                                            <td>
                                                {data.email}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Address</th>
                                            <td>
                                                {data.address}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>City</th>
                                            <td>
                                                {data.city}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Pin Code</th>
                                            <td>
                                                {data.pincode}
                                            </td>
                                        </tr>


                                        <tr>
                                            <th>Booking Type</th>
                                            <td>
                                                {data.bookingtype}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Booking Date</th>
                                            <td>
                                                {data.bookingdate}
                                            </td>
                                        </tr>






                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookingdetail
