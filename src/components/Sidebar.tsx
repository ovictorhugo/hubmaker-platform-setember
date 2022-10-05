import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

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
        <aside className="w-[348px] p-6 overflow-auto ">
            <span className="font-bold text-2xl pb-6 block text-gray-500">
                Cronograma das aulas
            </span>

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
        </aside>
    )
}