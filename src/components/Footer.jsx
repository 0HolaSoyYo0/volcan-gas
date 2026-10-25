
import './style/Footer.css';
/*Placeholder para acceder rapido a 404*/ 
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer-contenedor">
            <section className="footer-contacto">
                <h4>Contacto y Pedidos</h4>

                <address className="footer-informacion">
                    <p>📞 Teléfono: <strong>+56 9 1234 5678</strong></p>

                    <p>💬 WhatsApp: <strong>+56 9 8765 4321</strong></p>

                    <p>✉️ ventas@volcangas.cl</p>
                </address>
                <p className="footer-horario">🕒 Lun a Sáb: 08:30 - 20:30 hrs</p>
                {/*Boton placeholder*/}
                <Button
                    className={"btn-secondary text-decoration-none ms-3"}
                    as={Link}
                    to="/error">
                    Ir a Error
                </Button>
            </section>

            {/*Espacio pequeño*/}
            <small className="footer-pie">
                <p>© 2026. Distribuidora de Gas El Volcán. Todos los derechos reservados.</p>
            </small>

        </footer>
    );
}

export default Footer;
