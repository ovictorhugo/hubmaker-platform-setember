import { Play } from "phosphor-react";
import { Link } from "react-router-dom";

interface ItemProps {
  title: string;
  description: string;
  slug: string;
  img: string;
}

export function Item(props: ItemProps) {
    return (
      <div className="w-full p-6 rounded border flex flex-col border-transparent hover:shadow-xl hover:border-blue-400 transition-colors justify-between">
        <div>
          <div>
              <img src={props.img} alt="" className=" h-52 rounded border mb-4"/>
          </div>

          <h3 className="text-2xl font-bold text-gray-500 mb-4">{props.title}</h3>
          <p className="text-sm font-medium text-gray-400 mb-10">{props.description}</p>
        </div>
        

        <Link to={`/${props.slug}`} className="p-3 relative bottom-0 text-xs bg-blue-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors">
                <Play size={16}/>
                Área de experimentação
        </Link>
      </div>
    );
  }