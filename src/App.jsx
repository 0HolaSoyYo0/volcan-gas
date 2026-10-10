
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

import { Routes, Route  } from "react-router-dom";

import { itemsMenu } from "./data/itemsMenu.js";


function App() {
    return(
        <>
            <Header nombre={ "Titulo" } subtitulo={ "Subtitulo" } itemsMenu={ itemsMenu } />

            <Routes>
                <Route path={ "/" } element={ <Home /> } />
                {/*<Route path={ "" } element={  } />*/}
                {/*<Route path={ "" } element={  } />*/}
                {/*<Route path={ "" } element={  } />*/}
            </Routes>
        </>
    )
}

export default App;