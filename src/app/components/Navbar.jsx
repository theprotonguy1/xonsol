"use client"

import { useState,useEffect } from "react";
import Link from "next/link";;
import Image from "next/image";

import { scroller } from "react-scroll";
import { logo } from "../../../public";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu,close } from "../../../public/assets";


const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle , setToggle] = useState(false)
    const [isGlassEffect, setIsGlassEffect] = useState(false);

    const scrollToSection = (section) => {
      const offset = 80;
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -offset,
      });
      setActive(section);
      setToggle(false);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerDistance = 100; // Adjust this value based on your design
  
      setIsGlassEffect(scrollPosition > triggerDistance);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav
        className={`${styles.paddingX} ${
          isGlassEffect
            ? "bg-[rgba(10,14,20,0.05)] bg-opacity-80 backdrop-filter backdrop-blur-lg"
            : "bg-opacity-0"
        } ${
          isGlassEffect ? "transition-all duration-300" : ""
        } fixed w-full flex items-center py-4 top-0 z-20`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt="XonSOl" width={150} height={150} />
          </Link>
          <ul className="list-none hidden sm:flex gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-pink-500" : "text-white"
                } text-[18px] font-bold cursor-pointer`}
                onClick={() => {
                  setActive(link.id);
                  scrollToSection(link.id);
                }}
              >
                <Link href={`#${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Hamburger Menu */}
        <div className="sm:hidden flex justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="Hamburger menu"
            width={25}
            height={25}
            onClick={() => setToggle((prev) => !prev)}
            className="object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 pink-gradient absolute top-20 right-0 mx-8 my-2 min-w-[140px] flex flex-col z-20 rounded-xl`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={`${active === link.id ? "text-pink-400" : "text-[#f0d3d3] font-bold cursor-pointer text-[16px] m-1 p-3"}`}
                onClick={() => {
                  setToggle((prev) => !prev);
                  setActive(link.id);
                  scrollToSection(link.id);
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;