import React, { useEffect, useState } from "react";
import Menu from "../cmp/Menu";

const Addbrand = () => {
  const [brandapi, setBrandapi] = useState();
  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [brandidc, setBrandidc] = useState();
  const [formerr, setFromerr] = useState();
  const [checkfrom, setCheckfrom] = useState();
  const [updatecheck, setUpdatecheck] = useState(false);

  const brandsubmit = (e) => {
    if (brand && image) {
      const data = { brand, image };

      fetch("http://localhost:9000/phone", {
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
    fetch("http://localhost:9000/phone").then((resq) => {
      resq.json().then((result) => {
        setBrandapi(result.brandapi);
      });
    });
  };

  const deleteBrand = (id) => {
    fetch(`http://localhost:9000/phone/${id}`, {
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
    fetch(`http://localhost:9000/phone/${brandid}`).then((resq) => {
      resq.json().then((result) => {
        setBrand(result.PhoneBrandData.brand);
        setImage(result.PhoneBrandData.image);
        setBrandidc(result.PhoneBrandData._id);
      });
    });
  };

  const brandupd = (brandidc) => {
    if (brand && image) {
      const data = { brand, image };

      fetch(`http://localhost:9000/phone/${brandidc}`, {
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

  useEffect(() => {
    brandapifetch();
    brandapifetch();
    deleteBrand();
  }, []);

  return (
    <>
      <Menu />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5 border p-5">
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

          <div className="col-md-1"></div>

          <div className="col-md-6 border">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Brand</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {brandapi
                  ? brandapi.map((item, i) => {
                      return (
                        <>
                          <tr>
                            <td>
                              {i} {item.id}
                            </td>
                            <td>{item.brand}</td>
                            <td>
                              <button
                                className="btn btn-info btn-sm mx-2"
                                onClick={() => {
                                  updateBrand(item._id);
                                }}
                              >
                                edit
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => {
                                  deleteBrand(item._id);
                                }}
                              >
                                delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addbrand;
