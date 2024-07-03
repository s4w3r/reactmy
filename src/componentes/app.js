import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/maestro";
import Nofound from "./pages/Nofound";
import Navegar from "./pages/Navegar";

const App = ()=>(
    <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Nofound/>}></Route>
                <Route path="/Contenedor" element={<Maestro/>}></Route>
                <Route path="/Navegar" element={<Navegar/>}></Route>
            </Routes>
        </BrowserRouter>
)

export default App