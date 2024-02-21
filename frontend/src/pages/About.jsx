import React from "react";
import SideNav from "../layout/SideNav";
import { Image } from "cloudinary-react";

const About = () => {
  return (
    <main>
      <SideNav />
      <div className="content-area">
        <div className="content">
          <h2 className="heading">About Us </h2>
          <h3 className="heading">
            About Us:{" "}
            <b> Sentiment Analysis in Adolescents' Online Communication </b>
          </h3>
          <p className="body-text">
            Welcome to the official website of{" "}
            <b> "Sentiment Analysis in Adolescents' Online Communication," </b>{" "}
            a high school science research project that addresses the pressing
            issue of mental health among adolescents, where depression, anxiety,
            and behavioral disorders are pervasive yet often overlooked due to
            limited accessibility and the stigma surrounding mental healthcare.
            Despite ongoing global and national research initiatives, existing
            programs have fallen short in providing a comprehensive solution
            tailored specifically to adolescents. Our project aims to fill this
            gap by developing an alternative telehealth tool. We have created a
            machine learning model capable of remotely and asynchronously
            detecting linguistic markers associated with depression, offering a
            faster and more cost-effective means of identifying symptoms. By
            leveraging technology, our initiative strives to bridge the gap in
            mental health services for adolescents, providing a valuable
            resource for early intervention and support in addressing these
            critical mental health challenges. Our project is a collaborative
            effort between two passionate and curious minds, Atharv Mahajan and
            Arushi Mani.
          </p>
          <h2 className="heading">Meet The Team </h2>

          <Image
            cloudName="dbwanc9og"
            publicId="synopsis/pckwuqejucg21vsdemhi"
            width="300"
          />

          <h3 className="heading">Arushi Mani </h3>
          <p className="body-text">
            Arushi is a highly motivated and accomplished student with a diverse skill set and a passion for making a positive impact. With a strong foundation in computer science and entrepreneurship, gained through immersive summer programs at Brown University for data science and Wharton for entrepreneurship,  Arushi is well-versed in various aspects of technology and business; her success in DECA, winning 3rd place at Silicon Valley wide DECA conference for product innovation, highlights her entrepreneurial prowess. Arushi has developed an AI-powered software for sentiment analysis in adolescents' online communication, showcased at the Synopsys Science Fair and the 9th International Conference for Public Health based on her personal experiences and passion to make a difference to teens. As a natural leader, Arushi has held significant roles in extracurricular activities, such as an officer of her high school’s Speech and Debate Team, and a Co-President of a club dedicated to serving senior citizens. Her commitment to community service is evident through her volunteer work, including leading a two-week public speaking summer camp for 5th graders  and tutoring disadvantaged students as part of the Valley Christian Reach Program. In the professional realm, Arushi has gained practical experience as a Product Management Intern at Ninja Focus, where she demonstrated proficiency in organizing customer focus groups, setting up product trials, and managing customer information efficiently. Arushi's well-rounded profile extends beyond academics and work, encompassing diverse interests and hobbies such as sports, photography, emergency preparedness, environmental conservation, and puzzles. 
          </p>
          <br />
          <br />
          <Image
            cloudName="dbwanc9og"
            publicId="synopsis/igquq7rlbzhfbahd9kxd"
            width="300"
          />
          <h3 className="heading">Atharv Mahajan </h3>
          <p className="body-text">
            Atharv, an energetic high school student hailing from Palo Alto, CA,
            seamlessly integrates his academic excellence, collaborative
            research experiences, and practical skills to present a compelling
            narrative. Fueled by a passion for math, physics, and computer
            science, Atharv eagerly anticipates the transition from academic
            challenges to real-world problem-solving. His research journey
            commenced at UCI's Gifted and Talented Innovation program,
            contributing to groundbreaking algorithms for 3D isotropic imaging
            of T-cell morphology. This collaborative spirit extended to his
            impactful work at NinjaFocus, a mindfulness digital platform with a
            mission to empower parents and educators in supporting children's
            mental and emotional well-being. This experience ignited Atharv's
            dedication to leveraging technology to address mental healthcare
            concerns, driven by the pressing issues of depression, anxiety, and
            behavioral disorders among adolescents. Collaborating with Arushi,
            he developed an AI-powered software for sentiment analysis in
            adolescents' online communication, showcased at the Synopsys Science
            Fair and the 9th International Conference for Public Health. Beyond
            academics, Atharv's commitment extends to volunteering, co-founding
            the Chirag Foundations chapter in Palo Alto, and excelling in
            debate, tennis, and martial arts, demonstrating his dedication to
            making a positive impact. Proficient in Python programming and
            machine learning, Atharv's transformative journey reflects a blend
            of curiosity, innovation, and a resolute commitment to driving
            positive change in the realm of science and technology.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
