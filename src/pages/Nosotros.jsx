import {Link} from "react-router-dom";
import "../components/style/Nosotros.css";
import imgNosotros from "../assets/img/nosotros.jpg";
import {Button} from "react-bootstrap";

function Nosotros() {
    return (
        <section className="container py-5 mt-5">
            <div className="row align-items-center g-4">
                {/* Columna Izquierda: Textos y botones */}
                <div className="col-10 col-lg-6">
                    <span className="nosotros-tagline">
                        28 años junto a Chillán
                    </span>

                    <h1 className="nosotros-titulo">
                        De la tierra, a tu hogar
                    </h1>

                    <p className="nosotros-descripcion">
                        Distribuidora de Gase El Volcán es una empresa familiar
                        ubicada en Chillán, Región de Ñuble fundada en 1998.
                        Distribuye cilindros de gas licuado a domicilio a
                        clientes residenciales y comerciales en Chillán y
                        comunas aledañas.
                    </p>
                    <p className="nosotros-descripcion">
                        La empresa cuenta con 2 camiones de reparto, 3
                        repartidores, 1 operadora de llamadas y 1
                        administradora. Recibe entre 80 y 120 pedidos por día.
                        El gas se distribuye en cilindros de 5, 11 y 15kg.
                    </p>

                    <Button
                        className={"btn-secondary text-decoration-none ms-3"}
                        as={Link}
                        to="/catalogo">
                        Ver catálogo
                    </Button>

                    <Button
                        className={"btn-secondary text-decoration-none ms-3"}
                        as={Link}
                        to="/registro">
                        Crear cuenta
                    </Button>
                </div>

                {/* Columna Derecha: Imagen con marco */}
                <div className="col-10 col-lg-6">
                    <div className="nosotros-img-frame">
                        <img src={imgNosotros} alt="Balones de gas" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;
