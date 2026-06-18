import { useNavigate } from "react-router-dom";

function BotaoVoltar() {
    const navegar = useNavigate();

    return (
        <button 
            onClick={() => navegar(-1)} 
            className="botao-voltar"
        >
            ← Voltar para a Home
        </button>
    );
}

export default BotaoVoltar;