import Head from "next/head";

import Container from "./components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Renderia Design | Landing Page and Web Dev</title>
        <meta
          name="description"
          content="Portfolio Renderia Design e Front End Dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container />
      </main>
    </>
  );
}
