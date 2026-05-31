<script lang="ts">
  import SlideDidactic from '@codigosinsiesta/theme/slides/SlideDidactic.svelte';
</script>

<SlideDidactic
  eyebrow="Paper 2 · Meta-Harness · Stanford · Marzo 2026"
  title="Si el harness es código, se puede optimizar."
  titleHighlight="optimizar"
  definition={{
    title: 'Más allá de DSPy',
    body: 'DSPy (Khattab, 2023) ajusta *prompts* dentro de un pipeline fijo. Meta-Harness **reescribe el pipeline entero**: estructura, recuperación, memoria, topología. No optimiza dentro — optimiza el contenedor.'
  }}
  analogy={{
    title: 'El bucle de optimización',
    body: '**Proposer** (Claude Code · Opus 4.6) lee trazas fallidas y escribe nuevo arnés → **Evaluator** ejecuta en benchmark → **Feedback** vuelve al Proposer. 10M tokens/iter · 400× más feedback que cualquier método previo.'
  }}
  examples={{
    title: 'Resultados Meta-Harness',
    items: [
      '+8.2 pts sobre Opus 4.6 (modelo de entrenamiento)',
      '+11.1 pts sobre Haiku 4.5 (¡mejor que en el modelo de entrenamiento!)',
      '+5.7 pts sobre GPT-5.4 — el harness se transfiere entre proveedores',
      'El activo reutilizable ya no es el modelo, es el harness'
    ]
  }}
/>
