import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

function ProjectItem({ image, name, skill, id, website, github }) {
	return (
		<div className="projectItem" id={id}>
			<div className="projectPic">
				<img src={image} className="projPic" alt={name} />
			</div>
			<div className="info">
				<h2>{name}</h2>
				<p>{skill}</p>
				<div className="links">
					<a href={website} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faRocket} className="link" title="Launch" />
					</a>
					<a href={github} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="link" title="Github" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
