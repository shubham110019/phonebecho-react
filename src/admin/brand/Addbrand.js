import React, { useEffect, useState } from "react";
import Menu from "../cmp/Menu";

const Addbrand = () => {
  const [brandapi, setBrandapi] = useState();
  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [formerr, setFromerr] = useState();

  const brandsubmit = (e) => {
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
        console.log(resq);
        brandapifetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const brandapifetch = () => {
    fetch("http://localhost:9000/phone").then((resq) => {
      resq.json().then((result) => {
        setBrandapi(result.brandapi);
      });
    });
  };

  const deleteBrand = (id) => {
    console.log(id);

    fetch(`http://localhost:9000/phone/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        brandapifetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    brandapifetch();
    brandapifetch();
    deleteBrand();
  }, []);

  return (
    <>
      {console.log(brandapi)}

      <Menu />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5 border p-5">
            <h2 className="mb-4 r">Add brand</h2>
            <div className="mb-3">
              <label className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image link</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                brandsubmit();
              }}
            >
              Submit
            </button>
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
                              <button className="btn btn-info btn-sm">
                                edit
                              </button>{" "}
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
