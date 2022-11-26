import Link from "next/link";

/**
 * Component properties for QuestionCounter
 */
interface QuestionCounterProps {
  openQuestions: number;
  answeredQuestions: number;
}

/**
 * A widget that displays the amount of open and answered questions.
 *
 * This also contains links to filtered versions of the questions page.
 */
export default function QuestionCounter({
  openQuestions,
  answeredQuestions,
}: QuestionCounterProps) {
  return (
    <div className="text-xl">
      <span className="">{openQuestions}</span>{" "}
      <Link className="underline text-blue-500" href="/questions?status=unanswered">
        open
      </Link>
      &nbsp;|&nbsp;
      <span className="">{answeredQuestions}</span>{" "}
      <Link className="underline text-blue-500" href="/questions?status=answered">
        answered
      </Link>
    </div>
  );
}
