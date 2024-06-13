import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-small-white/[0.19] bg-grid-small-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Portfolio
          </p>
          <TextGenerateEffect
            words="Hello! My name is Ramon, I'm 18 years old and I'm a Systems Analysis and Development student."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Since I was young, I have always been fascinated by technology and programming.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <a href="/Curriculo.pdf" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Visualizar CV"
                icon={<FaLocationArrow />}
                position="left"
              />
            </a>
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 w-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                   bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl"
                >
                  <img src={info.img} alt={`icon-${info.id}`} width={20} height={20} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
