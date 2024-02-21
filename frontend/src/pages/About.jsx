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
            Arushi is an accomplished and versatile STEM and business student
            with a proven track record in academics, leadership, and
            extracurricular achievements. Currently attending Valley Christian
            High School in San Jose, CA, Arushi has maintained an exceptional
            weighted G.P.A. of 4.4, showcasing her commitment to academic
            excellence. Arushi's standout achievements include her active
            involvement in DECA, where she has secured impressive victories,
            including 3rd place at Silicon valley wide DECA Silicon Valley
            competitions for product innovation and 1st place in the
            Entrepreneurship Innovation Plan Written Category at the Valley
            Christian Mock Conference. This demonstrates her strong business
            acumen for technology products and strategic thinking. In addition
            to her DECA accomplishments, Arushi has excelled in various
            leadership roles. As the Co-President of the Bringing Joy Club, she
            successfully expanded the club to 50 active members and organized
            impactful bi-monthly visits to the Belmont Senior Home. Her
            leadership extends to the realm of debate, where she served as the
            Impromptu Speaking Captain for her high school, achieving
            octo-finals at the Parliamentary Debate Tournament of Champions.
            Arushi's commitment to community service mentorship is evident in
            her volunteer experiences, including leading a summer camp
            curriculum for 5th graders and tutoring disadvantaged students
            through the Valley Christian REACH Program. In the professional
            sphere, Arushi gained practical experience as a Product Management
            Intern at Ninja Focus, demonstrating her ability to lead customer
            focus groups, conduct product trials, and organize crucial customer
            information. Arushi's well-rounded profile extends beyond academics
            and work, encompassing diverse interests and hobbies such as sports,
            photography, emergency preparedness, environmental conservation, and
            puzzles. Her multifaceted skill set and passion for making a
            positive impact position Arushi as a promising individual ready to
            excel in future academic and professional endeavors.
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
