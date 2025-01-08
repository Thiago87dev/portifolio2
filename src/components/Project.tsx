import Image from "next/image";
import Button from "./Button";

interface IconsProps {
  icon: React.ReactNode;
  title: string;
  colorText:string,
  colorBg: string,
  rounded?: string
}

interface DataProps {
  imgPath: string;
  alt: string;
  title: string;
  text: string;
  icons: IconsProps[];
  hrefSite: string;
  hrefRepo: string;
}

interface ProjectProps {
  data: DataProps;
  imgSide: "left" | "right";
}

const Project = ({ data, imgSide }: ProjectProps) => {
  return (
    <div className="flex w-[1204px] gap-8 justify-between h-full ">
      <div className="flex gap-8">
        {imgSide === "left" && (
          <div className=" w-1/2">
            <Image
              alt="img"
              src={data.imgPath}
              width={680}
              height={680}
              className="h-96 w-[678px]"
            />
          </div>
        )}
        <div className="flex flex-col justify-around w-1/2">
          <h1 className="text-6xl font-bold">{data.title}</h1>
          <p className="text-xl">{data.text}</p>
          <ul className="flex text-3xl w-full gap-3">
            {data.icons.map((item) => (
              <li key={item.title} title={item.title} className="hover:scale-125" style={{ color: item.colorText, backgroundColor: item.colorBg, borderRadius: item.rounded}}>{item.icon}</li>
            ))}
          </ul>
          <div className="flex gap-8">
            <Button title="Site" />
            <Button title="Repositorio" />
          </div>
        </div>
        {imgSide === "right" && (
          <div className=" w-1/2">
            <Image
              alt="img"
              src={data.imgPath}
              width={680}
              height={680}
              className="h-96 w-[678px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
