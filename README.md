<<<<<<< HEAD
# Portafolio de Jan Piert Garcia Arevalo

Portafolio personal con frontend en español, backend MVC en Node.js y una entrada PHP opcional para hosting compartido.

## Estructura

```text
src/
  app.js
  controllers/       Lógica de cada solicitud
  models/            Persistencia de mensajes
  routes/            Rutas web y API
  views/             Vistas EJS
public/
  css/               Estilos
  js/                Interacciones del navegador
php-hosting/         Frontend PHP para subir a hosting compartido
```

## Ejecutar localmente

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. `npm run dev` y `npm start` usan el mismo servidor Express; `npm start` es el comando de producción. La aplicación usa `process.env.PORT` si el proveedor la define y, si no, escucha en el puerto `3000`. Así funciona en Render y también en un servidor propio configurado en el puerto 3000.

El formulario hace `POST /api/contacto`; los mensajes se guardan en `data/contacts.jsonl` localmente. En un servidor propio puedes respaldar esa carpeta. En un hosting gestionado define `DATA_DIR` para apuntar a almacenamiento persistente.

## Publicarlo gratis en Render

El proyecto incluye `render.yaml`, que configura el servicio Node.js con `npm ci` y `npm start` en el nivel gratuito de Render.

1. Publica este proyecto en un repositorio de GitHub desde VS Code (**Control de código fuente** → **Publicar en GitHub**). Puedes elegir un repositorio privado.
2. En Render, elige **New → Blueprint** y conecta ese repositorio.
3. Revisa la configuración detectada y despliega. Render mostrará la URL pública cuando termine.

Los servicios gratuitos de Render pueden suspenderse tras 15 minutos sin visitas y tardar alrededor de un minuto en despertar. Su disco es temporal; los mensajes guardados por este proyecto pueden perderse al suspender o redesplegar el servicio. Úsalo para mostrar el portafolio y como demo del formulario, no como almacenamiento duradero de mensajes.

### Producción en un VPS o servidor propio

Instala Node.js 20 o superior y Git en el servidor, clona el repositorio, luego ejecuta:

```bash
npm ci --omit=dev
NODE_ENV=production PORT=3000 npm start
```

Usa un gestor de procesos como PM2 o `systemd` para mantener Node.js activo después de cerrar la terminal y reiniciarlo cuando el servidor vuelva a arrancar. Configura el proxy web (Nginx/Apache) y el dominio para enviar tráfico HTTPS al puerto interno 3000. No hace falta publicar `:3000` en el enlace para visitantes.

## Subirlo a un hosting PHP

El backend de Node.js necesita un proceso Node.js activo; el hosting PHP por sí solo no ejecuta Node.js. Si tu proveedor solo ofrece PHP, despliega el backend Node en un servicio compatible y configura la variable `NODE_API_URL` en PHP con la URL HTTPS completa de su endpoint, por ejemplo `https://api.tudominio.com/api/contacto`.

Sube el contenido de `php-hosting/` (incluida su carpeta `assets/`) a `public_html/`. Configura `NODE_API_URL` en el entorno PHP del hosting con la URL HTTPS del backend Node.js. Activa cURL y mbstring en PHP. El formulario PHP valida los campos y envía JSON al backend Node.js.

Si el hosting no permite configurar variables de entorno PHP, pide al proveedor que la defina en el servidor; no guardes una URL privada ni credenciales en el HTML público.

## Personalización

Edita la biografía, enlaces, textos y proyectos de demostración en `src/views/index.ejs`. El frontend de hosting PHP equivalente está en `php-hosting/index.php`. Sustituye `jan@example.com` por tu correo. La biografía evita afirmar estudios, empleos, ubicación o experiencia que no fueron proporcionados.
=======
# jan
Repositorio de prueba llamado jan
>>>>>>> ba1f53c60d9ab3f2682a185de96cf173b30e44e4
