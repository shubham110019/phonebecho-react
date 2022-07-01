import React, { useEffect, useState } from 'react';
import Searchphone from '../comonent/Searchphone';
import Card from '../comonent/Card';
import Navbar from '../comonent/Navbar';
import Footer from '../comonent/Footer';

const Home = () => {

    const [brand, setBrand] = useState();

    useEffect(() => {
        fetch('https://phonebecho-api.herokuapp.com/phone/').then((resq) => {
            resq.json().then((result) => {
                setBrand(result.brandapi);
            }).catch((err) => {
                console.log(err);
            })
        })

    }, [])


    return (
        <>
            <Navbar />
            <div className='alt-box'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8'>
                            <h1 className='mb-4'>Sell your Mobile Phone<br />for Instant Cash</h1>
                            <p className='h4'>Free Pickup | Instant Payment</p>
                        </div>
                        <div className='col-lg-4'>
                            <Searchphone />
                        </div>
                    </div>
                </div>
            </div>

            <div className="alt-topsell ptb-50">
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h2>Top Selling Brands</h2></div>
                    </div>

                    <div className='row'>

                        {
                            brand ?
                                brand.map((item, i) => {
                                    return (
                                        <>
                                            <Card value={item} key={i} link={`brand/${item.brand}`} />
                                        </>
                                    )
                                })

                                : null
                        }
                    </div>
                </div>
            </div>




            <div className='bg-grey ptb-50'>
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h3 className='text-center mb-4'>How PhoneBecho Works</h3></div>
                    </div>

                    <div className='row'>

                        <div className='col-md-4'>
                            <div className='work-box'>
                                <div className='work-boximg'>
                                    <img src="https://www.cashify.in/static/landing/svgs/get-price.svg" />
                                </div>
                                <h4>Check Price</h4>
                                <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='work-box'>
                                <div className='work-boximg'>
                                    <img src="https://www.cashify.in/static/landing/svgs/book-pickup.svg" />
                                </div>
                                <h4>Schedule Pickup</h4>
                                <p>Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='work-box'>
                                <div className='work-boximg'>
                                    <img src="https://www.cashify.in/static/landing/svgs/get-paid.svg" />
                                </div>
                                <h4>Get Paid</h4>
                                <p>Did we mention you get paid as soon as our executive picks up your device? It's instant payment all the way!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;