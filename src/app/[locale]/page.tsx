import Button from "@/components/Button";
import { Poppins } from "next/font/google";
import { useTranslations } from "next-intl"; // declare this import
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const Home = () => {
  const t = useTranslations("Home"); // declare the hook passing into parameter a context name
  return (
    <div className="dark:bg-colorBg2Dark flex justify-center w-full pt-16 md:pt-32 dark:text-colorTextDark text-colorTextLight  h-screen">
      <div className="w-[1204px] flex items-center md:items-start flex-col md:flex-row justify-between px-2 lg:px-0">
        <div className="pt-24">
          <div>
            <p className="flex justify-center sm:justify-start italic text-xl">{t("iCreateWebsites")}</p>
            <h1 className="flex text-center md:text-left font-bold text-[70px] lg:text-[100px] leading-none">
              {t("title")}
            </h1>
          </div>
          <div className="lg:ml-24 md:ml-12 ml-1 mt-14 lg:w-[580px] md:w-[480px] w-full border-l-2 border-solid md:pl-14 pl-2 py-4 border-colorHighlightsLight dark:border-colorHighlightsDark">
            <div>
              <h2 className={`text-3xl ${poppins.className}`}>{t("iam")} <span className="font-bold">{t("react")}</span> {t("and")} <span className="font-bold">{t("python")}</span></h2>
              <p className="mt-10 text-lg">{t("description")}</p>
            </div>
            <div className="flex flex-col w-full mt-10 items-end">
              <div className="w-full sm:w-[380px]  md:w-[266px] lg:w-[380px]">
                <Button title={t("downloadResume")} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/photo2.jpeg"}
            alt="My photo"
            width={440}
            height={440}
            className="lg:rounded-tr-[200px] lg:rounded-bl-[200px] lg:mt-0 rounded-tr-[200px] rounded-bl-[200px] mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
