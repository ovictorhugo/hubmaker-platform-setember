import { Link } from "react-router-dom";
import { CaretDown, FileArrowDown, GearSix, Lightbulb, Play, Plus } from "phosphor-react";
import { Carousel } from "./carousel";
import { Project } from "./Project";

export function Homepage() {
    return  (
        
        <div>
            <div className=" min-h-screen flex justify-center flex-col px-24">
            <h1 className="max-w-[700px] text-6xl font-bold text-gray-500">Desenvolva e coloque sua ideia em prática ; )</h1>
            <p className=" max-w-[700px] mt-4 text-lg text-gray-400 font-semibold">O Hub Maker Bahia é um projeto da parceria do Centro Juvenil de Ciência e Cultura com a UNEB, UFBA, IFBA e Faculdade Bahiana de Medicina que desenvolve atividades voltadas para Educação, Robótica, impressão 3D e Cultura Maker.</p>

            <div className="flex mt-12">
            <Link to="/envie-seu-projeto" className="p-3 mr-4 text-xs text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <FileArrowDown size={16}/>
                Envie seu projeto
            </Link>

                <Link to="/cursos" className="p-3 text-xs bg-blue-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors">
                    <Play size={16}/>
                    Oficinas rápidas
                </Link>
            </div>

            <div className="h-full w-28 absolute top-[56px] right-24 overflow-hidden z-[-999]">
                <div className=" w-full h-[1000%] bg-bgVertical bg-repeat-y bg-center bg-bgv animate-bgVertical">
                </div>
                <div className="bg-gradient-to-r from-transparent to-white w-full h-28 absolute bottom-[0px] rotate-90"></div>
            </div>
    
        </div>

        <div className="text-gray-500 w-full items-center justify-center flex absolute bottom-12 hover:text-black">
            <Link to=""><CaretDown size={24} className="animate-bounce"/></Link>
        </div>

        <div id="biblioteca-como-terceiro-lugar" className="min-h-[100vh] w-full flex">
            <div className="w-[50%] bg-bgMakerHome bg-no-repeat bg-center bg-bgv"></div>
            <div className="w-[50%] flex justify-center flex-col px-24">
                <h1 className="max-w-[600px] text-left text-6xl font-bold text-gray-500">O Hub Maker Bahia</h1>
                <p className=" max-w-[600px] mt-4 text-lg text-gray-400 font-semibold">surge da necessidade de se ter um espaço maker público capaz de atender toda a comunidade de inventores e entusiastas  do estado da Bahia.</p>
            </div>
        </div>

        <Carousel/>

        <div id="" className="min-h-[100vh] w-full flex">
            <div className="w-[50%] flex  justify-center flex-col px-24">
                <h1 className="max-w-[600px] text-6xl font-bold text-gray-500">O laboratório</h1>
                <p className=" max-w-[600px] my-4 text-lg text-gray-400 font-semibold">fomenta o desenvolvimento de novas competências e habilidades fundamentais para as profissões futuras, através da formação de novos makers.</p>
                <Link to="/envie-seu-projeto" className="p-3 text-xs text-green-400 border border-green-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-400 hover:text-white transition-colors">
                    <Plus size={16}/>
                    Conheça mais
                </Link>
            </div>
            <div className="w-[50%] bg-bgOds mr-24 bg-no-repeat bg-center bg-bgv"></div>
        </div>          

        <div id="" className="w-full flex justify-center items-center px-24">
            <div className="w-full h-96 rounded  flex flex-col justify-center items-center bg-blue-100">
                <h1 className=" max-h-[60%] text-center text-5xl font-bold text-blue-400">Coloque sua ideia em prática</h1>
                <div className="flex mt-12">
                <Link to="/envie-seu-projeto" className="p-3 mr-4 text-xs text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <FileArrowDown size={16}/>
                Envie seu projeto
            </Link>

                <Link to="/cursos" className="p-3 text-xs bg-blue-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors">
                    <Play size={16}/>
                    Oficinas rápidas
                </Link>
                </div>
            </div>
        </div>
        
        <div id="" className="min-h-[100vh] w-full flex">
            <div className="w-[50%] bg-bgLetreiro ml-24 bg-no-repeat bg-center bg-bgv"></div>
            <div className="w-[50%] flex  justify-center flex-col px-24">
                <h1 className="max-w-[600px] text-6xl font-bold text-gray-500">Cultura Maker</h1>
                
                <p className=" max-w-[600px] my-4 text-lg text-gray-400 font-semibold">A cultura Maker é a metodologia que rege o Goethe Makerspace. Ela embasa as nossas ações e se caracteriza pelo incentivo ao protagonismo, a criatividade, a mão na massa e ao uso das tecnologias.</p>
                <Link to="/envie-seu-projeto" className="p-3 text-xs text-green-400 border border-green-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-400 hover:text-white transition-colors">
                    <Plus size={16}/>
                    Conheça mais
                </Link>
            </div>
        </div>

            <div className="h-24 w-full overflow-hidden absolute z-[-999]">
                <div className=" h-full w-[1000%] bg-bgParceiros bg-repeat-x bg-left bg-bg animate-bgSlideTwo"></div>
                <div className="bg-gradient-to-r from-transparent to-white w-80 h-full absolute bottom-0 right-0"></div>
                <div className="bg-gradient-to-r from-white to-transparent w-80 h-full absolute bottom-0 left-0"></div>
            </div>

            <div className="w-full  mt-24 grid grid-cols-3 gap-4 p-24">
            <h1 className="text-6xl font-bold text-gray-500 pr-16">Eventos, projetos, parcerias & oficinas</h1>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    
                </div>

        </div>
    )
}