import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
import { Link } from "react-router-dom";
import {FileArrowDown, CaretRight, LinkSimple, WhatsappLogo, Lightbulb, TelegramLogo, ArrowLeft} from "phosphor-react";

import { Logo } from "./Logo";

const GET_LESSONS_QUERY = gql `
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            slug
            title
        }
    }
`
interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string 
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    } []
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return  (
        <aside className="lg:w-[348px] lg:max-h-[100vh] overflow-y-auto">
            <div className=" p-12 lg:p-6 pb-0 lg:pb-0">

                <div className="flex items-center mb-8">
                    <Link to="/cursos" className="h-8 text-gray-400 hover:text-blue-400 w-8 mr-4 rounded hover:bg-gray-200 items-center justify-center flex"><ArrowLeft size={16} className=" "/></Link>
                    <Link to="/" className=" flex w-min"><Logo/></Link>
                </div>

                <h1 className="font-bold text-4xl lg:text-5xl pb-6 block text-gray-500">
                    Nome do curso aqui
                </h1>

                <a href="https://t.me/joinchat/CAmS_Esg3upDqymhv6-GOQ" className="p-3 text-xs mb-4 bg-blue-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors">
                    <TelegramLogo size={16}/>
                    Entre no grupo do telegram
                </a>

                <Link to="" className="p-3 text-xs mb-4 text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
                    <Lightbulb size={16}/>
                    Acesse o desafio
                </Link>

                <Link to="" className="bg-white min-h-[90px] text-white mb-4 rounded overflow-hidden border border-transparent gap-6 hover:shadow-xl hover:border-blue-400  transition-colors flex justify-between items-center p-4">
                    <div className="bg-blue-400 max-h-[46px] p-2 flex items-center rounded">
                        <FileArrowDown size={24}/>
                    </div>
                    <div className=" leading-relaxed w-full">
                        <strong className="text-lg text-blue-400">
                            Material complementar
                        </strong>
                    </div>
                    <div className="h-full flex items-center text-gray-500">
                        <CaretRight size={24}/>
                    </div>
                </Link>

                <Link to="" className="bg-white min-h-[90px] text-white mb-4  rounded overflow-hidden border border-transparent gap-6 hover:shadow-xl hover:border-blue-400  transition-colors flex justify-between items-center p-4">
                    <div className="bg-blue-400 max-h-[46px] p-2 flex items-center rounded">
                        <LinkSimple size={24}/>
                    </div>
                    <div className=" leading-relaxed w-full">
                        <strong className="text-lg text-blue-400">
                            Links Externos
                        </strong>
                    </div>
                    <div className="h-full flex items-center text-gray-500">
                        <CaretRight size={24}/>
                    </div>
                </Link>

                <div className="flex flex-row">
                <Link to="" className="h-10 w-1/3 flex items-center justify-center text-gray-400 hover:text-blue-400  transition-colors border-b-2 border-b-transparent hover:border-b-blue-400">
                    <p className="text-sm font-semibold ">Aulas</p>
                </Link>

                <Link to="" className="h-10 w-1/3 flex items-center justify-center text-gray-400 hover:text-blue-400  transition-colors border-b-2 border-b-transparent hover:border-b-blue-400">
                    <p className="text-sm font-semibold ">Teste</p>
                </Link>

                <Link to="" className="h-10 w-1/3 flex items-center justify-center text-gray-400 hover:text-blue-400  transition-colors border-b-2 border-b-transparent hover:border-b-blue-400">
                    <p className="text-sm font-semibold ">Professor</p>
                </Link>
            </div>
            </div>

            <div className=" bg-gray-200 p-12 lg:p-6">

                <div className="flex flex-col gap-8 ">
                    {data?.lessons.map(lesson => {
                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                slug={lesson.slug}
                                availableAt={new Date(lesson.availableAt)}
                                type={lesson.lessonType}
                            />
                        )
                    })}
                </div>
            </div>

            <div className=" bg-gray-200 p-12 lg:p-6">

               
            </div>
        
        </aside>
    )
}