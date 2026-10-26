import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import logoImg from '../assets/img/logo.png';
import './style/Header.css';

function Header({ nombre, subtitulo, itemsMenu }) {

	const [modoOscuro, setModoOscuro] = useState(
		localStorage.getItem('tema') === 'oscuro' || localStorage.getItem('theme') === 'dark'
	);

	useEffect(() => {
		document.documentElement.classList.toggle('oscuro', modoOscuro);
		localStorage.setItem('tema', modoOscuro ? 'oscuro' : 'claro');
	}, [modoOscuro]);


	const [totalCarrito, setTotalCarrito] = useState(() => {
		try {
			const guardados = JSON.parse(localStorage.getItem('carrito_volcan')) || [];
			return guardados.reduce((acc, item) => acc + (item.cantidad || 0), 0);
		} catch {
			return 0;
		}
	});

	useEffect(() => {
		const actualizarContador = () => {
			try {
				const guardados = JSON.parse(localStorage.getItem('carrito_volcan')) || [];
				setTotalCarrito(guardados.reduce((acc, item) => acc + (item.cantidad || 0), 0));
			} catch {
				setTotalCarrito(0);
			}
		};

		window.addEventListener('storage', actualizarContador);
		window.addEventListener('carritoActualizado', actualizarContador);

		return () => {
			window.removeEventListener('storage', actualizarContador);
			window.removeEventListener('carritoActualizado', actualizarContador);
		};
	}, []);

	return (
		<Navbar className="header-custom">
			<Container className="d-flex justify-content-between align-items-center">

				{/* Logo a la izquierda */}
				<NavLink to="/" className="navbar-brand-custom">
					<img src={logoImg} alt={nombre} className="brand-logo-img" />
					<div className="brand-text">
						<h1 className="h4 fw-bold mb-0">{nombre}</h1>
						<p className="small mb-0">{subtitulo}</p>
					</div>
				</NavLink>

				{/* Menú hacia la derecha */}
				<Nav className="header-nav d-flex flex-row align-items-center gap-3">
					{itemsMenu.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className="nav-link header-link fw-semibold"
						>
							{item.label}
						</NavLink>
					))}

					{/* Botón para alternar tema */}
					<button
						type="button"
						className="alternar-tema"
						onClick={() => setModoOscuro((estaOscuro) => !estaOscuro)}
						aria-label={modoOscuro ? 'Activar modo claro' : 'Activar modo oscuro'}
					>
						{modoOscuro ? '☀️' : '🌙'}
					</button>

					{/* Píldora roja al lado derecho del botón de tema */}
					<NavLink
						to="/carrito"
						className="btn-carrito-pildora"
						aria-label="Ver carrito de compras"
					>
						<span>🛒 Carrito</span>
						{totalCarrito > 0 && (
							<span className="badge-contador-carrito">
								{totalCarrito}
							</span>
						)}
					</NavLink>
				</Nav>

			</Container>
		</Navbar>
	);
}

export default Header;
