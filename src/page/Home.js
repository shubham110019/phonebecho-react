import React, { useEffect, useState } from 'react';
import Searchphone from '../comonent/Searchphone';
import Card from '../comonent/Card';
import Navbar from '../comonent/Navbar';
import Footer from '../comonent/Footer';
import Apiurl from '../Apidata';
import Cardloading from '../comonent/Cardloading';


const Home = () => {

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
            <div className='alt-box'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8 media-991-center media-991-pb4'>
                            <h1 className='mb-4'>SELL OLD MOBILE PHONE & TABLET & LAPTOPS</h1>
                            <p className='h4'>Now Experience the fast Payment for your old mobile phone, laptop, iPad, tablet, macbook with our quickest and simplest Process in less than a minute.</p>
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
                        <div className='col-md-12 alt-title'><h2>Sell for cash</h2></div>
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
                                                <Card value={item} key={i} link={`brand/${item.brand}`} />
                                            </>
                                        )
                                    })

                                    : null


                        }




                    </div>
                </div>
            </div>




            <div className='bg-main ptb-50'>
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h3 className='text-center mb-4'>How PhoneBecho Works</h3></div>
                    </div>

                    <div className='row gy-4'>

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



            <div className='ptb-50'>
                <div className='container'>
                    <div className='row mb-4 '>
                        <div className='col-md-12 alt-title'><h3 className='text-center mb-4'>Blogs</h3></div>
                    </div>

                    <div className='row'>

                        <div className='col-md-4'>
                        <div class="card mb-3">
  <img src="https://picsum.photos/200/150?grayscale" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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

export default Home;