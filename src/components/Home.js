"use client";

import { useState, useEffect, useCallback } from "react";
import SelectWork from "../components/SelectWork.js";
import WorkTogether from "../components/WorkTogether.js";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const element = document.getElementById("simona-text");
    if (element) {
      const rect = element.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setIsHovered(isInside);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const renderHeader = () => (
    <div className="mt-[80px] pb-[80px]">
      <h1 className="text-[220px] text-center text-white leading-none font-mono relative">
        HI, I'M{" "}
        <span className="relative inline-block">
          <span
            id="simona-text"
            className="text-[#DE2A4A] transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0 : 1,
            }}
          >
            SIMONA
            <span className="text-white">.</span>
          </span>
          {renderProfileImage()}
        </span>
      </h1>
    </div>
  );

  const renderProfileImage = () => (
    <div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-start transition-opacity duration-300"
      style={{ opacity: isHovered ? 1 : 0 }}
    >
      <div className="w-[180px] h-[180px] rounded-full overflow-hidden">
        <img
          src="/ME.jpg"
          alt="Picture of Simona Fabbri"
          className="w-full h-full object-cover object-[37.6%_23.2%]"
        />
      </div>
    </div>
  );

  const renderSection = (title, content) => (
    <div className="pl-[100px] pr-[200px] mb-[100px] max-w-[1000px]">
      <div className="flex">
        <div className="w-[20%] mr-[50px]">
          <h3 className="text-[22px] text-white font-bold break-words">
            {title}
          </h3>
        </div>
        <div className="w-[80%]">
          <p className="text-[16px] font-normal text-[#AAAAAA]">{content}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1200px]">
      {renderHeader()}
      {renderSection(
        "WEB DEVELOPER",
        "Hello! I'm Simona Fabbri, a passionate web developer with a fervent passion for creating engaging and innovative digital experiences. I have experience in front-end development with skills in various technologies and programming languages. I am passionate, creative, and determined to achieve high-quality results. I strive to understand my clients' needs and deliver tailored web solutions that meet their expectations. I am always seeking new challenges and opportunities to improve my skills and grow professionally."
      )}
      {renderSection(
        "SKILLS",
        "I am passionate about front-end development and have experience using HTML, CSS, and JavaScript to create intuitive and responsive user interfaces. I have worked with various frameworks and libraries, including React.js, Next.js, and Tailwind CSS, to create dynamic and modern web experiences.\n\nI also have skills in low-code and no-code development using tools like Framer and Webflow. These platforms enable the creation of interactive prototypes and websites while minimizing the need for custom code, thereby accelerating the development process and offering greater flexibility in design.\n\nI am meticulous and committed to adhering to the design provided to me in every project I undertake. I strive to pay close attention to details, ensuring that the design specifications are faithfully implemented."
      )}
      <SelectWork />
      <WorkTogether />
    </div>
  );
};

export default Home;
