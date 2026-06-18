import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine () {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    const [busca, setBusca] = useState("");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [categorias, setCategorias] = useState([]); 

    useEffect(() => {
    const buscarProdutosTech = async () => {
        try {
            setCarregando(true);

            const [resSmartphones, resLaptops] = await Promise.all([
                fetch("https://dummyjson.com/products/category/smartphones"),
                fetch("https://dummyjson.com/products/category/laptops")
            ]);

            if (!resSmartphones.ok || !resLaptops.ok) {
                throw new Error("Não foi possível carregar os produtos de tecnologia.");
            }

            const dadosSmartphones = await resSmartphones.json();
            const dadosLaptops = await resLaptops.json();

            const apenasTech = [...dadosSmartphones.products, ...dadosLaptops.products];

            setProdutos(apenasTech);

            setCategorias([
                { slug: "smartphones", name: "Smartphones" },
                { slug: "laptops", name: "Notebooks" }
            ]);

        } catch (err) {
            setErro(err.message);
        } finally {
            setCarregando(false);
        }
    };

    buscarProdutosTech();
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