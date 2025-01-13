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

                <div className="w-full lg:max-w-[45vw]">
                    <h1 className={`${lacquer.className} text-white text-3xl mb-5 lg:text-[4vw] lg:mb-[3vw]`}>front-end developer</h1>

                    <p className={`${dm_sans.className} text-white text-sm lg:text-[1.2vw] lg:leading-[1.5vw] lg:tracking-[0.05vw] mb-[1vw]`}>Sou desenvolvedor front-end com 6 anos de experiência, formado em Análise e Desenvolvimento de Sistemas. Ao longo da minha carreira, tive a oportunidade de trabalhar em diversos tipos de projetos, desde landing pages de apresentação até aplicativos mobile voltados para compra e venda de produtos e serviços.</p>

                    <p className={`${dm_sans.className} text-white text-sm lg:text-[1.2vw] lg:leading-[1.5vw] lg:tracking-[0.05vw]`}>Atualmente, lidero uma equipe de front-end e sou responsável pelo desenvolvimento de novos produtos, além da implementação das tecnologias mais atuais do mercado, como React, Next.js, React Native, Tailwind, entre outras. Também me envolvo ativamente na análise e desenvolvimento de projetos, levantamento de requisitos, code review e no apoio a outros times em diferentes demandas. Desenvolver novos produtos, documentar processos e contribuir para o crescimento da equipe e da empresa estão entre minhas principais responsabilidades.</p>
                </div>
            </section>
        </>
    )
}
