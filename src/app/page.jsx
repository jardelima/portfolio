"use client";

import { useState } from "react";
import { Lacquer, DM_Sans } from "next/font/google";
import Image from "next/image";
import Header from "./components/Header/Header";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
    const [tab, setTab] = useState(0);

    const changeTab = (number) => {
        setTab(number);
    };

    return (
        <>
            <div className="w-full h-dvh overflow-hidden bg-background xl:items-start xl:justify-start xl:flex">
                <Header />

                <div className="hidden xl:block">
                    <div 
                        onClick={() => changeTab(0)}
                        className={`
                            ${tab === 0 && "!w-[100vw]"} 
                            ${tab !== 0 && "hover:cursor-pointer"}
                            duration-500 w-[5vw] h-dvh bg-background
                        `}
                    >
                        <div 
                            className={`
                                ${tab === 0 && "!opacity-0 -z-10"} 
                                -rotate-90 mt-[85px] ml-3 duration-1000 opacity-100 inline-block`
                            }>
                            <h2 
                                className={`
                                    ${lacquer.className} 
                                    text-white
                                `}
                            >
                                    Home
                            </h2>
                        </div>


                    </div>

                    <div 
                        onClick={() => changeTab(1)}
                        className={`
                            ${tab === 1 && "!w-[100vw]"} 
                            ${tab !== 1 && "hover:cursor-pointer"}
                            duration-500 w-[5vw] h-dvh bg-background border-l border-l-white
                        `}
                    >
                        <div                         
                            className={`
                                ${tab === 1 && "!opacity-0 -z-10"} 
                                -rotate-90 mt-[100px] duration-1000 opacity-100 inline-block`
                            }>
                            <h2 
                                className={`
                                    ${lacquer.className} 
                                    text-white
                                `}
                            >
                                Projects
                            </h2>
                        </div>
                    </div>

                    <div 
                        onClick={() => changeTab(2)}
                        className={`
                            ${tab === 2 && "!w-[100vw]"} 
                            ${tab !== 2 && "hover:cursor-pointer"}
                            duration-500 w-[5vw] h-dvh bg-background border-l border-l-white
                        `}
                    >
                        <div                         
                            className={`
                                ${tab === 2 && "!opacity-0 -z-10"} 
                                -rotate-90 mt-24 duration-1000 opacity-100 inline-block`
                            }>
                            <h2 
                                className={`
                                    ${lacquer.className} 
                                    text-white
                                `}
                            >
                                Contact
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}
