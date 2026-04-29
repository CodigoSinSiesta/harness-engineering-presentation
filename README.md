# Harness Engineering Presentation

Presentación interactiva (14 slides, ~40-50 min) sobre **harness engineering**: la disciplina que reformula cómo construimos agentes de IA tras los papers de marzo 2026 (NLAH de Tsinghua y Meta-Harness de Stanford).

**Live**: [codigosinsiesta.github.io/harness-engineering-presentation](https://codigosinsiesta.github.io/harness-engineering-presentation/)

## Tesis

> Mismo modelo. Mismo benchmark. **6× de diferencia en rendimiento.** La diferencia ya no la marca el modelo, la marca el harness.

## Stack

- **Astro 5** + **Svelte 5** + **TypeScript** estricto
- **Tailwind CSS 4** + tokens propios del sistema V4 "dark blueprint" de Código Sin Siesta
- **GSAP 3** para animaciones de entrada/salida + animateLineDraw para SVG
- Diagramas **SVG propios** animados (no se reutilizan capturas del vídeo de origen)

## Slides (14)

1. **Hero** — título, autor, badges (NLAH · Meta-Harness · Tsinghua · Stanford · 2026).
2. **El gap del 6×** — la tesis en cifras.
3. **Agent = Model + Harness** — la ecuación + analogía sistema operativo.
4. **5 patrones canónicos** — diagramas SVG animados de prompt chaining, routing, parallelization, orch-workers, eval-optimizer.
5. **Antes: el caos** — System A vs B, dos modos de fallo (One-Shotting / Premature Completion).
6. **NLAH (Tsinghua)** — arquitectura en 3 capas: NLAH (SWAP) / Charter (FIXED) / Backend.
7. **+16.8 puntos sin tocar lógica** — el experimento de migración OS-Symphony → NLAH.
8. **Ablation Surprise** — disciplined narrowing > expensive broadening.
9. **Meta-Harness (Stanford)** — el loop de optimización automática (Proposer → Evaluator → Filesystem).
10. **La transferibilidad** — 1 harness optimizado → 5 modelos → todos mejoran.
11. **Las tres eras** — animación de cajas anidadas: Prompt → Context → Harness.
12. **El oficio de sustracción** — Vercel (−80% tools), Manus (5 reescrituras), Anthropic (eliminó context resets).
13. **5 conclusiones** — qué propone realmente el campo.
14. **Cierre** — recursos + autor.

## Desarrollo

```bash
pnpm install
pnpm dev          # → http://localhost:4327/harness-engineering-presentation
pnpm build        # type-check + build estático en dist/
```

## Notas de ponente

Cada slide tiene su `guia/NN-slug.md` con: tesis, mensajes clave, cross-refs al wiki, anécdotas, preguntas tipo, transiciones.

## Fuentes

- Pan et al. — *Natural-Language Agent Harnesses* — Tsinghua, marzo 2026.
- Khattab et al. — *Meta-Harness* — Stanford, marzo 2026.
- DeepMind — *AutoHarness* — 2025.
- *AgentSpec DSL* — ICSE 2026.
- PY (YouTube, abril 2026) — síntesis del campo.

## Autor

Alejandro de la Fuente · Tech Lead · NTT Data · GDNE
[tellmealex.dev](https://tellmealex.dev) · [GitHub](https://github.com/TellMeAlex) · [LinkedIn](https://es.linkedin.com/in/alejandro-de-la-fuente)
