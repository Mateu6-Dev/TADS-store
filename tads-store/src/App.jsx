import { Routes, Route} from "react-router-dom";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";
import "./App.css";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Detalhe />} />
                <Route path="*" element={<NaoEncontrado />} />
            </Routes>
        </Layout>
    );
}

export default App;