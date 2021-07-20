import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map(({id, name, technologies, about}) => {
          return (
            <ProjectItem key={id} name={name} technologies={technologies} about={about} />
          );
        })
      }</div>
    </div>
  );
}

export default ProjectList;
