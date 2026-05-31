<script lang="ts">
  import SlideEquation from '@codigosinsiesta/theme/slides/SlideEquation.svelte';
</script>

<SlideEquation
  eyebrow="La ecuación"
  title="Agent = Model + Harness"
  titleHighlight="Harness"
  note='"Si no eres el modelo, eres el harness." — LangChain. El harness es el sistema operativo del LLM: CPU = modelo, RAM = contexto, Almacenamiento = memoria, I/O = herramientas.'
  terms={[
    { kind: 'term', label: 'El agente', value: 'Agent' },
    { kind: 'op', symbol: '=' },
    { kind: 'term', label: 'Pesos', value: 'Model' },
    { kind: 'op', symbol: '+' },
    { kind: 'term', label: 'Tu trabajo', value: 'Harness', outcome: true }
  ]}
/>
