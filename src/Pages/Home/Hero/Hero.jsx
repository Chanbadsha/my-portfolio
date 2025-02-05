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
import { ReactTyped, Typed } from "react-typed";
const Hero = () => {
  return (
    <div className=" relative pt-12 min-h-[600px]">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className={` bg-no-repeat 
            bg-right-bottom `}
      >
        <div className="flex items-center flex-col lg:flex-row justify-between px-10 py-0">
          <div className="md:w-[585px] w-full max-w-7xl mx-auto flex flex-col gap-2 lg:gap-4">
            <h4 className="text-4xl font-semibold text-gray-700 tracking-wide">
              Hi, I am
            </h4>

            <h5 className="text-2xl lg:text-4xl font-medium text-secondary mt-0">
              <ReactTyped
                strings={["Chan Badsha", " A Frontend Developer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h5>

            <p className="text-lg text-gray-600 w-full leading-relaxed">
              As a passionate web developer, I enjoy building websites that are
              functional and user-friendly. I'm always learning new technologies
              and improving my skills to create clean, responsive designs that
              help businesses connect with their audience.
            </p>

            {/* Buttons & Social Icons */}
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1ltG6b1Emf28IaK7oJZNnoQ9CzD-K0iUK"
                className="btn btn-outline btn-secondary"
              >
                <span>
                  <FaDownload />
                </span>{" "}
                My Resume
              </a>

              <div className="flex gap-3 justify-center items-center">
                <a
                  href="https://github.com/Chanbadsha"
                  target="_blank"
                  className="p-3 rounded-full text-2xl bg-gray-100 hover:bg-gray-200 transition-all shadow"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/chan-badsha-bhuiyan-602658317/"
                  target="_blank"
                  className="p-3 rounded-full text-2xl bg-gray-100 hover:bg-gray-200 transition-all shadow"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/ChanBadshaBhuiyan2004"
                  target="_blank"
                  className="p-3 rounded-full text-2xl bg-gray-100 hover:bg-gray-200 transition-all shadow"
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
