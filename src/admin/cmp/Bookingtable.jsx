import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";


const Bookingtable = () => {
  const [datafull, setDatafull] = useState([]);
  const [search, setSearch] = useState("");
  const [fillerdata, setFillerdata] = useState([]);

  
  const apidata = () => {
    fetch("http://localhost:9000/phonebook")
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

  const columns = [
    {
      name: "Model Name",
      cell: (row) => row.modelnamefull,
      sortable: true,
    },
    {
      name: "City",
      cell: (row) => row.city,
      sortable: true,
    },
    {
      name: "Pickup Date",
      cell: (row) => row.pickupdate,
      sortable: true,
    },
    {
      name: "Booking Date",
      cell: (row) => row.bookingdate,
      sortable: true,
    },
    {
      name: "View",
      cell: (row) => <button className="btn btn-success btn-sm">View</button>,
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            alert(row._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  useEffect(() => {
    apidata();
  }, []);

  useEffect(()=>{
    const result = datafull.filter(data=>{
        return data.modelnamefull.toLowerCase().match(search.toLowerCase())
    })

    setFillerdata(result);

  },[search])

  return (
    <>
      <DataTable columns={columns} data={fillerdata} pagination selectableRows subHeader 
      subHeaderComponent={
      <input type="text" className="form-control w-25" placeholder="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      }/>
    </>
  );
};

export default Bookingtable;
