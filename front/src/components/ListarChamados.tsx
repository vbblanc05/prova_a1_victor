import { useEffect, useState } from "react";
import axios from "axios";
import { Chamado } from "../models/chamados";
import { Link } from "react-router-dom";

function ListarChamados() {
    const [chamados, setChamados] = useState<Chamado[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/chamado/listar")
            .then((resposta) => setChamados(resposta.data));
    }, []);

    return (
        <div>
            <h1>Lista de Chamados</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th><th>Título</th><th>Status</th><th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {chamados.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.titulo}</td>
                            <td>{c.status}</td>
                            <td><Link to={`/pages/chamado/alterar/${c.id}`}>Alterar Status</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListarChamados;