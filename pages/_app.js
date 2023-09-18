import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Harsh Keshri | Developer</title>
        <meta name="description" content="I am Developer who is ready to take challenges you can throw any challenge." />
        <meta charset="UTF-8" />
        <meta name="keywords" content="harsh keshri, harsh, keshri, harshkeshri, airbornharsh, developer, FullStackDeveloper, Harsh Keshri, HarshKeshri" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
