# Portal web de la Distribuidora de Gas El Volcán

## Descripción técnica y académica

**Asignatura:** DSY1104 – Desarrollo FullStack II  
**Empresa:** Distribuidora de Gas El Volcán  
**Ubicación:** Chillán, Región de Ñuble, Chile  
**Tipo de solución:** Prototipo frontend para la comercialización y distribución de cilindros de gas licuado.

## 1. Contexto y propósito

Distribuidora de Gas El Volcán es una empresa familiar fundada en 1998. Atiende clientes residenciales y comerciales de Chillán y comunas cercanas mediante dos camiones, tres repartidores, una operadora y una administradora.

Actualmente, los pedidos se reciben por teléfono y se registran manualmente. El despacho se coordina con listas en papel y el stock se calcula al finalizar la jornada. Esta operación dificulta el seguimiento de entregas, provoca pérdida o duplicación de pedidos y no permite consultar el inventario en tiempo real.

El portal busca centralizar la información de productos, clientes, pedidos, entregas, pagos e inventario. La versión actual corresponde a una primera iteración de interfaz: no incluye backend, base de datos ni persistencia de información.

## 2. Tecnologías

| Tecnología | Uso |
| --- | --- |
| React 19 | Componentes y vistas de la interfaz |
| Vite | Desarrollo y compilación |
| React Router DOM | Navegación del lado del cliente |
| React-Bootstrap y Bootstrap | Componentes visuales y diseño responsive |
| JavaScript ES Modules | Lógica y datos del frontend |
| CSS | Estilos globales, componentes y temas |
| ESLint | Revisión estática del código |

## 3. Arquitectura y estructura

`src/main.jsx` monta la aplicación dentro de `#root`, importa Bootstrap y los estilos globales, y configura `BrowserRouter`. `App.jsx` compone el layout general:

```text
App
├── Header
├── Routes
│   ├── Home (/)
│   └── Login (/login)
└── Footer
```

La estructura principal es:

```text
src/
├── main.jsx                 Punto de entrada
├── App.jsx                  Layout y rutas
├── index.css                Estilos globales y temas
├── components/              Componentes reutilizables
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Formulario.jsx
│   └── Seccion.jsx
├── pages/                   Vistas
│   ├── Home.jsx
│   ├── Nosotros.jsx
│   ├── autenticacion/Login.jsx
│   └── stock/
│       ├── Catalogo.jsx
│       └── DetallesProducto.jsx
├── data/                    Datos estáticos
│   ├── itemsMenu.js
│   └── productos.js
└── assets/img/              Logo e imágenes de productos
```

## 4. Módulos implementados

### Encabezado y navegación

`Header.jsx` recibe el nombre, subtítulo y opciones del menú. Los enlaces se generan desde `itemsMenu.js` mediante `NavLink`. También incluye el selector de tema claro/oscuro, que guarda la preferencia en `localStorage` y aplica la clase `oscuro` al elemento `<html>`.

### Página de inicio

`Home.jsx` presenta un mensaje de bienvenida y una descripción básica de los productos y servicios.

### Productos

`data/productos.js` contiene datos estáticos de cilindros de 5, 11, 15 y 45 kg, además de variantes VM y VMA de 15 kg. Cada producto posee `id`, `nombre`, `precio`, `descripcion`, `capacidad` e `imagen`.

### Inicio de sesión

`pages/autenticacion/Login.jsx` utiliza `Formulario.jsx` para generar campos de correo y contraseña. Incluye validación HTML, opción para recordar el usuario, enlace de recuperación y botones de acceso y registro.

Actualmente `handleSubmit` solo evita el envío tradicional y registra un mensaje en consola. No existe autenticación contra una base de datos ni generación de sesión.

### Pie de página

`Footer.jsx` muestra los medios de contacto, horario de atención y derechos de la empresa.

## 5. Diseño y modo oscuro

La interfaz utiliza azul oscuro como color institucional y naranja como color de énfasis. Bootstrap proporciona contenedores, botones, formularios y utilidades responsive.

El tema se implementa mediante variables CSS:

```css
:root {
  --text: #1b263b;
  --bg: #f7f9fc;
  --surface: #ffffff;
}

:root.oscuro {
  --text: #e5e7eb;
  --bg: #111827;
  --surface: #1f2937;
}
```

El cambio de clase modifica los colores de fondo, texto, superficies y bordes. La preferencia se conserva en el navegador mediante `localStorage`.

## 6. Rutas y estado actual

| Ruta | Estado |
| --- | --- |
| `/` | Implementada mediante `Home` |
| `/login` | Implementada mediante `Login` |
| `/productos` | Enlace existente, ruta aún no registrada |
| `/nosotros` | Enlace existente, ruta aún no registrada |
| `/Recuperar-Contraseña` | Enlace existente, ruta aún no registrada |

Los archivos `Nosotros.jsx`, `Catalogo.jsx` y `DetallesProducto.jsx` están preparados, pero aún no contienen una vista funcional.

## 7. Relación con el problema empresarial

| Actor | Necesidad | Estado actual |
| --- | --- | --- |
| Cliente | Consultar productos y solicitar gas | Existe la base visual de productos y login |
| Operadora | Centralizar y asignar pedidos | Panel no implementado |
| Repartidor | Consultar y actualizar entregas | Módulo móvil no implementado |
| Administradora | Controlar stock y pagos | Panel administrativo no implementado |

## 8. Limitaciones conocidas

- No existe API ni base de datos.
- Los productos son datos estáticos y no reflejan stock real.
- No hay autenticación, autorización por roles ni persistencia.
- No se pueden crear ni consultar pedidos.
- No existe seguimiento de entregas ni registro de pagos.
- No hay funcionamiento offline para zonas con señal intermitente.
- Varias opciones del menú aún no tienen rutas implementadas.
- `Formulario.jsx` utiliza `campo.Label`, mientras los datos de login usan `label`; debe unificarse el nombre de la propiedad.
- El botón de registro está fuera del formulario y requiere una ruta o flujo independiente.

## 9. Evolución propuesta

1. Completar las vistas de catálogo, información institucional y recuperación de contraseña.
2. Corregir validaciones, accesibilidad y navegación.
3. Incorporar una API REST y una base de datos para usuarios, productos, pedidos, pagos e inventario.
4. Implementar autenticación y permisos para clientes, operadora, repartidores y administradora.
5. Desarrollar la gestión de pedidos, despacho, stock y pagos.
6. Agregar una interfaz móvil con reintentos y sincronización para conectividad intermitente.

## Conclusión

El proyecto constituye un prototipo frontend navegable que establece la identidad visual, los componentes comunes, el acceso inicial y la base de un catálogo comercial para la Distribuidora de Gas El Volcán. Su transformación en una solución fullstack requiere incorporar persistencia, autenticación, control de roles, gestión de pedidos, inventario, pagos y seguimiento de entregas.
