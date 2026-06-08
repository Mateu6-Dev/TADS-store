import Selo from "./Selo";
import Botao from "./Botao";

function ProdutoCard ({produto}) {
    const precoFormatado = produto.preco?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return (
        <div className="produto-card">
            <img src={produto.imagem}  alt={produto.nome} className="produto-imagem" />
            <h3 className="produto-nome">{produto.nome}</h3>
            <p className="produto-preco">{precoFormatado}</p>

            {/*Renderização condicional: Só mostra o selo se fretegratis for true */}
            {produto.freteGratis && <Selo texto="Frete Grátis" cor="verde"/>}

            <div className="produto-acoes">
                <Botao texto="Adicionar ao Carrinho" />
            </div>
        </div>
    );
}

export default ProdutoCard;