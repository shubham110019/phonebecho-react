import React, { useEffect, useState } from 'react';
import Searchphone from '../comonent/Searchphone';
import Card from '../comonent/Card';
import Navbar from '../comonent/Navbar';
import Footer from '../comonent/Footer';
import Apiurl from '../Apidata';
import Cardloading from '../comonent/Cardloading';
import { Link } from 'react-router-dom';
import sellphoneimg from '../img/sell-phone.png';
import selltabletimg from '../img/sell-tablet.png';
import selllaptopimg from '../img/sell-laptop.png';
import Searchall from '../comonent/Searchall';
import Howwork from '../comonent/Howwork';


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
                            <h1 className='mb-4'>SELL OLD MOBILE PHONE <br/>
                             & TABLET & LAPTOPS</h1>
                            <p className='h4'>Now Experience the fast Payment for your old mobile phone, laptop, iPad, tablet, macbook with our quickest and simplest Process in less than a minute.</p>
                        </div>
                        <div className='col-lg-4'>
                            <Searchall />
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
                                    <Cardloading />

                                </>


                                :
                                <>
                                <div className="col-md-2">
                                    <div className="card">
                                        <Link to={'/sell-old-mobile-phone'}>
                                            <div className="card-body">
                                                <img src={sellphoneimg} />
                                                <p>Sell Phone</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            

                                <div className="col-md-2">
                                    <div className="card">
                                        <Link to={'/sell-old-tablet'}>
                                            <div className="card-body">
                                                <img src={selltabletimg} />
                                                <p>Sell Tablet</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-md-2">
                                    <div className="card">
                                        <Link to={'/sell-old-laptop'}>
                                            <div className="card-body">
                                                <img src={selllaptopimg} />
                                                <p>Sell Laptop</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                              

                                </>


                        }




                    </div>
                </div>
            </div>




           
                    <Howwork/>


            
            <Footer />
        </>
    )
}

export default Home;