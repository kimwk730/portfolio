import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

function Contact() {
	return (
		<div className="contact">
			<h1>Let's keep in touch!</h1>
			<h2>
				<FontAwesomeIcon icon={faEnvelope} /> kimwk730@gmail.com
			</h2>

			<h2>
				<FontAwesomeIcon icon={faMobile} /> 808-397-8852
			</h2>
		</div>
	);
}

export default Contact;
