# Distribuidora de Gas El Volcán

Plataforma web para apoyar la venta y distribución de cilindros de gas licuado a domicilio en Chillán y comunas aledañas. El proyecto busca ordenar el ciclo de pedido, despacho, entrega, control de stock y registro de pagos de la Distribuidora de Gas El Volcán.

**Curso:** DSY1104 – Desarrollo FullStack II · **Forma:** C
**Empresa:** Distribuidora de Gas El Volcán · **Ubicación:** Chillán, Región de Ñuble

## Contexto

El Volcán es una empresa familiar fundada en 1998. Atiende a clientes residenciales y comerciales y distribuye cilindros de 5, 11 y 15 kg. Su operación cuenta con dos camiones, tres repartidores, una operadora de llamadas y una administradora; recibe entre 80 y 120 pedidos al día.

Actualmente, la operadora recibe los pedidos por teléfono y los anota en cuadernos o papeles. Luego prepara una lista para cada repartidor. La administradora cuenta los cilindros y calcula el stock al cierre de la jornada. Los pagos en efectivo se cuadran manualmente.

Este proceso deja a los clientes sin información sobre el avance de su pedido, obliga a la operadora a responder consultas repetidas y expone al negocio a pedidos duplicados o extraviados, falta de historial por cliente, quiebres de stock y diferencias en la contabilidad.

## Visión del sistema

El sistema permitirá gestionar digitalmente los pedidos y las entregas desde que el cliente solicita un cilindro hasta que se confirma su recepción y pago. Cada persona verá las acciones y la información que necesita según su rol.

### Funcionalidades esperadas

- **Clientes:** consultar los cilindros disponibles, registrarse, iniciar sesión, realizar pedidos a domicilio y revisar el estado de sus entregas e historial.
- **Operadora:** revisar los pedidos del día en una vista centralizada, consultar los datos de entrega y organizar la asignación a repartidores.
- **Repartidores:** consultar desde el teléfono los pedidos asignados y actualizar el estado de cada entrega.
- **Administradora:** revisar el stock de cilindros y los pedidos, y consultar los pagos registrados para facilitar el control diario.
- **Administración del catálogo:** mantener la información de los cilindros ofrecidos por la distribuidora.

El objetivo es disminuir la dependencia de cuadernos, listas en papel y llamadas de seguimiento; facilitar la coordinación del despacho; y dar mayor visibilidad a pedidos, entregas, inventario y pagos. La disponibilidad en tiempo real dependerá de la conexión y de los servicios de backend que se incorporen.

## Actores y necesidades

| Actor | Necesidad que atenderá el sistema |
| --- | --- |
| Cliente | Solicitar gas sin llamar, proporcionar sus datos de entrega y consultar el avance del pedido. |
| Operadora de llamadas | Consultar los pedidos del día desde un lugar central y coordinar su despacho. |
| Repartidor | Ver su lista de entregas y comunicar cambios de estado desde un teléfono móvil. |
| Administradora | Consultar el inventario y los registros de pagos para apoyar el cierre de jornada y la contabilidad. |

## Flujos principales previstos

### Pedido y entrega

1. El cliente consulta el catálogo, inicia sesión o crea una cuenta, y solicita uno o más cilindros.
2. El sistema registra los datos del cliente, la dirección, los productos solicitados y el pedido.
3. La operadora consulta los pedidos pendientes y coordina su asignación a un repartidor.
4. El repartidor revisa las entregas asignadas desde su teléfono y actualiza su estado durante el despacho.
5. Al completar la entrega, se registra el resultado y el pago correspondiente, según el flujo que se defina para el proyecto.
6. El cliente puede consultar el estado y el historial asociados a su cuenta.

### Control de inventario

La administradora necesita consultar las existencias por tipo de cilindro. El sistema deberá relacionar los movimientos de productos con los pedidos y entregas para apoyar la actualización del stock y advertir cuando la disponibilidad sea insuficiente. La fuente de datos y las reglas exactas de ajuste deberán quedar definidas al implementar el backend.

## Secciones de la aplicación

La experiencia de cliente contempla inicio, catálogo, detalle de producto, inicio de sesión, registro, carrito o resumen del pedido, perfil y página de error. El personal autorizado contará con un panel de administración para gestionar el catálogo y revisar la operación. El acceso al panel deberá estar protegido por autenticación.

Estas secciones representan el alcance esperado del proyecto académico. Su presencia en esta descripción no implica que todas estén implementadas en la versión actual.

## Requisitos de uso y restricciones

- **Uso móvil en ruta:** la interfaz de repartidores debe adaptarse a teléfonos Android de gama media-baja y facilitar la consulta y actualización de entregas.
- **Conectividad variable:** las rutas pueden tener señal intermitente. La interfaz debe tolerar conexiones lentas y comunicar con claridad cuándo una actualización se ha realizado. El funcionamiento sin conexión requeriría soporte técnico adicional.
- **Simplicidad operativa:** operadora y repartidores tienen poca experiencia con sistemas de gestión; las tareas frecuentes deben requerir pocos pasos y usar estados fáciles de reconocer.
- **Privacidad:** los datos de clientes y pedidos son confidenciales. El acceso a las funciones internas debe limitarse al personal autorizado.
- **Base de datos:** el contexto no exige un motor específico; la selección de MySQL, PostgreSQL u otra alternativa corresponde al diseño técnico del equipo.
- **Pagos:** el contexto actual describe pagos en efectivo al momento de la entrega. El sistema debe contemplar su registro; no se asume integración con una pasarela de pago en línea.

## Tecnologías del prototipo

La base de interfaz de este repositorio utiliza React, Vite, React Router DOM, React-Bootstrap, Bootstrap y CSS. La arquitectura final deberá incorporar los servicios de backend, persistencia, control de acceso y gestión de datos necesarios para cumplir los flujos descritos.

Para iniciar el prototipo actual:

```bash
npm install
npm run dev
```

Comandos disponibles:

```bash
npm run build
npm run preview
npm run lint
```

## Estado del proyecto

El repositorio se encuentra en etapa de prototipo frontend. Ya contiene la estructura inicial de React, una página de inicio, una sección institucional, un formulario visual de acceso, un encabezado con alternancia de tema y datos de ejemplo para cilindros. Todavía no proporciona el flujo completo descrito en esta visión: no hay backend, base de datos, pedidos persistentes, seguimiento de entregas, control real de inventario, registro de pagos ni autenticación de usuarios.

Los requisitos y objetivos de este README describen el sistema que se busca desarrollar para el caso de la distribuidora; las funcionalidades existentes se limitan a las indicadas en el párrafo anterior.
