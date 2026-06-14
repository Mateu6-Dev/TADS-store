import Selo from "./Selo";
import Botao from "./Botao";
import BotaoFavorito from "./BotaoFavorito";

function ProdutoCard ({produto}) {
    const precoFormatado = produto.price?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const temFreteGratis = produto.price > 50;

    return (
        <div className="produto-card">
            <div className="container-favorito">
                <BotaoFavorito />
            </div>

            <img src={produto.thumbnail}  alt={produto.title} className="produto-imagem" />
            <h3 className="produto-nome">{produto.title}</h3>
            <p className="produto-preco">{precoFormatado}</p>

            {temFreteGratis && <Selo texto="Frete Grátis" cor="verde"/>}

            <div className="produto-acoes">
                <Botao texto="Adicionar ao Carrinho" />
            </div>
        </div>
    );
}

export default ProdutoCard;