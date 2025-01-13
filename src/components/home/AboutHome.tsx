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
          <p className="w-2/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-8 w-[35%]">
            <div className="flex gap-6">
              <div className="text-5xl">
                <BiConversation className="dark:bg-colorHighlightsDark bg-colorHighlightsLight text-white p-2 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Comunicação</h2>
                <p className="w-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <hr className="w-4/5 border-gray-700" />
          </div>
          <div className="flex flex-col gap-8 w-[65%] pl-20 dark:border-l-colorHighlightsDark border-l-colorHighlightsLight border-l-solid border-l-2">
            <p>
              Actress, Model, and Health and Wellness Enthusiast Irene Bryant
              has over 45 million followers across YouTube, Facebook and
              Instagram, earning the spot as one of the top five most viewed
              Instagram story accounts in the world. With over 1.3 million new
              followers a month on Instagram alone, Irene is a top content
              creator on a mission to help people feel their best through
              compelling storytelling and high-quality videos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
              proin nibh nisl condimentum id venenatis. Amet dictum sit amet
              justo donec enim diam vulputate ut. In nisl nisi scelerisque eu
              ultrices vitae auctor eu augue. Id eu nisl nunc mi ipsum faucibus
              vitae. Sit amet commodo nulla facilisi. Ultricies integer quis
              auctor elit sed vulputate mi sit amet. Auctor eu augue ut lectus
              arcu bibendum at varius. Vel quam elementum pulvinar etiam non
              quam lacus. Pellentesque adipiscing commodo elit at imperdiet dui.
              Sed risus pretium quam vulputate dignissim. Fermentum iaculis eu
              non diam phasellus vestibulum lorem sed risus. Enim diam vulputate
              ut pharetra sit amet aliquam.
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
