import { BiConversation } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { MdOutlineReportProblem } from "react-icons/md";
import Button from "../Button";
import { useTranslations } from "next-intl"; // declare this import

const AboutHome = () => {
  const t = useTranslations("Home");
  return (
    <div className="dark:bg-colorBg3Dark bg-colorBg3Light flex flex-col items-center w-full min-h-screen  pt-16 md:pt-16 dark:text-colorTextDark text-colorTextLight pb-8">
      <div className="flex flex-col gap-8 max-w-[1204px] px-4 lg:px-0">
        <div className="mb-20 ">
          <div className="flex  items-start mb-4 text-5xl font-semibold w-full max-w-[1204px]">
            <h2 className="w-full sm:w-2/4  pb-1 border-b-4 dark:border-colorHighlightsDark border-colorHighlightsLight">
              {t('aboutMe')}
            </h2>
          </div>
          <p className=" mx-auto md:mx-0 text-center md:text-left w-[90%] sm:w-[80%] md:w-2/5 text-lg">
            {t('myPassion')}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center mb-20">
          <div className="flex flex-col gap-8 w-[90%] sm:w-[80%] md:w-[35%] dark:border-r-colorHighlightsDark border-r-colorHighlightsLight border-r-solid border-r-2">
            <div className="flex gap-6">
              <div className="text-5xl">
                <BiConversation className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{t('communication')}</h2>
                <p className="w-2/3">
                  {t('communicationText')}
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
            <div className="flex gap-6">
              <div className="text-5xl ">
                <GrGroup className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {t('teamwork')}
                </h2>
                <p className="w-2/3">
                  {t('teamworkText')}
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
            <div className="flex gap-6">
              <div className="text-5xl">
                <MdOutlineReportProblem className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {t('troubleshooting')}
                </h2>
                <p className="w-2/3">
                  {t('troubleshootingText')}
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
          </div>
          <div className="flex flex-col gap-8 w-[90%] sm:w-[80%] md:w-[65%] text-center md:text-left md:pl-20 text-lg">
            <p>
              {t('my')} <span className="font-bold">{t('mainSkills')}</span>{" "}
              {t('areLinked')}{" "}
              <span className="font-bold">{t('effectiveCommunication')}</span> {" "}
              <span className="font-bold">{t('teamwork')}</span> {t('and')}{" "}
              <span className="font-bold">{t('troubleshooting')}</span> {t('arePillars')} <span className="font-bold">{t('dedicated')}</span> {t('iHaveAn')}{" "}
              <span className="font-bold">{t('easyTimeLearning')}</span> {t('newTechnologies')}{" "}
              <span className="font-bold">{t('organization')}</span> {t('and')} {" "}
              <span className="font-bold">{t('proactivity')}</span> {t('toAchieve')}
            </p>
            <p>
              {t('onThe')} <span className="font-bold">{t('technicalSide')}</span>, {t('iDevelop')}{" "}
              <span className="font-bold">
                HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux Toolkit {" "}
                {t('and')} Tailwind
              </span>{" "}
              {t('onThe')} frontend, {t('with')}{" "}
              <span className="font-bold">Python, Django e MySQL</span> {t('onThe')} {" "}
              backend. {t('thisCombination')}
            </p>
            <p>
              {t('iAmAlways')}
            </p>
            <div className="flex mx-auto md:mx-0 w-[190px]">
              <Button title={t('more')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
