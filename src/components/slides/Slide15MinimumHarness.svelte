<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Cómo se ve un arnés mínimo"
  title="Lo que escribes el lunes."
  titleHighlight="el lunes"
  columns={2}
  items={[
    {
      title: 'AGENTS.md — Punto de entrada',
      body: 'Reglas, mapa del repo, convenciones. **Lo primero que cada agente lee** antes de empezar a trabajar. La constitución del harness.'
    },
    {
      title: 'init.sh — Gate de pre-trabajo',
      body: '**Verifica entorno y tests** antes de dejar trabajar. Si falla → para. El gate humano que separa escritura de implementación.'
    },
    {
      title: 'specs/<feature>/ — Contexto aislado',
      body: '`requirements · design · tasks` — Cada agente recibe **solo lo que necesita** para su rol. Previene el teléfono descompuesto entre agentes.'
    },
    {
      title: 'progress/ — Memoria compartida',
      body: 'Los subagentes escriben aquí — **anti teléfono descompuesto**. El orquestador lee el estado real, no inferencias.'
    },
    {
      title: '.claude/agents/ — Roles del arnés',
      body: '`leader · spec-author · implementer · reviewer` — **Cuatro contratos en `.md`**. Cada rol sabe exactamente qué debe hacer y qué no.'
    }
  ]}
/>
