import React from "react";
import SideNav from "../layout/SideNav";

const PrivacyPolicy = () => {
  return (
    <main>
      <SideNav />
      <div className="content-area">
        <div className="content">
          <h3 className="heading">
            Privacy Policy for <b> “Sentiment Analysis in Adolescents' </b>{" "}
            Online Communication” Project
          </h3>
          <p className="body-text">Effective Date: Feb 18, 2024</p>
          <p className="body-text">
            Thank you for participating in our high school science project,
            “Sentiment Analysis in Adolescents' Online Communication”. This
            Privacy Policy outlines how we collect, use, and protect your
            personal information in connection with your participation in the
            project.
          </p>
          <ol>
            <li className="body-text">
              <b> Information We Collect:</b>
              <ol>
                <li>
                  <b> Personal Information:</b> The project does not need any
                  personal information such as your name, contact information,
                  and other details. However, we may collect the personal
                  information only if it is voluntarily provided by you solely
                  as part of the science project.
                </li>
                <li>
                  <b> Non-Personal Information:</b> We may also collect
                  non-personal information, such as demographic data, that does
                  not personally identify you.
                </li>
              </ol>
            </li>
            <li className="body-text">
              <b> How We Use Your Information:</b> <br /> We will use the
              collected information solely for the purpose of the high school
              science project, including but not limited to data analysis,
              project evaluation, and communication regarding project updates or
              outcomes. Your personal information will not be shared or sold to
              third parties.
            </li>
            <li className="body-text">
              <b> Data Security: </b> <br /> We employ established technology
              security frameworks to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction. It is
              important to acknowledge that, despite our efforts, no method of
              transmission over the internet or electronic storage is guaranteed
              to be 100% secure.
            </li>
            <li className="body-text">
              <b> Data Retention:</b> <br /> We will not retain your personal
              information at any time during this project and adhere to the
              privacy policy outlined in this document and for the duration
              required by applicable laws and regulations.
            </li>
            <li className="body-text">
              <b> Consent:</b> <br /> By participating in the “Sentiment
              Analysis in Adolescents' Online Communication”, you consent to the
              terms of this privacy policy and the collection and use of your
              information as described herein.
            </li>
            <li className="body-text">
              <b> Changes to the Privacy Policy:</b> <br /> We reserve the right
              to update or modify this privacy policy at any time. The effective
              date at the top of the page will be updated accordingly. Please
              review this page periodically for any changes.
            </li>
            <li className="body-text">
              <b> Contact Information:</b> <br /> If you have any questions or
              concerns regarding this privacy policy, please contact us at{" "}
              <a
                href="mailto:atharv.mahaj@gmail.com"
                style={{ color: "blue" }}
                target="_blank"
              >
                atharv.mahaj@gmail.com{" "}
              </a>{" "}
              and{" "}
              <a
                style={{ color: "blue" }}
                href="mailto:aruhsimani20@gmail.com"
                target="_blank"
              >
                aruhsimani20@gmail.com
              </a>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
