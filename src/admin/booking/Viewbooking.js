import React, { useEffect, useState } from 'react'
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";
import DataTable from "react-data-table-component";
import Apiurl from '../../Apidata';
import { Link } from 'react-router-dom';

const Viewbooking = () => {

  const [datafull, setDatafull] = useState([]);
  const [search, setSearch] = useState("");
  const [fillerdata, setFillerdata] = useState([]);


  const apidata = () => {
    fetch(`${Apiurl}phonebook`)
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

  const bookingDataDelete = (id) => {

    fetch(`${Apiurl}phonebook/${id}`, {
      method: "DELETE",
    }).then(res => {
      console.log(res)
      apidata()
    }).catch(err => {
      console.log(err)
    })
  }

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
      cell: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Type",
      cell: (row) => row.bookingtype,
      sortable: true,
    },
    {
      name: "View",
      cell: (row) => <Link className="btn btn-success btn-sm" to={`./booking-detail/${row._id}`}>View</Link>,
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            bookingDataDelete(row._id)
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

  useEffect(() => {
    const result = datafull.filter(data => {
      return data.modelnamefull.toLowerCase().match(search.toLowerCase())
    })

    setFillerdata(result);

  }, [search])

  return (
    <>


      <Menu />

      <section className="home-section">
        <Topmenu />

        <div className="home-content">
          <div className="container px-4">
            <div className='row'>
              <div className='col-md-12'>
                <DataTable title="View Booking" columns={columns} data={fillerdata} pagination selectableRows defaultSortAsc={true} subHeader
                  subHeaderComponent={
                    <input type="text" className="form-control w-25" placeholder="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                  } />
              </div>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default Viewbooking
