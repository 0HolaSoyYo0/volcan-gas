import { Link } from "react-router-dom";

function RecuperarContrasena() {
	return (
		<section className="container py-5">
			<h1>Recuperar contraseña</h1>
			<p>
				Para recuperar el acceso a tu cuenta, comunícate con nosotros en
				<a href="mailto:ventas@volcangas.cl"> ventas@volcangas.cl</a>.
			</p>
			<Link to="/login">Volver al inicio de sesión</Link>
		</section>
	);
}

export default RecuperarContrasena;
