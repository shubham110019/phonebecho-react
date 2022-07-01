import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';

function Modeldetail(props) {

    const { id } = useParams();
    const [modeldata, setModeldata] = useState('data');
    const[geturl,SetGeturl]=useState();

    const[pprice,setPprice]=useState();
    const[checkbtn,setCheckbtn]=useState(true);

    fetch("https://phonebecho-api.herokuapp.com/model/").then((resq) => {
        resq.json().then((result) => {
            const data = result.phoneModel;
            data.map((item, i) => {
                if (item.pageurl === id) {
                    setModeldata(item)

                    SetGeturl(item.pageurl)
                }

            })
        })
    }).catch(err => {
        console.log(err)
    })
    const variant = modeldata.variant;


    const handlephonedata = (phoneurl) =>{

        // console.log(phoneurl)

        const vatcheck = modeldata.variant;

        vatcheck.map((item,i)=>{

            if(item.phoneurl === phoneurl)
            {
                setPprice(item);
                // alert(pprice.phoneprice);

                setCheckbtn(false)
            }
        })
  


    }

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

                        <div className='col-md-12 shadow-sm rounded p-4'>
                            <div className='row'>
                                <div className='col-md-3 text-center'>
                                    <img src={modeldata.image} />
                                </div>
                                <div className='col-md-9'>

                                    <h2 className='mb-4'>{modeldata.modelname}</h2>


                                    {
                                        checkbtn?
                                        <>
                                          <p>Choose a variant</p>

                                                {

                                                    variant ?
                                                        variant.map((item, i) => {
                                                            return (
                                                                <>
                                                                    <button className='btn btn-main' onClick={()=>{handlephonedata(item.phoneurl)}} >{item.phonedata}</button>
                                                                    {/* <Link to={`/model/${item.phoneurl}`} className='btn btn-main'>{item.phonedata}</Link> */}
                                                                </>
                                                            )
                                                        }) : null
                                                }
                                        </>
                                        :<>
                                            <h1 className='mb-4'>₹{pprice.phoneprice}</h1>

                                            <Link to={`/model/${geturl}/calculator/${modeldata._id}/${pprice._id}`} className='btn btn-main'>Get Exact Value</Link>
                                         
                                        </>
                                    }

                                  


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


export default Modeldetail;

