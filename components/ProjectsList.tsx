import { Project } from "../lib/types";
import { ProjectItem } from "./ProjectItem";

/**
 * Component properties for a ProjectList.
 */
interface ProjectListProps {
  projects: Project[];
}

/**
 * A selectable list of ProjectItem.
 */
export function ProjectList({ projects }: ProjectListProps) {
  const projectItems = projects.map((project) => {
    return <ProjectItem key={project.id} {...project} />;
  });
  return <div className="p-4">{projectItems}</div>;
}
