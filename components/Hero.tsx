import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="hero px-2 sm:px-4 lg:px-6 ">
      <div className="container  mx-auto py-5  text-center  bg-gray-400/80 dark:bg-gray-900/80 rounded-2xl mb-[15px]">
        <div className="flex flex-col-reverse  items-center justify-center gap-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2  leading-tight">
              {t("hero.title")}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300">
              {t("hero.subtitle")}
            </h2>

            <button className="px-4 py-2  bg-blue-700 text-white rounded-xl hover:opacity-80 transition  duration-500">
              {t("hero.cta")}
            </button>
          </div>

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] ">
            <Image
              src="/pictures_1.png"
              fill
              alt="hero light"
              className="object-contain transition duration-500 dark:hidden"
            />
            <Image
              src={"/pictures_2.png"}
              fill
              alt="hero image"
              className="object-contain  transition duration-500  hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
