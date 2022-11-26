import "../styles/globals.css";
import type { AppProps } from "next/app";

function QuestionsApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#444444]">
      <Component {...pageProps} />
    </div>
  );
}

export default QuestionsApp;
