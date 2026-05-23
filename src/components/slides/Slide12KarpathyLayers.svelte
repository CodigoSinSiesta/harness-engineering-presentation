<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="El mapa completo · Karpathy, Sequoia AI Ascent 2026"
  title="El harness es el sustrato. ¿Quién va encima?"
  titleHighlight="sustrato"
  columns={3}
  items={[
    {
      title: 'Harness Engineering ← estamos aquí',
      body: 'Tools tipadas, permisos declarativos, contexto gestionado, verificación, observabilidad. **Donde trabaja el agente.**\n\n`NLAH · Meta-Harness · Factory · 2026`'
    },
    {
      title: 'Agentic Engineering',
      body: 'La responsabilidad del ingeniero que dirige: aesthetics, taste, oversight, specs. El agente hace el trabajo pesado. **Tú pones el criterio.**\n\n`Karpathy · Sequoia AI Ascent · 2026`'
    },
    {
      title: 'Agents-as-a-Service',
      body: 'Vendes el **resultado** del agente, no la herramienta. El cliente configura una vez — el agente trabaja por él.\n\n`Bascuñana · mayo 2026`'
    }
  ]}
/>
