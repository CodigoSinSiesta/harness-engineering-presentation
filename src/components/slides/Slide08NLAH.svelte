<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Paper 1 · NLAH · Tsinghua · Marzo 2026"
  title="Hacer el harness explícito para poder ablarlo."
  titleHighlight="explícito"
  columns={3}
  items={[
    {
      title: 'NLAH · SWAP',
      body: '**Lógica específica de tarea**. Se intercambia entre tareas — es lo que defines tú para tu dominio.\n\n`Contracts · Roles · Stages · Failure taxonomy`'
    },
    {
      title: 'Runtime Charter · FIXED',
      body: '**Reglas universales** compartidas entre tareas. Las "leyes físicas" del runtime: cómo se vinculan contracts, cómo persiste el state, cómo se gestionan agentes hijos.'
    },
    {
      title: 'Backend · INFRA',
      body: '**Herramientas y primitivas**. La capa de ejecución: tools, APIs, almacenamiento. El nivel que nunca cambia de forma, solo de implementación.'
    }
  ]}
/>
