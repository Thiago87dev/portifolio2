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
    <div className="dark:bg-colorBg2Dark flex justify-center w-full pt-32 dark:text-colorTextDark text-colorTextLight  h-screen">
      <div className="w-[1204px] flex justify-between ">
        <div className="pt-24">
          <div>
            <p className="italic text-xl">{t("iCreateWebsites")}</p>
            <h1 className="font-bold text-[100px] leading-none">
              {t("title")}
            </h1>
          </div>
          <div className="ml-24 mt-14 w-[580px] border-l-2 border-solid pl-14 py-4 border-colorHighlightsLight dark:border-colorHighlightsDark">
            <div>
              <h2 className={`text-3xl ${poppins.className}`}>{t("iam")}</h2>
              <p className="mt-10 text-lg">{t("description")}</p>
            </div>
            <div className="flex flex-col mt-10 items-end">
              <div>
                <Button title={t("downloadResume")} width="w-[380px]" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/photo2.jpeg"}
            alt="My photo"
            width={420}
            height={420}
            className="rounded-tr-[200px] w-[470px] h-[800px] rounded-bl-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
