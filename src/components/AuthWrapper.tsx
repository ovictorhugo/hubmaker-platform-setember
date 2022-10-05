import { Check, GoogleLogo } from "phosphor-react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import { Logo } from "./Logo";

interface AuthWrapperProps {
    title: string;
    subtitle: string;
    link: string;
    textLink: any;
    children: any;
}

export function AuthWrapper(props: AuthWrapperProps) {
        return  (
            <div className="flex relative min-h-[100vh] px-24 py-4 items-center">
                <div className="flex-1 flex items-center">
                    <Logo/>
                </div>
                <div className="w-[480px] bg-white rounded p-14 h-[min-content]">
                    <h1 className="max-w-[600px] text-left text-4xl font-bold text-gray-500">{props.title}</h1>
                    <div className="flex mt-2 mb-8">
                        <p className=" max-w-[600px] text-base text-gray-500 font-semibold mr-1">{props.subtitle}</p>
                        <Link to={props.link}><p className=" max-w-[600px] text-base text-cyan-400 font-semibold hover:text-blue-400 transition-colors">{props.textLink}</p></Link>
                    </div>
    
                    <form action="">
                        
    
                    </form>
    
                    
                </div>
            </div>
        );

}