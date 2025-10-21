import { ContactData } from "../types/siteData";
import { useTranslation } from "next-i18next";

interface ContactDataProps {
  contact: ContactData;
}

export default function About({ contact }: ContactDataProps) {
  const { t } = useTranslation("common");
  const mailTo = `mailto:${contact.email}?subject=Заказ%20сайта`;
  return (
    <section id="contact" className="px-2 sm:px-4 lg:px-6 ">
      <div className="container mx-auto  py-16 text-center bg-gray-100 dark:bg-white/5 rounded-2xl mb-[15px]">
        <h2 className="text-lg sm:text-xl md:text-2xl  font-extrabold mb-4">
          {t("contact.title")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-2">
          {t("contact.phone")}:{" "}
          <a href={`tel:${contact.phone}`} className="underline">
            {contact.phone}
          </a>
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-4">
          {t("contact.email")}:{" "}
          <a href={mailTo} className="underline">
            {contact.email}
          </a>
        </p>
        <a
          href={mailTo}
          className="inline-block px-6 py-2 bg-blue-700 text-white rounded-xl hover:opacity-80 transition  duration-500"
        >
          {t("contact.button")}
        </a>
      </div>
    </section>
  );
}
