
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route  } from "react-router-dom";

import { itemsMenu } from "./data/itemsMenu.js";
import Login from "./pages/autenticacion/Login.jsx";


function App() {
    return(
        <>
            <Header nombre={ "Gas El Volcán" } subtitulo={ "El calor de la casa" } itemsMenu={ itemsMenu } />

            <main>
                <Routes>
                    <Route path={ "/" } element={ <Home /> } />
                    <Route path={ "/login" } element={ <Login /> } />
                    {/*<Route path={ "" } element={  } />*/}
                    {/*<Route path={ "" } element={  } />*/}
                </Routes>

            
            </main>
            <Footer />
        </>
    )
}

export default App;