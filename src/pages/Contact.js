import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

function Contact() {
	return (
		<div>
			Contact
			<FontAwesomeIcon icon={faEnvelope} />
			<FontAwesomeIcon icon={faMobile} />
		</div>
	);
}

export default Contact;
