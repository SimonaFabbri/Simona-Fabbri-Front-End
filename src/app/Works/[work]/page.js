"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dataLavori from "../../data/data.json";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";

const Work = () => {
  const params = useParams();
  const work = params.work;

  const workData = dataLavori.find(
    (item) => item.slug.toLowerCase() === work.toLowerCase()
  );

  if (!workData) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <div className=" max-w-[1200px] mx-auto px-4 ">
        <div className="w-full max-w-[960px] mx-auto">
          <div className="pb-[40px] pt-[80px]">
            <Link
              href="/"
              className="text-[#DE2A4A] text-[22px] leading-[1.2] font-mono hover:opacity-[0.6]"
            >
              <span className="pr-1">&lt;</span> BACK
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white lg:text-[220px] md:text-[150px] text-[90px] pb-[40px] leading-none font-mono text-start">
              <Link
                href={workData.url}
                className="hover:text-[#DE2A4A] hover:underline hover:decoration-2 hover:underline-offset-8 transition-opacity duration-300"
                target="_blank"
              >
                {workData.name}
              </Link>
            </h1>
            <p className="text-[#AAAAAA]  lg:pb-[120px] md:pb-[90px] pb-[60px] font-sans lg:text-[16px] md:text-[14px] text-[11px] whitespace-pre-wrap">
              {workData.description}
            </p>
            <div className="flex  w-full  lg:pb-[120px] md:pb-[90px] pb-[60px] ">
              <div className="w-[50%]">
                <Image
                  src={workData.Intro.src}
                  alt={workData.Intro.alt}
                  width={960}
                  height={540}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex justify-center items-center w-[50%] ">
                <div className=" flex flex-col text-start ">
                  <h1 className="mb-4 text-[#DE2A4A] font-sans lg:text-[24px] md:text-[18px] text-[16px]">
                    {workData.name}
                  </h1>
                  <h2 className="mb-2 text-[#AAAAAA] font-sans lg:text-[16px] md:text-[14px] text-[11px]  ">
                    Client:&nbsp; <strong>{workData.Intro.client}</strong>
                  </h2>
                  <h2 className="mb-2 text-[#AAAAAA] font-sans lg:text-[16px] md:text-[14px] text-[11px] ">
                    Role:&nbsp; <strong>{workData.Intro.role}</strong>
                  </h2>
                  <h2 className="text-[#AAAAAA] font-sans lg:text-[16px] md:text-[14px] text-[11px]">
                    Type: &nbsp; <strong>{workData.Intro.type}</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex  w-full lg:pb-[120px] md:pb-[90px] pb-[60px] ">
              <div className="w-[50%]">
                <h1 className="mb-4 text-[#DE2A4A] font-sans lg:text-[24px] md:text-[18px] text-[16px]">
                  TECHNOLOGIES USED FOR WEB DEVELOPMENT
                </h1>
                <p className="text-[#AAAAAA] whitespace-pre-line  font-sans lg:text-[16px] md:text-[14px] text-[11px] pr-[20px]">
                  {workData.Skill.description}
                </p>
              </div>
              <div className="w-[50%] flex flex-col justify-center items-center text-start  ">
                <Image
                  src={workData.Skill.src}
                  alt={workData.Skill.alt}
                  width={960}
                  height={540}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex  w-full  lg:pb-[120px] md:pb-[90px] pb-[60px] ">
              <div className="w-[50%]">
                <Image
                  src={workData.Skill.src2}
                  alt={workData.Skill.alt}
                  width={960}
                  height={540}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex justify-center items-center w-[50%] ">
                <div className=" flex flex-col text-start ">
                  <h1 className="mb-4 text-[#DE2A4A] font-sans lg:text-[24px] md:text-[18px] text-[16px]">
                    SKILLS OVERVIEW
                  </h1>
                  <ul className="list-disc font-sans lg:text-[16px] md:text-[14px] text-[11px] text-[#AAAAAA] pl-5">
                    {workData.Skill.skills.map((skill, index) => (
                      <li key={index} className="text-left">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="mb-4 text-[#DE2A4A] font-sans lg:text-[24px] md:text-[18px] text-[16px]">
                RESULT
              </h1>
              <p className="mb-4 text-[#AAAAAA] whitespace-pre-line  font-sans lg:text-[16px] md:text-[14px] text-[11px] ">
                {workData.Result.description}
              </p>

              <Link
                href={workData.url}
                className="mb-[80px] text-[#AAAAAA] hover:text-[#DE2A4A] underline decoration-2 underline-offset-8 transition-opacity duration-300  font-sans lg:text-[16px] md:text-[14px] text-[11px] "
                target="_blank"
              >
                Link to website:&nbsp; <strong>{workData.name}</strong>
              </Link>
              <Image
                src={workData.Result.src}
                alt={workData.Result.alt}
                width={960}
                height={540}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="pb-[110px]"></div>
            <WorkTogether />
          </div>
        </div>
      </div>
      <div className="lg:pb-[114px] pb-[110px]"></div>
      <Footer />
    </div>
  );
};

export default Work;
