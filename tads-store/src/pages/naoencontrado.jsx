import BotaoVoltar from "../componentes/BotaoVoltar";

function NaoEncontrado() {
    return (
        <section className="nao-encontrada-container">
            <div className="nao-encontrada-conteudo">
                
                <h1 className="erro-titulo">404</h1>
                <h2>Ops! Página não encontrada</h2>
                <p>
                    O endereço que você tentou acessar não existe ou foi movido.
                </p>
                
                <div className="nao-encontrada-acao">
                    <BotaoVoltar />
                </div>
            </div>
        </section>
    );
}

export default NaoEncontrado;