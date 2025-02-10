import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
const AddressContact = () => {
  const t = useTranslations("Contact");
  return (
    <div className="flex md:block justify-center w-full max-w-[1204px] dark:bg-colorBgDark bg-colorBgLight dark:text-colorTextDark text-colorTextLight">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 py-14 px-20">
        <div className="flex items-center gap-4">
          <div className="bg-colorHighlightsLight dark:bg-colorHighlightsDark p-2">
            <MdEmail size={30} className="text-colorTextDark dark:text-colorTextLight"/>
          </div>
          <div>
            <h3 className="font-bold text-xl">Email </h3>
            <p>thiago87gsa@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-colorHighlightsLight dark:bg-colorHighlightsDark p-2">
            <FaLocationDot size={30} className="text-colorTextDark dark:text-colorTextLight"/>
          </div>
          <div>
            <h3 className="font-bold text-xl">{t('address')}</h3>
            <p>Joinville / SC</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-colorHighlightsLight dark:bg-colorHighlightsDark p-2">
            <FaPhone size={30} className="text-colorTextDark dark:text-colorTextLight"/>
          </div>
          <div>
            <h3 className="font-bold text-xl">{t('phoneNumber')}</h3>
            <p>(47) 98912-4895</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContact;
