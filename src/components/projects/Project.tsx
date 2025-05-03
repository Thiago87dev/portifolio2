import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ExpandebleText from "../ExpandebleText";

interface IconsProps {
  icon: React.ReactNode;
  title: string;
  colorText: string;
  colorBg: string;
  rounded?: string;
}

interface DataProps {
  imgPath: string;
  alt: string;
  title: string;
  icons: IconsProps[];
  hrefSite: string;
  hrefRepo: string;
  text: string;
}

interface ProjectProps {
  data: DataProps;
  imgSide: "left" | "right";
}

const Project = ({ data, imgSide }: ProjectProps) => {
  const t = useTranslations("Home");
  const t2 = useTranslations("Projects");

  return (
    <div className="flex lg:w-[1204px] gap-8 lg:justify-between justify-center  h-full px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        {imgSide === "left" && (
          <div className=" lg:w-1/2 ">
            <Link target="_blank" href={data.hrefSite}>
              <Image
                alt="img"
                src={data.imgPath}
                width={680}
                height={680}
                className="md:h-96 md:w-[678px]"
              />
            </Link>
          </div>
        )}
        <div className="flex flex-col  justify-around lg:w-1/2 overflow-hidden ">
          <div className="flex flex-col justify-around gap-5 w-full min-h-96">
            <h1 className="text-4xl md:text-6xl text-center sm:text-left font-bold">
              {t2(data.title)}
            </h1>
            <div className="text-lg md:text-xl max-w-[678px]">
              <ExpandebleText text={t2(data.text)} />
            </div>
            <ul className="flex justify-center sm:justify-start text-3xl w-full gap-3">
              {data.icons.map((item) => (
                <li
                  key={item.title}
                  title={item.title}
                  style={{
                    color: item.colorText,
                    backgroundColor: item.colorBg,
                    borderRadius: item.rounded,
                  }}
                >
                  {item.icon}
                </li>
              ))}
            </ul>
            <div className="flex gap-8">
              <Link className="w-full" target="_blank" href={data.hrefSite}>
                <Button title={t("website")} />
              </Link>
              <Link className="w-full" target="_blank" href={data.hrefRepo}>
                <Button title={t("repository")} />
              </Link>
            </div>
          </div>
        </div>
        {imgSide === "right" && (
          <div className="lg:w-1/2">
            <Link target="_blank" href={data.hrefSite}>
              <Image
                alt="img"
                src={data.imgPath}
                width={680}
                height={680}
                className="h-96 w-[678px] "
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
