import React from 'react';
import price from '../img/get-price.svg'
import pickup from '../img/book-pickup.svg'
import paid from '../img/get-paid.svg';

const Howwork = () => {
    return (
        <>
            <div className='sel-box ptb-50'>
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h3 className='text-center mb-4'>How PhoneBecho Works</h3></div>
                    </div>

                    <div className='row gy-4'>

                        <div className='col-md-4'>
                            <div className='work-box'>
                                <div className='work-boximg'>
                                    <img src={price} />
                                </div>
                                <h4 >Check Price</h4>
                                <p >Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='work-box'>
                                <div className='work-boximg'>
                                    <img src={pickup} />
                                </div>
                                <h4 >Schedule Pickup</h4>
                                <p >Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='work-box'>
                                <div className='work-boximg'>
                                    <img src={paid} />
                                </div>
                                <h4 >Get Paid</h4>
                                <p >Did we mention you get paid as soon as our executive picks up your device? It's instant payment all the way!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Howwork;
