import React, { useEffect, useState } from "react";
import Menu from '../cmp/Menu'
import Topmenu from '../cmp/Topmenu'
import Apiurl from "../../Apidata";
import DataTable from "react-data-table-component";

function Userlist() {


  const [updatecheck, setUpdatecheck] = useState(false);
  const [search, setSearch] = useState("");
  const [fillerdata, setFillerdata] = useState([]);
  const [datafull, setDatafull] = useState([]);


  const brandapifetch = () => {
    fetch(`${Apiurl}user`).then((resq) => {
      resq.json().then((result) => {
        setDatafull(result.data);
        setFillerdata(result.data)
      
      });
    });
  };

  console.log(datafull)

  const deleteuser = (id) => {
    fetch(`${Apiurl}user/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        brandapifetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userblock = (id) =>{

    const data = {"useractive":2};

    fetch(`${Apiurl}user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resq) => {
        console.log(resq)
        alert("user block");
      })
      .catch((err) => {
        console.log(err);
      });

  }



  const columns = [
  
    {
      name: "Name",
      cell: (row) => row.username,
      sortable: true,
    },
    {
      name: "E-mail",
      cell: (row) => row.email,
    },

    {
      name: "Status",
      cell: (row) => 
        row.useractive === 0 ? "Active" : "block"
    
    },

    {
      name: "Block",
      cell: (row) => row.userType === 'admin' ? "" :  <button
      className="btn btn-warning btn-sm"
      onClick={() => {
        userblock(row._id)
      }}
    >
      block
    </button>,
    },
    {
      name: "Delete",
      cell: (row) => (
        row.userType === 'admin' ? "" : 
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            deleteuser(row._id)
          }}
        >
          Delete
        </button>
      ),
    },
  ];



  useEffect(() => {
    brandapifetch();
 
  }, []);

  useEffect(()=>{
    const result = datafull.filter(data=>{
        return data.email.toLowerCase().match(search.toLowerCase())
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
            <h2>Users List</h2>
            <div className="row">

              <div className='col-md-12'>

              <div className="border p-3 bg-white">

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

export default Userlist
