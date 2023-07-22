import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api";
import AuthContext from "../context/AuthContext";

const Navbar = (props) => {
  const s1 =
    "bg-white-900 drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium hover:drop-shadow-xl  dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg";
  const { getLoggedIn } = useContext(AuthContext);
  const doc = document.documentElement.classList;
  return (
    <>
      <nav className="p-3 bg-white">
        <div className="d-flex flex-row  flex-wrap">
          <Link to="/">
            <div className="d-flex flex-row ">
              <img width="12%" src={logo} draggable={false} alt="Rakt Sathi" />
              <div className="fs-3 fw-bold  ml-2 mt-1 text-danger">
                RAKT SATHI
              </div>
            </div>
          </Link>
          <div className="d-flex flex-row justify-content-end flex-wrap">
            <>

              <DropDown
                title="About Us"
                children={["Home", "About Rakt Sathi", "Contact Us"]}
                links={["/", "/about", "/contactUs"]}
              ></DropDown>
              {props.logIn ? (
                <>
                  <Link to={`/${props.user}/profile`} className={s1}>
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <Link
                    to="/"
                    onClick={async () => {
                      await axios
                        .get("/auth/logout", { withCredentials: true })
                        .then((r) => {});
                      await getLoggedIn();
                    }}
                    className={s1}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <DropDown
                    title="Looking For Blood"
                    children={[
                      "Patient Login/Register",
                      "Blood Bank Directory",
                    ]}
                    links={["/register/patient", "/bloodDirect"]}
                  ></DropDown>
                  <DropDown
                    title="Want To Donate Blood"
                    children={[
                      "Donor Login/Register",
                      "Blood Donation Camps",
                      "About Blood Donation",
                    ]}
                    links={[
                      "/register/donor",
                      "/bloodCamps",
                      "/aboutBloodDonation",
                    ]}
                  ></DropDown>
                  <DropDown
                    title="Blood Bank Login"
                    children={["Login", "Add Your Bloodbank"]}
                    links={["/login/bank", "/register/bank"]}
                  ></DropDown>

                </>
              )}
            </>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

 

export default Navbar;
