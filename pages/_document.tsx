import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Simple Project</title>
        <meta name="description My Template" content="My Template" />

        {/* Open Graph (для Facebook, Telegram и др.) */}
        <meta property="og:title" content="My Template" />
        <meta
          property="og:description"
          content="A clean and minimal web project built with Next.js."
        />

        {/* картинка 1200×630) */}
        <meta property="og:image" content="/img-for-socialnetworks.jpg" />
        {/* https://simple-project.vercel.app */}
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Simple Project" />
        {/* в формате язык_СТРАНА  какой язык использовать.*/}
        <meta property="og:locale" content="en_US" />
        {/* сайта — "website", для статьи — "article", для видео — "video"*/}
        <meta property="og:type" content="website" />

        {/* Twitter */}

        {/* вТип карточки. summary_large_image*/}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Заголовок карточки в Twitter (аналог og:title) */}
        <meta name="twitter:title" content="Simple Project" />
        {/* Описание карточки в Twitter. */}
        <meta
          name="twitter:description"
          content="A clean and minimal web project built with Next.js"
        />
        {/* Картинка для Twitter (может быть той же, что и og:image). */}
        <meta name="twitter:image" content="/img-for-socialnetworks.jpg" />

        {/* Иконка */}
        <link rel="icon" href="/img-2.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
