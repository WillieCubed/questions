import { Project } from "../types";
import projects from "../../data/projects.json";

export default async function fetchProjects(): Promise<Project[]> {
  return projects as Project[];
}
