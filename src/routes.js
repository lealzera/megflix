import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.js';
import Filmes from './pages/Filmes/Filmes.js';
import Erro from './pages/Erro/Erro.js';
import Header from './components/Header/Header.js';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filmes/:id" element={ <Filmes/> } />  
                <Route path="*" element={ <Erro /> } />  
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;