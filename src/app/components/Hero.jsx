// Assuming you have a Hero component
"use client"
import Image from "next/image";
import { useEffect,useState } from "react";
import { hero1,hero2,hero3,hero4,hero5,hero6,hero7 } from "../../../public/hero";

const Hero = () => {

  const[ background,setBackground ] = useState("");

  useEffect(() => {
    const images = [hero1,hero2,hero3,hero4,hero5,hero6,hero7]
    const bg = images[Math.floor(Math.random() * images.length)]
    setBackground(bg)
  },[])

  return (
    <div className="relative w-full md:h-[700px] h-[450px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={background}
          alt="background"
          loading="lazy"
          fill={true}
          className="object-cover"
        />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">XonSol</h1>
        <p className="text-lg mb-8">
        Unleash the Xperience!.
        </p>
        <button className="bg-pink-500 text-white px-4 py-[5px] rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
