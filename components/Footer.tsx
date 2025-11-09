import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-gray-400 text-black dark:bg-gray-900  dark:text-white py-6 fixed  left-0 w-full">
      <div className="container mx-auto px-6 text-center">
        © {new Date().getFullYear()} {t("header.siteTitle")} —{" "}
        {t("footer.text")} ♥
      </div>
    </footer>
  );
}
