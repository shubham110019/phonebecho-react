import React, { useState } from "react";

const Topmenu = () => {

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
  

    // let sidebar = document.querySelector(".sidebar");
    // let sidebarBtn = document.querySelector(".sidebarBtn");
    // sidebarBtn.onclick = function() {
    //   sidebar.classList.toggle("active");
    //   if(sidebar.classList.contains("active")){
    //   sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    // }else
    //   sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    // }

  return (
   <>
   
   </>
  );
};

export default Topmenu;
