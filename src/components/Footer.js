import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<p>
				<a
					href="https://github.com/kimwk730/portfolio"
					target="_blank"
					rel="noreferrer"
				>
					<strong>Open source</strong>
				</a>{" "}
				website coded by Won Kim <br />
				&copy; 2023 wonkim.dev
			</p>
			<div className="linkIcons">
				<a href="https://github.com/kimwk730" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} title="Github" />
				</a>
				<a
					href="https://www.linkedin.com/in/wonkyoungkim/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" />
				</a>
				<a href="mailto:kimwk730@gmail.com">
					{" "}
					<FontAwesomeIcon icon={faEnvelope} title="Email" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
