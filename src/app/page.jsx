"use client";

import { useEffect, useState } from "react";
import { Lacquer, DM_Sans } from "next/font/google";
import Image from "next/image";
import Header from "./components/Header/Header";
import Initial from "./pages/Initial/Initial";
import ReduxProvider from "./components/Provider/ReduxProvider";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "./store/pagesSlice";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

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
    const [showTab, setShowTab] = useState(0);

    const reduxCurrentPage = useSelector(selectCurrentPage);

    const changeTab = (number) => {        
        setTab(number);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowTab(tab);
        }, 500);
    }, [tab]);

    return (
        <>
            <div className="w-full h-dvh overflow-hidden xl:overflow-[unset] bg-background lg:items-start lg:justify-start hidden lg:flex">
                <Header />

                <div 
                    onClick={() => changeTab(0)}
                    className={`
                        ${tab === 0 && "!w-[100vw]"} 
                        ${tab !== 0 && "hover:cursor-pointer"} 
                        duration-500 w-[3vw] h-dvh bg-background flex items-start justify-center p-4 pb-[75px]
                    `}
                >
                    <div 
                        className={`
                            ${tab === 0 && "!opacity-0 -z-10"} 
                            -rotate-90 mt-[74px] duration-1000 opacity-100 inline-block`
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
                    
                    {showTab === 0 && tab === 0 && <Initial />}
                </div>

                <div 
                    onClick={() => changeTab(1)}
                    className={`
                        ${tab === 1 && "!w-[100vw]"} 
                        ${tab !== 1 && "hover:cursor-pointer"}
                        duration-500 w-[3vw] h-dvh bg-background border-l border-l-white flex items-start justify-center p-4
                    `}
                >
                    <div                         
                        className={`
                            ${tab === 1 && "!opacity-0 -z-10"} 
                            -rotate-90 mt-[74px] duration-1000 opacity-100 inline-block`
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
                        duration-500 w-[3vw] h-dvh bg-background border-l border-l-white flex items-start justify-center p-4
                    `}
                >
                    <div                         
                        className={`
                            ${tab === 2 && "!opacity-0 -z-10"} 
                            -rotate-90 mt-[72px] duration-1000 opacity-100 inline-block`
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

            <div className="w-full h-dvh relative overflow-hidden bg-background lg:hidden">
                <Header />
                
                {reduxCurrentPage.page === "home" && <Initial />}
                {reduxCurrentPage.page === "projects" && <Projects />}
                {reduxCurrentPage.page === "contact" && <Contact />}
            </div>
        </>
    );
}
