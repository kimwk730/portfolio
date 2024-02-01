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
					My passions encompass traveling, painting, designing, and, of course,
					coding. I find immense satisfaction in tackling the challenges and
					engaging in problem-solving inherent in the programming realm, and I
					am eager to share my projects with you. Currently, I am on a journey
					toward becoming a full-stack engineer, and I will consistently update
					my completed projects here. In the meantime, if you share an interest
					in collaborating on innovative and aesthetically pleasing creations,
					please feel free to reach out to me.
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
