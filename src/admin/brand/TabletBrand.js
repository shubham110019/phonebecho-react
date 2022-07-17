import React, { useEffect, useState } from "react";
import Menu from "../cmp/Menu";
import Topmenu from "../cmp/Topmenu";
import Apiurl from "../../Apidata";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const Addbrand = () => {
  const [brandapi, setBrandapi] = useState();
  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [brandidc, setBrandidc] = useState();
  const [formerr, setFromerr] = useState();
  const [checkfrom, setCheckfrom] = useState();
  const [updatecheck, setUpdatecheck] = useState(false);
  const [search, setSearch] = useState("");
  const [fillerdata, setFillerdata] = useState([]);
  const [datafull, setDatafull] = useState([]);


  const brandsubmit = (e) => {
    if (brand && image) {
      const data = { brand, image };

      console.log(data)
      

      fetch(`${Apiurl}tablet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((resq) => {
          brandapifetch();
          setBrand("");
          setImage("");
         
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("fill this form");
    }
  };

  const brandapifetch = () => {
    fetch(`${Apiurl}tablet`).then((resq) => {
      resq.json().then((result) => {
        setBrandapi(result.data);
        setDatafull(result.data);
        setFillerdata(result.data)

      
      });
    });
  };

  const deleteBrand = (id) => {
    fetch(`${Apiurl}tablet/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        brandapifetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateBrand = (brandid) => {
    setUpdatecheck(true);
    fetch(`${Apiurl}tablet/${brandid}`).then((resq) => {
      resq.json().then((result) => {
        setBrand(result.data.brand);
        setImage(result.data.image);
        setBrandidc(result.data._id);
        
      });
    });
  };

  const brandupd = (brandidc) => {
    if (brand && image) {
      const data = { brand, image };

      fetch(`${Apiurl}tablet/${brandidc}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((resq) => {
          brandapifetch();
          setUpdatecheck(false);
          setBrand("");
          setImage("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("fill this form");
    }
  };


  const columns = [
    {
      name: "Brand",
      cell: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => <button
      className="btn btn-success btn-sm"
      onClick={() => {
        updateBrand(row._id);
      }}
    >
      Edit
    </button>,
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            deleteBrand(row._id)
          }}
        >
          Delete
        </button>
      ),
    },
  ];



  useEffect(() => {
    brandapifetch();
    brandapifetch();
    deleteBrand();
  }, []);

  useEffect(()=>{
    const result = datafull.filter(data=>{
        return data.brand.toLowerCase().match(search.toLowerCase())
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
            <div className="row">
              <div className="col-md-5 p-2">
                <div className="border p-3 bg-white">
                  <p>{checkfrom}</p>

                  {updatecheck ? (
                    <h2 className="mb-4 r">Update brand</h2>
                  ) : (
                    <h2 className="mb-4 r">Add brand </h2>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <input
                      type="text"
                      className="form-control"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image link</label>
                    <input
                      type="text"
                      className="form-control"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>

                  {updatecheck ? (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        brandupd(brandidc);
                      }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        brandsubmit();
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>

              <div className="col-md-7 p-2">
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
  );
};
export default Addbrand;
