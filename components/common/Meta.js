import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jobit",
  keywords: "jobit",
  description: "Find your dream job around the world",
};
export default Meta;
