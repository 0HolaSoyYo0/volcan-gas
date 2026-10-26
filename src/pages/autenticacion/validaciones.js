// src/utils/validaciones.js

// ---------- Reglas reutilizables ----------
// Cada regla devuelve un mensaje de error (string) o null si el valor es válido.

const requerido = (valor, mensaje) =>
    !valor || !valor.trim() ? mensaje : null;

const reglaEmail = (valor) => {
    if (!valor?.trim()) return "El correo electrónico es obligatorio.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))
        return "Introduce un correo electrónico válido.";
    return null;
};

const reglaPassword = (valor) => {
    if (!valor) return "La contraseña es obligatoria.";
    if (valor.length < 16)
        return "La contraseña debe tener al menos dieciséis caracteres.";
    return null;
};

const reglaTelefono = (valor) => {
    if (!valor?.trim()) return "El teléfono es obligatorio.";
    // Acepta +56 9 1234 5678, 912345678, etc.
    const limpio = valor.replace(/[\s-]/g, "");
    if (!/^(\+?56)?9\d{8}$/.test(limpio))
        return "Introduce un teléfono móvil válido (ej: +56 9 1234 5678).";
    return null;
};

const reglaSoloLetras = (valor, campo) => {
    if (!valor?.trim()) return `${campo} es obligatorio.`;
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,}$/.test(valor.trim()))
        return `${campo} solo puede contener letras (mínimo 2).`;
    return null;
};

// Une las reglas en un objeto de errores, ignorando los campos válidos
function armarErrores(resultados) {
    const errores = {};
    for (const [campo, mensaje] of Object.entries(resultados)) {
        if (mensaje) errores[campo] = mensaje;
    }
    return errores;
}

// ---------- Formularios ----------

export function validaciones(valores) {
    return armarErrores({
        email: reglaEmail(valores.email),
        password: reglaPassword(valores.password),
    });
}

export function validacionesRegistro(valores) {
    return armarErrores({
        nombre: reglaSoloLetras(valores.nombre, "El nombre"),
        apellido: reglaSoloLetras(valores.apellido, "El apellido"),
        email: reglaEmail(valores.email),
        telefono: reglaTelefono(valores.telefono),
        password: reglaPassword(valores.password),
        region: requerido(valores.region, "La región es obligatoria."),
        comuna: requerido(valores.comuna, "La comuna es obligatoria."),
        direccion: requerido(valores.direccion, "La dirección es obligatoria."),
    });
}