# Soul and Fire Studios — Sitio web

Sitio web del estudio indie de videojuegos **Soul and Fire Studios**. Hecho con
HTML, CSS y JavaScript puro (sin frameworks ni paso de build), así que es rápido,
ligero y fácil de publicar en cualquier sitio.

Inspirado en el lenguaje visual de estudios como Rockstar, Bethesda, Blizzard,
Ubisoft y Team Cherry: oscuro, cinematográfico y centrado en el *key art*.

## 🔥 Características

- **Carrusel héroe cinemático** con un juego destacado por slide (auto-avance,
  flechas, puntos, swipe en móvil y navegación por teclado).
- ***Key art* atmosférico en SVG** — ilustraciones hechas con código, sin
  imágenes externas: el sitio es 100% autocontenido y ligero.
- **Badges de plataforma** (PC, Steam, PS5, Xbox, Switch, Epic).
- **Spotlight** de juego destacado al estilo AAA (arte + características).
- **Modal de tráiler** (listo para incrustar un vídeo de YouTube).
- **Sección de Carreras/Reclutamiento** con ofertas de empleo.
- **Newsletter** + formulario de contacto con validación en el navegador.
- Secciones: Héroe, Estudio, Juegos, Destacado, Noticias, Carreras, Equipo,
  Newsletter y Contacto.
- Animación de brasas (`<canvas>`), contadores y *reveal* al hacer scroll.
- Diseño responsive (móvil, tablet, escritorio). Respeta `prefers-reduced-motion`.

## 📁 Estructura

```
.
├── index.html        # Estructura y contenido de la página
├── styles.css        # Estilos y tema visual
├── script.js         # Interactividad (carrusel, brasas, modal, formularios)
├── assets/
│   └── logo.png      # Emblema oficial del estudio (usado en nav/footer/newsletter/favicon)
└── README.md
```

> **Logo**: `assets/logo.png` es el emblema oficial de Soul and Fire Studios
> (fondo transparente). Se usa en el nav, el footer, la newsletter y el favicon.

## 🚀 Cómo verlo en local

No necesita instalación. Puedes abrir `index.html` directamente, o servirlo:

```bash
# con Python
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## ✏️ Cómo personalizarlo

Todo el contenido está en `index.html` en español y es fácil de editar:

- **Juegos del carrusel**: cada slide es un `<article class="slide">` dentro de
  `#heroTrack`. Cambia título, descripción, plataformas y el atributo
  `data-accent` (color del juego).
- **Tráilers**: en `script.js`, en el objeto `TRAILERS`, asocia el título del
  juego a un ID de YouTube (ej. `'Emberfall': 'dQw4w9WgXcQ'`) y el modal lo
  incrustará automáticamente. Sin ID, muestra un póster "próximamente".
- ***Key art*** : las ilustraciones son SVG inline dentro del HTML. Para usar
  arte real, sustituye el `<svg>` de un slide/tarjeta por
  `<img src="ruta/a/keyart.jpg" alt="" />`.
- **Colores**: en `styles.css`, en `:root`, están las variables (`--fire`,
  `--soul`, etc.).
- **Ofertas de empleo**: edita la sección `<!-- ===== CAREERS ===== -->`.
- **Redes sociales**: actualiza los enlaces `href="#"` en Contacto y el footer.

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
