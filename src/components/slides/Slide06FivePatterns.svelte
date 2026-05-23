<script lang="ts">
  import SlidePatternGrid from '@codigosinsiesta/theme/slides/SlidePatternGrid.svelte';
</script>

<SlidePatternGrid
  eyebrow="Los 5 patrones canónicos · Anthropic"
  title="Topologías de orquestación"
  titleHighlight="orquestación"
  intro="Todo agente en producción **combina varios**. Esas decisiones arquitectónicas son las que generan el gap de 6×."
  columns={3}
  patterns={[
    { type: 'chain', title: 'Prompt Chaining', body: 'Cadena lineal: cada paso usa la salida del anterior. Pipelines deterministas con etapas claras.' },
    { type: 'fan-out', title: 'Routing', body: 'Un clasificador decide a qué especialista delegar. Triaje de entradas heterogéneas.' },
    { type: 'fan-in', title: 'Parallelization', body: 'Distribución paralela a trabajadores y agregación al final. Recuperación multifuente, ensembles.' },
    { type: 'orchestrator-workers', title: 'Orch-Workers', body: 'Maestro descompone, trabajadores ejecutan, maestro integra. Tareas complejas con sub-objetivos dinámicos.', accent: true },
    { type: 'eval-loop', title: 'Eval-Optimizer', body: 'Bucle generador-evaluador con criterio de aceptación. Cuando hay un "está bien" objetivable.' },
  ]}
/>
