import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black-100 shrink-0 py-5 text-white relative bottom-0 w-full max-w-[1200px] mx-auto px-5 rounded-t-2xl">

      <ul className="flex justify-center gap-[25px] mb-[15px] md:my-2 md:gap-12 font-semibold">
        <li className="text-base md:text-base whitespace-no-wrap hover:text-[#fe06f2] cursor-pointer">
          <a
            href=""
            target="_blank"
          >
            <FaTelegram className="w-[20px] h-[20px]" />
          </a>
        </li>
        <li className="text-base md:text-base whitespace-no-wrap hover:text-[#fe06f2] cursor-pointer">
          <a
            href=""
            target="_blank"
          >
            <BsDiscord className="w-[20px] h-[20px]"/>
          </a>
        </li>
        <li className="text-base md:text-base whitespace-no-wrap hover:text-[#fe06f2] cursor-pointer">
          <a
            href="https://twitter.com/xonsoll"
            target="_blank"
          >
            <FaXTwitter className="w-[20px] h-[20px]"/>
          </a>
        </li>
      </ul>
      <div className="flex md:text-[15px] text-xs text-md justify-center opacity-80 font-semibold mt-[30px] md:mt-8 md:gap-4">
        © 2023 XonSol.
      </div>
    </footer>
  );
}

export default Footer