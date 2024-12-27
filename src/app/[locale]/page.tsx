import Button from "@/components/Button";
import { useTranslations } from "next-intl"; // declare this import
const Home = () => {
  const t = useTranslations("Home"); // declare the hook passing into parameter a context name
  return (
    <div className="md:px-32 md:py-6 dark:text-colorTextDark text-colorTextLight">
      <h1>{t("title")}</h1>{" "}
      {/* Call the hook by passing as parameter the dictionary key you want */}
      <p>{t("description")}</p>
      <Button/>
    </div>
  );
};

export default Home;
