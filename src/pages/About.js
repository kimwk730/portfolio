import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import Inquiry from "../components/Inquiry";
import "../styles/About.css";

function About() {
	return (
		<>
			<div className="about">
				<h2>
					Aloha <br />
					<span className="name">I'm Won</span>
					<br /> a web developer based in Hawaii
				</h2>
				<p>
					My passions are traveling, painting, gaming, and, of course, coding. I
					absolutely love the challenges and problem-solvings in the programming
					world, and I'm glad I can share my projects with you. Currently, I'm
					on a journey becoming a full-stack engineer. Projects I complete along
					the route will be updated here regularly. Meanwhile, if you are
					interested in creating something innovative and beautiful with me,
					please contact me now!
				</p>
				<h3>Tools and Techs</h3>
				<div className="techs">
					<FontAwesomeIcon icon={faReact} />
					<FontAwesomeIcon icon={faJs} />
					<FontAwesomeIcon icon={faCss3Alt} />
					<FontAwesomeIcon icon={faHtml5} />
					<FontAwesomeIcon icon={faBootstrap} />
					<FontAwesomeIcon icon={faFigma} />
				</div>
			</div>
			<Inquiry />
		</>
	);
}

export default About;
