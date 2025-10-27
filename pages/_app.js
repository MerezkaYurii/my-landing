import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NebulaCodeStudio</title>
        <meta name="description NebulaCodeStudio" content="NebulaCodeStudio" />

        {/* Open Graph (для Facebook, Telegram и др.) */}
        <meta property="og:title" content="NebulaCodeStudio" />
        <meta
          property="og:description"
          content="A clean and minimal web project built with Next.js."
        />

        {/* картинка 1200×630) */}
        <meta property="og:image" content="/img-for-socialnetworks.jpg" />
        {/* https://simple-project.vercel.app */}
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="NebulaCodeStudio" />
        {/* в формате язык_СТРАНА  какой язык использовать.*/}
        <meta property="og:locale" content="en_US" />
        {/* сайта — "website", для статьи — "article", для видео — "video"*/}
        <meta property="og:type" content="website" />

        {/* Twitter */}

        {/* вТип карточки. summary_large_image*/}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Заголовок карточки в Twitter (аналог og:title) */}
        <meta name="twitter:title" content="NebulaCodeStudio" />
        {/* Описание карточки в Twitter. */}
        <meta
          name="twitter:description"
          content="A clean and minimal web project built with Next.js"
        />
        {/* Картинка для Twitter (может быть той же, что и og:image). */}
        <meta name="twitter:image" content="/img-for-socialnetworks.jpg" />

        {/* Иконка */}
        <link rel="icon" href="/img-for-browser.jpg" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(MyApp);
