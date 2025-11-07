import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Services() {
  const { t } = useTranslation("common");
  const services = t("services.items", { returnObjects: true }) as {
    id: number;
    image: string;
    name: string;
    subtitle: string;
    price: string;
    specification: string;
    desc: string;
  }[];
  return (
    <section className="px-2 sm:px-4 lg:px-6">
      <div className="container mx-auto px-6 py-16 bg-gray-400/80 dark:bg-gray-900/80 rounded-2xl mb-[15px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          {t("services.title")}
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-6">
          {t("services.subtitle")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-wrap">
          {services?.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-gray-200 dark:bg-gray-800 border rounded-xl shadow-lg shadow-gray-600"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <Image
                  src={service.image}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className=" text-lg sm:text-xl md:text-2xl font-bold  mb-1 text-indigo-900 dark:text-white">
                {service.name}
              </h3>
              <h3 className="font-semibold  mb-1 text-gray-950 dark:text-gray-400">
                {service.price}
              </h3>
              <h4 className="font-semibold  mb-1 text-gray-950 dark:text-gray-100">
                {service.specification}
              </h4>
              <p>
                {service.desc.split("\n").map((line, idx) =>
                  line.trim() ? (
                    <span key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-900 dark:text-green-600 font-extrabold mt-0.5">
                        ✓
                      </span>
                      <span className="whitespace-pre-line text-xs sm:text-sm md:text-base font-semibold text-gray-950 dark:text-gray-100">
                        {line}
                      </span>
                      <br />
                    </span>
                  ) : null
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
