import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobremim from "./pages/Sobremim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "pages/Post";
import Error from "componentes/Error";

//seletor coringa *
//Cada route atua como uma página que será acessada, baseada no path

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobremim />} />
          <Route path="posts/:id" element={< Post/>} />
        </Route>

        {/* 
          Na rota '/' a estrutura a ser renderizada é : <PaginaPadrao><Inicio/></PaginaPadrao>
          Na rota '/sobremim' a estrutura a ser renderizada é : <PaginaPadrao><Sobremim/></PaginaPadrao>


          pode-se utilizar o index presente na documentação para deixar uma rota com o mesmo caminho de sua rota pai, como está sendo feito acima

        */}

        <Route path="*" element={<Error />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
