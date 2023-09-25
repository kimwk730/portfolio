import React from "react";
import { ProjectList } from "../helpers/ProjectList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import Inquiry from "../components/Inquiry";
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
						<text x="20" y="90" fill="none">
							Won Kim
						</text>
					</svg>
				</div>
				<h3>Frontend developer based in Hawaii, US</h3>
			</div>

			<main>
				<div className="title">Projects</div>
				<div className="projectPreview">
					{ProjectList.map((project) => {
						return (
							<div className="previewItem">
								<img
									src={project.image}
									className="projPic"
									alt={project.name}
									height="200"
								/>
								<div>
									{"<"}
									{project.name}
									{">"}
								</div>
							</div>
						);
					})}
				</div>
				<a href="../Projects">
					<button className="more">Learn More</button>
				</a>
				<div className="title">Skills</div>
				<ul>
					<li>
						<FontAwesomeIcon icon={faReact} /> React.js
					</li>
					<li>
						<FontAwesomeIcon icon={faJs} /> Javascript
					</li>
					<li>
						<FontAwesomeIcon icon={faCss3Alt} /> CSS
					</li>
					<li>
						<FontAwesomeIcon icon={faHtml5} /> HTML
					</li>
					<li>
						<FontAwesomeIcon icon={faBootstrap} /> Bootstrap
					</li>
					<li>
						<FontAwesomeIcon icon={faFigma} /> Figma
					</li>
				</ul>
			</main>
			<Inquiry />
		</div>
	);
}

export default Home;
