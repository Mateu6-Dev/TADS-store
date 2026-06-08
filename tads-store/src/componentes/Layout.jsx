import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout ({children}) {
    return (
        <div className="app-container">
            <Cabecalho titulo="TADS Store - A sua Loja de Tecnologia" />
            <main  className="conteudo-principal">
                {children}
            </main>
            <Rodape />
        </div>
    );
}

export default Layout;