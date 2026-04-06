# KAIROS Skills — Manual de Marca
> Fuente de verdad para decisiones visuales y de identidad.
> Claude Code debe leer este archivo antes de tomar cualquier decisión de diseño.

---

## Identidad

**Nombre completo:** KAIROS Skills
**Tagline:** Precisión en el momento justo.
**Concepto:** Las ventas como herramienta de libertad.

**Filosofía visual:**
KAIROS se define en su forma más esencial. Cada trazo responde a equilibrio y claridad. Simple. Intencional. Exacto.

---

## Logos y archivos de marca

Todos los archivos viven en `/assets/elementos-graficos/`

| Archivo | Uso |
|---|---|
| `Kairos-Skills_color.webp` | ⭐ LOGO PRINCIPAL — nav, hero, secciones destacadas |
| `Logomark_azul.webp` | Monograma KS — favicon, elemento decorativo pequeño |
| `kairos-sol_amarillo.png` | Sol dorado — elemento decorativo animado (usar este, no el anterior) |
| `Kairos-estampilla.png` | Sello de branding — overlay decorativo sobre fotos |

**Reglas de uso del logo:**
- Logo principal en nav: sobre fondos oscuros aplicar `filter: brightness(0) invert(1)` → blanco
- Logo principal en nav: sobre fondos claros usar el archivo color directamente
- Nunca deformar, rotar ni cambiar colores del logo
- Espacio mínimo alrededor del logo: equivalente a la altura de la "K"

**Reglas de uso de la estampilla (`Kairos-estampilla.png`):**
- Usarla como overlay decorativo encima de fotos — efecto editorial/branding
- Posición sugerida: esquina inferior derecha o superior derecha de la foto
- Rotación sugerida: entre -8deg y -12deg para efecto natural
- Opacidad: 0.85 - 1 (es un elemento de marca, debe verse)
- Tamaño sugerido: 120px - 180px según el contexto
- Funciona mejor sobre: foto_fundador.webp, foto_fundador_viaje.webp
- Usar `mix-blend-mode: multiply` sobre fondos claros para integración natural

---

## Paleta de Colores

```css
:root {
  /* Fondos */
  --cream:       #F4F4F6;   /* Fondo principal secciones claras */
  --black:       #0d0d0d;   /* Fondo secciones oscuras puras */

  /* Azules de marca */
  --blue-deep:   #2F4F6C;   /* Azul oscuro — fondos, overlays */
  --blue-mid:    #345F8C;   /* Azul principal — énfasis, links */
  --blue-light:  #749CBB;   /* Azul claro — acentos suaves */

  /* Dorado */
  --gold:        #D1B254;   /* Acento principal — CTAs, eyebrows, números */
  --gold-hover:  #e6c76a;   /* Hover de dorado */

  /* Neutros */
  --gray:        #D9D9D6;   /* Gris claro — separadores, fondos sutiles */
  --white:       #ffffff;
}
```

**Reglas de color:**
- Secciones claras (--cream): texto negro, eyebrows en --blue-mid
- Secciones oscuras (foto con overlay): texto blanco, eyebrows en --gold
- Botón CTA principal: siempre --gold con texto negro
- Nunca usar colores fuera de esta paleta salvo instrucción explícita

---

## Tipografías

### Jerarquía

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Display / H1-H2 | The Season | Regular | Títulos grandes de sección |
| Accent / Quote | Snell Roundhand | Regular | Pull quotes, frases destacadas, cursivas de énfasis |
| UI / Body | Poppins | 300-600 | Todo el texto de cuerpo, labels, eyebrows, botones |

### Implementación web

**Poppins** — Google Fonts (gratuita, lista para usar)
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**The Season** — Fuente de pago/descarga
- Si se tienen los archivos `.woff2` / `.ttf`, declarar con `@font-face` en CSS
- Archivo esperado en: `/assets/fonts/TheSeason.woff2`
- Si no están disponibles, usar `'Cormorant Garamond'` como fallback temporal
```css
@font-face {
  font-family: 'The Season';
  src: url('../assets/fonts/TheSeason.woff2') format('woff2'),
       url('../assets/fonts/TheSeason.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

**Snell Roundhand** — Fuente del sistema Apple / licencia paga para web
- Nativa en macOS/iOS: se ve bien en esos sistemas
- En Windows/Android: necesita archivo web o alternativa
- Alternativa web recomendada: `'Cormorant Garamond', serif` en itálica
- Archivo esperado si se licencia: `/assets/fonts/SnellRoundhand.woff2`

### Escala tipográfica

```css
/* Display — The Season */
.display-xl  { font-size: clamp(52px, 8vw, 118px); font-weight: 400; line-height: .92; }
.display-lg  { font-size: clamp(40px, 5vw, 80px);  font-weight: 400; line-height: 1.0; }
.display-md  { font-size: clamp(32px, 4vw, 60px);  font-weight: 400; line-height: 1.05; }

