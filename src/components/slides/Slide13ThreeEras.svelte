<script lang="ts">
  import SlideNestedEras from '@codigosinsiesta/theme/slides/SlideNestedEras.svelte';
</script>

<SlideNestedEras
  eyebrow="Las tres eras"
  title="Cada era absorbe la anterior."
  titleHighlight="absorbe"
  eras={[
    { label: 'Prompt Engineering 2022\n+ instrucción · few-shot · roles' },
    { label: 'Context Engineering 2024\n+ recuperación · ventana · prioridad' },
    { label: 'Harness Engineering 2026\n+ orquestación · memoria · verificación · seguridad', accent: true }
  ]}
/>
