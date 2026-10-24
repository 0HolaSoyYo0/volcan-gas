import { useState } from 'react';
import { Row, Col, Card, Button, Badge, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productos } from '../../data/productos.js';
import './Productos.css';

function Catalogo() {
	const [busqueda, setBusqueda] = useState('');
	const [capacidadSeleccionada, setCapacidadSeleccionada] = useState('todas');

	const capacidades = ['todas', '5', '11', '15', '45'];

	const productosFiltrados = productos.filter((producto) => {
		const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
			producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
		const coincideCapacidad = capacidadSeleccionada === 'todas' ||
			producto.capacidad.toString() === capacidadSeleccionada;
		return coincideNombre && coincideCapacidad;
	});

	const limpiarFiltros = () => {
		setBusqueda('');
		setCapacidadSeleccionada('todas');
	};

	return (
		<section className="container py-5">
			<div className="text-center mb-5">
				<h1 className="fw-bold mb-2">Catálogo de Productos</h1>
				<p>
					Encuentra el cilindro de gas ideal para tu hogar, negocio o faena con entrega a domicilio.
				</p>
			</div>

			{/* Barra de Búsqueda y Filtros de Capacidad */}
			<div className="mb-5">
				<Row className="justify-content-center g-3">
					<Col xs={12} md={6}>
						<InputGroup>
							<InputGroup.Text id="icono-busqueda">🔍</InputGroup.Text>
							<Form.Control
								type="text"
								placeholder="Buscar por nombre o descripción..."
								value={busqueda}
								onChange={(e) => setBusqueda(e.target.value)}
								aria-label="Buscar producto"
							/>
							{busqueda && (
								<Button variant="outline-secondary" onClick={() => setBusqueda('')}>
									✕
								</Button>
							)}
						</InputGroup>
					</Col>
				</Row>

				{/* Botones de filtro rápido por capacidad */}
				<div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
					{capacidades.map((cap) => (
						<Button
							key={cap}
							variant={capacidadSeleccionada === cap ? 'primary' : 'outline-primary'}
							size="sm"
							className="rounded-pill px-3 fw-semibold"
							onClick={() => setCapacidadSeleccionada(cap)}
						>
							{cap === 'todas' ? 'Todos los cilindros' : `${cap} kg`}
						</Button>
					))}
				</div>
			</div>

			{/* Listado de Productos */}
			{productosFiltrados.length === 0 ? (
				<div className="text-center py-5">
					<h4>No se encontraron productos</h4>
					<p className="text-muted">Intenta con otro término de búsqueda o cambia el filtro de capacidad.</p>
					<Button variant="secondary" onClick={limpiarFiltros} className="mt-2">
						Restablecer filtros
					</Button>
				</div>
			) : (
				<Row className="g-4">
					{productosFiltrados.map((producto) => (
						<Col key={producto.id} xs={12} sm={6} md={4} lg={4}>
							<Card className="tarjeta-producto h-100">
								<div className="tarjeta-producto-img-wrapper">
									<img
										src={producto.imagen}
										alt={producto.nombre}
										className="tarjeta-producto-img"
									/>
								</div>

								<Card.Body className="d-flex flex-column justify-content-between p-4">
									<div>
										<div className="d-flex justify-content-between align-items-start mb-2">
											<Card.Title className="h5 fw-bold mb-0">
												{producto.nombre}
											</Card.Title>
											<Badge bg="warning" text="dark" className="px-2 py-1">
												{producto.capacidad} kg
											</Badge>
										</div>

										<Card.Text className="small text-muted mb-3">
											{producto.descripcion}
										</Card.Text>
									</div>

									<div>
										<div className="precio-producto mb-3">
											${producto.precio.toLocaleString('es-CL')}
										</div>

										<div className="d-grid gap-2">
											<Button
												as={Link}
												to={`/productos/${producto.id}`}
												variant="primary"
												className="fw-semibold"
											>
												Ver detalles
											</Button>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}
		</section>
	);
}

export default Catalogo;
