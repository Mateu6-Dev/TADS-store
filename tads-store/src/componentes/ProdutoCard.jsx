import { Link } from "react-router-dom";
import Selo from "./Selo";
import Botao from "./Botao";
import BotaoFavorito from "./BotaoFavorito";

function ProdutoCard ({produto}) {
    const precoFormatado = produto.price?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const temFreteGratis = produto.price > 300;

    return (
        <div className="produto-card">
            <div className="container-favorito">
                <BotaoFavorito />
            </div>

            <img src={produto.thumbnail}  alt={produto.title} className="produto-imagem" />

            <h3 className="produto-nome">{produto.title}</h3>
            <p className="produto-preco">{precoFormatado}</p>

            <div className="link-detalhes-container">
                <Link to={`/produto/${produto.id}`} className="link-detalhes">
                    <p>Ver detalhes</p>
                </Link>
            </div>

            {temFreteGratis && <Selo texto="Frete Grátis" cor="verde"/>}

            <div className="produto-acoes">
                <Botao texto="Adicionar ao Carrinho" />
            </div>
        </div>
    );
}

export default ProdutoCard;