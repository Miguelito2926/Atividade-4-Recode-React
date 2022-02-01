import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link><br/>
            <Link to="/Promocao">Promocao</Link><br />
            <Link to="/Destino">Destino</Link><br/>
            <Link to="/Cadastro">Cadastro</Link><br/>
            <Link to="/Contato">Contato</Link><br/>
        </nav>
    );
}