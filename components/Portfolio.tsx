import { useTranslation } from "next-i18next";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const { t } = useTranslation("common");

  const projects = t("portfolio.projects", { returnObjects: true }) as {
    id: number;
    title: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    url: string;
  }[];

  return (
    <section className=" px-2 sm:px-4 lg:px-6 ">
      <div className="container  mx-auto px-6 py-10  text-center  bg-gray-400/80 dark:bg-gray-900/80 rounded-2xl mb-[15px]">
        <div className="flex flex-col-reverse  items-center justify-center gap-8">
          <div>
            <h1 className="text-left text-xl sm:text-2xl md:text-3xl font-bold mb-3  leading-snug">
              {t("portfolio.title")}
            </h1>
            <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-100 ">
              {t("portfolio.subtitle")}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-wrap items-stretch">
              {projects.map((project) => (
                <div key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
