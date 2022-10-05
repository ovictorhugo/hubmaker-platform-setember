import { Route, Routes } from "react-router-dom";
import { CriarConta } from "./pages/CriarConta";
import { Cursos } from "./pages/Cursos";
import { EnvieSeuProjeto } from "./pages/EnvieSeuProjeto";
import { Event } from "./pages/Event";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/event/lesson/:slug" element={<Event/>}/>
            <Route path="/envie-seu-projeto" element={<EnvieSeuProjeto/>}/>
            <Route path="/cursos" element={<Cursos/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/criar-conta" element={<CriarConta/>}/>
        </Routes>
    )
}