const TextsContact = () => {
  return (
    <div className="flex flex-col justify-center dark:text-colorTextDark text-colorTextLight w-full sm:w-[80%] md:w-1/2 py-10 md:pr-10 md:h-[570px] gap-8 text-center md:text-left">
      <div>
        <h2 className="italic">Vamos construir algo incrível juntos!</h2>
        <h1 className="text-[52px] leading-none sm:text-6xl font-bold">Vamos Conversar!</h1>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-lg">
          Se você gostou do meu trabalho e quer conversar sobre um projeto,
          parceria ou qualquer outra oportunidade, sinta-se à vontade para
          entrar em contato!
        </p>

        <p className="text-lg">
          Estou sempre aberto a novas oportunidades e colaborações e sou um
          desenvolvedor apaixonado por criar interfaces intuitivas e
          experiências web de alto desempenho. Se você está em busca de um
          profissional para fortalecer sua equipe ou desenvolver um novo
          projeto, entre em contato. Respondo o mais rápido possível e mal posso
          esperar para trabalharmos juntos!
        </p>
      </div>
    </div>
  );
};

export default TextsContact;
