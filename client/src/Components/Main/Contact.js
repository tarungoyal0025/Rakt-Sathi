import React from "react";
import cc from "../../assets/cc.png";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  // const data = [
  //     {
  //         title: "BloodLink related queries, feedback and suggestions", body: [
  //             "Center For Development of Advanced Computing",
  //             "C-56/1, Anusandhan Bhawan , Sector-62, Noida, Uttar Pardesh-201307",
  //             "8527890830",
  //             "bloodlink[at]cdac[dot]in"
  //         ]
  //     },
  //     {
  //         title: "For Administrative queries", body: [
  //             "Blood Cell, National Health Mission",
  //             "Ministry of Health & Family Welfare,New Delhi - 110011"
  //         ]
  //     },
  //     { title: "For administrative queries", body: ["Blood Cell, National Health Mission", "Ministry of Health & Family Welfare,New Delhi - 110011"] }
  // ];
  return (
    //     <div className='px-64'><br />
    //         <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
    //         <div className='flex justify-around'>
    //             <div>
    //                 {
    //                     data.map((e) => {
    //                         return (
    //                             <>
    //                                 <p className='text-xl font-bold underline'>{e.title}</p><br />
    //                                 <code>
    //                                     {e.body.map((k) => {
    //                                         return <p className='text-md'>{k}</p>
    //                                     })}
    //                                 </code><br />
    //                             </>
    //                         )
    //                     })
    //                 }
    //             </div>
    //             <div>
    //                 <img src={cc} draggable={false} width="90%" alt="" />
    //             </div>
    //         </div>
    //     </div>
    <>
      <p className="fs-2 text-white bg-danger fw-bold text-center mt-4  mb-3">
        Get in Touch
      </p>
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <img src={cc} width="100%" alt="Image" />
          </div>
          <div className="col-md-7 border p-2 border-danger my-1">
            <p className="text-center text-danger fw-bold p-5 fs-3">
              Rakt Sathi related Queries, Feedback and Suggestions
            </p>
            <p className="text-center mt-1 fs-4 text-dark fw-semibold">
              We're happy to answer questions. We will do our best to respond to
              you within 24 hours, sometimes a bit longer on weekends.
            </p>
            <div className="mt-5 mx-5">
            <p className="p-3 fs-4 text-danger fw-bold">
              <BiMailSend /> : RaktSathi@gmail.com
            </p>
            <p className="p-3 fs-4 text-danger fw-bold">
              <BiPhoneCall /> : +91 9876543210
            </p>
            <p className="p-3 fs-4 text-danger fw-bold">
              <BiSupport /> : 1800-0000-0000 (toll free)
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
