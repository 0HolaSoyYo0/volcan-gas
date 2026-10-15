

function validacionesLogin(valores) {

    const errores = {}

    // Validaciones correo electrónico
    const emailValido = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (!valores.email.trim()) {
        errores.email = "El correo electrónico es obligatorio.";
    } else if (!emailValido(valores.email)) {
        errores.email = "Introduce un correo electrónico valido";
    }

    // Validaciones password
    const passwordValido = (password) => {
        return password.length >= 16
    };

    if (!valores.password) {
        errores.password = "La contraseña es obligatoria.";
    } else if (!passwordValido(valores.password)) {
        errores.password = "La contraseña debe tener al menos dieciséis caracteres.";
    }

    return errores;

}


export default validacionesLogin;