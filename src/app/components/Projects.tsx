import React from "react";
import InternshipProjects from "./InternshipProjects";
import PersonalProjects from "./PersonalProjects";

export default function Projects() {
  return (
    <section id="projects" className="py-4">
      <h1 className="text-2xl md:text-3xl font-bold">Projects</h1>

      <InternshipProjects />
      <PersonalProjects />
    </section>
  );
}
