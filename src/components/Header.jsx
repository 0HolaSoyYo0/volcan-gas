
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";


function Header({ nombre, subtitulo, itemsMenu }) {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>

                { /* Titulo y subtitulo */ }
                <NavLink to="/" className="navbar-brand text-center mb-1">
                    <h1 className="h2 fw-bold mb-1">{ nombre }</h1>
                    <p className="small text-secondary mb-0">{ subtitulo }</p>
                </NavLink>

                { /* Navegación */ }
                <Nav className="justify-content-center flex-wrap">
                    {
                        itemsMenu.map((item) => (
                            <NavLink key={ item.path } to={ item.path } className="nav-link fw-semibold">
                                { item.label }
                            </NavLink>
                        ))
                    }
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;
