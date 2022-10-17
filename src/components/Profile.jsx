import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import SVGs from "../assets/svg/SVGs";
import Images from "../assets/images/Images";
import GNavbar from "../components/Navbar/DesktopTab";
import Mobile from "../components/Navbar/Navbar";

const Profile = () => {
  // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <section className="change_ratio">
        <GNavbar estate="active_tab" />
        <Mobile />
        <section className="selected_tab">
          {/* ============
        WITH SEARCHBOX
        =============== */}
          <div className="navbar_container">
            <div className="dashboard_container input_avatar">
              <input
                type="text"
                placeholder="Search Estate..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <div className="violet">
                <img src={SVGs.notification} alt="Bell" className="note_bell" />
                <div className="user_mode">
                  <div>
                    <h3>Oladokun Moses</h3>
                    <p>Super Admin</p>
                  </div>
                  <img src={Images.img2} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard - container */}
          <div className="dashboard_container">
            <BreadCrumb previous="Estate" prevlink="/" current="Estate Info" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;
