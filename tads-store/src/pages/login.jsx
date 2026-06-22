import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../componentes/AuthContext";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const {entrar} = useAuth();
    const navegar = useNavigate();

    function aoEnviar(e) {
        if (usuario === "Mateus" && senha === "1234") {
            entrar();
            navegar("/minha-conta");
        } else {
            setErro("Usuário ou senha inválidos.");
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2>Acessar Ians Store</h2>
                <p>Identifique-se para continuar</p>

                <form onSubmit={aoEnviar} className="login-fora">
                    <input 
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Usuário"
                        className="login-input"
                        required 
                    />

                    <input 
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Senha (Ex: 1234)"
                        className="login-input"
                        required
                    />

                    {erro && <p className="login-erro">{erro}</p>}

                    <button type="submit" className="login-botao">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );

    
}

export default Login;