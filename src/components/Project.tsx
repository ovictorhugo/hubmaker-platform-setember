import { Play } from "phosphor-react";
import { Link } from "react-router-dom";

export function Project() {
    return (
      <Link to="" className="w-full h-auto rounded p-4 border border-transparent hover:shadow-xl hover:border-green-400 transition-colors ">
        <div className="relative pt-[78.22%]">
            <div className="absolute top-0 right-0 h-full w-full">
              <img src="" alt="" className=" h-full w-full rounded border"/>
            </div>
        </div>

        <h5 className="text-lg font-bold text-gray-500 py-4">Corte a laser</h5>
      </Link>
    );
  }