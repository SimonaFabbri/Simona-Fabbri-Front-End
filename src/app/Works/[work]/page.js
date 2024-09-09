"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dataLavori from "../../data/data.json";
import WorkTogetherWork from "@/components/WorkTogetherWork";

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
    <div className="max-w-[1200px] mx-auto px-4">
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
          <h1 className="text-white text-[180px] pb-[40px] leading-none font-mono text-start">
            <Link
              href={workData.url}
              className="hover:text-[#DE2A4A] hover:underline hover:decoration-2 hover:underline-offset-8 transition-opacity duration-300"
              target="_blank"
            >
              {workData.name}
            </Link>
          </h1>
          <p className="text-[#AAAAAA] max-w-[800px] pb-[90px] font-sans text-[16px] whitespace-pre-wrap">
            {workData.description}
          </p>
          <div className="w-full">
            {workData.imagePresentazione &&
              workData.imagePresentazione.length > 0 && (
                <div className="image-gallery">
                  {workData.imagePresentazione.map((imagePath, index) => (
                    <div key={index} className="pb-20">
                      <Image
                        src={imagePath}
                        alt={`Image ${index + 1} of ${workData.name}`}
                        width={960}
                        height={540}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>
          <div className="pb-40"></div>
          <WorkTogetherWork />
        </div>
      </div>
    </div>
  );
};

export default Work;