/* Accent — Snell Roundhand */
.accent      { font-family: 'Snell Roundhand', 'Cormorant Garamond', cursive; font-style: italic; }

/* UI — Poppins */
.eyebrow     { font-size: 9px;  letter-spacing: 4.5px; text-transform: uppercase; font-weight: 500; }
.body-lg     { font-size: 15px; line-height: 2.0; font-weight: 300; }
.body-md     { font-size: 13px; line-height: 1.9; font-weight: 300; }
.caption     { font-size: 11px; letter-spacing: 1.5px; font-weight: 400; }
```

---

## Elementos gráficos

### El Sol — `kairos-sol_amarillo.png`
- Color: dorado (#D1B254)
- Uso: elemento decorativo de fondo en secciones oscuras — Hero, Final CTA, Garantía
- Siempre con baja opacidad (0.08 - 0.28) para no competir con el contenido
- Animación sugerida: pulso suave (scale 1 → 1.05, opacity leve), ciclo de 7-9s
- Nunca usarlo como elemento principal de primer plano
- Tamaño: clamp(200px, 30vw, 500px) — grande pero sutil

### La Estampilla — `Kairos-estampilla.png`
- Sello con monograma KS en azul de marca
- Uso: overlay de branding sobre fotos del fundador — efecto editorial premium
- Posición: absoluta, esquina de la foto, levemente rotada (-10deg)
- Opacidad: 0.9 — debe ser visible como elemento de marca
- No animar, no filtrar — mostrar tal cual

---

## Imágenes fotográficas

Todas en `/assets/imagenes/`

| Archivo | Descripción | Uso asignado |
|---|---|---|
| `Background-Kairos_01.webp` | Mar calmo, tonos celestes suaves | Hero + Garantía |
| `Background-Kairos_02.webp` | Agua cristalina con piedras | Sección Módulos |
| `Background-Kairos_03.webp` | Mar abierto con olas, tonos turquesa | Método + Testimonios |
| `foto_fundador.webp` | Gaspar en escenario con micrófono | Oportunidad + Empathy |
| `foto_fundador_viaje.webp` | Gaspar de viaje | Oportunidad (accent photo) |
| `mockups_Kaios-3.webp` | Libro KAIROS + café frente al mar | Brand Story |
| `mockups_Kaios.webp` | Libro KAIROS frente al mar | Final CTA |

**Reglas fotográficas:**
- Las fotos de fondo siempre llevan overlay oscuro para garantizar legibilidad del texto
- Overlay estándar oscuro: `rgba(8,18,30,.92)` a `rgba(20,50,75,.88)`
- Fotos de personas: `object-position: center top` para no cortar la cabeza
- Nunca estirar ni distorsionar imágenes — siempre `object-fit: cover`

---

## Tono visual general

- **Estética:** Editorial de lujo. Inspiración en revistas de viaje premium y hoteles boutique
- **Ritmo de secciones:** Alternar claro / oscuro / claro / oscuro para crear respiración visual
- **Espaciado:** Generoso. Padding mínimo de sección: `120px` vertical
- **Animaciones:** Sutiles y lentas. Nada que distraiga. Scroll reveal con fadeUp
- **Cursor:** Custom — punto dorado con anillo que sigue con lag

---

## Lo que NUNCA hacer

- ❌ Usar fuentes genéricas (Arial, Helvetica, system-ui) como tipografía principal
- ❌ Usar colores fuera de la paleta definida
- ❌ Centrar todo el texto (rompe el ritmo editorial)
- ❌ Usar sombras de caja (box-shadow) exageradas
- ❌ Degradados de colores ajenos a la paleta
- ❌ Bordes redondeados (border-radius) — la marca es de aristas limpias
- ❌ Emojis en el contenido principal
