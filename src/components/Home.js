"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import SelectWork from "./SelectWork.js";
import WorkTogether from "./WorkTogether.js";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const simonaTextRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (simonaTextRef.current) {
      const rect = simonaTextRef.current.getBoundingClientRect();
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

  const fadeInUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  const ScrollAnimatedSection = useCallback(
    ({ children }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.3 });

      return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    },
    [fadeInUp]
  );

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="w-full px-[20px] md:px-[60px] lg:px-[120px] pb-[60px] md:pb-[100px] lg:pb-[120px] pt-[80px]">
        <div>
          <motion.h1
            className="text-[90px] md:text-[150px] lg:text-[220px] text-white font-mono leading-none"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HI, I'M {""}
            <span className="relative">
              <span
                ref={simonaTextRef}
                className="text-[#DE2A4A] font-mono transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 0 : 1,
                }}
              >
                SIMONA
                <span className="text-white">.</span>
              </span>
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-start transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lg:w-[180px] lg:h-[180px] md:w-[140px] md:h-[140px] w-[80px] h-[80px] rounded-full overflow-hidden">
                  <img
                    src="/ME.jpg"
                    alt="Picture of Simona Fabbri"
                    className="w-full h-full object-cover object-[37.6%_23.2%]"
                  />
                </div>
              </motion.div>
            </span>
          </motion.h1>
          <div className="pt-[40px] lg:pt-[100px] md:pt-[70px] lg:pb-[100px] md:pb-[70px] pb-[40px] max-w-[1000px] flex justify-center items-center  ">
            <div className="lg:px-[70px] md:px-[35px]">
              <div className="md:flex-col flex-row">
                <ScrollAnimatedSection>
                  <div className="flex flex-col md:flex-row ">
                    <div className="mr-[60px] md:w-[20%] ">
                      <h3 className="lg:text-[22px] md:text-[18px] text-[14px] text-white font-bold pb-[15px] md:pb-[0px]">
                        <span className="lg:hidden ">WEB DEVELOPER</span>
                        <span className="hidden lg:inline">
                          WEB
                          <br /> DEVELOPER
                        </span>
                      </h3>
                    </div>
                    <div className="md:w-[70%] ">
                      <p className="lg:text-[16px] md:text-[14px] text-[12px] font-normal text-[#AAAAAA] lg:pb-[80px] pb-[40px]">
                        Hello! I'm Simona Fabbri, a passionate web developer
                        with a fervent passion for creating engaging and
                        innovative digital experiences.
                        <br />I have experience in front-end development with
                        skills in various technologies and programming
                        languages.
                        <br />I am passionate, creative, and determined to
                        achieve high-quality results.
                        <br />I strive to understand my clients' needs and
                        deliver tailored web solutions that meet their
                        expectations.
                        <br />I am always seeking new challenges and
                        opportunities to improve my skills and grow
                        professionally.
                      </p>
                    </div>
                  </div>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection>
                  <div className="flex flex-col md:flex-row ">
                    <div className="mr-[60px] md:w-[20%]  ">
                      <h3 className="lg:text-[22px] md:text-[18px] text-[14px] text-white font-bold pb-[15px] md:pb-[0px]">
                        SKILLS
                      </h3>
                    </div>
                    <div className="md:w-[70%]">
                      <p className="lg:text-[16px] md:text-[14px] text-[12px] font-normal text-[#AAAAAA] lg:pb-[80px] pb-[40px] ">
                        I am passionate about front-end development and have
                        experience using HTML, CSS, and JavaScript to create
                        intuitive and responsive user interfaces.
                        <br />I have worked with various frameworks and
                        libraries, including React.js, Next.js, and Tailwind
                        CSS, to create dynamic and modern web experiences.
                        <br />I also have skills in low-code and no-code
                        development using tools like Framer and Webflow.
                        <br />
                        These platforms enable the creation of interactive
                        prototypes and websites while minimizing the need for
                        custom code, thereby accelerating the development
                        process and offering greater flexibility in design.
                        <br />I am meticulous and committed to adhering to the
                        design provided to me in every project I undertake.
                        <br /> I strive to pay close attention to details,
                        ensuring that the design specifications are faithfully
                        implemented.
                      </p>
                    </div>
                  </div>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection>
                  <SelectWork />
                </ScrollAnimatedSection>
                <div className="pb-[40px] md:pb-[90px] lg:pb-[140px]"></div>
                <ScrollAnimatedSection>
                  <WorkTogether />
                </ScrollAnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
