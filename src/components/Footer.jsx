import './style/Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-contacto">
                <h4>Contacto y Pedidos</h4>

                <div className="footer-info">
                    <p>📞 Teléfono: <strong>+56 9 1234 5678</strong></p>

                    <p>💬 WhatsApp: <strong>+56 9 8765 4321</strong></p>

                    <p>✉️ ventas@volcangas.cl</p>
                </div>
                <p className="footer-schedule">🕒 Lun a Sáb: 08:30 - 20:30 hrs</p>
            </div>

            {/*Espacio pequeño*/}
            <div className="footer-bottom">
                <p>© 2026. Distribuidora de Gas El Volcán. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}