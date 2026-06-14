import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine () {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    const [busca, setBusca] = useState("");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [categorias, setCategorias] = useState([]); 

    useEffect (() => {
        const buscarProdutos = async () => {
            try {
                setCarregando(true);

                const resposta = await fetch("https://dummyjson.com/products?limit=12");
                if (!resposta.ok) {
                    throw new Error("Não foi possivel carregar os produtos.");
                }
                const dados = await resposta.json();
                setProdutos(dados.products);

                const respostaCats = await fetch("https://dummyjson.com/products/categories");
                if (respostaCats.ok) {
                    const dadosCats = await respostaCats.json();
                    setCategorias(dadosCats);
                }

            } catch (err) {
                setErro(err.message);
            } finally {
                setCarregando(false); 
            }
        };

        buscarProdutos();
    }, []);

    
    const produtosFiltrados = produtos.filter((item) => {
        const bateComBusca = item.title.toLowerCase().includes(busca.toLowerCase());
        
        const slugCategoria = item.category;
        const bateComCategoria = categoriaSelecionada === "" || slugCategoria === categoriaSelecionada;

        return bateComBusca && bateComCategoria;
    });

    if (carregando) {
        return <p className="mensagem-status">Carregando produtos...</p>;
    }

    if (erro) {
        return <p className="mensagem-status erro">Ops! Ocorreu um erro: {erro}</p>;
    }

    return (
        <section className="vitrine-container">
            <h2>Confira Nossas Ofertas</h2>

            <div className="vitrine-filtros" style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                
                <input 
                    type="text"
                    placeholder="Buscar produto pelo nome..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="input-busca"
                />

                <select 
                    value={categoriaSelecionada} 
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}
                    className="select-categoria"
                >
                    <option value="">Todas as Categorias</option>
                    {categorias.map((cat, index) => {
                        const valorSlug = cat.slug || cat;
                        const nomeExibicao = cat.name || cat;
                        return (
                            <option key={valorSlug || index} value={valorSlug}>
                                {nomeExibicao}
                            </option>
                        );
                    })}
                </select>
            </div>

            {produtosFiltrados.length === 0 ? (
                <p className="mensagem-aviso">Nenhum produto encontrado para os filtros aplicados.</p>
            ) : (
                <div className="vitrine-grid">

                    {produtosFiltrados.map((item) => (
                        <ProdutoCard key={item.id} produto={item}/>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Vitrine;