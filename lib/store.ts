import { Project, Question } from "./types";

function fetchQuestions(): Question[] {
  return [];
}

function fetchProjects(): Project[] {
  return [];
}

export function useStore() {
  const questions = fetchQuestions();
  const projects = fetchProjects();

  return {
    questions,
    projects,
  };
}
