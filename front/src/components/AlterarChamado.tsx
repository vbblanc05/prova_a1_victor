import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Chamado } from "../models/chamados";

function AlterarChamado() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [chamado, setChamado] = useState<Chamado>();

    useEffect(() => {
        if(id) axios.get(`http://localhost:5000/api/chamado/buscar/${id}`)
            .then(r => setChamado(r.data));

    }, [id]);

    function alterar() {
        axios.patch(`http://localhost:5000/api/chamado/alterar/${id}`)
            .then(() => navigate("/pages/chamado/listar"));
            
    }

    return (
        <div>
            <h1>Alterar Status</h1>
            {chamado && (
                <>
                    <p>Status Atual: {chamado.status}</p>
                    <button onClick={alterar}>Avançar Status</button>
                </>
            )}
        </div>
    );
}
export default AlterarChamado;