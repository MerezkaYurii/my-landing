import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  url: string;
};

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className=" p-4 bg-gray-200 dark:bg-gray-800 border rounded-xl shadow-lg shadow-gray-600 ">
      <div className="relative flex justify-center items-center w-full max-w-[480px] sm:max-w-[500px] md:max-w-[560px] mx-auto h-[140px] sm:h-[160px] md:h-[170px] group">
        {/* Левая */}
        <div className="absolute left-[0%] top-[15%]  w-[32%] sm:w-[34%] rotate-[-4deg] z-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg] group-hover:scale-105">
          <Image
            src={project.image2}
            alt={project.title}
            width={180}
            height={120}
            className="object-contain rounded-xl shadow-md opacity-90"
          />
        </div>

        {/* Центральная */}
        <div className="absolute left-1/2  -translate-x-1/2   w-[36%] sm:w-[38%] z-10 scale-105 transition-transform duration-500 group-hover:scale-125">
          <Image
            src={project.image1}
            alt={project.title}
            width={190}
            height={130}
            className="object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Правая */}
        <div className="absolute right-[0%] top-[15%]  w-[32%] sm:w-[34%] rotate-[4deg] z-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[2deg] group-hover:scale-105">
          <Image
            src={project.image3}
            alt={project.title}
            width={180}
            height={120}
            className="object-contain rounded-xl shadow-md opacity-95"
          />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-base sm:text-lg md:text-xl font-medium underline text-indigo-900 decoration-indigo-900 dark:decoration-green-600   px-4 py-2  dark:text-green-600 rounded-lg hover:opacity-80"
        >
          {project.url}
        </a>
      </div>
    </div>
  );
}
