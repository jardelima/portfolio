"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Lacquer } from "next/font/google";
import Link from "next/link";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

export default function HeaderMobile() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <header className="p-5 border-b border-b-[rgba(255,255,255,0.1)] flex items-center justify-between lg:hidden">
                <Image 
                    src={"/logo.png"} 
                    alt="logo"
                    width={50} 
                    height={50} 
                />

                <div
                    onClick={() => setMenu(!menu)} 
                    className="relative w-[30px] h-[30px] flex items-center justify-center"
                >
                    <button 
                        className={`${menu && "!opacity-0"} bg-transparent border-none rounded-none duration-300 opacity-100 absolute`}
                    >
                        <RiMenu4Fill color="#fff" size={24} />
                    </button>

                    <button 
                        className={`${!menu && "!opacity-0"} bg-transparent border-none rounded-none duration-300 opacity-100 absolute`}
                    >
                        <IoCloseSharp color="#fff" size={24} />
                    </button>
                </div>
            </header>

            <div className={`
                ${menu ? "right-0 opacity-100" : "-right-full opacity-0"}
                w-full h-[92dvh] bg-[rgb(10,10,10)] p-6 duration-300 fixed top-[83px] z-50 flex items-start justify-between flex-col lg:hidden
            `}>
                <div>
                    <div className={`${lacquer.className} text-white mb-8 block`}>Projects</div>
                    <div className={`${lacquer.className} text-white`}>Contact</div>
                </div>

                <div className="flex items-center justify-start mb-6">
                    <Link
                        href="https://github.com/jardelima" 
                        target="_blank" 
                        rel="noopener noreferer"
                        className="mr-4 block"
                    >
                        <FaGithub color="white" size={30} />
                    </Link>

                    <Link 
                        href="https://linkedin.com/in/jardelima" 
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <FaLinkedin color="white" size={30} />
                    </Link>
                </div>
            </div>
        </>
    )
}
