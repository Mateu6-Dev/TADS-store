import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BotaoVoltar from "../componentes/BotaoVoltar";

function Detalhe() {
    const {id} = useParams();
    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setCarregando(true);
        setErro(null);

        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Não foi possível encontrar os detalhes deste produto.");
                }
                return res.json();
            })
            .then((dados) => {
                setProduto(dados);
                setCarregando(false);
            })
            .catch((err) => {
                setErro(err.message);
                setCarregando(false);
        });
    }, [id]);

    if (carregando) return <p>Carregando...</p>;

    if (erro) {
        return (
            <div className="detalhe-erro">
                <p className="mensagem-status erro">Ops! {erro}</p>
                <BotaoVoltar />
            </div> 
        )
    }

    if (!produto) return null;

    const precoFormatado = produto.price?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return (
        <article className="detalhe">
            <div className="detalhe-topo">
                <BotaoVoltar />
            </div>

            <h1>{produto.title}</h1>
            <img src={produto.thumbnail} alt={produto.title} />
            <p>{produto.description}</p>
            <p className="preco">{precoFormatado}</p>

        </article>
    );
}

export default Detalhe;