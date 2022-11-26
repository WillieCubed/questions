import Link from "next/link";
import QuestionCounter from "./QuestionCounter";

/**
 * A header with navigation.
 */
export default function MainHeader() {
  return (
    <header className="bg-white dark:bg-[#444444] dark:text-white">
      <div className="md:grid lg:grid-cols-8 xl:grid-cols-12 lg:gap-4 px-6">
        <div className="pt-8 lg:col-start-2 lg:col-span-4">
          <h1 className="font-bold font-display text-5xl">
            <Link href="/">The Questions</Link>
          </h1>
          <div className="text-2xl pt-4">
            The ones that keep me up during the day
            <br />
            (and sometimes at night).
          </div>
          <QuestionCounter openQuestions={0} answeredQuestions={0} />
        </div>
      </div>
      <div className="flex justify-center">
        {/* Tab bar */}
        <div className="p-4 uppercase">
          <Link href="/questions">Questions</Link>
        </div>
        <div className="p-4 uppercase">
          <Link href="/themes">Themes</Link>
        </div>
        <div className="p-4 uppercase">
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </header>
  );
}
