
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

	return (
		<Navbar className="header-custom">
			<Container className="d-flex justify-content-between align-items-center">

				{/*Logo a la izquierda*/}
				<NavLink to="/" className="navbar-brand-custom">
					<img src={ logoImg } alt={ nombre } className="brand-logo-img" />
					<div className="brand-text">
						<h1 className="h4 fw-bold mb-0">{ nombre }</h1>
						<p className="small mb-0">{ subtitulo }</p>
					</div>
				</NavLink>

				{/* Menu hacia la derecha del todo*/}
				<Nav className="header-nav d-flex flex-row align-items-center gap-3">
					{ itemsMenu.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className="nav-link header-link fw-semibold"
						>
							{item.label}
						</NavLink>
					)) }
					<button
						type="button"
						className="alternar-tema"
						onClick={ () => setModoOscuro((estaOscuro) => !estaOscuro) }
						aria-label={ modoOscuro ? 'Activar modo claro' : 'Activar modo oscuro' }
					>
						{modoOscuro ? '☀️' : '🌙'}
					</button>
				</Nav>

			</Container>
		</Navbar>
	);
}

export default Header;
