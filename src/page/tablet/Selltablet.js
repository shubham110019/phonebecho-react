import React, { useEffect, useState } from 'react';
import Seachtablet from '../../comonent/Seachtablet';
import Card from '../../comonent/Card';
import Navbar from '../../comonent/Navbar';
import Footer from '../../comonent/Footer';
import Apiurl from '../../Apidata';
import Cardloading from '../../comonent/Cardloading';
import Howwork from '../../comonent/Howwork';

const Selltablet = () => {

    const [brand, setBrand] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${Apiurl}tablet/?limit=6`).then((resq) => {
            resq.json().then((result) => {
                setBrand(result.data);
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
                            <h1 className='mb-4'>Sell your Tablet for<br/> Instant Cash</h1>
                            <p className='h4'>Free Pickup | Instant Payment</p>
                        </div>
                        <div className='col-lg-4'>
                            <Seachtablet />
                        </div>
                    </div>
                    </div>
                </div>
           

            <div className="alt-topsell ptb-50">
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h2>Top Selling Brands</h2></div>
                    </div>

                    <div className='row gy-4'>

                        {
                            isLoading
                                ?
                                <>
                                <Cardloading/>

                                </>
                                

                                :


                                brand ?
                                    brand.map((item, i) => {
                                        return (
                                            <>
                                                <Card value={item} key={i} link={`sell-old-tablet/brand/${item.brand}`} />
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

export default Selltablet;