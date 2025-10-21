import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import data from "../data/siteData.json";
import { useTranslation } from "next-i18next";

export default function Header() {
  const contacts = data.contacts;
  const { t } = useTranslation("common");
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-300/50 shadow-sm dark:bg-gray-900/70 dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between">
        <div className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">
          {t("header.siteTitle")}
        </div>

        <div className="flex items-center gap-2">
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

          <a
            href={`tel:${t("header.phone")}`}
            className="hidden sm:inline text-sm sm:text-base whitespace-nowrap hover:underline  duration-500"
          >
            tel: {t("header.phone")}
          </a>

          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
