import './style/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <section className="footer-contacto">
                <h4>Contacto y Pedidos</h4>

                <address className="footer-info">
                    <p>📞 Teléfono: <strong>+56 9 1234 5678</strong></p>

                    <p>💬 WhatsApp: <strong>+56 9 8765 4321</strong></p>

                    <p>✉️ ventas@volcangas.cl</p>
                </address>
                <p className="footer-schedule">🕒 Lun a Sáb: 08:30 - 20:30 hrs</p>
            </section>

            {/*Espacio pequeño*/}
            <small className="footer-bottom">
                <p>© 2026. Distribuidora de Gas El Volcán. Todos los derechos reservados.</p>
            </small>
        </footer>
    );
}

export default Footer;