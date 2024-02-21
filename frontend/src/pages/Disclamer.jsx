import React from "react";
import SideNav from "../layout/SideNav";

const Disclamer = () => {
  return (
    <main>
      <SideNav />
      <div className="content-area">
        <div className="content">
          <h3 className="heading">Disclaimer</h3>
          <p className="body-text">
            This website is solely for the purpose of a team science project
            titled{" "}
            <b> “Sentiment Analysis in Adolescents' Online Communication” </b>{" "}
            and is intended to be a demonstration of scientific concepts and
            principles. The information and findings presented in this project
            are based on the research, observations, and experiments conducted
            by the student(s) involved. It is important to note the following:
          </p>
          <ol>
            <li className="body-text">
              {" "}
              <b> Educational Purpose:</b> This project is conducted for
              educational purposes only. It is not intended to provide
              professional or expert advice. Any information presented here
              should not be considered a substitute for consultation with
              qualified professionals in the relevant field.
            </li>
            <li className="body-text">
              <b> Experimental Nature:</b> The experiments and observations
              conducted as part of this project are based on the scientific
              method. However, due to the inherent nature of experimentation,
              there may be variations in results under different conditions. The
              findings should be interpreted with consideration for the
              experimental setup and limitations.
            </li>
            <li className="body-text">
              <b> Safety Precautions: </b> The student(s) involved in this
              project have taken appropriate safety precautions, if and when
              applicable, while conducting experiments. However, it is essential
              for individuals attempting to replicate or build upon this project
              to adhere to safety guidelines and protocols relevant to the
              specific experiments conducted.
            </li>
            <li>
              <b> External Sources:</b> This project may include references to
              external sources, publications, or websites. The student(s)
              acknowledge that these sources are cited for informational
              purposes and do not necessarily endorse or support the content of
              this project.
            </li>
            <li className="body-text">
              <b> Acknowledgement:</b> The student(s) would like to express
              gratitude to Jake MacMillan from Valley Christian High School, for
              his guidance and support during the project.
            </li>
            <li className="body-text">
              <b> Contact Information:</b> For any inquiries or additional
              information about this project, please contact the student(s) at{" "}
              <a
                style={{ color: "blue" }}
                href="mailto:atharv.mahaj@gmail.com"
                target="_blank"
              >
                atharv.mahaj@gmail.com
              </a>{" "}
              and{" "}
              <a
                style={{ color: "blue" }}
                href="mailto:aruhsimani20@gmail.com"
                target="blank"
              >
                aruhsimani20@gmail.com
              </a>{" "}
            </li>
          </ol>
          <p className="body-text">
            By reading and using the information provided in this project, you
            acknowledge and agree to the terms outlined in this disclaimer. The
            student(s), Arushi Mani and Atharv Mahajan, are not liable for any
            consequences resulting from the use or interpretation of the
            information presented in this project.
          </p>
          <p className="body-text">
            Thank you for your understanding and cooperation.
          </p>
          <p className="body-text">
            Atharv Mahajan and Arushi Mani <br /> 11th Grade <br /> February
            18th, 2024
          </p>
        </div>
      </div>
    </main>
  );
};

export default Disclamer;
