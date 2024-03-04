import ProjectItem from "@/components/projects/project-item";
import SectionTitle from "@/components/section-title";
import { Effect } from "@/components/ui/effects";
import { getProjects } from "@/lib/projects";
import React from "react";

const ProjectsSection = async () => {
  const projects = await getProjects();

  return (
    <section id="projects" className="relative space-y-6">
      <Effect className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
      <SectionTitle title="projects" description="some things i've built" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
