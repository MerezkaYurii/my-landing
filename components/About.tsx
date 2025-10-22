import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <section className="abou px-2 sm:px-4 lg:px-6 ">
      <div className="container mx-auto  py-16 text-center  bg-gray-600/30 dark:bg-gray-800/40 rounded-2xl mb-[15px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold  mb-4 leading-tight">
          {t("about.title")}
        </h2>
        <p className="text-lg">{t("about.text")}</p>
      </div>
    </section>
  );
}
