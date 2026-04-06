# KAIROS Skills — Skill de Desarrollo

## Propósito
Criterios de diseño y construcción para mantener coherencia visual en toda intervención.
Leer siempre junto a `BRAND.md` (identidad) y `copy.md` (textos).

---

## REGLA #1 — Copy: Fuente de Verdad

**SIEMPRE leer `copy.md` antes de escribir cualquier texto en el HTML.**

- ❌ NUNCA parafrasear, resumir ni reordenar el copy
- ❌ NUNCA "mejorar" frases del copy original
- ❌ NUNCA completar copy faltante con suposiciones
- ✅ Copiar el texto literal, palabra por palabra
- ✅ Si hay copy faltante → dejar comentario: <!-- COPY PENDIENTE: descripción -->
- ✅ Si el usuario pide cambiar copy → preguntar si actualizar también copy.md

---

## REGLA #2 — Estructura de archivos

kairos/
├── index.html
├── copy.md
├── BRAND.md
├── SKILL.md
├── assets/
│   ├── imagenes/
│   ├── elementos-graficos/
│   └── fonts/
├── css/
│   └── styles.css
└── js/
    └── main.js

- Todo el CSS en styles.css — sin estilos inline en el HTML
- Todo el JS en main.js — sin scripts inline en el HTML
- Sin librerías externas — vanilla JS y CSS puro

---

## REGLA #3 — Imágenes

- ❌ NUNCA embeber imágenes en base64
- ✅ SIEMPRE rutas relativas: assets/imagenes/archivo.webp
- ✅ object-fit: cover en todas las imágenes
- ✅ object-position: center top en fotos de personas
- ✅ Atributo alt descriptivo en todas las imágenes

---

## REGLA #4 — Sistema de contenedor y márgenes

Todas las secciones usan la misma clase .container para el contenido.
Esto garantiza que todos los textos e imágenes arranquen en el mismo punto lateral.

El section solo define fondo y padding vertical.
El .container adentro centra y limita el ancho.

.section-nombre {
  background: ...;
  padding: 140px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
}

@media (max-width: 960px) { .container { padding: 0 32px; } }
@media (max-width: 600px) { .container { padding: 0 24px; } }

Estructura HTML de cada sección:
<section class="section-nombre">
  <div class="container">
    contenido aquí
  </div>
</section>

❌ NUNCA definir padding lateral directamente en el section
❌ NUNCA usar paddings laterales distintos entre secciones
✅ Padding vertical mínimo de sección: 120px 0

---

## REGLA #5 — Variables CSS obligatorias

Usar siempre las variables de BRAND.md. Nunca hardcodear colores.

:root {
  --cream:      #F4F4F6;
  --black:      #0d0d0d;
  --blue-deep:  #2F4F6C;
  --blue-mid:   #345F8C;
  --blue-light: #749CBB;
  --gold:       #D1B254;
  --gold-hover: #e6c76a;
  --gray:       #D9D9D6;
  --white:      #ffffff;
  --container-max: 1200px;
  --container-pad: 80px;
}

---

## REGLA #6 — Tipografías

Display / títulos grandes:
font-family: 'The Season', 'Cormorant Garamond', serif;

Accent / pull quotes / frases destacadas:
font-family: 'Snell Roundhand', 'Cormorant Garamond', cursive;
font-style: italic;

UI / todo lo demás:
font-family: 'Poppins', sans-serif;

Eyebrows (etiquetas de sección):
font-size: 9px; letter-spacing: 4.5px; text-transform: uppercase; font-weight: 500;

---

## REGLA #7 — Ritmo visual de secciones

Las secciones alternan entre claras y oscuras:

Sección clara: background var(--cream) — texto negro, eyebrow en --blue-mid
Sección oscura: foto con overlay — texto blanco, eyebrow en --gold

Overlay estándar para fotos de fondo:
background:
  linear-gradient(160deg, rgba(8,18,30,.94) 0%, rgba(20,50,75,.88) 50%, rgba(8,18,30,.94) 100%),
  url('assets/imagenes/fondo.webp') center/cover;

---

## REGLA #8 — Sistema de animaciones

No agregar librerías externas. Sistema único:

.rv {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity .95s cubic-bezier(.16,1,.3,1), transform .95s cubic-bezier(.16,1,.3,1);
}
.rv.on { opacity: 1; transform: translateY(0); }
.d1 { transition-delay: .1s; }
.d2 { transition-delay: .2s; }
.d3 { transition-delay: .3s; }
.d4 { transition-delay: .4s; }

JS activa .on con IntersectionObserver (threshold: 0.1).
Aplicar .rv a títulos, párrafos, imágenes y cards en secciones nuevas.

---

## REGLA #9 — Restricciones visuales de marca

❌ Sin border-radius en ningún elemento
❌ Sin box-shadow exageradas
❌ Sin gradientes fuera de la paleta
❌ Sin fuentes genéricas como tipografía principal
❌ Sin emojis en el contenido principal
❌ No centrar todo el texto — solo en secciones específicas

---

## REGLA #10 — Hosting

URL de producción: https://facundogonzalo.com/kairos
Deploy vía SFTP desde VS Code
Nunca editar archivos directo en el servidor

---

## Checklist antes de entregar cualquier cambio

- ¿El copy es literal desde copy.md?
- ¿Las imágenes usan rutas relativas?
- ¿Todas las secciones usan .container para los márgenes?
- ¿Los colores usan variables CSS?
- ¿Los elementos nuevos tienen clase .rv?
- ¿Se respetan las restricciones visuales de marca?
