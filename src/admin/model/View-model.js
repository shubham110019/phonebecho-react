import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";

const Viewmodel = () => {

    const[data,setData]=useState();

    const brandapifetch = () =>{
        fetch('http://localhost:9000/model/').then((resq)=>{
            resq.json().then((result)=>{
                setData(result.phoneModel)
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handdeletemodel = (id) =>{
        fetch(`http://localhost:9000/model/${id}`,{
            method: "DELETE",
        }).then((res)=>{
            brandapifetch()
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(()=>{
        brandapifetch()
    

    },[])
    return (
        <>
            <Menu />

            <section className="home-section">
                <Topmenu />

                <div className="home-content">
                    <div className="container px-4">

                        <div className='row align-items-center'>
                             <div className='col-md-6'><h2>View Model</h2></div>
                            <div className='col-md-6 text-end'><Link to={`./add-model`} className="btn btn-info">Add Model</Link></div>
                        </div>


                        <div className='row'>

                            <div className='col-md-12 p-2'>
                                <div className='border p-3 bg-white'>
                                <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Brand</th>
      <th scope="col">Model Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>

    {
        data?
        data.map((item,i)=>{
            return(
                <>
                 <tr key={i}>
                    <th >{i}</th>
                    <td>{item.brandname}</td>
                    <td>{item.modelname}</td>
                    <td>
                        <Link to={`./update-model/${item._id}`}>Edit</Link>
                        <button className='btn' onClick={(e)=>handdeletemodel(item._id)}>Delete</button>
                    </td>
                    </tr>
                </>
            )
        })

        :null
    }
   
   
  </tbody>
</table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Viewmodel
