import Skills from "@/components/Skills";
import { skillList } from "@/Data";
import { useTranslations } from "next-intl"; 

const SkillsHome = () => {
    const t = useTranslations("Home")
  return (
    <div className="dark:bg-colorBg3Dark bg-colorBg3Light flex flex-col items-center justify-center w-full pt-16 md:pt-16 dark:text-colorTextDark text-colorTextLight min-h-screen pb-8">
        <div className="flex px-4 lg:px-0 items-start mb-20 text-5xl font-semibold w-full max-w-[1204px]">
          <h2 className="w-full sm:w-2/4 text-center sm:text-left  pb-1 border-b-4 dark:border-colorHighlightsDark border-colorHighlightsLight">
            {t('skills')}
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 lg:px-0 px-4 grid-cols-2 gap-6 w-full max-w-[1204px] ">
          {skillList.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Skills
                name={item.name}
                icon={item.icon}
                colorBg={item.colorBg}
                colorText={item.colorText}
                rounded={item.rounded}
              />
            </div>
          ))}
        </div>
      </div>
  )
}

export default SkillsHome