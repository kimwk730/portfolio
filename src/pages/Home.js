import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<div className="hero">
				<h2>
					<em>Hello, </em>I am
				</h2>
				<div className="myName">
					<svg>
						<text x="0" y="90" fill="none">
							Won Kim
						</text>
					</svg>
				</div>
				<h3>Frontend developer based in Hawaii, US</h3>
			</div>

			<main>
				<div className="title">Projects</div>
				<div className="title">Skills</div>

				<ul>
					<li>
						React.js <FontAwesomeIcon icon={faReact} />
					</li>
					<li>
						Javascript <FontAwesomeIcon icon={faJs} />
					</li>
					<li>
						CSS <FontAwesomeIcon icon={faCss3Alt} />
					</li>
					<li>
						HTML <FontAwesomeIcon icon={faHtml5} />
					</li>
					<li>
						Bootstrap <FontAwesomeIcon icon={faBootstrap} />
					</li>
					<li>
						Figma <FontAwesomeIcon icon={faFigma} />
					</li>
				</ul>
			</main>
		</div>
	);
}

export default Home;
