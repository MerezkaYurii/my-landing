import path from "path";

export const i18nConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ua"],
  },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/public/locales",
};
export default i18nConfig;
