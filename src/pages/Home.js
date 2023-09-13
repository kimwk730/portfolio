import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<div className="hero">
				<h2>
					<em>Hello, </em>I am
				</h2>
				<h1>WON KIM</h1>
				<h3>Frontend developer based in Hawaii, US</h3>
			</div>
			<main>
				<div>Projects</div>
				<div className="fontA"></div>

				<div>Skills</div>
				<FontAwesomeIcon icon={faReact} />
				<FontAwesomeIcon icon={faJs} />
				<FontAwesomeIcon icon={faCss3Alt} />
				<FontAwesomeIcon icon={faHtml5} />
				<FontAwesomeIcon icon={faFigma} />
				<ul>
					<li>React.js</li>
					<li>Javascript</li>
					<li>Bootstrap</li>
					<li>CSS</li>
					<li>HTML</li>
					<li>Figma</li>
					<li>SEO</li>
				</ul>
			</main>
		</div>
	);
}

export default Home;
