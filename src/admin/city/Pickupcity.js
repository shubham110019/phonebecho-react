import React, { useEffect, useState } from 'react'
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";
import Apiurl from '../../Apidata';
import DataTable from "react-data-table-component";

const Pickupcity = () => {


    const[data,setdata]=useState({
        city:'',
        image:'',
        pincode:''
    });
    const[fillerdata,setFillerdata]=useState("");
    const[errordata,setErrordata]=useState({
        city:'',
        image:'',
        pincode:''
    })


    const pickinputdata = [
        { id: 1, type: 'text', name: "city", error:errordata.city },
        { id: 2, type: 'text', name: "image", error:errordata.image },
        { id: 3, type: 'text', name: "pincode", error:'' }
    ]


    const handleformsubmit = (e) =>{
        const {name,value} = e.target;
        setdata({
            ...data,
            [name]:value
        })
        console.log(data);

    }

   

    const brandapifetch = () => {
        fetch(`${Apiurl}pickcity`).then((resq) => {
          resq.json().then((result) => {
            setFillerdata(result.data)
          });
        });
      }


      const handdelete = (id) =>{

        fetch(`${Apiurl}pickcity/${id}`, {
            method: "DELETE",
        }).then((res) => {
            brandapifetch()
        }).catch((err) => {
            console.log(err);
        });

      }
    

      const validate = () => {

        let city = "";
        let image = "";

        if (!data.city) {
            city = "Field is required";
        }
        if (!data.image) {
            image = "Field is required";
        }

        if (city || image) {
            setErrordata({ ...errordata, city, image});
            return false;
        }
        return true;

      }

      const formsubmit = async () =>{

        if(validate())
        {
            const result = await fetch(`${Apiurl}pickcity`,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                  },
                  body: JSON.stringify(data)
            });
    
            result = await result.json();
            console.log(result);
        }

       

    }


    const columns = [
        {
          name: "Brand",
          cell: (row) => row.city,
          sortable: true,
        },
        {
          name: "Delete",
          cell: (row) => (
            <button
              className="btn btn-danger btn-sm"
              onClick={()=>{handdelete(row._id)}}
            >
              Delete
            </button>
          ),
        },
      ];

      useEffect(()=>{
        brandapifetch()
        
      },[formsubmit])

    return (
        <>

            <Menu />

            <section className="home-section">
                <Topmenu />

                <div className="home-content">
                    <div className="container px-4">
                        <div className="row">
                            <h2>Pickup City</h2>
                            <div className="col-md-5 p-2">
                                <div className="border p-3 bg-white">

                                    {
                                        pickinputdata.map((item) => {
                                            return (
                                                <>
                                                    <div className="mb-3">
                                                        <label className="form-label">{item.name}</label>
                                                        <input
                                                            type={item.type}
                                                            className="form-control"
                                                            name={item.name}
                                                            onChange={(e)=>{handleformsubmit(e)}}
                                                        />
                                                        <p style={{"color":'red',"fontSize":"14px","marginTop": "10px"}}>{item.error}</p>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }


                                    <button className='btn btn-primary' onClick={()=>{formsubmit()}}>Submit</button>



                                </div>
                            </div>

                            <div className="col-md-7 p-2">
                <div className="border p-3 bg-white">
              

                <DataTable columns={columns} data={fillerdata} pagination selectableRows defaultSortAsc={true} subHeader />
              
                </div>
              </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Pickupcity
