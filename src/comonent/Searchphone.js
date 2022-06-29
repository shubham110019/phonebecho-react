import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SelectSearch from 'react-select-search';

const Searchphone = () => {

    const [model, setModel] = useState();
    const [btnck, setbtnck] = useState()
    const [apibrand, setApibrand] = useState();
    const [apimodel, setApimodel] = useState();
    const [selectedOptions, setSelectedOptions] = useState();

    const history = useHistory();
    const apiData = async () => {
        const apidata = await fetch('http://localhost:1337/api/phonebrands');
        // setData(await apidata.json());
        const brandapidata = await apidata.json();
        const fullbrand = brandapidata.data;
        setApibrand(fullbrand);
    }

    const brandget = (options) => {
        setSelectedOptions(options);
        fetch(`http://localhost:9000/phone/brand/${options.target.value}`).then((req) => {
            req.json().then((result) => {
                setApimodel(result.findBrand);
            })
        }).catch(err => {
            console.log(err)
        })

    }

    useEffect(() => {
        apiData();
    }, []);

    const searchmodel = (e) => {

        if (model == undefined) {
            console.log("select model");
            setbtnck(true);
        }
        else {
            setbtnck(false);
            history.push(`/model/${model}`)
        }

    }

    return (
        <>

            <div className="mobile-form shadow bg-white p-4 mb-n70">
                <h4 className='text-center mb-4'>Sell Your Old Phone</h4>

                <p>{
                    btnck ?
                        <>
                            <div class="alert alert-danger" role="alert">
                                Select the model
                            </div>
                        </> : null
                }</p>

                <select className="form-select" onChange={brandget}>
                    <option >Select Brand</option>
                    {
                        apibrand ?
                            apibrand.map((item, i) => {
                                return (<>
                                    <option value={item.attributes.name} key={i}>{item.attributes.name}</option>
                                </>
                                )
                            }) : <>data not fetch</>
                    }
                </select>

                <select className="form-select" onChange={(e) => { setModel(e.target.value) }}>
                    <option >Select Model</option>

                    {
                        apimodel ?
                            apimodel.map((item, i) => {
                                return (<>
                                    <option value={item.pageurl} key={i}>{item.modelname}</option>
                                </>
                                )
                            }) : <>data not fetch</>
                    }

                </select>

                <button className='btn btn-block w-100 btn-main' onClick={() => { searchmodel() }} >Sell now</button>
            </div>
        </>
    )
}
export default Searchphone;