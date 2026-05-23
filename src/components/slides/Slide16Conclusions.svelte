<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Conclusiones"
  title="Cinco hallazgos que reformulan el campo."
  titleHighlight="reformulan"
  columns={2}
  items={[
    {
      title: '01 · Cambio de paradigma, no optimización',
      body: 'La pregunta operativa cambia: de "qué modelo elijo" a **"qué estructura quito"**. Invierte el reflejo de añadir verificadores y multi-candidate.'
    },
    {
      title: '02 · El harness es el activo de primer nivel',
      body: 'Si un harness mejora 5 modelos sin retoque, vale más que cualquier modelo individual. **Cambia la economía del producto** y reduce la dependencia del proveedor.'
    },
    {
      title: '03 · La representación es decisión arquitectónica',
      body: 'El +16.8 pts de NLAH solo por cambiar de código a lenguaje natural estructurado implica que **la elección de DSL es un parámetro de rendimiento**, no estilístico.'
    },
    {
      title: '04 · La verificación naive es trampa cara',
      body: 'Añadir verificadores y búsqueda multi-candidato **empeora el rendimiento** mientras dispara el coste. Solo ayuda consistentemente **estrechar el loop** del propio agente.'
    },
    {
      title: '05 · La disciplina es de sustracción',
      body: 'Vercel −80% herramientas. Manus 5 reescrituras. Anthropic eliminando reinicios. **El harness se mantiene vivo podándolo**, no engordándolo.'
    }
  ]}
/>
