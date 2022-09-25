import React from 'react'
import Navbar from '../../comonent/Navbar';
import Footer from '../../comonent/Footer';
import Howwork from '../../comonent/Howwork';
import Seachlaptop from '../../comonent/Seachlaptop';

const Selllaptop = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
                <div className='bg-main p-5 mt-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8 media-991-center media-991-pb4'>
                            <h1 className='mb-4'>Sell your Laptop for<br/> Instant Cash</h1>
                            <p className='h4'>Free Pickup | Instant Payment</p>
                        </div>
                        <div className='col-lg-4'>
                            <Seachlaptop/>
                        </div>
                    </div>
                    </div>
                </div>


                <div className=" ptb-50">
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h2>Top Selling Brands</h2></div>
                    </div>

                    <div className='row gy-4'>

                     
                    </div>
                </div>
            </div>



                <Howwork/>
        <Footer/>
    </>
  )
}

export default Selllaptop;
