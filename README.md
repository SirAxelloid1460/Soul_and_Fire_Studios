# Soul and Fire Studios — Sitio web

Sitio web del estudio indie de videojuegos **Soul and Fire Studios**. Hecho con
HTML, CSS y JavaScript puro (sin frameworks ni paso de build), así que es rápido,
ligero y fácil de publicar en cualquier sitio.

## 🔥 Características

- Diseño moderno, oscuro y responsive (móvil, tablet y escritorio).
- Animación de brasas (`<canvas>`) acorde al nombre del estudio.
- Secciones: Hero, Estudio, Juegos, Equipo, Noticias y Contacto.
- Menú móvil, contadores animados, animaciones al hacer scroll.
- Respeta `prefers-reduced-motion` (accesibilidad).
- Formulario de contacto con validación en el navegador.

## 📁 Estructura

```
.
├── index.html    # Estructura y contenido de la página
├── styles.css    # Estilos y tema visual
├── script.js     # Interactividad (menú, brasas, contadores, formulario)
└── README.md
```

## 🚀 Cómo verlo en local

No necesita instalación. Puedes abrir `index.html` directamente, o servirlo:

```bash
# con Python
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## ✏️ Cómo personalizarlo

Todo el contenido está en `index.html` en español y es fácil de editar:

- **Nombre y juegos**: busca las secciones `<!-- ===== GAMES ===== -->` y
  `<!-- ===== TEAM ===== -->` y cambia los textos por los tuyos.
- **Colores**: en `styles.css`, arriba del todo, en `:root` están las variables
  (`--fire`, `--soul`, etc.).
- **Imágenes**: los juegos usan gradientes como placeholder. Para usar capturas
  reales, reemplaza `.game__art--1/2/3` en `styles.css` por
  `background-image: url('ruta/a/imagen.jpg')`.
- **Redes sociales**: actualiza los enlaces `href="#"` en la sección de contacto
  y el footer.

## 📨 Formulario de contacto

Ahora mismo el formulario valida y muestra un mensaje de éxito en el navegador,
pero **no envía emails** (no hay backend). Para que funcione de verdad tienes
opciones sencillas como [Formspree](https://formspree.io) o
[Netlify Forms](https://docs.netlify.com/forms/setup/). Puedo conectarlo cuando
me digas cuál prefieres.

## 🌐 Publicar (GitHub Pages)

1. Sube esta rama a GitHub.
2. En el repo: **Settings → Pages → Source: Deploy from a branch**.
3. Elige la rama y la carpeta raíz (`/`). En un par de minutos tendrás la URL.

---

Hecho con alma y fuego. 🔥
