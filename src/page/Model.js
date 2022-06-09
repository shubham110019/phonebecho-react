import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../comonent/Card';



const Model = (prop) =>{

    const[model,setModel]=useState();

    const {id} = useParams();

    console.log(id)

    fetch(`http://localhost:9000/phone/brand/${id}`).then((req)=>{
        req.json().then((result)=>{
            setModel(result.findBrand);
        })
    }).catch(err=>{
        console.log(err)
    })

    return(
        <>
             <div className="alt-topsell ptb-50">
              <div className='container'>
                  <div className='row mb-4 '>
                      <div className='col-md-12 alt-title'><h2 className='mb-5'>Sell Old Mobile Phone</h2>
                      <h4>Select Model</h4>
                      </div>
                  </div>

                  <div className='row'>
                  {model
              ? model.map((item, i) => {
                  return (
                    <>
                      <Card value={item} link={`/model/${item.name}`} />
                    </>
                  );
                })
              : null}
                 
                  </div>
              </div>
          </div>
       
        </>
    )
}

export default Model;