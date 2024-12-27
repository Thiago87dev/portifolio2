"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";

import { toggleDarkModeRedux } from "@/redux/darkMode/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { useTranslations } from "next-intl";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode);

  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("Navbar");

  const [activeItem, setActiveItem] = useState('');

  const toggleDarkMode = () => {
    dispatch(toggleDarkModeRedux());
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Sincroniza o item ativo com a rota atual
    if (pathname.includes("/projects")) {
      setActiveItem(t("projects"));
    } else if (pathname.includes("/about")) {
      setActiveItem(t("about"));
    } else if (pathname.includes("/contact")) {
      setActiveItem(t("contact"));
    } else {
      setActiveItem(t("home"));
    }
  }, [pathname, t]);

  const handleLanguage = () => {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/pt")) {
      router.push(pathname, { locale: "en" });
    }else  {
      router.push(pathname, { locale: "pt" });
    }
  };

  const menuItems = [
    { label: t("home"), path: "/" },
    { label: t("projects"), path: "/projects" },
    { label: t("about"), path: "/about" },
    { label: t("contact"), path: "/contact" },
  ];

  return (
    <nav className="md:px-32 w-full py-6 bg-colorBgNavLight text-colorTextLight dark:text-colorTextDark dark:bg-colorBgNavDark">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-extrabold  md:text-2xl">{t("title")}</h1>
        </Link>
        <div>
          <ul className="flex justify-around text-lg font-semibold xl:gap-28 lg:gap-10 ">
            {menuItems.map((item, index) => (
              <li
                onClick={() => setActiveItem(item.label)}
                className="relative cursor-pointer uppercase"
                key={index}
              >
                {activeItem === item.label && (
                  <div className="absolute left-0 right-0 h-1 bg-colorHighlightsLight dark:bg-colorHighlightsDark top-[20px] translate-y-2"></div>
                )}
                <Link href={item.path}>
                <span
                  className={`${
                    activeItem === item.label ? "opacity-100 text-xl" : "opacity-90"
                  }`}
                >
                  {item.label}
                </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 select-none">
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
              <p className="pr-1">
                <FaMoon />
              </p>
            ) : (
              <p>
                <FaSun size={20} />
              </p>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="font-semibold text-sm md:text-lg">
              {darkMode ? <p>{t("darkMode")}</p> : <p>{t("lightMode")}</p>}
            </div>
            <div
              title={t("titleBtnLanguage")}
              onClick={handleLanguage}
              className="cursor-pointer"
            >
              <IoLanguage size={30} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
