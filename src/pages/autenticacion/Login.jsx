import Formulario from "../../components/Formulario.jsx";
import { Button, Form } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './Login.css';


function Login() {
    return (
        <section className="container py-5">
			<article className="card login-card p-4">
                <Form className={"justify-content-between"}>
                    <Formulario
                        campos={ [
                            {
                                name: "Correo",
                                label: "Correo Electrónico",
                                type: "email",
                                placeholder: "correo@ejemplo.cl"
                            },
                            {
                                name: "Contraseña",
                                label: "Clave Usuario",
                                type: "password",
                                placeholder: "Ingresa tu contraseña"
                            }
                        ] }
                    />

					<div className="d-flex justify-content-around mb-3 ">
						<Form.Check
							type="checkbox"
							label={ "Recordar usuario" }
						/>

						<NavLink
							to={ "/Recuperar-Contraseña" }
							className="text-decoration-none"
						>
							¿Olvidaste tu contraseña?
						</NavLink>
					</div>

                    <Button className={ "w-50 mt-3" } variant={ "primary" } type={ "submit" } color={ "primary" }>Iniciar Sesion</Button>

                </Form>
            </article>

            <Button className={ "w-50 mt-3" } variant={ "primary" } type={ "submit" } color={ "primary" }>Registrarse</Button>

        </section>

    )
}

export default Login;
