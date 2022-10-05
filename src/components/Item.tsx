import { Play } from "phosphor-react";
import { Link } from "react-router-dom";

export function Item() {
    return (
      <div className="w-full p-4 rounded border border-transparent hover:shadow-xl hover:border-green-400 transition-colors">
        <div>
            <img src="" alt="" className=" h-60 rounded border mb-4"/>
        </div>

        <h3 className="text-2xl font-bold text-gray-500 mb-4">Corte a laser</h3>
        <p className="text-sm font-medium text-gray-400 mb-10">A Máquina de corte a laser é capaz de cortar papelão, papel, mdf, acrílico, EVA e muito mais!</p>

        <Link to="/event/lesson/abertura-do-evento-ignite-labs" className="p-3 text-xs bg-green-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-darkGreen-400 transition-colors">
                <Play size={16}/>
                Área de experimentação
        </Link>
      </div>
    );
  }