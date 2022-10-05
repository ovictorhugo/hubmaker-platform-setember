import { CaretDown, Check } from "phosphor-react";
import { Link } from "react-router-dom";
import { Background } from "../components/Background";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Homepage } from "../components/Homepage";

export function EnvieSeuProjeto() {

    return  (
        <div>
            <Header/>
            <Background/>

            <div className="h-[100vh] flex items-center justify-center flex-col">
                <h1 className="max-w-[600px] text-center text-6xl font-bold text-gray-500">Saiba as regras para enviar seu projeto</h1>
                <p className=" max-w-[600px] text-center mt-4 text-lg text-gray-400 font-semibold">A proposta deve resumir as informações do projeto e vender a ideia para obter a adesão da iniciativa pelos receptores do documento.</p>
            </div>

            <div className="text-gray-500 w-full items-center justify-center flex absolute bottom-12 hover:text-black">
                <a href="#solicitacao-de-criacao-de-projeto"><CaretDown size={24} className="animate-bounce"/></a>
            </div>
            

            <div id="solicitacao-de-criacao-de-projeto" className="min-h-[100vh] p-24 pb-0 flex ">

                <div className="w-[70%] pr-24 mb-24">
                <h1 className="max-w-[600px] text-6xl font-bold text-gray-500">Solicitação de criação de projetos</h1>
                <p className=" text-left mt-8 text-lg text-gray-400 font-semibold">Através do preenchimento desse formulário, SOLICITO a criação do projeto descrito no item “Descrição do projeto” para fins pessoais e NÃO LUCRATIVOS/COMERCIAIS utilizando ferramentas/materiais e maquinários do Projeto Goethe Makerspace da biblioteca do Goethe-Institut Salvador Bahia localizado na Av. Sete de Setembro, n°1809, Corredor da Vitória.</p>
                <p className=" w-auto text-left mt-8 text-lg text-gray-400 font-semibold">Através desta solicitação declaro estar ciente que: </p>

                <p className=" text-left mt-8 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">O material e o período de uso da máquina estão abaixo descritos e devem ser respeitados. </p>
                <p className=" text-left mt-8 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">O uso das máquinas só poderá ocorrer mediante a presença do(a) profissional responsável da equipe do projeto Goethe Makerspace. </p>
                <p className=" text-left mt-8 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">A data de execução do projeto, quando não preestabelecida por esse documento, deve ser combinada com o profissional da equipe do projeto Goethe Makerspace. </p>
                <p className=" text-left mt-8 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">É proibida a criação de projetos com fins lucrativos ou comerciais. </p>
                <p className=" text-left mt-8 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">Estou ciente dos possíveis riscos de lesões gerados pelo uso inadequado dos equipamentos.  </p>
                <p className=" text-left mt-8 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">Sou responsável pelos danos gerados aos equipamentos/materiais/ferramentas e à propriedade em caso de uso inadequado dos equipamentos e devo ressarcir o dano causado. </p>
                <p className=" text-left mt-8 mb-20 p-4 border border-green-400 rounded text-lg text-gray-400 font-semibold">Autorizo a divulgação de imagens e vídeos do projeto em redes sociais do Goethe-Institut Salvador-Bahia em todo território nacional e no exterior, das seguintes formas: (I) campanhas em redes sociais; (II) folhetos em geral (encartes, mala direta, catálogo, etc.); (III) folder de apresentação; (IV) anúncios em revistas e jornais em geral; (V) home page; (VI) cartazes; (VIII) mídia eletrônica (painéis, vídeo-tapes, televisão, cinema, programa para rádio, entre outros). </p>

                <h1 className="max-w-[600px] my-8 text-6xl font-bold text-gray-500">Descrição do projeto</h1>

                <form action="">
                    <Input
                    label="Nome do projeto"
                    type="text"
                    ></Input>

                    <Input
                    label="Descrição"
                    type="text"
                    ></Input>

                    <Input
                    label="Inspiração (se possuir)"
                    type="text"
                    ></Input>

                    <Input
                    label="Objetivo do projeto"
                    type="text"
                    ></Input>

                    <p className=" w-auto text-left mb-8 text-lg text-gray-400 font-semibold">Por esta ser a expressão da minha vontade declaro que estou ciente dos termos acima descritos sem que nada haja a ser reclamado a título de direitos conexos à minha imagem ou a qualquer outro.</p>

                    <div className="flex justify-between">
                        <div className="w-[49%]">
                            <Input
                            label="Nome Completo"
                            type="text"
                            ></Input>
                        </div>

                        <div className="w-[49%]">
                            <Input
                            label="CPF"
                            type="number"
                            ></Input>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="w-[49%]">
                            <Input
                            label="Email"
                            type="email"
                            ></Input>
                        </div>

                        <div className="w-[49%]">
                            <Input
                            label="Data"
                            type="date"
                            ></Input>
                        </div>
                    </div>


                    <button type="submit" className="p-3 mt-4  w-full text-xs bg-green-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-darkGreen-400 transition-colors">
                    <Check size={16}/>
                    Submeter
                    </button>
                </form>

                <p className=" w-auto text-left mt-8 text-sm text-gray-400 font-semibold">*Ao submeter esse formulário, você receberá um email com os próximos passos. Não se esqueça de preencher os materiais e maquinários necessários. </p>
                
                </div>

                <div className="w-[30%] bg-bgFotosForms bg-repeat-y bg-top bg-bgv"></div>
                
            </div>
        </div>
    )
}