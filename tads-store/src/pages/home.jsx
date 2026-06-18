import Vitrine from "../componentes/Vitrine";

function Home() {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>Bem-vindo à TADS Store</h1>
                <p>O seu espaço para encontrar o melhor em tecnologia!</p>
            </div>
            <Vitrine />
        </div>
    );
}

export default Home;