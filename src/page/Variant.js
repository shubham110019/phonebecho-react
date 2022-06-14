import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';

const Variant = () => {

    const { id } = useParams();

    // price id
    const { slug } = useParams();

    // console.log(slug);
    const[phonedata,setPhonedata]=useState('data');
    const[phoneprice,setPhoneprice]=useState('data');

    fetch("http://localhost:9000/model/").then((resq) => {
        resq.json().then((result) => {
            const data = result.phoneModel;
            data.map((item, i) => {
                if (item.pageurl === id) {
                    setPhonedata(item)    
                }
            })

            const variant = phonedata.variant;
            variant.map((dataph,i)=>{
                if(dataph._id === slug)
                {
                    setPhoneprice(dataph)
                    console.log(dataph)
                }
            })

        })
    }).catch(err => {
        console.log(err)
    })

  

    

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

                        <div className='col-md-8 px-2'>
                            <div className='box shadow-sm rounded p-4'>
dfsdf
                            </div>
                        
                        </div>

                        <div className='col-md-4 p-2'>
                        <div className='box shadow-sm rounded p-4'>
                            <div className='phone-top-data d-flex flex-row align-items-center'>
                                <img src={phonedata.image} style={{height:"100px"}}/>
                                <h5>{phonedata.modelname} {phoneprice.phonedata}</h5>
                               
                            </div>
                            <div className='box'>
                            <h5>phone data:{phoneprice.phonedata}</h5> <h5>Price: {phoneprice.phoneprice}</h5>
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
