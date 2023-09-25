import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList.js";
import Inquiry from "../components/Inquiry";
import "../styles/Projects.css";

function Projects() {
	return (
		<div className="projects">
			<h1 className="tracking-in-expand">PROJECTS</h1>
			<div className="projectList">
				{ProjectList.map((project) => {
					return (
						<ProjectItem
							name={project.name}
							image={project.image}
							skill={project.skill}
							id={project.id}
							website={project.website}
							github={project.github}
						/>
					);
				})}
			</div>
			<p className="notes">..and more to come!</p>
			<Inquiry />
		</div>
	);
}

export default Projects;
