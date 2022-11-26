import { InferGetStaticPropsType, NextPage } from "next/types";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import fetchQuestions from "../../lib/remote/questions";
import { Question } from "../../lib/types";
import { useRouter } from "next/router";
import MainHeader from "../../components/MainHeader";

interface QuestionPageHeaderProps {
  title: string;
}

export function QuestionPageHeader({ title }: QuestionPageHeaderProps) {
  return (
    <header className="grid">
      <div className="font-bold text-xl pt-2">Answering...</div>
      <div className="font-bold text-2xl py-4">{title}</div>
    </header>
  );
}

const QuestionDetailPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ question }) => {
  return (
    <div>
      <MainHeader />
      <QuestionPageHeader title={question.content} />
    </div>
  );
};

export default QuestionDetailPage;

export const getStaticProps: GetStaticProps<{ question: Question }> = async (
  context
) => {
  const questions = await fetchQuestions();

  const question = questions[0];

  return {
    props: {
      question,
    }, // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const questions = await fetchQuestions();

  const paths = questions.reduce((result, item) => {
    const path = `/questions/${item.id}`;
    result.push(path);
    return result;
  }, [] as string[]);

  return {
    paths: paths,
    fallback: false,
  };
};
