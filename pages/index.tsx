import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import data from "../data/siteData.json";
import { SiteData } from "../types/siteData";

import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";
import { i18nConfig } from "../next-i18next.config.mjs";
import { GetStaticProps } from "next";
export default function Home() {
  const siteData = data as SiteData;

  return (
    <>
      <Header />
      <main className="pt-[75px]">
        <Hero />
        <About />
        <Services />
        <Contact contact={siteData.contact} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"], i18nConfig)),
    },
  };
};
