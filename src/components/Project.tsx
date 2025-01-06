import Image from "next/image";
import Button from "./Button";

interface IconsProps {
  icon: React.ReactNode;
  title: string;
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
  side: "left" | "right";
}

const Project = ({ data, side }: ProjectProps) => {
  return (
    <div className="flex w-[1204px] gap-8 justify-between h-full ">
      {side === "left" ? (
        <div className="flex gap-8">
          <div className=" w-1/2">
            <Image
              alt="img"
              src={data.imgPath}
              width={680}
              height={680}
              className="h-96 w-[678px]"
            />
          </div>
          <div className="flex flex-col justify-around w-1/2">
            <h1 className="text-6xl font-bold">{data.title}</h1>
            <p className="text-xl">{data.text}</p>
            <ul className="flex text-3xl w-full gap-3">
              {data.icons.map((item) => (
                <li key={item.title}>{item.icon}</li>
              ))}
            </ul>
            <div className="flex gap-8">
              <Button title="Site" />
              <Button title="Repositorio" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="flex flex-col justify-around w-1/2">
            <h1 className="text-6xl font-bold">{data.title}</h1>
            <p className="text-xl">{data.text}</p>
            <ul className="flex text-3xl w-full gap-3">
              {data.icons.map((item) => (
                <li key={item.title}>{item.icon}</li>
              ))}
            </ul>
            <div className="flex gap-8">
              <Button title="Site" />
              <Button title="Repositorio" />
            </div>
          </div>
          <div className=" w-1/2">
            <Image
              alt="img"
              src={data.imgPath}
              width={680}
              height={680}
              className="h-96 w-[678px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
