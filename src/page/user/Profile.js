import React, { useEffect, useState } from 'react'
import Footer from '../../comonent/Footer'
import Navbar from '../../comonent/Navbar'
import Bookdata from '../../comonent/Bookdata'
import Apiurl from '../../Apidata'

const Profile = () => {

  const [data, setData] = useState("");
  const [mdata, setMdata] = useState("");

  const userdata = () => {

    fetch(`${Apiurl}user/${localStorage.getItem('userid')}`).then((resq) => {
      resq.json().then((result) => {
        setData(result.data);
      }).catch(err => {
        console.log(err);
      })
    })
  }

  const phdata = () => {

    fetch(`${Apiurl}phonebook/`).then((resq) => {
      resq.json().then((result) => {
        console.log(result.data)

        const countTypes = result.data.filter(item => item.userid === localStorage.getItem('userid'));
        setMdata(countTypes);

        console.log(countTypes)
      }).catch(err => {
        console.log(err);
      })
    })

  }

  useEffect(() => {
    userdata();
    phdata();
  }, [])



  return (
    <>
      <Navbar />

      <div className='container py-5'>

        <div className='row'>
          <div className='col-md-3'>
            <div className='border p-3'>


              <div class="text-center">
                <img src="https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png" class="h-20" style={{ "height": "100px", "borderRadius": "50%" }} />
              </div>

              <div className='user-data mt-4'>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Name :</td>
                      <td>{data.username}</td>
                    </tr>
                    <tr>
                      <td>Phone :</td>
                      <td>{data.phone}</td>
                    </tr>
                    <tr>
                      <td>E-mail :</td>
                      <td>{data.email}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='col-md-9'>
            <div className=''>

              <div className='row'>
                {
                  mdata ?
                    mdata.map((item) => {
                      return (
                        <>



                          <div className='col-md-6'>
                            <div className='phone-boxlg'>
                              <h4>{item.modelnamefull}</h4>


                              <h2 className="py-3">₹ {item.pickupprice}</h2>

                              <div className='pickup-date'>
                                <p><i class="fa-solid fa-calendar-days"></i> {item.pickupdate}</p>
                              </div>

                              {
                                item.bookingstatus === "0" && <button className="btn btn-warning btn-status">Pending</button>


                              }

                              {
                                item.bookingstatus === "1" && <button className="btn btn-success btn-status">Pickup</button>

                              }

                              {
                                item.bookingstatus === "2" && <button className="btn btn-danger btn-status">Cancel</button>

                              }


                            </div>
                          </div>
                        </>
                      )
                    })
                    : null
                }






              </div>






            </div>
          </div>
        </div>


      </div>
      <Bookdata />
      <Footer />
    </>
  )
}

export default Profile
