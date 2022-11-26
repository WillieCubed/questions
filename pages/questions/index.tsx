import { useRouter } from "next/router";
import { NextPage } from "next/types";

const QuestionsPage: NextPage = () => {
  const { query } = useRouter();
  const status = query.status as string;

  return <div>Questions!</div>;
};

export default QuestionsPage;
