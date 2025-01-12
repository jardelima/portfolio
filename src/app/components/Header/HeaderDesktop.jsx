import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function HeaderDesktop() {
    return (
        <>
            <header className="w-[7vw] hidden bg-background border-r border-r-white h-dvh py-[3vw] lg:flex items-center justify-between flex-col">
                <Image 
                    src={"/logo.png"} 
                    alt="logo"
                    width={50} 
                    height={50} 
                    className="w-[3vw]"
                />

                <div>
                    <Link 
                        href="https://github.com/jardelima" 
                        target="_blank" 
                        rel="noopener noreferer"
                        className="mb-[1vw] block"
                    >
                        <FaGithub color="white" className="text-[1.8vw]" />
                    </Link>

                    <Link 
                        href="https://linkedin.com/in/jardelima" 
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <FaLinkedin color="white" className="text-[1.8vw]" />
                    </Link>
                </div>
            </header>
        </>
    )
}
