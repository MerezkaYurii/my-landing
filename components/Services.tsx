import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Services() {
  const { t } = useTranslation("common");
  const services = t("services.items", { returnObjects: true }) as {
    id: number;
    image: string;
    name: string;
    desc: string;
  }[];
  return (
    <section className="px-2 sm:px-4 lg:px-6">
      <div className="container mx-auto px-6 py-16 bg-gray-400/80 dark:bg-gray-900/80 rounded-2xl mb-[15px]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-wrap">
          {services?.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white dark:bg-gray-100 border rounded-xl shadow-sm shadow-gray-400"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <Image
                  src={service.image}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold  mb-2 dark:text-gray-900">
                {service.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-semibold dark:text-gray-900">
                {service.desc}
              </p>
              <p className="text-xs sm:text-sm md:text-base dark:text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                officia vitae ullam esse ad libero iusto laudantium obcaecati
                eveniet ducimus accusantium aspernatur eius, provident rem est,
                eligendi, a veritatis quod?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
