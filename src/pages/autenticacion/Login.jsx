import Formulario from "../../components/Formulario.jsx";
import { Button, Form } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './Login.css';

function handleSubmit(event) {
    event.preventDefault()
    console.log("Validaciones HTML superadas.")
}

function Login() {
    return (
        <section className="container py-5">
			<article className="card login-card p-4">

                <Form onSubmit={ handleSubmit } className={ "justify-content-between" }>
                    <Formulario
                        titulo={ "Crear Usuario" }
                        campos={ [
                            {
                                name: "correo",
                                label: "Correo Electrónico",
                                type: "email",
                                placeholder: "correo@ejemplo.cl",
                                required: true
                            },
                            {
                                name: "contraseña",
                                label: "Clave Usuario",
                                type: "password",
                                placeholder: "Ingresa tu contraseña",
                                required: true,
                                minLength: 16
                            }
                        ] }
                    />

					<div className="d-flex justify-content-around mb-3 ">
						<Form.Check type="checkbox" label={ "Recordar usuario" }/>

						<NavLink to={ "/recuperacion" } className="text-decoration-none">
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
