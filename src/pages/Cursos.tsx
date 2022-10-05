import { Background } from "../components/Background";
import { Header } from "../components/Header";
import { Item } from "../components/Item";

export function Cursos() {

    return  (
        <div>
            <Header/>
            
            <div className="flex flex-col p-24">
                <div className=" mb-12 w-full bg-bgMaker bg-cover bg-no-repeat bg-center rounded h-72 flex items-center justify-center flex-col">
                    <h1 className=" max-h-[60%] text-center text-5xl font-bold text-white">Escolha uma máquina para começar</h1>
                    <p className=" max-h-[60%] text-center mt-4 text-lg text-white font-semibold">Você pode opitar por começar com a impressora 3D, corte a laser e muito mais ; )</p>
                </div>

                <div className="w-full grid grid-cols-3 gap-4">
                    <Item/>
                    
                </div>
            </div>
        </div>
    );
}