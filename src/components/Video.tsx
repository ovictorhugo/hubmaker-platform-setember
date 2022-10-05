import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightbulb, Lightning, TelegramLogo, WhatsappLogo } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css'
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Logo } from "./Logo";

const GET_LESSON_BY_SLUG_QUERY = gql`
    query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
        title
        videoId
        description
        teacher {
        bio
        avatarURL
        name
        }
    }
    }
`

interface GetLessonBySlugresponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useQuery<GetLessonBySlugresponse>(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug,

        }
    })

    console.log(data);

    if (!data) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return  (
        <div className="flex-1 flex flex-col">
            <header className="w-full py-2 flex items-center px-24 bg-green-400 absolute top-0 left-0  justify-between ">
            <div className="flex items-center justify-center">
            <Link to="/"><Logo/></Link>

            <div className="w-[1px] h-[32px] bg-white mx-4"></div>

            <ul className="flex">
                <Link to=""><li className=" h-full text-sm text-white font-semibold mr-4 transition-colors">Sobre</li></Link>
                <Link to=""><li className=" h-full text-sm text-white font-semibold mr-4 transition-colors">Equipamentos</li></Link>
                <Link to=""><li className=" h-full text-sm text-white font-semibold mr-4 transition-colors">Equipe</li></Link>
            </ul>
            </div>

            <div className="flex items-center justify-center">
            <Link to="/cursos" className="p-3 text-xs bg-white text-green-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:text-darkGreen-400 transition-colors">
                <Lightbulb size={16}/>
                Área de experimentação
            </Link>
            </div>
        </header>
        
        <div className=" w-full px-24 py-24 bg-green-400 flex justify-end flex-col">
            <h1 className=" text-6xl font-bold text-white">{data.lesson.title}</h1>
            <p className="  mt-4 text-lg text-white font-semibold">{data.lesson.description}</p>
        </div>


            <main className="flex w-full h-[100vh]">
                
                <div className="bg-white h-full  flex justify-center flex-1 p-6">
                    <div className="w-full max-w-[1100px] max-h-[60vh] aspect-video ">
                    <Player>
                            <Youtube videoId={data.lesson.videoId}/>
                            <DefaultUi/>
                        </Player>
                    </div>
                </div>  

                <Sidebar/>        
            </main>
            
            <div className=" px-24 pb-24 mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">

                        <div className="flex items-center gap-4 mt-6">
                            <img 
                                className="h-16 w-16 rounded-full border-2 border-green-400"
                                src={data.lesson.teacher.avatarURL} 
                                alt="" 
                            />

                            <div>
                                <strong className="font-bold text-2xl block text-gray-400 mb-2">
                                    {data.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-300 text-sm block">
                                    {data.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link to="" className="p-3 text-xs bg-green-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-darkGreen-400 transition-colors">
                            <TelegramLogo size={16}/>
                            Fale pelo Telegram
                        </Link>

                        <Link to="" className="p-3 text-xs text-green-400 border border-green-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-400 hover:text-white transition-colors">
                            <Lightning size={16}/>
                            Acesse o desafio
                        </Link>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <Link to="" className="bg-white text-white rounded overflow-hidden flex items-stretch border border-transparent gap-6 hover:shadow-xl hover:border-green-400  transition-colors">
                        <div className="bg-green-400 h-auto p-6 flex items-center m-4 rounded">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl text-green-400">
                                Material complementar
                            </strong>
                            <p className="text-sm font-semibold text-gray-400 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center text-gray-500">
                            <CaretRight size={24}/>
                        </div>
                    </Link>

                    <Link to="" className="bg-white text-white rounded overflow-hidden flex items-stretch border border-transparent gap-6 hover:shadow-xl hover:border-green-400  transition-colors">
                        <div className="bg-green-400 h-auto p-6 flex items-center m-4 rounded">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl text-green-400">
                                Material complementar
                            </strong>
                            <p className="text-sm font-semibold text-gray-400 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center text-gray-500">
                            <CaretRight size={24}/>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}