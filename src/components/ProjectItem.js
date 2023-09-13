import React from "react";

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
					<button>
						<a href={website} target="_blank" rel="noreferrer">
							Launch
						</a>
					</button>
					<a href={github} target="_blank" rel="noreferrer">
						<img src="/" className="githubLogo" alt="github logo" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
