import Link from "next/link";

const WorkTogether = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="mr-[60px] md:w-[20%] ">
        <h3 className="lg:text-[22px] md:text-[18px] text-[14px] text-white font-bold pb-[15px] md:pb-[0px]">
          <span className="lg:hidden ">CONTACT ME</span>
          <span className="hidden lg:inline">
            CONTACT
            <br /> ME
          </span>
        </h3>
      </div>

      <div className="md:w-[70%] ">
        <Link href="/Contacts/Contact" className="block">
          <h1 className="font-mono text-[52px] md:text-[64px] lg:text-[80px] text-[white] leading-none underline decoration-3 hover:text-[#DE2A4A] hover:no-underline hover:animate-rotate-x hover:animete-once hover:animate-duration-500 hover:animate-ease-in cursor-pointer">
            LET'S WORK TOGETHER!
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default WorkTogether;
