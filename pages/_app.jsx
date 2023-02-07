import "/styles/global.scss";
import "/components/_components.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <div id="portal-container" />
    </>
  );
}
