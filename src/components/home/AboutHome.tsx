import { BiConversation } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { MdOutlineReportProblem } from "react-icons/md";
import Button from "../Button";
const AboutHome = () => {
  return (
    <div className="dark:bg-colorBg3Dark bg-colorBg3Light flex flex-col items-center  w-full pt-16 md:pt-16 dark:text-colorTextDark text-colorTextLight min-h-screen pb-8">
      <div className="flex flex-col gap-8 w-[1204px] ">
        <div className="mb-20">
          <div className="flex px-4 lg:px-0 items-start mb-4 text-5xl font-semibold w-full max-w-[1204px]">
            <h2 className="w-2/4  pb-1 border-b-4 dark:border-colorHighlightsDark border-colorHighlightsLight">
              Sobre mim
            </h2>
          </div>
          <p className="w-2/5 text-lg">
            Minha paixão por tecnologia me motiva a explorar, aprender e criar
            soluções que impactem positivamente o mundo.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-8 w-[35%] dark:border-r-colorHighlightsDark border-r-colorHighlightsLight border-r-solid border-r-2">
            <div className="flex gap-6">
              <div className="text-5xl">
                <BiConversation className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Comunicação</h2>
                <p className="w-2/3">
                  Habilidade de transmitir ideias de forma clara e eficaz,
                  promovendo entendimento e colaboração em projetos.
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
            <div className="flex gap-6">
              <div className="text-5xl ">
                <GrGroup className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Trabalho em equipe
                </h2>
                <p className="w-2/3">
                  Capacidade de cooperar com diferentes perfis profissionais,
                  garantindo alinhamento e sucesso nos objetivos comuns.
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
            <div className="flex gap-6">
              <div className="text-5xl">
                <MdOutlineReportProblem className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Resolução de problemas
                </h2>
                <p className="w-2/3">
                  Aptidão para identificar desafios, propor soluções práticas e
                  implementar melhorias rapidamente e com eficiência.
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
          </div>
          <div className="flex flex-col gap-8 w-[65%] pl-20 text-lg">
            <p>
              Minhas <span className="font-bold">principais habilidades</span>{" "}
              estão ligadas à minha capacidade de colaborar e me adaptar a
              diferentes cenários.{" "}
              <span className="font-bold">Comunicação</span> eficaz,{" "}
              <span className="font-bold">trabalho em equipe</span> e{" "}
              <span className="font-bold">resolução de problemas</span> são{" "}
              pilares da minha atuação, permitindo que eu me conecte com as
              pessoas e enfrente desafios com criatividade e eficiência. Além
              disso, sou <span className="font-bold">dedicado</span>, tenho{" "}
              <span className="font-bold">facilidade em aprender</span> novas
              tecnologias e metodologias, e valorizo a{" "}
              <span className="font-bold">organização</span> e a{" "}
              <span className="font-bold">proatividade</span> para alcançar
              resultados consistentes e de qualidade.
            </p>
            <p>
              No <span className="font-bold">aspecto técnico</span>, desenvolvo
              aplicações modernas e responsivas, combinando uma experiência
              sólida em{" "}
              <span className="font-bold">
                HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux Toolkit
                e Tailwind
              </span>{" "}
              no frontend, com{" "}
              <span className="font-bold">Python, Django e MySQL</span> no
              backend. Essa combinação de tecnologias me permite criar soluções
              completas e integradas, sempre priorizando eficiência,
              escalabilidade e a melhor experiência para os usuários.
            </p>
            <p>
              Estou sempre em busca de novos aprendizados e desafios que me
              permitam crescer tanto no âmbito profissional quanto no pessoal.
              Com essa união de habilidades técnicas e comportamentais, busco
              contribuir para projetos inovadores e que gerem impacto positivo.
            </p>
            <div className="w-3/12">
              <Button title="Mais" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
