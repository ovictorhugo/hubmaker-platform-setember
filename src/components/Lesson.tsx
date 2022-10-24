import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson( props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return  (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-400">
                {availableDateFormatted}
            </span>

            <div className="bg-white  mt-2 text-white rounded border border-transparent group-hover:shadow-xl group-hover:border-blue-400  transition-colors flex flex-col p-4">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-400 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em breve
                        </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 text-blue-400 border border-blue-400 font-bold">
                        {props.type == 'live' ? 'GRAVADO' : 'PRÁTICA'}
                    </span>
                </header>

                <strong className="text-gray-500 mt-5 ">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}