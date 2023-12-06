import Image from "next/image";
import { girl } from "../../../public";
const About = () => {
  return (
      <section id="about" className="overflow-hidden my-10 p-12 lg:pt-[120px] lg:pb-[90px] bg-[#140a0e] rounded-2xl">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 ml-4 lg:w-6/12">
              <Image src={girl} alt="Model" className="w-full h-full rounded-xl" />
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-pink-500 sm:text-[40px]/[48px]">
                  About XonSol
                </h2>
                <p className="mb-5 text-[18px] text-white-100 font-mono">
                  Welcome to XonSol, the revolutionary meme token that brings a
                  new level of excitement to the crypto world! $XSOL is not just
                  a token; it's an entire experience designed for adult content
                  enthusiasts. Dive into the world of XonSol and unlock
                  exclusive adult content using your tokens.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6"></p>
                <a
                  href="#_"
                  className="relative px-5 py-2 font-semibold text-white group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                  <span className="relative">Buy $XSOL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
