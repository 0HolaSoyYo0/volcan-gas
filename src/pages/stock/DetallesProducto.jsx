import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Button, Badge, Alert } from 'react-bootstrap';
import { productos } from '../../data/productos.js';
import './Productos.css';

function DetallesProducto() {
	const { id } = useParams();
	const producto = productos.find((p) => p.id === Number(id));

	// Estados con useState
	const [meGusta, setMeGusta] = useState(false);
	const [cantidad, setCantidad] = useState(1);
	const [alertaCarrito, setAlertaCarrito] = useState(false);

	const alternarMeGusta = () => {
		setMeGusta((prev) => !prev);
	};

	const incrementar = () => {
		setCantidad((prev) => prev + 1);
	};

	const decrementar = () => {
		setCantidad((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const agregarAlCarrito = () => {
		setAlertaCarrito(true);
		setTimeout(() => {
			setAlertaCarrito(false);
		}, 3500);
	};

	if (!producto) {
		return (
			<section className="container py-5 text-center">
				<h2>Producto no encontrado</h2>
				<p className="text-muted">El producto que buscas no existe o ha sido descontinuado.</p>
				<Button as={Link} to="/productos" variant="primary" className="mt-3">
					Volver al catálogo
				</Button>
			</section>
		);
	}

	const precioTotal = producto.precio * cantidad;

	return (
		<section className="container py-5">
			<div className="mb-4">
				<Link to="/productos" className="text-decoration-none fw-semibold">
					← Volver al catálogo
				</Link>
			</div>

			{alertaCarrito && (
				<Alert variant="success" onClose={() => setAlertaCarrito(false)} dismissible>
					🛒 <strong>¡Agregado con éxito!</strong> Se añadieron <strong>{cantidad}</strong> {cantidad === 1 ? 'cilindro' : 'cilindros'} de <strong>{producto.nombre}</strong> al carrito (Total: <strong>${precioTotal.toLocaleString('es-CL')}</strong>).
				</Alert>
			)}

			<div className="detalle-producto-card">
				<Row className="align-items-center g-5">
					{/* Columna de la imagen */}
					<Col xs={12} md={6}>
						<div className="detalle-img-container">
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className="detalle-img"
							/>
						</div>
					</Col>

					{/* Columna de detalles y acciones */}
					<Col xs={12} md={6}>
						<div className="d-flex align-items-center gap-2 mb-2">
							<Badge bg="warning" text="dark" className="px-3 py-2 fs-6">
								Capacidad: {producto.capacidad} kg
							</Badge>
						</div>

						<h1 className="fw-bold mb-3">{producto.nombre}</h1>

						<div className="precio-producto fs-2 mb-2">
							${producto.precio.toLocaleString('es-CL')} <small className="fs-6 text-muted">c/u (IVA incluido)</small>
						</div>

						<div className="mb-4">
							<h5 className="fw-bold text-muted mb-2">Descripción del producto</h5>
							<p className="fs-5 lh-base">
								{producto.descripcion}
							</p>
						</div>

						{/* Selector de cantidad y cálculo dinámico */}
						<div className="mb-4 p-3 border rounded bg-light-subtle">
							<label className="fw-semibold d-block mb-2">Cantidad de cilindros:</label>
							<div className="d-flex align-items-center gap-4 flex-wrap">
								<div className="selector-cantidad">
									<button type="button" onClick={decrementar} aria-label="Disminuir cantidad">
										−
									</button>
									<span className="cantidad-valor">{cantidad}</span>
									<button type="button" onClick={incrementar} aria-label="Aumentar cantidad">
										+
									</button>
								</div>

								<div>
									<span className="text-muted small d-block">Subtotal estimado:</span>
									<strong className="fs-5 text-primary">
										${precioTotal.toLocaleString('es-CL')}
									</strong>
								</div>
							</div>
						</div>

						{/* Botones de acción */}
						<div className="d-flex gap-3 flex-wrap align-items-center mt-3">
							<Button
								variant="primary"
								size="lg"
								className="fw-semibold px-4"
								onClick={agregarAlCarrito}
							>
								🛒 Agregar al carrito ({cantidad})
							</Button>

							<Button
								variant={meGusta ? 'danger' : 'outline-danger'}
								size="lg"
								className="fw-semibold px-4 d-flex align-items-center gap-2"
								onClick={alternarMeGusta}
							>
								<span>{meGusta ? '❤️' : '🤍'}</span>
								<span>{meGusta ? 'Te gusta' : 'Me gusta'}</span>
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}

export default DetallesProducto;
