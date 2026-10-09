import abastible5 from "../assets/img/abastible5.png";
import abastible11 from "../assets/img/abastible11.png";
import abastible15 from "../assets/img/abastible15.png";
import abastible45 from "../assets/img/abastible45.png";
import abastibleVMA15 from "../assets/img/abastibleVMA15.png";
import abastibleVM15 from "../assets/img/abastibleVM15.png";

/** 
*@type {{
*   id: number,
*   nombre: string,
*   precio: number,
*   descripcion: string,
*   capacidad : number,
*   imagen: string
*}[]}
*/
const productos = [
    {
        id: 1,
        nombre: "Cilindro de Gas 5 kg",
        precio: 8000,
        descripcion: "Cilindro portátil, ideal para camping y uso doméstico ligero.",
        capacidad: 5,
        imagen: abastible5
    },
    {
        id: 2,
        nombre: "Cilindro de Gas 11 kg",
        precio: 16000,
        descripcion: "Cilindro estándar para cocinas y calefactores pequeños en el hogar.",
        capacidad: 11,
        imagen: abastible11
    },
    {
        id: 3,
        nombre: "Cilindro de Gas 15 kg",
        precio: 21000,
        descripcion: "Cilindro de mayor capacidad, recomendado para hogares con alto consumo.",
        capacidad: 15,
        imagen: abastible15
    },
    {
        id: 4,
        nombre: "Cilindro de Gas 45 kg",
        precio: 55000,
        descripcion: "Cilindro de gran tamaño, ideal para calefacción continua o negocios.",
        capacidad: 45,
        imagen: abastible45
    },
    {
        id: 5,
        nombre: "Cilindro VMA 15 kg",
        precio: 23000,
        descripcion: "Versión VMA de 15 kg, diseñado para abastecer de energía a los yales o grúas horquilla, además de otras maquinarias.",
        capacidad: 15,
        imagen: abastibleVMA15
    },
    {
        id: 6,
        nombre: "Cilindro VM 15 kg",
        precio: 24000,
        descripcion: "Versión VM de 15 kg, diseñado para abastecer de energía a los yales o grúas horquilla, además de otras maquinarias.",
        capacidad: 15,
        imagen: abastibleVM15
    }
]
