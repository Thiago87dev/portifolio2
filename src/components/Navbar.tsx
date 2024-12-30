"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

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

  const [activeItem, setActiveItem] = useState("");
  const [activeMenu, setActiveMenu] = useState(true);

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
    } else {
      router.push(pathname, { locale: "pt" });
    }
  };

  const handleToggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const handleCloseMenu = () => {
    setActiveMenu(false);
  };

  const menuItems = [
    { label: t("home"), path: "/" },
    { label: t("projects"), path: "/projects" },
    { label: t("about"), path: "/about" },
    { label: t("contact"), path: "/contact" },
  ];

  return (
    <nav className=" flex flex-col items-center w-full bg-transparent text-colorTextLight dark:text-colorTextDark fixed select-none">
      <div className="flex flex-col w-full items-center max-w-[1360px] ">
        <div className="flex items-center w-full max-w-[1220px] px-4 py-1 justify-between  ">
          <div
            title={t("titleBtnLanguage")}
            onClick={handleLanguage}
            className=" flex items-center gap-4"
          >
            <div className="font-semibold text-sm md:text-lg  cursor-pointer">
              {t("language")}
            </div>
            <div className=" cursor-pointer">
              <IoLanguage size={30} />
            </div>
          </div>
          <div onClick={toggleDarkMode} className="flex items-center gap-4">
            <div className="cursor-pointer">
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
              <div className="font-semibold text-sm md:text-lg cursor-pointer">
                {darkMode ? <p>{t("darkMode")}</p> : <p>{t("lightMode")}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-5 justify-center w-full max-w-[1440px] border-y-[1px] border-solid border-gray-600">
          <div className=" flex justify-between w-full max-w-[1220px] px-4">
            <div className="flex w-full  max-w-[1220px] justify-between items-center">
              <Link href="/">
                <h1 className="font-extrabold  md:text-2xl">{t("title")}</h1>
              </Link>
              <div className="flex relative justify-center md:hidden">
                {activeMenu ? (
                  <div onClick={handleCloseMenu}>
                    <IoClose size={30} />
                  </div>
                ) : (
                  <div onClick={handleToggleMenu}>
                    <IoMenu size={30} />
                  </div>
                )}
                <div
                  className={` overflow-hidden absolute top-6 -left-64 transition-all duration-500 ease-in-out dark:bg-colorHighlightsLight bg-colorHighlightsDark w-72 rounded-lg ${
                    activeMenu ? " opacity-100 h-96" : "l opacity-0 h-0"
                  }`}
                >
                  <ul className="flex h-full flex-col justify-around items-center text-lg font-semibold ">
                    {menuItems.map((item, index) => (
                      <li
                        onClick={() => {
                          setActiveItem(item.label);
                          setActiveMenu(false);
                        }}
                        className="relative cursor-pointer uppercase"
                        key={index}
                      >
                        {activeItem === item.label && (
                          <div className="absolute left-0 right-0 h-1 bg-colorHighlightsLight dark:bg-colorHighlightsDark top-[20px] translate-y-2"></div>
                        )}
                        <Link href={item.path}>
                          <span
                            className={`${
                              activeItem === item.label
                                ? "opacity-100 text-xl"
                                : "opacity-90"
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex">
                <ul className="flex justify-around text-lg font-semibold md:gap-10 ">
                  {menuItems.map((item, index) => (
                    <li
                      onClick={() => {
                        setActiveItem(item.label);
                        setActiveMenu(false);
                      }}
                      className="relative cursor-pointer uppercase"
                      key={index}
                    >
                      {activeItem === item.label && (
                        <div className="absolute left-0 right-0 h-1 bg-colorHighlightsLight dark:bg-colorHighlightsDark top-[20px] translate-y-2"></div>
                      )}
                      <Link href={item.path}>
                        <span
                          className={`${
                            activeItem === item.label
                              ? "opacity-100 text-xl"
                              : "opacity-90"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
