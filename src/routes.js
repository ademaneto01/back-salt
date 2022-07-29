import { Routes, Route } from 'react-router-dom';
import { DashCadastroUsuario } from './pages/cadastro/index'



function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<DashCadastroUsuario />} />
        </Routes>
    );
}

export { MainRoutes };