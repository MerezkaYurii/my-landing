import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation("common");

  const principlesObject = t("about.principles", { returnObjects: true });
  const principlesKeys =
    typeof principlesObject === "object" && principlesObject !== null
      ? Object.keys(principlesObject)
      : [];

  return (
    <section className="abou px-2 sm:px-4 lg:px-6 ">
      <div className="container mx-auto py-16 text-center bg-gray-400/80 dark:bg-gray-900/80 rounded-2xl mb-[15px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          {t("about.main_title")}
        </h2>
        <p className="text-lg">{t("about.main_text")}</p>

        {principlesKeys.map((key) => {
          return (
            <div key={key}>
              <div className="w-3/4 mx-auto">
                <h4 className="text-xl sm:text-2xl md:text-3xl mb-1 font-semibold text-gray-700 dark:text-gray-300">
                  {t(`about.principles.${key}.title`)}
                </h4>
                <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                  {t(`about.principles.${key}.text`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
