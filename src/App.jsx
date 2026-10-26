import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Catalogo from "./pages/stock/Catalogo.jsx";
import DetallesProducto from "./pages/stock/DetallesProducto.jsx";
import Error from "./pages/Error.jsx";
import { Routes, Route } from "react-router-dom";

import { itemsMenu } from "./data/itemsMenu.js";
import Login from "./pages/autenticacion/Login.jsx";
import RecuperarContrasena from "./pages/autenticacion/RecuperarContrasena.jsx";
import Register from "./pages/autenticacion/Register.jsx";
import Carrito from "./pages/stock/Carrito.jsx";

function App() {
	return (
		<>
			<Header nombre={"Gas El Volcán"} subtitulo={"El calor de la casa"} itemsMenu={itemsMenu} />

			<main>
				<Routes>
					// Inicio
					<Route path="/" element={<Home />} />
					// Gestion Cuenta Usuario
					<Route path="/login" element={<Login />} />
					<Route path="/register" elemenS«t={<Register />} />
					<Route path="/recuperacion" element={<RecuperarContrasena />} />
					<Route path="/nosotros" element={<Nosotros />} />
					<Route path="/productos" element={<Catalogo />} />
					<Route path="/productos/:id" element={<DetallesProducto />} />
					<Route path="/error" element={<Error />} />
					<Route path="*" element={<Error />} />
					<Route path="/carrito" element={<Carrito />} />
				</Routes>
			</main>

			<Footer />
		</>
	);
}

export default App;