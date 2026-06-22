import { Routes, Route} from "react-router-dom";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import Login from "./pages/login";
import MinhaConta from "./pages/MinhaConta";
import NaoEncontrado from "./pages/NaoEncontrado";
import RotaPrivada from "./componentes/RotaPrivada";
import "./App.css";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Detalhe />} />
                <Route path="/login" element={<Login />} />

                <Route 
                    path="/minha-conta"
                    element={
                        <RotaPrivada>
                            <MinhaConta />
                        </RotaPrivada>
                    }
                
                />
                <Route path="*" element={<NaoEncontrado />} />
            </Routes>
        </Layout>
    );
}

export default App;