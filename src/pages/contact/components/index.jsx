import React from "react";
import PageBanner from "../../../common/components/Generic/pagebanner";

const Contact = () => {
  return (
    <>
      <PageBanner bannerImageLink="https://placehold.co/1920x400" />
      <div className="container">
        <div className="row text-center me-5">
          <div className="align-items-start">
            <h3>Contact Details</h3>
            <p>Name: Postman</p>
            <p>Email: info@postmaninc.com</p>
            <p>Contact: +92 000 0000000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
