import { Button, Form } from "react-bootstrap";
import {useState} from "react";
import {validaciones} from "./validaciones.js";
import {NavLink, useNavigate} from "react-router-dom";
import Formulario from "../../components/Formulario.jsx";
import './Login.css';


const camposInicioSesion = [
    {
        name: "email",
        label: "Correo electrónico",
        type: "email",
        placeholder: "correo@ejemplo.cl",
        required: true,
        autoComplete: "email",
    },
    {
        name: "password",
        label: "Clave de usuario",
        type: "password",
        placeholder: "Ingresa tu contraseña",
        required: true,
        minLength: 16,
        autoComplete: "current-password",
    },
];


function Login() {
    const navigate = useNavigate();
    const [errores, setErrores] = useState({});


    function handleSubmit(event) {
        event.preventDefault();

        const datosFormulario = new FormData(event.currentTarget);
        const valores = Object.fromEntries(datosFormulario)

        const nuevosErrores = validaciones(valores);
        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length > 0) {
            return
        }
        console.log("Mensaje para ver si esta mierda funciona. Formulario correcto");
    }

    return (
        <section className="container py-5">
			<article className="card inicio-sesion-tarjeta p-4">

                <Form noValidate Validate onSubmit={ handleSubmit }>
                    <Formulario
                        titulo={ "Iniciar Sesión" }
                        campos={ camposInicioSesion }
                        errores={ errores }
                    />

					<div className="d-flex justify-content-around mb-3 ">
						<Form.Check type="checkbox" label={ "Recordar usuario" }/>

						<NavLink to={ "/recuperacion" } className="text-decoration-none">
							¿Olvidaste tu contraseña?
						</NavLink>
					</div>

                    <Button className={ "w-50 mt-3" } variant={ "primary" } type={ "submit" } color={ "primary" }>
                        Iniciar Sesión
                    </Button>

                </Form>
            </article>
            <Button
                className={ "w-25 mt-3" }
                variant={"primary"}
                onClick={ () => navigate("/register") }
            >
                Registrarse
            </Button>
        </section>

    )
}

export default Login;
