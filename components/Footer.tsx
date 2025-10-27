import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-gray-900 text-white py-6  ">
      <div className="container mx-auto px-6 text-center">
        © {new Date().getFullYear()} {t("header.siteTitle")} —{" "}
        {t("footer.text")} ♥
      </div>
    </footer>
  );
}
