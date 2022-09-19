import React,{useState} from 'react';
import Card from '../comonent/Card';
const Brandall = () =>{

    const[brand,setBrand]=useState();

    fetch('http://localhost:9000/phone/').then((resq)=>{
        resq.json().then((result)=>{
            console.log(result.brandapi)
            setBrand(result.brandapi);
        }).catch((err)=>{
            console.log(err);
        })
    })
    return(
        <>
         <div className="alt-topsell ptb-50">
              <div className='container'>
                  <div className='row mb-4 '>
                      <div className='col-md-12 alt-title'><h2 className='mb-5'>Sell Old Mobile Phone</h2>
                      <h4>Select Brand</h4>
                      </div>
                  </div>

                  <div className='row'>

                      {
                          brand ? 
                          brand.map((item,i)=>{
                              return(
                                  <>
                                   <Card value={item}/>
                                  </>
                              )
                          })

                          :null
}
                  </div>
              </div>
          </div>
        </>
    )
}

export default Brandall;