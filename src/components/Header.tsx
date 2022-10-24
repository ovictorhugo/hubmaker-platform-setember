import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { DiscordLogo, Lightbulb, PlusCircle, User } from "phosphor-react";
import { Button } from "./Button";

export function Header() {
    return  (
        <header className="min-h-[58px] w-full py-2 flex items-center px-12 lg:px-24 bg-transparent absolute top-0 left-0  justify-between">
            <div className="flex items-center justify-center">
                <Link to="/"><Logo/></Link>

                <div className="w-[1px] h-[24px] bg-gray-300 mx-4 hidden sm:flex"></div>

                <ul className="hidden sm:flex">
                    <Link to=""><li className=" h-full text-sm text-gray-400 font-semibold mr-4 hover:text-gray-500 transition-colors">Página Inicial</li></Link>
                    <Link to=""><li className=" h-full text-sm text-gray-400 font-semibold mr-4 hover:text-gray-500 transition-colors">Sobre</li></Link>
                    <Link to=""><li className=" h-full text-sm text-gray-400 font-semibold mr-4 hover:text-gray-500 transition-colors">Comunidade</li></Link>
                </ul>
            </div>

            <div className=" hidden md:flex items-center justify-center">
            <Link to="/criar-conta" className="p-3 mr-4 text-xs text-blue-400 border border-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <PlusCircle size={16}/>
                Criar conta
            </Link>

            

           

            <a href="" className="p-3 text-xs bg-blue-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors">
                <DiscordLogo size={16}/>
                Entrar no discord
            </a>
            </div>
        </header>
    )
}