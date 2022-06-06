import React from 'react';
import Searchphone from '../comonent/Searchphone';

const Home = () =>{
    return(
        <>
          <div className='alt-box'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-8'>
                        <h1 className='mb-4'>Sell your Mobile Phone<br/>for Instant Cash</h1>
                       <p className='h4'>Free Pickup | Instant Payment</p>
                    </div>
                    <div className='col-lg-4'>
                      <Searchphone/>
                    </div>
                </div>
            </div>
          </div>

          <div className="alt-topsell ptb-50 pb-0">
              <div className='container'>
                  <div className='row mb-4 '>
                      <div className='col-md-12 alt-title'><h2>Top Selling Brands</h2></div>
                  </div>

                  <div className='row'>
                        <div className='col-md-2'>
                          <div className='card'>
                              <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg'/>
                              </div>
                          </div>
                        </div>
                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/5f6b4d6f-57a9.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg'/>
                              </div>
                          </div>
                        </div>
                  </div>
              </div>
          </div>


          <div className="alt-topsell ptb-50">
              <div className='container'>
                  <div className='row mb-4 '>
                      <div className='col-md-12 alt-title'><h2>Top Selling Models</h2></div>
                  </div>

                  <div className='row'>
                        <div className='col-md-2'>
                          <div className='card'>
                              <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg'/>
                              </div>
                          </div>
                        </div>
                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/5f6b4d6f-57a9.jpg'/>
                              </div>
                          </div>
                        </div>

                        <div className='col-md-2'>
                          <div className='card'>
                          <div className="card-body">
                              <img src='https://s3n.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg'/>
                              </div>
                          </div>
                        </div>
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
                              <img src="https://www.cashify.in/static/landing/svgs/get-price.svg"/>
                              </div>
                              <h4>Check Price</h4>
                              <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                          </div>
                      </div>

                      <div className='col-md-4'>
                          <div className='work-box'>
                          <div className='work-boximg'>
                              <img src="https://www.cashify.in/static/landing/svgs/book-pickup.svg"/>
                              </div>
                              <h4>Schedule Pickup</h4>
                              <p>Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
                          </div>
                      </div>

                      <div className='col-md-4'>
                          <div className='work-box'>
                          <div className='work-boximg'>
                              <img src="https://www.cashify.in/static/landing/svgs/get-paid.svg"/>
                              </div>
                              <h4>Get Paid</h4>
                              <p>Did we mention you get paid as soon as our executive picks up your device? It's instant payment all the way!</p>
                          </div>
                      </div>

                  </div>
        </div>
        </div>
        </>
    )
}

export default Home;