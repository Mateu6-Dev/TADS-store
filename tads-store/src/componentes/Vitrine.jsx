import ProdutoCard from "./ProdutoCard";

const PRODUTOS_TECH = [
    { id: 1, nome: "Notebook Gamer", preco: 4599.90, freteGratis: true, imagem: "https://media.istockphoto.com/id/966176948/pt/foto/collage-about-american-football-players-in-dynamic-action-with-ball-in-a-professional-sport.webp?a=1&b=1&s=612x612&w=0&k=20&c=PZY6NvDBrwMLKaLr_9wFVITZeHRv0T4n0BLMj5G-L0c=" },
    { id: 2, nome: "Mouse Gamer", preco: 189.90, freteGratis: false, imagem: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91c2V8ZW58MHx8MHx8fDI%3D" },
    { id: 3, nome: "Teclado Mecânico RGB", preco: 349.90, freteGratis: true, imagem: "https://media.istockphoto.com/id/1396231106/pt/foto/gaming-keyboard-with-backlight.webp?b=1&s=612x612&w=0&k=20&c=45rLd6Y0GtybXNhPU6xwbTisdP-Ddib7ZSy5SUSM70s=" },
    { id: 4, nome: "Monitor 29", preco: 1299.00, freteGratis: false, imagem: "https://cdn.stocksnap.io/img-thumbs/280h/computer-desk_GVYM0DWG9D.jpg" }
];

function Vitrine() {
    return (
        <section className="vitrine-container">
            <h2>Confira Nossas Ofertas</h2>
            <div className="vitrine-grid">
                {PRODUTOS_TECH.map((item) => (
                <ProdutoCard key={item.id} produto={item}/> ))}
            </div>
        </section>
    );
}

export default Vitrine;