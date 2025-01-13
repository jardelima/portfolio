import { DM_Sans, Lacquer } from "next/font/google";

import Link from "next/link"
import React from "react"
import { FiMail } from "react-icons/fi";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Contact() {
    return (
        <>
            <section className="w-full h-[88dvh] lg:max-w-[40vw] lg:h-dvh p-7 lg:p-[3vw] flex items-start justify-end flex-col animate-page-in">
                <h2 className={`${lacquer.className} text-white text-3xl mb-5 lg:text-[4vw] lg:mb-[3vw]`}>contato</h2>

                <p className={`${dm_sans.className} text-white text-base lg:text-[1.2vw] lg:leading-[1.5vw] lg:tracking-[0.05vw] mb-5 lg:mb-[1vw]`}>Para dúvidas, informações ou para discutir uma possível colaboração, estou à disposição. Por favor, me envie um e-mail e responderei o mais breve possível.</p>

                <Link href={"mailto:dev.jardelima@gmail.com"} className={`${dm_sans.className} flex items-center justify-center text-white text-base lg:text-[1.2vw] lg:leading-[1.5vw] lg:tracking-[0.05vw] mb-0`}>
                    <FiMail color="#fff" size={20} className="mr-2" />
                    dev.jardelima@gmail.com
                </Link>
            </section>
        </>
    )
}
