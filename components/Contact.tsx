import { ContactData } from "../types/siteData";
import { useTranslation } from "next-i18next";
import data from "../data/siteData.json";
import ModalOrder from "./ModalOrder";
interface ContactDataProps {
  contact: ContactData;
}

export default function About({ contact }: ContactDataProps) {
  const contacts = data.contacts;
  const { t } = useTranslation("common");
  const mailTo = `mailto:${contact.email}?subject=Заказ%20сайта`;
  return (
    <section id="contact" className="px-2 sm:px-4 lg:px-6 ">
      <div className="container mx-auto  py-10 text-center  bg-gray-400/80 dark:bg-gray-900/80 rounded-2xl mb-[15px]">
        <h2 className="text-lg sm:text-xl md:text-2xl  font-bold mb-3">
          {t("contact.title")}
        </h2>
        <h3 className="text-sm sm:text-base md:text-lg  font-bold mb-3">
          {t("contact.desc")}
        </h3>
        <p className="text-sm sm:text-base md:text-lg mb-2">
          {t("contact.phone")}:{" "}
          <a href={`tel:${contact.phone}`} className="underline">
            {contact.phone}
          </a>
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-3">
          {t("contact.email")}:{" "}
          <a href={mailTo} className="underline">
            {contact.email}
          </a>
        </p>

        <div className="flex items-center gap-4 justify-center mb-4">
          {contacts.telegram && (
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-1 bg-[#0088cc] rounded-lg hover:opacity-80 transition duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-telegram-alt-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.linkedin && (
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-1 bg-[#0A66C2] rounded-lg hover:opacity-80 transition duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-linkedin-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.facebook && (
            <a
              href={contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-1 bg-[#1877F2] rounded-lg hover:opacity-80 transition  duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-facebook-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.viber && (
            <a href={contacts.viber} target="_blank" rel="noopener noreferrer">
              <button className="p-1 bg-[#665CAC] rounded-lg hover:opacity-80 transition  duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-viber-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.instagram && (
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-1 bg-[#E1306C] rounded-lg hover:opacity-80 transition  duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-instagram-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.whatsapp && (
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-1 bg-[#25D366] rounded-lg hover:opacity-80 transition  duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-whatsapp-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
        </div>

        {/* <a
          href={mailTo}
          className="inline-block px-6 py-2 bg-blue-700 text-white rounded-xl hover:opacity-80 transition  duration-500"
        >
          {t("contact.button")}
        </a> */}
        <ModalOrder buttonLabel={t("contact.button")} />
      </div>
    </section>
  );
}
