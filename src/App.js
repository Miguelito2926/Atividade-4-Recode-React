
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Promocao from "./views/Promocao";
import Destino from "./views/Destino";
import Contato from "./views/Contato";
import Cadastro from "./views/Cadastro";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;