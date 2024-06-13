import { FaLocationArrow } from "react-icons/fa";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-40 flex flex-col items-center">
        <h1 className="heading">
          A small selection of <span className="text-purple">recent projects</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mt-10 w-full max-w-5xl">
          {projects.slice(0, 2).map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[28rem] w-[80vw]"
              key={item.id}
            >
              <PinContainer>
                <div className="relative flex items-center justify-center sm:w-[28rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item.title}</h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "3vh 0" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={"https://github.com/RamonSantos9"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center lg:text-xl md:text-xs text-sm text-purple relative group hover:text-white transition-colors duration-300"
                  >
                    <span className="relative z-10">Check Live Site</span>
                    <span className="absolute bottom-0 left-[50%] w-[60%] h-[2px] bg-purple-500 transform translate-x-[-50%] group-hover:w-[100%] transition-all duration-300"></span>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </PinContainer>
            </div>
          ))}
          <div
            className="lg:col-span-2 lg:min-h-[37rem] h-[25rem] flex items-center justify-center sm:w-[60rem] w-[80vw]"
            key={projects[2].id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-[60rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={projects[2].img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{projects[2].title}</h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "3vh 0" }}
              >
                {projects[2].des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {projects[2].iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={"https://github.com/RamonSantos9"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center lg:text-xl md:text-xs text-sm text-purple relative group hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10">Check Live Site</span>
                  <span className="absolute bottom-0 left-[50%] w-[60%] h-[2px] bg-purple-500 transform translate-x-[-50%] group-hover:w-[100%] transition-all duration-300"></span>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
