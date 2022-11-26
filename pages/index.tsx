import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainHeader from "../components/MainHeader";

const Home: NextPage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Head>
        <title>Willie&apos;s Questions</title>
        <meta name="description" content="A bunch of open questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <section className="p-4"></section>
    </div>
  );
};

export default Home;
