import React from "react";
import donationFact from "../../assets/donationFact.webp";
import Footer from "./Footer";
import AboutDonation from "./AboutDonation";
import bg3 from "../../assets/bg3.jpg";
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", receive: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", receive: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", receive: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", receive: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", receive: "A- O-" },
    { blood: "O-", donate: "Everyone", receive: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", receive: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", receive: "AB- A- B- O-" },
  ];
  return (
    <div>
      {/* For hero banner and the text */}
       <div>
         <div className="row">
          <div className="col-md-6">
          <img src={bg3}  width="100%" />
          </div>
          <div className="col-md-6">
            <p className="fs-1 text-danger fw-bold text-center my-5">Make Your Mark: Donate Blood, Leave a Legacy</p>
            <p className="fs-5 text-dark fw-semibold text-center my-5">
            Blood donation is a selfless act of giving that has the power to save lives. By donating blood, you become a lifeline for those in need, providing them with the precious gift of life. Every drop of donated blood has the potential to make a significant difference in someone's health and well-being.
            Blood donation brings people together, transcending barriers and fostering a sense of unity and compassion. Join the noble cause of blood donation and become a hero in someone's life today.           </p>
          </div>
         </div>
        
       </div>
    
      <h1 className="text-center mb-3 fs-2 text-white bg-danger fw-bold">
        Learn About Donation
      </h1>
      <div className="row">
        <div className="col-md-8 my-1 mb-1">
          <img src={donationFact} width="90%" alt="" />
          <p className="text-center">
            <p className="fs-4 text-danger fw-semibold">
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </p>
          </p>
        </div>
        <div className="col-md-4 mt-1 ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th
                  colSpan={3}
                  className="bg-danger text-white fw-bold text-center"
                >
                  Compatible Blood Type Donors
                </th>
              </tr>
              <tr>
                <th>Blood Type</th>
                <th>Donate Blood To</th>
                <th>Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              {temp.map((e) => {
                return (
                  <tr className="text-center">
                    <td>{e.blood}</td>
                    <td>{e.donate}</td>
                    <td>{e.receive}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>


      <AboutDonation />
      <Footer />
    </div>
  );
};

export default Home;
