import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="hero px-2 sm:px-4 lg:px-6 ">
      <div className="container  mx-auto py-16  text-center bg-gray-100 dark:bg-white/5 rounded-2xl mb-[15px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              {t("hero.subtitle")}
            </p>
            <button className="px-4 py-2  bg-blue-700 text-white rounded-xl hover:opacity-80 transition  duration-500">
              {t("hero.cta")}
            </button>
          </div>
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src={"/img-for-title-contur.svg"}
              fill
              alt="hero image"
              className="object-contain dark:invert transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
