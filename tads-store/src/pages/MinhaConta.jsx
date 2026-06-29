import { useAuth } from "../componentes/AuthContext";
import BotaoVoltar from "../componentes/BotaoVoltar";

function MinhaConta() {
    const { sair } = useAuth();

    return (
        <div className="minha-conta-container">
            <div className="minha-conta-topo">
                <BotaoVoltar />
            </div>

            <div className="painel-usuario">
                <h2>Minha Conta</h2>
                <p>Bem-vindo de volta! Você está conectado ao seu painel Ians Store.</p>
                
                <div className="dados-usuario">
                    <h3>Seu Perfil de Cliente</h3>
                    <p><strong>Nível do Perfil:</strong> Cliente Premium Tech</p>
                    <p><strong>Último Pedido:</strong> #10245 (Processando Envio)</p>
                </div>

                <button onClick={sair} className="botao-sair">
                    Sair da Conta
                </button>
            </div>
        </div>
    );
}

export default MinhaConta;
