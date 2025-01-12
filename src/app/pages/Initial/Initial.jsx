import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Lacquer, DM_Sans } from "next/font/google";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Initial() {
    return (
        <>  
            <section 
                className={`
                    w-full h-[88dvh] lg:h-full flex items-start justify-end flex-col animate-page-in p-7 lg:p-0
                `}
            >
                <div className="glitch w-[180px] h-[180px] lg:w-[12vw] lg:h-[12vw] mb-8 lg:mb-16"></div>

                <div className="w-full lg:max-w-[40vw]">
                    <h1 className={`${lacquer.className} text-white text-3xl mb-5 lg:text-[4vw] lg:mb-[3vw]`}>front-end developer</h1>

                    <p className={`${dm_sans.className} text-white text-sm lg:text-[1.2vw] lg:leading-[1.5vw] lg:tracking-[0.05vw] mb-[1vw]`}>I am a front-end developer with 6 years of experience, graduated in Systems Analysis and Development. Throughout my career, I have had the opportunity to work on various types of projects, from presentation landing pages to mobile apps focused on buying and selling products and services.</p>

                    <p className={`${dm_sans.className} text-white text-sm lg:text-[1.2vw] lg:leading-[1.5vw] lg:tracking-[0.05vw]`}>Currently, I lead a front-end team, being responsible for developing new products and implementing new technologies. I am also actively involved in the analysis and development of projects, gathering requirements, code review, and supporting other teams with different demands. Documenting processes and contributing to the growth of the team and the company are among my main responsibilities.</p>
                </div>
            </section>
        </>
    )
}
