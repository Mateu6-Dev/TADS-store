function Botao({ texto = "Comprar"}) {
    return (
        <button className="botao-customizado">
            {texto}
        </button>
    );
}
export default Botao;