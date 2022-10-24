import { Link } from "react-router-dom";
import { CaretDown, FileArrowDown, GearSix, Lightbulb, Play, Plus } from "phosphor-react";
import { Carousel } from "./carousel";
import { Project } from "./Project";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from "react";
import { Maps } from "./Maps";

import cjcc from '../assets/logo_cjcc.png';
import ods from '../assets/ods.png';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import maker from '../assets/maker_img.png';

export function Homepage() {
    const {} = useLoadScript({googleMapsApiKey: "AIzaSyDU3EikrUmBmdCL9W05eiS1NzaVCwHMnr0"});
    return  (
        
        <div >
            <div className=" min-h-screen flex justify-center flex-col px-12 lg:px-24 ">
            <h1 className="max-w-[400px] lg:max-w-[700px] text-5xl lg:text-6xl font-bold text-gray-500">Desenvolva e coloque sua ideia em prática ; )</h1>
            <p className=" max-w-[400px] lg:max-w-[700px] mt-4 text-lg text-gray-400 font-semibold">O Hub Maker Bahia é um projeto da parceria do Centro Juvenil de Ciência e Cultura com a UNEB, UFBA, IFBA e Faculdade Bahiana de Medicina que desenvolve atividades voltadas para Educação, Robótica, impressão 3D e Cultura Maker.</p>

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

            <div className="h-full w-28 absolute top-[56px] right-24 overflow-hidden z-[-999] hidden sm:flex">
                <div className=" w-full h-[1000%] bg-bgVertical bg-repeat-y bg-center bg-bgv animate-bgVertical">
                </div>
                <div className="bg-gradient-to-r from-transparent to-white w-full h-28 absolute bottom-[0px] rotate-90"></div>
            </div>

    
        </div>

        <div className="text-gray-500 w-full items-center justify-center hidden sm:flex absolute bottom-12 hover:text-black">
            <a href="#o-hub-maker-bahia"><CaretDown size={24} className="animate-bounce"/></a>
        </div>

        <div id="o-hub-maker-bahia" className="min-h-[50vh] lg:min-h-[90vh] pb-12 lg:py-36 w-full flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-[50%] bg-bgMakerHome bg-no-repeat bg-left bg-bgvlg w-full h-[200px] lg:h-auto lg:bg-bgv"></div>

            <div className="lg:w-[50%] flex justify-center flex-col px-12 py-12 w-full lg:px-24 lg:py-0 items-center lg:items-start">
                <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">O Hub Maker Bahia</h1>
                <p className=" max-w-[600px] mt-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">surge da necessidade de se ter um espaço maker público capaz de atender toda a comunidade de inventores e entusiastas  do Estado da Bahia.</p>
            </div>
        </div>  

        <Carousel/>

        <div className="min-h-[50vh] lg:min-h-[90vh] pb-12 lg:py-36 w-full flex flex-col lg:flex-row">
            
            <div className="lg:w-[50%] flex justify-center flex-col px-12 py-12 w-full lg:px-24 lg:py-0 items-center lg:items-start">
                <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">O laboratório</h1>
                <p className=" max-w-[600px] mt-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">fomenta o desenvolvimento de novas competências e habilidades fundamentais para as profissões futuras, através da formação de novos makers.</p>
            </div>
            <div className="lg:w-[50%] bg-bgBahia bg-no-repeat bg-right bg-bgvlg w-full h-[200px] lg:h-auto lg:bg-bgv"></div>
        </div>    

        <div className="min-h-[70vh]  w-full flex  flex-col"> 
        <h1 className=" text-center text-5xl lg:text-6xl font-bold text-gray-500 mb-12 px-12">Como enviar meu projeto?</h1>

            <div className="mb-12 lg:mb-0">
                <div className="">
                    <img src={one} className=" relative w-auto h-auto pr-24 mb-12 lg:mb-0 z-[-999]"/>

                    <div className="lg:w-[50%] relative lg:-top-40 flex justify-center flex-col px-12 w-full lg:px-24 lg:py-0 items-center lg:items-start ">
                        <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Modelagem</h1>
                        <p className=" max-w-[600px] my-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">O usuário poderá criar sua própria modelagem 3D do protótipo, o Hub maker dispõe de mini cursos para você aprender o básico sobre os softwares onShape, Tinkercad e Fusion 360.</p>
                    </div>
                </div>

                <div className="justify-end items-end flex flex-col">
                    <img src={two} className=" relative w-auto h-auto pl-24 mb-12 lg:mb-0 z-[-999]"/>

                    <div className="lg:w-[50%] relative lg:-top-40 flex justify-center lg:justify-end items-center lg:items-end flex-col px-12 w-full lg:px-24 lg:py-0 lg:items-start ">
                        <h1 className="max-w-[600px] text-center lg:text-right text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Envio do arquivo</h1>
                        <p className=" max-w-[600px] my-4 text-lg text-center lg:text-right text-gray-400 font-semibold lg:max-w-full">O usuário deverá preencher um formulário com os requisitos técnicos a cerca do projeto desenvolvido e anexar os arquivos necessários para impressão 3d. Assim, você deverá aguardar o contato da equipe técnica para o agendamento.</p>
                    </div>
                </div>

                <div className="">
                    <img src={three} className=" relative w-auto h-auto pr-24 mb-12 lg:mb-0 z-[-999]"/>

                    <div className="lg:w-[50%] relative lg:-top-40 flex justify-center flex-col px-12 w-full lg:px-24 lg:py-0 items-center lg:items-start ">
                        <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Impressão 3D <br/> do protótipo</h1>
                        <p className=" max-w-[600px] my-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">Nesta etapa, será realizada as preparações técnicas do objeto juntamente com um especialista. A impressão poderá ser acompanhada através de live no horário agendado.</p>
                    </div>
                </div>

                <div className="justify-end items-end flex flex-col">
                    <img src={four} className=" relative w-auto h-auto pl-24 mb-12 lg:mb-0 z-[-999]"/>

                    <div className="lg:w-[50%] relative lg:-top-40 flex justify-center lg:justify-end items-center lg:items-end flex-col px-12 w-full lg:px-24 lg:py-0 lg:items-start ">
                        <h1 className="max-w-[600px] text-center lg:text-right text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Entrega do protótipo</h1>
                        <p className=" max-w-[600px] my-4 text-lg text-center lg:text-right text-gray-400 font-semibold lg:max-w-full">Nesta etapa será realizada a logística de envio/retirada do protótipo conforme acordo prévio</p>
                    </div>
                </div>
            </div>

        </div>    

        <div id="" className="w-full flex justify-center items-center px-12 lg:px-24">
            <div className="w-full h-96 rounded  flex flex-col justify-center items-center border border-blue-400 p-6 ">
                <h1 className=" max-h-[60%] text-center text-5xl font-bold text-blue-400">Coloque sua ideia em prática</h1>
                <div className="flex mt-12 flex-col sm:flex-row w-full justify-center">
                <Link to="/envie-seu-projeto" className="p-3 sm:mr-4 mb-4 sm:mb-0 text-xs text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
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

        <div className="min-h-[50vh] lg:min-h-[90vh] pb-12 lg:py-36 w-full flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-[50%] flex justify-center lg:justify-start items-center w-full  px-12 lg:py-12 w-full lg:pl-24">
                <img src={cjcc} alt="" className="h-auto w-[90%]" />
            </div>

            <div className="lg:w-[50%] flex justify-center flex-col px-12 py-12 w-full lg:px-24 lg:py-0 items-center lg:items-start">
                <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Localização</h1>
                <p className=" max-w-[600px] my-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">O Centro Juvenil de Ciência e Cultura (CJCC) de Salvador sedia esse espaço, o seu funcionamento é aberto a todo público que busca desenvolver projetos e pesquisas que apresentam etapas de prototipagem.</p>
                <Link to="/" className="w-full p-3 text-xs text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
                    <Plus size={16}/>
                    Conheça mais
                </Link>
            </div>
        </div>

        <div id="" className="w-full flex justify-center items-center px-12 pb-12 lg:pb-36 lg:px-24 lg:pt-0">
            <div className="w-full h-[70vh] rounded  flex flex-col justify-center items-center bg-blue-100">
                

               <Maps/>




            </div>
        </div>


        <div className="h-24 w-full overflow-hidden absolute z-[-999] ">
                <div className=" h-full w-[1000%] bg-bgParceiros bg-repeat-x bg-left bg-bg animate-bgSlideTwo"></div>
                <div className="bg-gradient-to-r from-transparent to-white w-80 h-full absolute bottom-0 right-0"></div>
                <div className="bg-gradient-to-r from-white to-transparent w-80 h-full absolute bottom-0 left-0"></div>
        </div>

        <div className="h-24 w-full"></div>

        <div className="min-h-[50vh] lg:min-h-[90vh] pb-12 lg:py-36 w-full flex flex-col lg:flex-row ">
            
            <div className="lg:w-[50%] flex justify-center flex-col px-12 py-12 w-full lg:px-24 lg:py-0 items-center lg:items-start">
                <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Cultura Maker</h1>
                <p className=" max-w-[600px] mt-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">conceito que engloba impressão 3D, IA (Inteligência Artificial), IoT (Internet of Things), dentre outros, que ganham cada vez mais destaque, <strong className="font-bold text-blue-400"> favorece a manufatura de aplicação de prototipagem </strong> para estudantes do ensino médio e superior do estado da Bahia</p>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center w-full  px-12 lg:py-12 w-full lg:pl-24">
                <img src={maker} alt="" className="h-auto w-[90%]" />
            </div>
        </div>   

       <div className="p-12 lg:p-24 bg-green-100">
            <h1 className="max-w-full text-center  text-4xl  font-bold text-green-400">O laboratório maker tem como os seus objetivos dar suporte ao desenvolvimento tecnológico no estado da Bahia </h1>
       </div>

        <div className="min-h-[50vh] lg:min-h-[90vh] pb-12 lg:py-36 w-full flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-[50%] flex justify-center lg:justify-start items-center w-full  px-12 lg:py-12 w-full lg:pl-24">
                <img src={ods} alt="" className="h-auto w-[90%]" />
            </div>

            <div className="lg:w-[50%] flex justify-center flex-col px-12 py-12 w-full lg:px-24 lg:py-0 items-center lg:items-start">
                <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Objetivos sustentáveis</h1>
                <p className=" max-w-[600px] my-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">O Hub Maker Bahia possui como um dos objetivos os ODSs da ONU. Realizando ações que visam a saúde e bem estar, igualdade de gênero, educação de qualidade, cidades e comunidades sustentáveis e parceria e meio de implementação.</p>
                <a href="https://brasil.un.org/" target="_blank" className="w-full p-3 text-xs text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
                    <Plus size={16}/>
                    Conheça mais
                </a>
            </div>
        </div>

        <div id="" className="w-full flex justify-center items-center px-12 pt-12 lg:px-24 lg:pt-0 pb-12 lg:pb-36">
            <div className="w-full h-[70vh] rounded  flex flex-col justify-center items-center bg-blue-100">
                






            </div>
        </div>

        <div className="min-h-[50vh] lg:min-h-[90vh] w-full flex flex-col lg:flex-row">
            
            <div className="lg:w-[50%] flex justify-center flex-col px-12 py-12 w-full lg:px-24 lg:py-0 items-center lg:items-start">
                <h1 className="max-w-[600px] text-center lg:text-left text-5xl lg:text-6xl font-bold text-gray-500 lg:max-w-full">Dúvidas e sugestões</h1>
                <p className=" max-w-[600px] mt-4 text-lg text-center lg:text-left text-gray-400 font-semibold lg:max-w-full">Entre em contato pelo formulário</p>

                <form action="">
                    
                </form>
            </div>
            <div className="lg:w-[50%] bg-bgBahiaMapa bg-no-repeat bg-right bg-bgvlg w-full h-[500px] lg:h-auto lg:bg-bgbahia"></div>
        </div> 
    

            <div className="w-full  grid grid-cols-3 gap-4 p-24">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-500 pr-16">Eventos, projetos, parcerias & oficinas</h1>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    
                </div>

        </div>
    )
}