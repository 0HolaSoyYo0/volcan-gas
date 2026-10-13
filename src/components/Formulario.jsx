
import { Form } from "react-bootstrap";


function Formulario({ titulo, campos}) {
    return (

        <>
            <h3 className={ "mb-3" }>{ titulo }</h3>

            { campos.map((campo) => (
                <Form.Group className={ "mb-3" } key={ campo.name }>
                    <Form.Label>{ campo.Label }</Form.Label>

                    <Form.Control
                        type={ campo.type }
                        name={ campo.name }
                        placeholder={ campo.placeholder }
                        required
                    ></Form.Control>
                </Form.Group>
            ))}
        </>

    )
}

export default Formulario;
