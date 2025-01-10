import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function HeaderDesktop() {
    return (
        <>
            <header className="w-[5vw] hidden bg-background border-r border-r-white h-dvh py-20 lg:flex items-center justify-between flex-col">
                <Image 
                    src={"/logo.png"} 
                    alt="logo"
                    width={50} 
                    height={50} 
                />

                <div>
                    <Link 
                        href="https://github.com/jardelima" 
                        target="_blank" 
                        rel="noopener noreferer"
                        className="mb-4 block"
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
            </header>
        </>
    )
}
