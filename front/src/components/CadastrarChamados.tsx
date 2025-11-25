import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Chamado } from "../models/chamados";

function CadastrarChamado() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    function cadastrar(e: any) {
        e.preventDefault();
        const chamado: Chamado = { titulo, descricao, status: "" };
        axios.post("http://localhost:5000/api/chamado/cadastrar", chamado)
            .then(() => navigate("/pages/chamado/listar"));
    }

    return (
        <form onSubmit={cadastrar}>
            <h1>Novo Chamado</h1>
            <input placeholder="Título" onChange={e => setTitulo(e.target.value)} required />
            <input placeholder="Descrição" onChange={e => setDescricao(e.target.value)} />
            <button type="submit">Cadastrar</button>
        </form>
    );
}
export default CadastrarChamado;