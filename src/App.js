import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from "./pages/Inicio";
import Sobremim from "./pages/Sobremim";


//seletor coringa *
//Cada route atua como uma página que será acessada, baseada no path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/sobremim' element={<Sobremim/>} />
        <Route path='*' element={<div>Página não encontrada!</div>} />   
      </Routes>
    </BrowserRouter>
  )
}

export default App;



