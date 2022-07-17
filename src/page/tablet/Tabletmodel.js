import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../comonent/Card';
import Navbar from '../../comonent/Navbar';
import Footer from '../../comonent/Footer';
import Apiurl from '../../Apidata';
import Cardloading from '../../comonent/Cardloading';

const Tabletmodel = (prop) => {

    const [model, setModel] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    fetch(`${Apiurl}tablet/brand/${id}`).then((req) => {
        req.json().then((result) => {
            setModel(result.data);
            setIsLoading(false)
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
                        <div className='col-md-12 alt-title'><h2 className='mb-5 text-cp'>Sell Old {id} Tablet Phone</h2>
                            <h4>Select Model</h4>
                        </div>
                    </div>

                    <div className='row gy-4'>

                        {
                            isLoading
                                ?
                                <>
                                <Cardloading/>
                                </>
                                :
                                model
                                    ? model.map((item, i) => {
                                        return (
                                            <>
                                                <Card value={item} link={`/sell-old-tablet/model/${item.pageurl}`} />
                                            </>
                                        );
                                    })
                                    : null
                        }


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tabletmodel;