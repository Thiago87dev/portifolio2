import { useTranslations } from "next-intl";
const TextsContact = () => {
  const t = useTranslations("Contact");
  return (
    <div className="flex flex-col justify-center dark:text-colorTextDark text-colorTextLight w-full sm:w-[80%] md:w-1/2 py-10 md:pr-10 md:h-[570px] gap-8 text-center md:text-left">
      <div>
        <h2 className="italic">{t('letsBuild')}</h2>
        <h1 className="text-[52px] leading-none sm:text-6xl font-bold">{t('letsTalk')}</h1>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-lg">
          {t('ifYouLikedMyWork')}
        </p>

        <p className="text-lg">
          {t('imAlwaysOpenTo')}
        </p>
      </div>
    </div>
  );
};

export default TextsContact;
