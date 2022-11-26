import { Question } from "../types";
import questions from "../../data/questions.json";

export default async function fetchQuestions(): Promise<Question[]> {
  return questions as Question[];
}
