import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import PhoneImg from "../img/Ph.png";

function Bookdata() {


    useEffect(()=>{

        setTimeout(() => {
            localStorage.clear();
            
          }, 1000 * 60 * 60);

    },[])


    
    return (
        <>

            {

                !localStorage.getItem("pkeydata") ? <div></div> : <div className='mobile-icon'>
                    <div className='mobile-icon-data'>
                        <Link to="/cart">
                            <img src={PhoneImg} />
                        </Link>

                    </div>
                </div>

            }




        </>
    )
}

export default Bookdata
