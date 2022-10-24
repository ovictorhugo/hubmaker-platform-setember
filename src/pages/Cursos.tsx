import { Background } from "../components/Background";
import { Header } from "../components/Header";
import { Item } from "../components/Item";

import { gql, useQuery } from "@apollo/client";

const GET_CLASSES_QUERY = gql `
    query MyQuery {
        classes(orderBy: publishedAt_ASC, stage: PUBLISHED) {
        id
        title
        description
        slug
        img
        }
    }
`
interface GetClassQueryResponse {
    classes: {
        id: string
        title: string 
        slug: string
        description: string
        img: string
    } []
}

export function Cursos() {

    const { data } = useQuery<GetClassQueryResponse>(GET_CLASSES_QUERY)

    return  (
        <div>
            <Header/>
            
            <div className="flex flex-col py-24 px-12 lg:px-24">
                <div className=" mb-12 w-full bg-bgMaker bg-cover bg-no-repeat bg-center rounded h-auto sm:h-72 flex items-center justify-center flex-col p-12 lg:p-6">
                    <h1 className=" max-h-[60%] text-center text-4xl lg:text-5xl font-bold text-white">Escolha uma vídeo aula para começar</h1>
                    <p className=" max-h-[60%] text-center mt-4 text-sm lg:text-lg text-white font-semibold">Você pode optar por começar com a Desenho 2D, Modelagem ou impressão 3D</p>
                </div>

                <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    
                    {data?.classes.map(item => {
                        return (
                            <Item
                                key={item.id}
                                title={item.title}
                                slug={item.slug}
                                description={item.description}
                                img={item.img}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}