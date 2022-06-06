import React, { useEffect, useState } from "react";
import SelectSearch from 'react-select-search';

const Searchphone = () =>{
    const [apibrand, setApibrand] = useState();
    const [apimodel, setApimodel] = useState();
    const [selectedOptions, setSelectedOptions] = useState();
    const apiData = async () => {

        const apidata = await fetch('http://localhost:9000/phone/');
        // setData(await apidata.json());
        const brandapidata = await apidata.json();

        const fullbrand = brandapidata.brandapi;
        setApibrand(fullbrand);
    }

    const brandget = (options) =>{
        setSelectedOptions(options);
        fetch(`http://localhost:9000/phone/brand/${options.target.value}`).then((req)=>{
            req.json().then((result)=>{
                setApimodel(result.findBrand);
            })
        }).catch(err=>{
            console.log(err)
        })

    }

    useEffect(() => {
        apiData();
    }, []);


    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
    ];

    return(
        <>

             <div className="mobile-form shadow bg-white p-4 mb-n70">
                            <h4 className='text-center mb-4'>Sell Your Old Phone</h4>

                            {/* <SelectSearch options={options} search emptyMessage="Not found" value="sv" name="language" placeholder="Choose your language" /> */}


                        <select className="form-select" onChange={brandget}>
                            <option >Select Brand</option>
                                {
                                      apibrand ?
                                      apibrand.map((item,i)=>{
                                      return(<>
                                      <option value={item.brand} key={i}>{item.brand}</option>
                                      </>
                                      )}):null
                                }
                            </select>

                            <select className="form-select">
                            <option >Select Model</option>

                            {
                                      apimodel ?
                                      apimodel.map((item,i)=>{
                                      return(<>
                                      <option value={item.brand} key={i}>{item.name}</option>
                                      </>
                                      )}):null
                                }

                            </select>

                            <button className='btn btn-block w-100 btn-main'>Sell now</button>
                        </div>
        </>
    )
}
export default Searchphone;