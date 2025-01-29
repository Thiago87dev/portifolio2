const AboutAbout = () => {
  return (
    <div className="dark:bg-colorBg2Dark bg-colorBgLight flex flex-col justify-start items-start w-full min-h-screen pt-20  dark:text-colorTextDark text-colorTextLight overflow-x-hidden">
      <div className="flex px-4 lg:px-0 items-start  mb-20 w-screen h-[420px] sm:h-72 bg-colorBg3Light dark:bg-colorBg3Dark">
        <div className="flex flex-col gap-8 items-center justify-center h-full px-4 lg:px-0 mb-20  w-full mx-auto  max-w-[1204px]">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center">
            Quem Sou Eu Além do Código
          </h2>
          <p className="text-center text-base sm:text-lg max-w-[640px]">
            Por trás de cada linha de código, existe uma jornada de aprendizado,
            desafios e conquistas. Sou apaixonado por tecnologia e
            desenvolvimento, sempre em busca de aprimorar minhas habilidades e
            criar soluções que fazem a diferença.
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[1204px] h-full  mx-auto">
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl">
              I’m a self-made, talented actress and television host with a
              strong fanbase of over 35 million across social media.
            </h2>
            <p className="">
              Nunc non blandit massa enim nec dui nunc mattis enim. Faucibus
              interdum posuere lorem ipsum. Blandit aliquam etiam erat velit
              scelerisque in. Magna eget est lorem ipsum dolor sit amet.
            </p>
          </div>
          <hr className=" border-gray-700 dark:border-gray-400"/>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl">
              Lectus proin nibh nisl condimentum id venenatis.
            </h3>
            <p>
              Enim nunc faucibus a pellentesque sit amet porttitor. Porttitor
              rhoncus dolor purus non enim praesent elementum facilisis leo.
              Imperdiet massa tincidunt nunc pulvinar sapien. Nunc eget lorem
              dolor sed viverra. Felis bibendum ut tristique et egestas quis
              ipsum suspendisse. Molestie at elementum eu facilisis sed odio
              morbi quis.
            </p>
          </div>
        </div>
        <div className="w-[40%] h-[520px] bg-colorBg3Light dark:bg-colorBg3Dark rounded-br-[70px]"></div>
      </div>
    </div>
  );
};

export default AboutAbout;
