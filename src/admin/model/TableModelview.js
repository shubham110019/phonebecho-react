import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";
import DataTable from "react-data-table-component";
import Apiurl from '../../Apidata';


const TableModelview = () => {

    const [data, setData] = useState();

    const [datafull, setDatafull] = useState([]);
    const [search, setSearch] = useState("");
    const [fillerdata, setFillerdata] = useState([]);

    const brandapifetch = () => {
        fetch(`${Apiurl}tabletmodel/`).then((resq) => {
            resq.json().then((result) => {
                setData(result.data)
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const apidata = () => {
        fetch(`${Apiurl}tabletmodel/`)
          .then((resq) => {
            resq.json().then((result) => {
              setDatafull(result.data)
              setFillerdata(result.data)
              console.log(datafull);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

    const handdeletemodel = (id) => {
        fetch(`${Apiurl}tabletmodel/${id}`, {
            method: "DELETE",
        }).then((res) => {
            apidata()
        }).catch((err) => {
            console.log(err);
        });
    }


    const columns = [
        {
          name: "Brand",
          cell: (row) => row.brandname,
          sortable: true,
        },
        {
          name: "Model Name",
          cell: (row) => row.modelname,
          sortable: true,
        },
        {
          name: "Variant",
          cell: (row) => row.variant.length,
          sortable: true,
        },
        {
          name: "Edit",
          cell: (row) => <Link className="btn btn-success btn-sm" to={`/admin/table-model/view/${row._id}`}>Edit</Link>,
        },
        {
          name: "Delete",
          cell: (row) => (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                handdeletemodel(row._id)
              }}
            >
              Delete
            </button>
          ),
        },
      ];
    

    useEffect(() => {
        brandapifetch()
        apidata()

    }, [])

    useEffect(()=>{
        const result = datafull.filter(data=>{
            return data.modelname.toLowerCase().match(search.toLowerCase())
        })
    
        setFillerdata(result);
    
      },[search])
    return (
        <>
            <Menu />

            <section className="home-section">
                <Topmenu />

                <div className="home-content">
                    <div className="container px-4">

                        <div className='row align-items-center'>
                            <div className='col-md-6'><h2>View Model</h2></div>
                            <div className='col-md-6 text-end'><Link to={`./table-model/add`} className="btn btn-info">Add Model</Link></div>
                        </div>


                        <div className='row'>

                            <div className='col-md-12 p-2'>
                                <div className='border p-3 bg-white'>

                                <DataTable columns={columns} data={fillerdata} pagination selectableRows defaultSortAsc={true} subHeader 
      subHeaderComponent={
      <input type="text" className="form-control w-25" placeholder="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      }/>

                                   
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default TableModelview
