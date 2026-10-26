import { useState, useEffect } from 'react';
import { Table, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Carrito() {
	// Inicializar el carrito desde LocalStorage
	const [carrito, setCarrito] = useState(() => {
		const datosGuardados = localStorage.getItem('carrito_volcan');
		return datosGuardados ? JSON.parse(datosGuardados) : [];
	});

	const [compraFinalizada, setCompraFinalizada] = useState(false);

	// Guardado y notificación al Header
	useEffect(() => {
		localStorage.setItem('carrito_volcan', JSON.stringify(carrito));
		window.dispatchEvent(new Event('carritoActualizado'));
	}, [carrito]);

	const cambiarCantidad = (idProducto, modificacion) => {
		setCarrito((prev) =>
			prev
				.map((item) => {
					if (item.id === idProducto) {
						return { ...item, cantidad: item.cantidad + modificacion };
					}
					return item;
				})
				.filter((item) => item.cantidad > 0)
		);
	};

	const eliminarDelCarrito = (idProducto) => {
		setCarrito((prev) => prev.filter((item) => item.id !== idProducto));
	};

	const vaciarCarrito = () => {
		if (window.confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
			setCarrito([]);
		}
	};

	// Simular que la compra se hizo y limpia el carrito
	const finalizarCompra = () => {
		setCompraFinalizada(true);
		setCarrito([]);
	};

	// Calculo del total
	const totalGeneral = carrito.reduce(
		(acumulado, item) => acumulado + item.precio * item.cantidad,
		0
	);

	return (
		<section className="container py-5">
			<h1 className="fw-bold mb-4">Carrito de Compras</h1>

			{compraFinalizada && (
				<Alert variant="success" onClose={() => setCompraFinalizada(false)} dismissible>
					<strong>¡Muchas gracias por tu compra en Gas El Volcán!</strong> Estamos procesando tu pedido.
				</Alert>
			)}

			{carrito.length === 0 ? (
				/* Asi se ve cuando el carrito está vacio */
				<Card className="text-center p-5 shadow-sm border-0">
					<Card.Body>
						<h3 className="mb-3">Tu carrito está actualmente vacío</h3>
						<p className="text-muted mb-4">
							Revisa nuestro catálogo y añade los cilindros de gas que necesites.
						</p>
						<Button as={Link} to="/productos" variant="primary" size="lg">
							Ir al Catálogo de Productos
						</Button>
					</Card.Body>
				</Card>
			) : (
				/* Vista de la tabla con productos */
				<div>
					<div className="table-responsive shadow-sm rounded mb-4">
						<Table hover className="align-middle mb-0">
							<thead className="table-dark">
								<tr>
									<th>Producto</th>
									<th>Precio Unitario</th>
									<th className="text-center">Cantidad</th>
									<th>Subtotal</th>
									<th className="text-center">Acción</th>
								</tr>
							</thead>
							<tbody>
								{carrito.map((item) => (
									<tr key={item.id}>
										<td className="fw-semibold">{item.nombre}</td>
										<td>${item.precio.toLocaleString('es-CL')}</td>
										<td className="text-center">
											<div className="d-inline-flex align-items-center gap-2 border rounded px-2 py-1">
												<Button
													variant="outline-secondary"
													size="sm"
													className="px-2 py-0 border-0 fw-bold"
													onClick={() => cambiarCantidad(item.id, -1)}
												>
													-
												</Button>
												<span className="fw-semibold px-2">{item.cantidad}</span>
												<Button
													variant="outline-secondary"
													size="sm"
													className="px-2 py-0 border-0 fw-bold"
													onClick={() => cambiarCantidad(item.id, 1)}
												>
													+
												</Button>
											</div>
										</td>
										<td className="fw-bold text-primary">
											${(item.precio * item.cantidad).toLocaleString('es-CL')}
										</td>
										<td className="text-center">
											<Button
												variant="outline-danger"
												size="sm"
												onClick={() => eliminarDelCarrito(item.id)}
											>
												Quitar
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>

					{/* Cuadro final con opciones*/}
					<Card className="p-4 shadow-sm border-0 mb-4">
						<div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
							<h4 className="mb-0">
								Total a pagar:{' '}
								<span className="text-primary fw-bold">
									${totalGeneral.toLocaleString('es-CL')}
								</span>
							</h4>

							<div className="d-flex gap-2 flex-wrap">
								<Button as={Link} to="/productos" variant="outline-secondary">
									← Seguir Comprando
								</Button>
								<Button variant="outline-danger" onClick={vaciarCarrito}>
									Vaciar Carrito
								</Button>
								<Button variant="success" size="lg" className="fw-bold px-4" onClick={finalizarCompra}>
									Proceder al Pago
								</Button>
							</div>
						</div>
					</Card>
				</div>
			)}
		</section>
	);
}

export default Carrito;
