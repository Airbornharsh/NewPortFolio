import Head from "next/head";
import "../styles/globals.css";

const schemaOrgPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsh Keshri",
  alternateName: "airbornharsh",
  url: "https://harshkeshri.com",
  image: "https://harshkeshri.com/harsh-keshri-headshot.jpg",
  jobTitle: "Full Stack & AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Zereus AI",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Government College of Engineering, Kalahandi",
  },
  sameAs: [
    "https://github.com/airbornharsh",
    "https://www.linkedin.com/in/airbornharsh",
    "https://twitter.com/airbornharsh",
    "https://www.instagram.com/airbornharsh",
  ],
  knowsAbout: [
    "AI Agents",
    "LangChain",
    "LangGraph",
    "Full Stack Development",
    "Solana Development",
    "Developer Tooling",
    "Serverless Architecture",
  ],
  email: "mailto:harshkeshri1234567@gmail.com",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Harsh Keshri | Full Stack & AI Engineer</title>
        <meta
          name="description"
          content="Harsh Keshri (airbornharsh) builds AI trading agents, full-stack platforms, and Web3 infrastructure with LangGraph, Next.js, Solana, and AWS."
        />
        <meta
          name="keywords"
          content="Harsh Keshri, Harsh, Harsh developer, Harsh portfolio, Harsh AI engineer, Harsh full stack developer, airbornharsh, AI engineer, AI trading engineer, LangChain developer, LangGraph expert, Solana developer, Next.js developer, AWS serverless engineer, Web3 engineer, multi-agent systems developer, Harsh Keshri projects"
        />
        <meta name="author" content="Harsh Keshri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://harshkeshri.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harsh Keshri | Full Stack & AI Engineer" />
        <meta
          property="og:description"
          content="Explore AI agents, Web3 integrations, and developer tools built by Harsh Keshri."
        />
        <meta property="og:url" content="https://harshkeshri.com/" />
        <meta property="og:image" content="https://harshkeshri.com/og-cover.png" />
        <meta property="og:site_name" content="Harsh Keshri Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@airbornharsh" />
        <meta name="twitter:title" content="Harsh Keshri | Full Stack & AI Engineer" />
        <meta
          name="twitter:description"
          content="Hire Harsh Keshri for AI agents, Web3 solutions, and scalable full-stack systems."
        />
        <meta name="twitter:image" content="https://harshkeshri.com/og-cover.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgPerson) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
