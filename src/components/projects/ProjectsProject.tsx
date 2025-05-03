"use client";
import Project from "./Project";
import { allProjects } from "@/Data";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const ProjectsProject = () => {
  const t = useTranslations("Projects");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1225);
    };

    // Inicializa o estado
    handleResize();

    // Adiciona o listener de redimensionamento
    window.addEventListener("resize", handleResize);

    // Remove o listener ao desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-colorBg2Dark bg-colorBgLight flex flex-col justify-center items-center w-full min-h-screen pt-10  dark:text-colorTextDark text-colorTextLight overflow-x-hidden">
      <div className="flex px-4 lg:px-0 items-start  mb-20 w-screen h-[420px] sm:h-72 bg-colorBg3Light dark:bg-colorBg3Dark">
        <div className="flex flex-col gap-8 items-center justify-center h-full px-4 lg:px-0 mb-20  w-full mx-auto  max-w-[1204px]">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center">
            {t('title')}
          </h2>
          <p className="text-center text-base sm:text-lg max-w-[680px]">
            {t('text')}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-32 ">
        {allProjects.map((item, index) => {
          const imgSide = index % 2 == 0 ? "left" : "right";

          const imgSideCorrect = isSmallScreen ? "left" : imgSide;

          return (
            <div key={index}>
              <Project data={item} imgSide={imgSideCorrect} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsProject;
