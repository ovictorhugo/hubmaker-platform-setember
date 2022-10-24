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
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-100">

            <main className="flex flex-col lg:flex-row w-full overflow-hidden">
                <div className="bg-black h-full  flex justify-center items-center flex-1 overflow-hidden">
                    <div className="w-full max-h-[100vh] lg:h-auto aspect-video">
                    <Player className="w-full">
                            <Youtube videoId={data.lesson.videoId}/>
                            <DefaultUi/>
                        </Player>
                    </div>
                </div>  

                <Sidebar/>        
            </main>
            
        </div>
    )
}