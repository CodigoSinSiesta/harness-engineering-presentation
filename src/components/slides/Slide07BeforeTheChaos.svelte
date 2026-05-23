<script lang="ts">
  import SlideCompare from '@codigosinsiesta/theme/slides/SlideCompare.svelte';
</script>

<SlideCompare
  eyebrow="Antes de los papers"
  title="Sin representación, no hay ablación."
  titleHighlight="ablación"
  leftKind="neutral"
  rightKind="neutral"
  left={{
    label: 'Sistema A',
    headline: 'Cuatro variables cambiando',
    items: [
      'prompts',
      'herramientas',
      'verificadores',
      'semántica de estado'
    ]
  }}
  right={{
    label: 'Sistema B',
    headline: 'Cuatro variables cambiando',
    items: [
      'prompts',
      'herramientas',
      'verificadores',
      'semántica de estado'
    ]
  }}
/>
