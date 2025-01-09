import Project from "./Project";
import { allProjects } from "@/Data";
import Link from "next/link";
import { ImArrowRight } from "react-icons/im";
import AnimatedElement from "./AnimatedElement";
import { useTranslations } from "next-intl"; 

const ProjectsHome = () => {
  const t = useTranslations("Home")
  return (
    <div className="dark:bg-colorBg2Dark bg-colorBgLight flex flex-col justify-center items-center w-full pt-16  dark:text-colorTextDark text-colorTextLight min-h-screen">
      <div className="flex px-4 lg:px-0 items-start mb-20 text-5xl font-semibold w-full max-w-[1204px]">
        <h2 className="w-2/4  pb-1 border-b-4 dark:border-colorHighlightsDark border-colorHighlightsLight">
          {t('projects')}
        </h2>
      </div>
      <div className="flex flex-col gap-32 ">
        {allProjects.slice(0, 3).map((item, index) => {
          const imgSide = index % 2 == 0 ? "left" : "right";
          return (
            <div key={index}>
              <Project data={item} imgSide={imgSide} />
            </div>
          );
        })}
      </div>
      <AnimatedElement initial={{ x: "-100vw", opacity: 0 }}>
      <div className="flex items-center justify-end gap-2 pr-4 text-colorLinksLight dark:text-colorLinksDark my-20 w-[1204px] ">
      <Link className="flex items-center gap-2 group" href={'/'}>
        <h2 className="text-2xl font-bold">{t('seeMoreProjects')}</h2>
        <ImArrowRight className="transition-transform group-hover:translate-x-4" size={30} />
      </Link>
      </div>
      </AnimatedElement>
    </div>
  );
};

export default ProjectsHome;
