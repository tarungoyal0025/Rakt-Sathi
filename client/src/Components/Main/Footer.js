import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
    <footer className=" bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="mb-3 fs-3">Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className='link-light link-underline-dark'>Home</Link></li>
              <li><Link to="/about"className='link-light link-underline-dark'>About RaktSathi</Link></li>
              <li><Link to="/contactUs" className='link-light link-underline-dark'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3 fs-3">Blood Bank Login</h5>
            <ul className="list-unstyled">
              <li><a href="/login/bank" className='link-light link-underline-dark'>RaktSathi Login</a></li>
              <li><a href="/register/bank" className='link-light link-underline-dark'>Add your Blood Bank</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3 fs-3">Want to Donate Blood</h5>
            <ul className="list-unstyled">
              <li><a href="/bloodCamps" className='link-light link-underline-dark'>Blood Donation Camps</a></li>
              <li><a href="/register/donor" className='link-light link-underline-dark'>Donors Login</a></li>
              <li><a href="/aboutBloodDonation" className='link-light link-underline-dark'>About Blood Donation</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3 fs-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Address: 37C, Chandigarh</li>
              <li><i className="fa fa-phone mr-2" aria-hidden="true"></i>Call: +91 7009948688</li>
              <li><i className="fa fa-envelope mr-2" aria-hidden="true"></i>Email: RaktSathi@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
      <div className="text-center py-3 text-white bg-dark">
      <p className="mt-1 ">
        &copy; {currentYear} RaktSathi. All rights reserved.
      </p>
      <p className="mx-1" >Designed By <a target="_blank" className="text-danger" href="https://www.linkedin.com/in/tarungoyal0025/">Tarun Goyal</a></p>
    </div>
    </div>
  );
};

export default Footer;
