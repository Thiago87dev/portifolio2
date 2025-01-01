import Button from "@/components/Button";
import { Poppins} from 'next/font/google'
import { useTranslations } from "next-intl"; // declare this import

const poppins = Poppins({
  weight:['400','600', '700'],
  subsets: ["latin"],
});

const Home = () => {
  const t = useTranslations("Home"); // declare the hook passing into parameter a context name
  return (
    <div className="dark:bg-colorBg2Dark flex  justify-center w-full pt-40 dark:text-colorTextDark text-colorTextLight  h-screen">
      <div className="w-[1204px] flex justify-between pl-8">
        <div>
          <div>
            <p className="italic text-xl">{t("iCreateWebsites")}</p>
            <h1 className="font-bold text-[112px] leading-none">{t("title")}</h1>
          </div>
          <div className="ml-32 mt-14 w-[580px] border-l-2 border-solid pl-14 py-4 border-colorHighlightsLight dark:border-colorHighlightsDark">
            <div>
              <h2 className={`text-3xl ${poppins.className}`}>{t("iam")}</h2>
              <p className="mt-10 text-lg">{t("description")}</p>
            </div>
            <div className="mt-10">
              <p className="pl-2">{t("myResume")}</p>
              <Button title={t("downloadResume")} px="20" />
            </div>
          </div>
        </div>
        <div>foto</div>
      </div>
    </div>
  );
};

export default Home;
