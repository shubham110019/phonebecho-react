import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../comonent/Footer';
import Navbar from '../comonent/Navbar';
const Variant = () => {

    const { id } = useParams();

    // fetch("http://localhost:9000/model/").then((resq) => {
    //     resq.json().then((result) => {
    //         const data = result.phoneModel;
    //         data.map((item, i) => {
    //             if (item.pageurl === id) {
    //                 setModeldata(item)
    //             }

    //         })
    //     })
    // }).catch(err => {
    //     console.log(err)
    // })

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
                                   
                                </div>
                                <div className='col-md-9'>
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
