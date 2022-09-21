import React, { useEffect, useState } from "react";
import Menu from "./cmp/Menu";
import "./style/main.css";
import Topmenu from "./cmp/Topmenu";
import Apiurl from "../Apidata";
import moment from 'moment';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar, AreaChart, Area } from 'recharts';





const Profile = () => {


  const [totalbook, setTotalbook] = useState();
  const [modeldata, setModeldata] = useState();
  const [tbmodeldata, setTbmodeldata] = useState();
  const [fullmobile, setFullmobile] = useState(0);
  const [Tdmobile, setTdmobile] = useState(0);

  const apidata = () => {
    fetch(`${Apiurl}phonebook/mtddate`)
      .then((resq) => {
        resq.json().then((result) => {
          setTotalbook(result.data.length);
          // setFullmobile(result.data.length)      
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // let newDate = new Date()
  // console.log(newDate)

  const checkmobile = () => {
    fetch(`${Apiurl}phonebook`)
      .then((resq) => {
        resq.json().then((result) => {
          //  console.log(result.data)

          const countTypes = result.data.filter(item => item.bookingtype === 'mobile' && moment(item.createdAt).format("MMM D, Y") === moment().format('MMM D, YYYY'));
          setFullmobile(countTypes.length)

          const countTypestb = result.data.filter(item => item.bookingtype === 'tablet' && moment(item.createdAt).format("MMM D, Y") === moment().format('MMM D, YYYY'));
          setTdmobile(countTypestb.length)



        });
      })
      .catch((err) => {
        console.log(err);
      });
  }




  const totalmodel = () => {
    fetch(`${Apiurl}model`).then((resq) => {
      resq.json().then((result) => {

        setModeldata(result.phoneModel.length);
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  const totaltablet = () => {
    fetch(`${Apiurl}tabletmodel`).then((resq) => {
      resq.json().then((result) => {

        setTbmodeldata(result.data.length);
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  const pdata = [
    {
      name: 'Mobile',
      booking: fullmobile,

    },
    {
      name: 'Tablet',
      booking: Tdmobile,

    },
    {
      name: 'Laptop',
      booking: 0,

    },

  ]


  useEffect(() => {
    apidata();
    checkmobile();
    totalmodel();
    totaltablet();
  }, [])

  return (
    <>
      <Menu />

      <section className="home-section">
        <Topmenu />

        <div className="home-content">
          <div className="container">
            <div class="overview-boxes">
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Mobile Booking</div>
                  <div class="number">{totalbook}</div>

                </div>
                <i class='bx bx-cart-alt cart'></i>
              </div>
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Mobile Model</div>
                  <div class="number">{modeldata}</div>
                  {/* <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div> */}
                </div>
                <i class='bx bxs-mobile cart two' ></i>
              </div>
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Tablet Model</div>
                  <div class="number">{tbmodeldata}</div>

                </div>
                <i class='bx bxs-mobile cart three' ></i>
              </div>
              <div class="box">
                <div class="right-side">
                  <div class="box-topic">Total Return</div>
                  <div class="number">11,086</div>
                  <div class="indicator">
                    <i class='bx bx-down-arrow-alt down'></i>
                    <span class="text">Down From Today</span>
                  </div>
                </div>
                <i class='bx bxs-cart-download cart four' ></i>
              </div>
            </div>

          </div>
        </div>

        <div className="container py-5 px-4 text-center">

          <div className="row">


            <div className="col-md-6">
              <div className="bg-white p-4">
                <div className="title">
                  <h4 className="mb-4">Today booking</h4>
                </div>
                <ResponsiveContainer width="100%" aspect={3}>
                  <BarChart width={730} height={250} data={pdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="booking" fill="#8884d8" position="insideTop" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>


            <div className="col-md-6">
              <div className="bg-white p-4">
                <div className="title">
                  <h4 className="mb-4">Today booking</h4>
                </div>
                <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="booking" stroke="green" />

                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

         
            <div className="col-md-6 mt-4">
              <div className="bg-white p-4">
                <div className="title">
                  <h4 className="mb-4">7 days</h4>
                </div>
                <ResponsiveContainer width="100%" aspect={3}>
                  <BarChart width={730} height={250} data={pdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="booking" fill="#8884d8" position="insideTop" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>




          </div>



        </div>
      </section>
    </>
  );
};
export default Profile;
