/**
 * Imágenes de los distintos cilindros de gas Abastible.
 * Se importan para utilizarlas como referencia visual de cada producto.
 */
import abastible5 from "../assets/img/abastible5.png";
import abastible11 from "../assets/img/abastible11.png";
import abastible15 from "../assets/img/abastible15.png";
import abastible45 from "../assets/img/abastible45.png";
import abastibleVMA15 from "../assets/img/abastibleVMA15.png";
import abastibleVM15 from "../assets/img/abastibleVM15.png";

/**
 * Catálogo de productos de gas Abastible.
 *
 * Cada producto contiene su identificador, nombre, precio, descripción,
 * capacidad en kilogramos e imagen correspondiente.
 *
 * @type {{
 *   id: number,
 *   nombre: string,
 *   precio: number,
 *   descripcion: string,
 *   capacidad: number,
 *   imagen: string
 * }[]}
 */
export const productos = [
    /**
     * Cilindro de gas de 5 kg.
     * Diseñado para camping y usos domésticos ligeros.
     */
    {
        id: 1,
        nombre: "Cilindro de Gas 5 kg",
        precio: 8000,
        descripcion: "Cilindro portátil, ideal para camping y uso doméstico ligero.",
        capacidad: 5,
        imagen: abastible5
    },
    /**
     * Cilindro de gas de 11 kg.
     * Adecuado para cocinas y calefactores pequeños del hogar.
     */
    {
        id: 2,
        nombre: "Cilindro de Gas 11 kg",
        precio: 16000,
        descripcion: "Cilindro estándar para cocinas y calefactores pequeños en el hogar.",
        capacidad: 11,
        imagen: abastible11
    },
    /**
     * Cilindro de gas de 15 kg.
     * Orientado a hogares con un consumo de gas elevado.
     */
    {
        id: 3,
        nombre: "Cilindro de Gas 15 kg",
        precio: 21000,
        descripcion: "Cilindro de mayor capacidad, recomendado para hogares con alto consumo.",
        capacidad: 15,
        imagen: abastible15
    },
    /**
     * Cilindro de gas de 45 kg.
     * Adecuado para calefacción continua y uso comercial.
     */
    {
        id: 4,
        nombre: "Cilindro de Gas 45 kg",
        precio: 55000,
        descripcion: "Cilindro de gran tamaño, ideal para calefacción continua o negocios.",
        capacidad: 45,
        imagen: abastible45
    },
    /**
     * Cilindro de gas VMA de 15 kg.
     * Diseñado para abastecer maquinaria, como grúas horquilla.
     */
    {
        id: 5,
        nombre: "Cilindro VMA 15 kg",
        precio: 23000,
        descripcion: "Versión VMA de 15 kg, diseñado para abastecer de energía a los yales o grúas horquilla, además de otras maquinarias.",
        capacidad: 15,
        imagen: abastibleVMA15
    },
    /**
     * Cilindro de gas VM de 15 kg.
     * Diseñado para abastecer maquinaria, como grúas horquilla.
     */
    {
        id: 6,
        nombre: "Cilindro VM 15 kg",
        precio: 24000,
        descripcion: "Versión VM de 15 kg, diseñado para abastecer de energía a los yales o grúas horquilla, además de otras maquinarias.",
        capacidad: 15,
        imagen: abastibleVM15
    }
];