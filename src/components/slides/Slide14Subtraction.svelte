<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="La forma extraña que toma la disciplina"
  title="Es un oficio de sustracción tanto como de adición."
  titleHighlight="sustracción"
  columns={3}
  items={[
    {
      title: 'Vercel · agente D0 — HERRAMIENTAS −80%',
      body: '16 herramientas especializadas → filesystem con YAMLs + grep.\n\n**Success 80% → 100% · 3.5× más rápido · −40% tokens**'
    },
    {
      title: 'Manus — REESCRITURAS ×5',
      body: 'Reescribió su harness **5 veces en 6 meses**.\n\n→ cada vez más simple. La complejidad no escala; la simplicidad sí.'
    },
    {
      title: 'Anthropic — REINICIOS −100%',
      body: 'Eliminó context resets cuando Opus 4.6 dejó de necesitarlos.\n\n→ **asunción caducada, removida**. El harness se mantiene vivo podándolo.'
    }
  ]}
/>
