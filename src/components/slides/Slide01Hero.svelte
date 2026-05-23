<script lang="ts">
  import SlideHero from '@codigosinsiesta/theme/slides/SlideHero.svelte';
</script>

<SlideHero
  eyebrow="Harness Engineering · Código Sin Siesta · 2026"
  title="Harness Engineering"
  titleHighlight="Harness"
  subtitle="La diferencia entre un buen agente y uno mediocre\nya no la marca el modelo — la marca el harness."
  tools={[
    { label: 'NLAH · Tsinghua' },
    { label: 'Meta-Harness · Stanford' },
    { label: 'AutoHarness · DeepMind' },
    { label: 'Marzo 2026', highlight: true },
  ]}
  author={{
    name: 'Alejandro de la Fuente',
    role: 'Tech Lead · NTT Data · GDNE',
    avatarUrl: 'https://www.gravatar.com/avatar/8461e0b8674185c1df153079e820504b?s=120',
    links: [
      { url: 'https://tellmealex.dev', label: 'tellmealex.dev' },
      { url: 'https://codigosinsiesta.github.io', label: 'codigosinsiesta.github.io' }
    ]
  }}
/>
