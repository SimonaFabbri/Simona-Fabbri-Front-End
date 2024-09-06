const Footer = () => {
  return (
    <div className="bg-black w-screen pt-[60px] pb-[140px] pr-[140px]">
      <ul className="text-[22px] font-sans text-white font-[200] underline  text-right">
        <li className="flex justify-end ">
          <a
            className="mr-[18px] hover:text-[#DE2A4A] hover:underline hover:decoration-[#DE2A4A] "
            href="https://www.instagram.com/simo.fab/"
          >
            INSTAGRAM
          </a>
          <a
            className="mr-[18px] hover:text-[#DE2A4A] hover:underline hover:decoration-[#DE2A4A] "
            href="https://www.linkedin.com/in/simona-fabbri"
          >
            LINKEDIN
          </a>
          <a
            className="hover:text-[#DE2A4A] hover:underline hover:decoration-[#DE2A4A]"
            href="mailto:simona.fabbri194@gmail.com"
          >
            MAIL
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
