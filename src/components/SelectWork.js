"use client";
import dataLavori from "../app/data/data.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const SelectWork = () => {
  const variants = {
    hover: { opacity: 1, rotate: 0, translateY: 0 },
  };

  return (
    <div className="max-w-[1200px]">
      <div className="pl-[100px]  mb-[150px] ">
        <div className="flex">
          <div className="w-[20%] mr-[50px]">
            <h3 className="text-[22px] text-white font-bold break-words">
              SELECTED <span className="whitespace-normal block">WORK</span>
            </h3>
          </div>

          <div className="w-[80%]">
            {dataLavori.map((obj) => (
              <div className="flex" key={obj.number}>
                <div className="text-[#AAAAAA] text-[16px] font-normal">
                  {obj.number}
                </div>
                <motion.div className="relative " whileHover="hover">
                  <Link
                    href={`/Works/${obj.slug
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <div className="text-[#DE2A4A] text-[180px] tracking-[-0.035em] leading-none font-mono z-10 hover:opacity-[0.6] cursor-pointer">
                      {obj.name}
                    </div>
                  </Link>
                  <div className="w-[400px] h-[400px] absolute left-[340px] pointer-events-none bottom-[-250px]  ">
                    <motion.div
                      initial={{ opacity: 0, rotate: -10, translateY: 50 }}
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 500,
                      }}
                      className="z-20 "
                      variants={variants}
                      style={{ position: "absolute", height: 400, width: 400 }}
                    >
                      <Image
                        id={Math.random()}
                        src={obj.image}
                        fill={true}
                        alt="Picture of the work"
                        priority
                        className="rounded-[20px] "
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectWork;
