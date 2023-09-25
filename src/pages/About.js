import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Inquiry from "../components/Inquiry";

function About() {
	return (
		<div>
			About
			<FontAwesomeIcon icon={faLinkedinIn} />
			<Inquiry />
		</div>
	);
}

export default About;
