import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return(
        <main>
            <Banner />
          
            <Outlet/>   
            {/* o componente Outlet, do react-router-dom faz com que seja renderizada a rota de referência associada a Route em inicio */}
        </main>
    )
}