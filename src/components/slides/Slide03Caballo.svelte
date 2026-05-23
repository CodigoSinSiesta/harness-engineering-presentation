<script lang="ts">
  import SlideDidactic from '@codigosinsiesta/theme/slides/SlideDidactic.svelte';
</script>

<SlideDidactic
  eyebrow="El arnés del caballo"
  title="Por qué se llama harness."
  titleHighlight="harness"
  definition={{
    title: 'El LLM en bruto',
    body: 'Un LLM sin arnés es un **caballo desbocado** capaz de generar miles de líneas de código. Potente, pero sin dirección ni control útil.'
  }}
  analogy={{
    title: 'El ingeniero diseña el arnés',
    body: 'El arnés son las **riendas** que le pones al modelo para que el galope sea útil. El trabajo del ingeniero ya no es escribir el código — es **diseñar el arnés** que sujeta al modelo.'
  }}
  examples={{
    title: 'Las 4 riendas del harness',
    items: [
      'Contexto — qué información ve el modelo y en qué orden',
      'Herramientas — qué acciones puede ejecutar (pocas, simples, generales)',
      'Memoria — qué recuerda fuera de su ventana de contexto',
      'Validación — cómo demuestra que su trabajo es correcto'
    ]
  }}
/>
