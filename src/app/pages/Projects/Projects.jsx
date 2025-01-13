import { DM_Sans, Lacquer } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react"
import { LuProjector } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";

import projects from "./projects.json";

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
                <div className="flex items-center justify-between w-full">
                    <h2 className={`${lacquer.className} text-white text-3xl mb-5 lg:text-[4vw] lg:mb-[3vw]`}>projetos</h2>

                    <div className="flex items-center justify-center">
                        <div className="swiper-button-prev projects-button-prev after:hidden !relative border border-white !w-[40px] !h-[40px] flex items-center justify-center !left-[unset] !right-[unset] mr-4">
                            <IoIosArrowBack color="#fff" className="!w-6" />
                        </div>
                        <div className="swiper-button-next projects-button-next after:hidden !relative border border-white !w-[40px] !h-[40px] flex items-center justify-center !left-[unset] !right-[unset]">
                            <IoIosArrowForward color="#fff" className="!w-6" />
                        </div>
                    </div>
                </div>

                <p className={`${dm_sans} text-white flex items-center justify-start mb-5 text-sm lg:hidden`}>Clique nos projetos para ver mais sobre eles <TbHandClick className="ml-2" color="#fff" size={20} /></p>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".projects-button-next",
                        prevEl: ".projects-button-prev"
                    }}
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
                <div 
                    onClick={() => {
                        setModal(!modal);
                        
                        setTimeout(() => {
                            setCurrentProject(null);
                        }, 300);
                    }} 
                    className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] z-[60]"
                ></div>

                {/* Modal Box */}
                <div className="w-full max-w-[80vw] max-h-[70dvh] overflow-y-scroll relative bg-gray-100 p-4 lg:p-8 z-[70] 2xl:max-w-[70vw] lg:flex lg:items-start lg:justify-start">
                    <div 
                        onClick={() => {
                            setModal(!modal);

                            setTimeout(() => {
                                setCurrentProject(null);
                            }, 300);
                        }} 
                        className="absolute right-6 top-6 hover:cursor-pointer z-10"
                    >
                        <IoCloseSharp className="text-lg lg:text-[1.5vw]" color="#060606" />
                    </div>

                    <div className="w-full relative lg:max-w-[35vw] mb-4 lg:mb-0 lg:mr-10">
                        {currentProject && (
                            <>
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: ".project-button-next",
                                        prevEl: ".project-button-prev"
                                    }}
                                    watchOverflow={true}
                                >
                                    {currentProject.gallery.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Image 
                                                src={item.image}
                                                alt="Projeto"
                                                width={1920}
                                                height={1080}
                                                className="w-full h-[450px] lg:h-[450px] object-contain block"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="swiper-button-next project-button-next after:hidden border border-background !w-[40px] !h-[40px] flex items-center justify-center !-right-4 bg-gray-100">
                                    <IoIosArrowForward color="#060606" className="!w-6" />
                                </div>
                                <div className="swiper-button-prev project-button-prev after:hidden border border-background !w-[40px] !h-[40px] flex items-center justify-center !-left-4 !bottom-0 bg-gray-100">
                                    <IoIosArrowBack color="#060606" className="!w-6" />
                                </div>
                            </>
                        )}
                        
                    </div>

                    {currentProject && (
                        <div>
                            <h3 className={`${dm_sans.className} font-bold text-xl mb-4 lg:text-[1.5vw] uppercase lg:mb-[1vw]`}>{currentProject.name}</h3>

                            <div className="mb-4 lg:mb-6">
                                <h4 className={`${dm_sans.className} font-bold lg:text-[1vw] mb-2 lg:mb-[0.5vw]`}>Descrição do projeto</h4>
                                <p className={`${dm_sans.className} text-base lg:text-[0.8vw]`}>{currentProject.description}</p>
                            </div>

                            {currentProject.private && (
                                <div className="mb-4 lg:mb-6">
                                    <h4 className={`${dm_sans.className} font-bold lg:text-[1vw] mb-2 lg:mb-[0.5vw]`}>Link do projeto</h4>
                                    <p className={`${dm_sans.className} text-base lg:text-[0.8vw]`}>Indisponível (projeto confidencial)</p>
                                </div>
                            )}

                            {currentProject.link && (
                                <div className="mb-4 lg:mb-6">
                                    <h4 className={`${dm_sans.className} font-bold lg:text-[1vw] mb-2 lg:mb-[0.5vw]`}>Link do projeto</h4>
                                    <Link href={currentProject.link} target="_blank" rel="noopener noreferer" className={`${dm_sans.className} text-base lg:text-[0.8vw] underline`}>Acessar projeto</Link>
                                </div>
                            )}

                            <div>
                                <h4 className={`${dm_sans.className} font-bold lg:text-[1vw] mb-2 lg:mb-[0.5vw]`}>Stack do projeto</h4>

                                <div>
                                    {currentProject.stack.map(tech => (
                                        <div key={tech.tech} className={`${dm_sans.className} px-4 mr-2 mb-2 py-1 border border-background inline-block lg:text-[0.8vw]`}>{tech.tech}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
