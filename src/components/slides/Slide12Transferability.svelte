<script lang="ts">
  import SlideStats from '@codigosinsiesta/theme/slides/SlideStats.svelte';
</script>

<SlideStats
  eyebrow="Lo que cambia el cálculo"
  title="Un harness optimizado se transfiere."
  titleHighlight="transfiere"
  intro="El activo reutilizable ya no es el modelo. Es el harness. Optimizas con uno, mejoras los otros cinco. **Cambia la economía del producto.**"
  stats={[
    { value: '+8.2', label: 'Opus 4.6', color: 'electrico', note: 'Modelo de entrenamiento' },
    { value: '+6.4', label: 'Sonnet 4.5', color: 'electrico', note: 'Transferencia cross-model' },
    { value: '+11.1', label: 'Haiku 4.5', color: 'ok', trend: '↑ mejor que en el modelo de entrenamiento', note: 'El harness encaja mejor con el modelo más pequeño' },
    { value: '+5.7', label: 'GPT-5.4', color: 'electrico', note: 'Transferencia cross-vendor' }
  ]}
/>
