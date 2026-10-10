
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";


function Header({ nombre, subtitulo, itemsMenu }) {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>

                { /* Titulo y subtitulo */ }
                <Navbar.Brand as={ NavLink } to="/" className="text-center mb-1">
                    <h1 className="h2 fw-bold mb-1">{ nombre }</h1>
                    <p className="small text-secondary mb-0">{ subtitulo }</p>
                </Navbar.Brand>

                { /* Navegación */ }
                <Nav className="justify-content-center flex-wrap">
                    {
                        itemsMenu.map((item) => (
                            <Nav.Item key={ item.path } as={ NavLink } to={ item.path } className="fw-semibold">
                                { item.label }
                            </Nav.Item>
                        ))
                    }
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;