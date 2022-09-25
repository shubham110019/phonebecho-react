import React, { useEffect, useState } from 'react';
import Searchphone from '../comonent/Searchphone';
import Card from '../comonent/Card';
import Navbar from '../comonent/Navbar';
import Footer from '../comonent/Footer';
import Apiurl from '../Apidata';
import Cardloading from '../comonent/Cardloading';
import Howwork from '../comonent/Howwork';
import { Link } from 'react-router-dom';


const Sellphone = () => {

    const [brand, setBrand] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${Apiurl}phone/?limit=6`).then((resq) => {
            resq.json().then((result) => {
                setBrand(result.brandapi);
                setIsLoading(false)
            }).catch((err) => {
                console.log(err);
            })
        })

    }, [])


    return (
        <>
            <Navbar />


              <div className='container'>
                <div className='bg-main p-5 mt-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8 media-991-center media-991-pb4'>
                            <h1 className='mb-4'>Sell your Mobile Phone<br />for Instant Cash</h1>
                            <p className='h4'>Free Pickup | Instant Payment</p>
                        </div>
                        <div className='col-lg-4'>
                            <Searchphone />
                        </div>
                    </div>
                    </div>
                </div>
           

            <div className="ptb-50">
                <div className='container'>
                    <div className='row mb-4 align-items-center'>
                   
                        <div className='col-md-8 alt-title'><h2>Top Selling Brands</h2></div>
                        <div className='col-md-4 text-end'><Link to={'sell-old-mobile-phone/brand/'}>View more </Link></div>
                    </div>

                    <div className='row gy-4'>

                        {
                            isLoading
                                ?
                                <>
                                
                                <Cardloading/>
                                <Cardloading/>
                                <Cardloading/>
                                <Cardloading/>
                                <Cardloading/>
                                <Cardloading/>

                                </>
                                

                                :


                                brand ?
                                    brand.map((item, i) => {
                                        return (
                                            <>
                                                <Card value={item} key={i} link={`/sell-old-mobile-phone/brand/${item.brand}`} />
                                            </>
                                        )
                                    })

                                    : null


                        }




                    </div>
                </div>
            </div>


            <Howwork/>

           


            <Footer />
        </>
    )
}

export default Sellphone;