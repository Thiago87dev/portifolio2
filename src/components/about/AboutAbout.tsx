import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutAbout = () => {
  const t = useTranslations("About");

  return (
    <div className="dark:bg-colorBg2Dark bg-colorBgLight flex flex-col justify-start items-start w-full min-h-screen pt-10  dark:text-colorTextDark text-colorTextLight overflow-x-hidden">
      <div className="flex px-4 lg:px-0 items-start  mb-20 w-screen h-[420px] sm:h-72 bg-colorBg3Light dark:bg-colorBg3Dark">
        <div className="flex flex-col gap-8 items-center justify-center h-full px-4 lg:px-0 mb-20  w-full mx-auto  max-w-[1204px]">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center">
            {t("title")}
          </h2>
          <p className="text-center text-base sm:text-lg max-w-[640px]">
            {t("behindEveryLine")}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-w-[1204px] items-center md:items-stretch h-full  mx-auto px-4 gap-12 md:gap-0">
        <div className="flex flex-col justify-around text-center md:text-start w-[95%] sm:w-[80%] md:w-1/2 gap-14 md:gap-0">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">{t("experiencesThat")}</h2>
            <p className="text-lg">{t("bornInSaoPaulo")}</p>
          </div>
          <hr className=" border-gray-700 dark:border-gray-400" />
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">{t("selfTaught")}</h2>
            <p className="text-lg">{t("sinceIWasLittle")}</p>
            <p>{t("inJuly2023")}</p>
          </div>
        </div>
        <div className="flex flex-col px-2 sm:px-8 py-12 gap-10 items-center w-[95%] sm:w-[80%] md:w-[40%] bg-colorBg3Light dark:bg-colorBg3Dark rounded-br-[70px]">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                alt="cabeça"
                src={"/images/photo3.jpeg"}
                width={300}
                height={300}
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2>Thiago Alves</h2>
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-center font-semibold">
              {t("commitmentTo")}
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-center md:text-start">
            <p>{t("myMainObjective")}</p>
            <p>{t("iAmADedicated")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAbout;
