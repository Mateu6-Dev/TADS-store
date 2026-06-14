import { useState } from "react";

function BotaoFavorito() {
    // Estado local: começa como false (não favoritado)
    const [favoritado, setFavoritado] = useState(false);

    // Função que inverte o estado atual ao clicar
    const alternarFavorito = () => {
        setFavoritado(!favoritado);
    };

    return (
        <button 
            onClick={alternarFavorito} 
            className={`botao-favorito ${favoritado ? "ativo" : ""}`}
            title={favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
            {favoritado ? "❤️" : "🤍"}
        </button>
    );
}

export default BotaoFavorito;