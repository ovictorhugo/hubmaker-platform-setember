import { AuthWrapper } from "../components/AuthWrapper";
import { Background } from "../components/Background";
import { Header } from "../components/Header";

export function Login() {

    return  (
        
        <div>
            <div className=" max-h-[100vh -56px] bg-yellow-400 w-full flex items-center flex-col justify-center top-0 left-0 z-[-999] overflow-hidden absolute">
                <div className=" w-[1000%] h-[50vh] bg-bgHub3 bg-repeat-x bg-center bg-bg animate-bgSlideOne "></div>
                <div className=" w-[1000%] h-[50vh] bg-bgHub3 bg-repeat-x bg-center bg-bg animate-bgSlideTwo"></div>
            </div>

            <div className="h-[100vh] bg-black w-full absolute top-0 left-0 opacity-30"></div>

            <AuthWrapper
            title="Print ('Bem-vindo')"
            subtitle="Novo usuário?"
            textLink="Criar conta"
            link="/criar-conta"
            >

            </AuthWrapper>
        </div>
    )
}