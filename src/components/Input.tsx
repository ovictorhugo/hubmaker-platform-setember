import { Check } from "phosphor-react";
import { Link } from "react-router-dom";

interface InputProps {
    label: string;
    type: string;
}

export function Input(props: InputProps) {
    return (
      <div className="mb-6 flex flex-col group">
        <label htmlFor="" className="text-gray-500 text-left pb-2 text-sm font-semibold focus:text-blue-400">{props.label}</label>
        <input type={props.type} className="pb-2 w-auto text-base text-gray-500 flex items-center font-semibold border-b outline-none hover:border-b-gray-500 focus:border-b-blue-400 transition-colors" />
      </div>
    );
  }