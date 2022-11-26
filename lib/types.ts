export type Question = {
  id: string;
  status: "unanswered" | "answered" | "unanswerable";
  content: string;
  answer: QuestionAnswer;
  /**
   * One question can have multiple associated themes.
   */
  themes: Theme[];
};

/**
 * Information that answers a question.
 */
export type QuestionAnswer = {
  /**
   * A markdown string containing the answer to this question.
   */
  content: string;
};

/**
 * A general
 */
export type Theme = {
  title: string;
  description: string;
};

// TODO: Turn into schema
export type Project = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};
