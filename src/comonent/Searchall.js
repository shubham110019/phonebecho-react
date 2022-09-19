import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Apiurl from "../Apidata";


const Searchphone = () => {

    const [model, setModel] = useState();
    const [btnck, setbtnck] = useState()
    const [apibrand, setApibrand] = useState();
    const[tbapibrand,setTbapibrand]=useState();
    const [apimodel, setApimodel] = useState();
    const [tbapimodel, setTbapimodel] = useState();
    const [selectedOptions, setSelectedOptions] = useState();


    const [typephone, setTypephone] = useState(false);
    const [typetablet, setTypetablet] = useState(false);
    const [typelaptop, setTypelaptop] = useState(false);

    const history = useHistory();
    const apiData = async () => {
        const apidata = await fetch(`${Apiurl}phone/`);
        // setData(await apidata.json());
        const brandapidata = await apidata.json();
        const fullbrand = brandapidata.brandapi;
        setApibrand(fullbrand);
    }

 

    const brandget = (options) => {
        setSelectedOptions(options);
        fetch(`${Apiurl}phone/brand/${options.target.value}`).then((req) => {
            req.json().then((result) => {
                setApimodel(result.findBrand);
            })
        }).catch(err => {
            console.log(err)
        })

    }

    const tabletapiData = async () => {
        const apidata = await fetch(`${Apiurl}tablet/`);
        // setData(await apidata.json());
        const brandapidata = await apidata.json();
        const fullbrand = brandapidata.data;
        setTbapibrand(fullbrand);
    }

    const tbbrandget = (options) => {

        fetch(`${Apiurl}tablet/brand/${options.target.value}`).then((req) => {
            req.json().then((result) => {
                setTbapimodel(result.data);
            })
        }).catch(err => {
            console.log(err)
        })

    }

    useEffect(() => {
        apiData();
        tabletapiData()
    }, []);

    const modeltype = (e) => {

        console.log(e.target.value);

        const value = e.target.value;

        if (value === "phone") {
            setTypephone(true)
            setTypetablet(false)
            setTypelaptop(false)
        }
        else if (value === "tablet") {
            setTypephone(false)
            setTypetablet(true)
            setTypelaptop(false)
        }
        else if (value === "laptop") {
            setTypephone(false)
            setTypetablet(false)
            setTypelaptop(true)
        }
        else{
            setTypephone(false)
            setTypetablet(false)
            setTypelaptop(false)
        }
    }
    const searchmodel = (e) => {

        if (model == undefined) {
            console.log("select model");
            setbtnck(true);
        }
        else {
            setbtnck(false);
            history.push(`/sell-old-mobile-phone/model/${model}`)
        }

    }


    const searchtbmodel = (e) => {

        if (model == undefined) {
            console.log("select model");
            setbtnck(true);
        }
        else {
            setbtnck(false);
            history.push(`/sell-old-tablet/model/${model}`)
        }

    }



    return (
        <>

            <div className="mobile-form shadow bg-white p-4 mb-n70">
                <h4 className='text-center mb-4' style={{"color": "#563d7c"}}>Sell Your Old Phone</h4>

                <p>{
                    btnck ?
                        <>
                            <div class="alert alert-danger" role="alert">
                                Select the model
                            </div>
                        </> : null
                }</p>


                <select className="form-select" onChange={modeltype}>
                    <option >Select type</option>
                    <option value="phone">Mobile Phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="laptop">Laptop</option>
                </select>


                <div className={`defalut ${typephone ? 'd-none' : ''}  ${typetablet ? 'd-none' : ''}`}>
                    <select className="form-select" onChange={brandget} disabled >
                        <option >Select Brand</option>
                        {
                            apibrand ?
                                apibrand.map((item, i) => {
                                    return (<>
                                        <option value={item.brand} key={i}>{item.brand}</option>
                                    </>
                                    )
                                }) : <>data not fetch</>
                        }
                    </select>

                    <select className="form-select" onChange={(e) => { setModel(e.target.value) }} disabled>
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
                    <button className='btn btn-block w-100 btn-main' >Sell now</button>
                </div>



                <div className={`phone ${typephone ? '' : 'd-none'}`}>
                    <select className="form-select" onChange={brandget}  >
                        <option >Select Brand</option>
                        {
                            apibrand ?
                                apibrand.map((item, i) => {
                                    return (<>
                                        <option value={item.brand} key={i}>{item.brand}</option>
                                    </>
                                    )
                                }) : <>data not fetch</>
                        }
                    </select>

                    <select className="form-select" onChange={(e) => { setModel(e.target.value) }} >
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

                    <button className='btn btn-block w-100 btn-main' onClick={() => { searchmodel() }} >Sell Phone Now</button>
                </div>


                <div className={`table ${typetablet ? '' : 'd-none'}`}>
                    <select className="form-select" onChange={tbbrandget}  >
                        <option >Select Brand</option>
                        {
                            tbapibrand ?
                            tbapibrand.map((item, i) => {
                                    return (<>
                                        <option value={item.brand} key={i}>{item.brand}</option>
                                    </>
                                    )
                                }) : <>data not fetch</>
                        }
                    </select>

                    <select className="form-select" onChange={(e) => { setModel(e.target.value) }} >
                        <option >Select Model</option>

                        {
                            tbapimodel ?
                            tbapimodel.map((item, i) => {
                                    return (<>
                                        <option value={item.pageurl} key={i}>{item.modelname}</option>
                                    </>
                                    )
                                }) : <>data not fetch</>
                        }

                    </select>

                    <button className='btn btn-block w-100 btn-main' onClick={() => { searchtbmodel() }} >Sell Tablet Now</button>
                </div>
                
            </div>
        </>
    )
}
export default Searchphone;