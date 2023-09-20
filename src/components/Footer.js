import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="inquiryBox">
				<div>
					<h2>Work Inquiry</h2>
					<h3>Let's work together</h3>
				</div>
				<button>Contact me</button>
			</div>
			<div className="linkIcons">
				<FontAwesomeIcon icon={faGithub} className="link" title="Github" />
				<FontAwesomeIcon icon={faLinkedinIn} />
				<FontAwesomeIcon icon={faEnvelope} />
			</div>

			<p>
				<a href="../pages/Contact.js">Open source</a> website coded by Won Kim{" "}
				<br />
				&copy; 2023 wonkim.dev
			</p>
		</div>
	);
}

export default Footer;
