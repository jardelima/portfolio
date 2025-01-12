import { DM_Sans, Lacquer } from 'next/font/google';
import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { LuProjector } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import projects from "./projects.json";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Projects() {
    const [modal, setModal] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const handleProject = (project) => {
        setCurrentProject(project);
    };

    return (
        <>
            <div className="w-full lg:w-[85vw] h-[88dvh] lg:h-full animate-page-in p-7 pb-[70px] lg:p-[3vw] flex items-start justify-end flex-col">
                <h2 className={`${lacquer.className} text-white text-3xl mb-5 lg:text-[4vw] lg:mb-[3vw]`}>Projects</h2>

                <Swiper
                    watchOverflow={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        1023: {
                            slidesPerView: 4,
                        },
                        600: {
                            slidesPerView: 3,
                        }
                    }}
                    className="w-full lg:max-w-[90vw]"
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.name}>
                            <div
                                onClick={() => {
                                    handleProject(project);
                                    setModal(!modal);
                                }} 
                                className="relative group" 
                            >
                                <Image 
                                    src={project.image}
                                    alt="Imagem do projeto"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-[300px] lg:h-[15vw] object-cover saturate-0"
                                />

                                <div 
                                    className="hidden absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.7)] lg:flex items-center justify-center opacity-0 duration-300 group-hover:opacity-100 group-hover:cursor-pointer"
                                >
                                    <p className={`${dm_sans} text-white mr-4 uppercase font-medium text-[0.8vw]`}>ver projeto</p>
                                    <LuProjector className="text-[1.2vw]" color="#fff" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            <div 
                className={`${modal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                w-full h-full fixed left-0 top-0 duration-300 z-50 flex items-center justify-center`}
            >
                <div onClick={() => setModal(!modal)} className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] z-[60]"></div>

                {/* Modal Box */}
                <div className="w-full max-w-[80vw] max-h-[70dvh] overflow-y-scroll relative bg-gray-100 p-4 lg:p-8 z-[70] 2xl:max-w-[70vw] lg:flex lg:items-start lg:justify-start">
                    <div onClick={() => setModal(!modal)} className="absolute right-6 top-6 hover:cursor-pointer">
                        <IoCloseSharp className="text-[1.5vw]" color="#060606" />
                    </div>

                    <div className="w-full lg:max-w-[35vw] mb-4 lg:mr-10">
                        <Swiper
                            watchOverflow={true}
                        >
                            <SwiperSlide>
                                <Image 
                                    src={"/project-1.png"}
                                    alt="Projeto"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-[450px] lg:h-[450px] object-cover block"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image 
                                    src={"/project-1.png"}
                                    alt="Projeto"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-[450px] lg:h-[450px] object-cover block"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="lg:-mt-3">
                        <h3 className={`${dm_sans.className} font-bold text-xl mb-4 lg:text-[1.8vw] uppercase lg:mb-[1vw]`}>Nivea sun</h3>

                        <div className="mb-4 lg:mb-6">
                            <h4 className={`${dm_sans.className} font-bold lg:text-[1vw] mb-2 lg:mb-[0.5vw]`}>Descrição do projeto</h4>
                            <p className={`${dm_sans.className} text-base lg:text-[0.8vw]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos, quasi excepturi non ipsa unde deleniti quod placeat aspernatur cumque nihil ea at totam dolorum doloribus voluptas soluta incidunt ad!</p>
                        </div>

                        <div>
                            <h4 className={`${dm_sans.className} font-bold lg:text-[1vw] mb-2 lg:mb-[0.5vw]`}>Stack do projeto</h4>

                            <div>
                                <div className={`${dm_sans.className} px-4 py-1 border border-background inline-block lg:text-[0.8vw]`}>React</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
