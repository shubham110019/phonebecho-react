import React from "react";

const Topmenu = () => {

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
    <div>
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <div className="profile-details">
          <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="" />
          <span className="admin_name">Prem Shahi</span>
          <i className="bx bx-chevron-down"></i>
        </div>
      </nav>
    </div>
  );
};

export default Topmenu;
