
import { Form } from "react-bootstrap";


function Formulario({ titulo, campos, errores = {} }) {
    return (

        <>
            <h3 className={ "mb-3" }>{ titulo }</h3>

            { campos.map((campo) => (
                <Form.Group className={ "mb-3" } controlId={campo.name} key={ campo.name }>
                    <Form.Label>{ campo.label }</Form.Label>

                    <Form.Control
                        type={ campo.type }
                        name={ campo.name }
                        placeholder={ campo.placeholder }
                        required={ campo.required ?? true }
                        minLength={ campo.minLength }
                        autoComplete={ campo.autoComplete }
                        isInvalid={ Boolean(errores[ campo.name ]) }
                    />

                    <Form.Control.Feedback type="invalid">
                        { errores[ campo.name ] }
                    </Form.Control.Feedback>

                </Form.Group>
            ))}
        </>

    )
}

export default Formulario;
