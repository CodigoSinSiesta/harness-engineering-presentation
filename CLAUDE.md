# CLAUDE.md

Repositorio: presentación interactiva (14 slides, Astro 5 + Svelte 5) sobre **harness engineering** — la disciplina que reformula cómo construimos agentes tras NLAH (Tsinghua) y Meta-Harness (Stanford), marzo 2026.

## Reglas duras

- Stack canónico de Código Sin Siesta: **Astro 5 + Svelte 5 + Tailwind 4 + GSAP 3 + TypeScript estricto**.
- Cada slide vive en `src/components/slides/SlideNNName.svelte` y se monta desde `src/pages/index.astro`.
- **Diagramas siempre SVG inline propios** — no incrustes capturas del vídeo de origen. Animados con `animateLineDraw` o keyframes CSS.
- Notas del ponente en `guia/NN-slug.md` con la estructura: tesis, mensajes clave, cross-refs al wiki, anécdotas, preguntas tipo, transiciones.
- Patrón visual: dark blueprint con orbes + grid animado + `card-glass`. Breakpoints 900/768/480/390.

## Cuándo NO actuar sin preguntar

- Subir el repo a la org `CodigoSinSiesta` o cambiar `astro.config.mjs:base` (impacta el deploy a GitHub Pages).
- Sustituir `gsap` por otra librería de animación (rompe el patrón con los otros 7 decks).
- Cambiar tokens de color de `src/styles/global.css` (los tokens vienen del bundle V4 oficial; si haces fork, documenta el motivo).
