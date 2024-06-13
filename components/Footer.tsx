import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Am I Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach your goals.
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5512996380529&text&type=phone_number&app_absent=0" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center opacity-70">
        <p className="md:text-base text-sm md:font-normal font-light relative z-10">
          Copyright © 2024 Ramon Santos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
