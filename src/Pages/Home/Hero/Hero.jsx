import badsha from "../../../assets/badsha.png";
import Container from "../../../Hooks/Container";
import developerImg from "../../../assets/developer.png";
import bgImg from "../../../assets/header_bg.png";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className=" relative min-h-[600px]">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className={` bg-no-repeat 
            bg-right-bottom `}
      >
        <div className="flex items-center flex-col lg:flex-row justify-between px-10 py-0">
          <div className="md:w-[585px] w-full max-w-7xl mx-auto flex flex-col gap-1 lg:gap-6">
            <h4 className="text-4xl font-semibold ">Hi, I am</h4>
            <h2 className="text-4xl lg:text-6xl w-full font-bold ">
              Chan Badsha
            </h2>
            <p className="text-lg  w-full">
              As a passionate web developer, I enjoy building websites that are
              functional and user-friendly. I'm always learning new technologies
              and improving my skills to create clean, responsive designs that
              help businesses connect with their audience.
            </p>
            <div className="flex gap-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1zbWQU6PiBJ3z_IafYdOymCSLEkHjwVCe"
                className="btn btn-outline btn-secondary"
              >
                <span>
                  <FaDownload />
                </span>{" "}
                Download CV
              </a>

              <div className="flex gap-2 justify-center items-center">
                <a
                  href="https://github.com/Chanbadsha"
                  target="_blank"
                  className="btn btn-xs btn-outline rounded-full btn-secondary"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/chan-badsha-bhuiyan-602658317/"
                  target="_blank"
                  className="btn btn-xs btn-outline rounded-full btn-secondary"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/ChanBadshaBhuiyan2004"
                  target="_blank"
                  className="btn btn-xs btn-outline rounded-full btn-secondary"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
          <img className="w-[585px]" src={badsha} alt="Chan Badsha" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
