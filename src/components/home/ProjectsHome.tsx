'use client'
import Project from "../Project";
import { allProjects } from "@/Data";
import { Link } from "@/i18n/routing";
import { ImArrowRight } from "react-icons/im";
import AnimatedElement from "../AnimatedElement";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ProjectsHome = () => {
  const t = useTranslations("Home");

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
    <div className="dark:bg-colorBg2Dark bg-colorBgLight flex flex-col justify-center items-center w-full min-h-screen pt-16  dark:text-colorTextDark text-colorTextLight ">
      <div className="flex px-4 lg:px-0 items-start mb-20 text-5xl font-semibold w-full max-w-[1204px]">
        <h2 className="w-full sm:w-2/4 text-center sm:text-left  pb-1 border-b-4 dark:border-colorHighlightsDark border-colorHighlightsLight">
          {t("projects")}
        </h2>
      </div>
      <div className="flex flex-col gap-32 ">
        {allProjects.slice(-3).map((item, index) => {
          const imgSide = index % 2 == 0  ? "left" : "right";
        
          const imgSideCorrect = isSmallScreen ? "left" : imgSide 
          
          return (
            <div key={index}>
              <AnimatedElement
                initial={{ y: "50vh", opacity: 0, scale: 0 }}
                direction="vertical"
              >
                <Project data={item} imgSide={imgSideCorrect} />
              </AnimatedElement>
            </div>
          );
        })}
      </div>
      <AnimatedElement initial={{ x: "-100vw", opacity: 0 }}>
        <div className="flex items-center justify-end gap-2 pr-4 text-colorLinksLight dark:text-colorLinksDark my-20 lg:w-[1204px] ">
          <Link className="flex items-center gap-2 group" href="/projects">
            <h2 className="text-2xl font-bold">{t("seeMoreProjects")}</h2>
            <ImArrowRight
              className="transition-transform group-hover:translate-x-4"
              size={30}
            />
          </Link>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default ProjectsHome;
