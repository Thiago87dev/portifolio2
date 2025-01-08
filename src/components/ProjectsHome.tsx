import Project from "./Project";
import { allProjects } from "@/Data";

const ProjectsHome = () => {
  return (
    <div className="dark:bg-colorBg2Dark bg-colorBgLight flex flex-col justify-center items-center w-full pt-16  dark:text-colorTextDark text-colorTextLight min-h-screen">
      <div className="flex px-4 lg:px-0 items-start mb-20 text-5xl font-semibold w-full max-w-[1204px]">
        <h2 className="w-2/4  pb-1 border-b-4 dark:border-colorHighlightsDark border-colorHighlightsLight">
          Projetos
        </h2>
      </div>
      <div className="flex flex-col gap-32 mb-20">
        {allProjects.slice(0, 3).map((item, index) => {
          const imgSide = index % 2 == 0 ? "left" : "right";
          return (
            <div key={index}>
              <Project data={item} imgSide={imgSide} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsHome;
