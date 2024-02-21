import React from "react";
import SideNav from "../layout/SideNav";

const ContactUs = () => {
  return (
    <main>
      <SideNav />
      <div className="content-area">
        <div className="content">
          <h3 className="heading">Contact Us</h3>
          <p className="body-text">
            Thank you for your interest in the{" "}
            <b> “Sentiment Analysis in Adolescents' Online Communication” </b>{" "}
            project! We welcome any questions, feedback, or inquiries you may
            have. Please feel free to get in touch with us using the following
            contact information:
          </p>
          <p className="body-text">
            {" "}
            <b>Email:</b>
          </p>
          <ul className="body-text">
            <li>
              General Inquiries: [
              <a href="mailto:atharv.mahaj@gmail.com" target="_blank">
                atharv.mahaj@gmail.com
              </a>{" "}
              or{" "}
              <a href="mailto:aruhsimani20@gmail.com" target="_blank">
                aruhsimani20@gmail.com
              </a>
              ]
            </li>
            <li>
              Project Team: [
              <a href="mailto:atharv.mahaj@gmail.com" target="_blank">
                atharv.mahaj@gmail.com
              </a>{" "}
              or{" "}
              <a href="mailto:aruhsimani20@gmail.com" target="_blank">
                aruhsimani20@gmail.com
              </a>
              ]
            </li>
          </ul>
          <p className="body-text">
            <b> Mailing Address: </b> <br /> Valley Christian High School <br />{" "}
            100 Skyway Dr #130, San Jose, CA 95111{" "}
          </p>
          <p className="body-text">
            We will do our best to respond to your inquiries in a timely manner.
            Thank you for your support and interest in our science project!
          </p>
          <p className="body-text">
            <b> Project Team:</b> <br /> Arushi Mani <br /> Atharv Mahajan
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
