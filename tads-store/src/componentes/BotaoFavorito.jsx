import { useState } from "react";

function BotaoFavorito() {
    const [favoritado, setFavoritado] = useState(false);

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