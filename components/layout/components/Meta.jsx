import Head from "next/head";

export default function Meta(props) {
  const { children, description, pageTitle } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Mu{pageTitle && ` | ${pageTitle}`}</title>
      {description && <meta name="description" content={description} />}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#03090C" />
      <link rel="apple-touch-icon" href="/favicon/180.png" />

      {children}
    </Head>
  );
}
