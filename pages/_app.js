import Head from "next/head";
import Div100vh from "react-div-100vh";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>SEO-Test</title>
        <meta name="description" content="description here." />
        <meta httpEquiv="content-language" content="en" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />

        {/* chrome, opera, firefox and new safari status bar */}
        <meta name="theme-color" content="#e52ee5" />
        {/* windows phone status bar */}
        <meta name="msapplication-navbutton-color" content="#e52ee5" />
        {/* old safari/ios status bar */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* chrome */}
        <meta name="mobile-web-app-capable" content="yes" />
        {/* safari/ios add to home page */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="goodbuy" />
        {/* windows add to home page */}
        <meta name="msapplication-TileColor" content="#9f00a7" />
      </Head>

      <Div100vh>
        <Component {...pageProps} />
      </Div100vh>
    </>
  );
}

export default MyApp;
