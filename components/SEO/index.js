import Head from "next/head";

const SEO = ({ title }) => {
  return (
    <Head>
      <title>Johava | {title}</title>
      <meta
        name="description"
        content="Johava | A leading solution provider, sourcing and trade consulting company"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
