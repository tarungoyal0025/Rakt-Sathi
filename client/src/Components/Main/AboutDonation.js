import React from "react";
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";

const AboutDonation = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-5 fs-2 text-white bg-danger fw-bold">
        Blood Donation Process
      </h1>
        <div className="container">  
          <div className="row mb-3">
            <div className="col-md-6">
            
                <img src={g1} draggable={false} width="80%" alt="" />
                <div>
                  <h1 className="fw-bold text-danger mt-3 mb-2 fs-4">
                   Registration
                  </h1>
                  <p className="mt-3 mb-3 fw-semibold">
                  Upon arrival at the donation camp, 
                  you will be directed to the registration area. 
                  Here, you will be asked to provide your identification documents and complete a registration form. 
                  This includes personal information such as your name, contact details, and medical history. 
                  This step ensures that the blood bank has the necessary information to proceed with the donation process.
                  </p>
                </div>
            </div>
            <div className="col-md-6">
            
                <img src={g2} draggable={false} width="80%" alt="" />
                <div>
                  <h1 className="fw-bold text-danger mt-3 mb-2 fs-4">
                  Pre-Donation Screening
                  </h1>
                  <p className="mt-3 mb-3 fw-semibold">
                  Once registered, you will undergo a pre-donation screening process.
                   A healthcare professional will review your medical history and ask you questions about your health, 
                   recent illnesses or infections, medications you are taking, and any potential
                    risk factors that may affect your eligibility to donate blood.
                     The purpose of this screening is to ensure the safety of both the donor and the recipient of the blood.
                  </p>
                </div>
            </div>
            
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
            
                <img src={g3} draggable={false} width="80%" alt="" />
                <div>
                  <h1 className="fw-bold text-danger mt-3 mb-2 fs-4">
                    Donation
                  </h1>
                  <p className="mt-3 mb-3 fw-semibold">
                  If you are deemed eligible to donate blood, you will be guided to the donation area.
                   A trained phlebotomist will clean your arm with an antiseptic,
                    and a sterile needle will be inserted into a vein in your arm. The amount of blood collected during a donation is typically around 1 pint (about 470 ml). 
                  The actual donation process usually takes about 8-10 minutes.
                  </p>
                </div>
            </div>
            <div className="col-md-6">
            
                <img src={g4} draggable={false} width="80%" alt="" />
                <div>
                  <h1 className="fw-bold text-danger mt-3 mb-2 fs-4">
                    Post Donation
                  </h1>
                  <p className="mt-3 mb-3 fw-semibold">
                  After the donation, you will be directed to a resting area where you can relax for a short period. It is important to rehydrate and have some snacks or refreshments provided by the donation camp. This helps restore your energy and ensures your well-being before leaving the camp.
                  </p>
                </div>
            </div>
            
          </div>

          
        </div>
    </>
  );
};

export default AboutDonation;
 