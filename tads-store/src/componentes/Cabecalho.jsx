import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importação do contexto global de login

function Cabecalho({ titulo }) {
    
    const { logado, sair } = useAuth();

    return (
        <header className="cabecalho-container">
            
            <h1 className="cabecalho-titulo">
                <Link to="/" className="cabecalho-link-home">
                    {titulo}
                </Link>
            </h1>

            {/* Menu de Navegação Dinâmico */}
            <nav className="cabecalho-menu">
                <Link to="/" className="menu-link">
                    Vitrine
                </Link>

                {logado ? (
                    <>
                        <Link to="/minha-conta" className="menu-link destaque">
                             Minha Conta
                        </Link>
                        <button onClick={sair} className="botao-sair-topo">
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="menu-link">
                            Entrar
                        </Link>
                        <Link to="/cadastro" className="menu-link destaque">
                            Cadastre-se
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Cabecalho;