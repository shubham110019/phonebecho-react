import React, { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { StateContent } from "../StateProvider";

const Logout = () => {

    const{loginck,loginupdate}= useContext(StateContent);

    console.log(loginck)
   
    const history = useHistory();
      // localStorage.clear();
      localStorage.removeItem('login')
      loginupdate();
      history.push("/wp-login");
  
  return (
    <div>
      
    </div>
  )
}

export default Logout;
