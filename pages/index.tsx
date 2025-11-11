"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import data from "../data/siteData.json";
import { SiteData } from "../types/siteData";

import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";

import { i18nConfig } from "../next-i18next.config";
import { GetStaticProps } from "next";
import { useEffect, useRef } from "react";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const siteData = data as SiteData;

  const whiteVideoRef = useRef<HTMLVideoElement>(null);
  const blackVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (whiteVideoRef.current) whiteVideoRef.current.playbackRate = 0.3; // медленнее в 2 раза
    if (blackVideoRef.current) blackVideoRef.current.playbackRate = 0.3;
  }, []);

  return (
    <>
      <Header />
      <div className="relative ">
        <video
          ref={whiteVideoRef}
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
          src="/theme-white_111 (Compress).mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          ref={blackVideoRef}
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none hidden dark:block"
          src="/theme-black_222 (Compress).mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <main className="pt-[85px] relative">
          <div className="mx-auto relative  z-10 ">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact contact={siteData.contact} />
          </div>
        </main>
        <footer className="relative z-20 bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <Footer />
        </footer>
      </div>
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
