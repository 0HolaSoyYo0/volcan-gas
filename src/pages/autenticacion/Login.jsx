import Formulario from "../../components/Formulario.jsx";


function Login() {
    return (
        <article className="login">
            <Formulario campos={ [
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
            ] }/>
        </article>
    )
}

export default Login;