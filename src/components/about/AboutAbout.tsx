import Image from "next/image";

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
        <div className="flex flex-col justify-around w-1/2">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl">Experiências que moldaram meu caminho.</h2>
            <p className="text-lg">
              Nascido em São Paulo / SP em 30/11/1987, moro em Joinville / SC há
              mais de uma década. Minha trajetória profissional passou por
              diversas áreas: já fui atendente do McDonald´s, trabalhei na linha
              de produção de empresas como Tigre e Docol, fui vendedor da Vivo,
              analista de risco na Opentech e motorista. Atualmente, trabalho
              como motorista de aplicativo, enquanto me preparo para ingressar
              na área de tecnologia.
            </p>
          </div>
          <hr className=" border-gray-700 dark:border-gray-400" />
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl">
              Autodidata e apaixonado por tecnologia: Como cheguei até aqui.
            </h2>
            <p className="text-lg">
              Desde pequeno, sempre tive curiosidade sobre tecnologia, mas foi
              no final de 2021 que decidi transformar essa paixão em profissão.
              Buscando uma mudança de carreira para proporcionar uma vida melhor
              para minha família, iniciei meus estudos em programação com
              Python. Aos poucos, me aprofundei também no desenvolvimento
              frontend, aprendendo HTML, CSS e JavaScript.
            </p>
            <p>
              Em julho de 2023, dei um passo importante ao ingressar na
              faculdade de Análise e Desenvolvimento de Sistemas, onde sigo
              estudando até hoje. Durante essa trajetória, ampliei meus
              conhecimentos para incluir TypeScript, React, Next.js, Django,
              MySQL, Git e Redux. A maior parte do que sei aprendi por conta
              própria, por meio de vídeos no YouTube e cursos na Udemy. Sou
              autodidata, tenho facilidade em aprender coisas novas e sempre
              busco me aprimorar.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-8 py-12 gap-10 items-center w-[40%] bg-colorBg3Light dark:bg-colorBg3Dark rounded-br-[70px]">
          <div className="flex flex-col gap-2">
            <div >
              <Image alt="cabeça" src={'/images/photo3.jpeg'} width={300} height={300} className="w-36 h-36 rounded-full"/>
            </div>
            <div className="flex flex-col items-center">
              <h2 >Thiago Alves</h2>
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-center">Compromisso com o Crescimento e a Evolução.</h2>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Meu principal objetivo é conquistar uma posição na área de
              desenvolvimento, onde poderei unir minha paixão por tecnologia à
              necessidade de uma rotina mais equilibrada. Quero ter mais
              qualidade de vida e mais tempo para estar com meus dois filhos,
              uma menina de 14 anos e um menino de 9 anos. Além da experiência
              em programação, ao longo dos anos também fiz cursos de
              informática, manutenção de computadores, inglês básico e lógica de
              programação, o que contribuiu para minha base técnica e minha
              adaptabilidade.
            </p>
            <p>
              Sou uma pessoa dedicada, esforçada e comunicativa. Gosto de
              trabalhar em equipe e acredito que a colaboração é essencial para
              o crescimento profissional e para o sucesso de qualquer projeto.
              Estou sempre pronto para aprender, enfrentar desafios e evoluir,
              pois sei que a tecnologia é um campo dinâmico e em constante
              transformação. Essa jornada está apenas começando, e estou
              determinado a construir um futuro sólido e promissor no mundo do
              desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAbout;
