<script lang="ts">
  import SlideCompare from '@codigosinsiesta/theme/slides/SlideCompare.svelte';
</script>

<SlideCompare
  eyebrow="The Ablation Surprise"
  title="Más estructura ≠ mejor agente."
  titleHighlight="≠"
  leftKind="err"
  rightKind="ok"
  left={{
    label: 'Ensanchar · caro y contraproducente',
    headline: 'Lo que parece ayudar — pero perjudica.',
    items: [
      'Verificadores → SWE −0.8 pts · OS −8.4 pts',
      'Búsqueda multi-candidato → SWE −2.4 pts · OS −5.6 pts',
      '14× el cómputo para el mismo resultado',
      'SWE-Bench Verified · GPT-5.4 · ~75% resueltos con 6 módulos O con LLM+tools solo'
    ]
  }}
  right={{
    label: 'Estrechar · disciplinado y efectivo',
    headline: 'Lo que realmente mejora.',
    items: [
      'Estrechar el loop del propio agente',
      'Eliminar componentes que el modelo ya no necesita',
      'Verificación integrada en el paso, no añadida encima',
      'La única intervención que mejora consistentemente'
    ]
  }}
/>
