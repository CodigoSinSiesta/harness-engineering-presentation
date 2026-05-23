<script lang="ts">
  import SlideResources from '@codigosinsiesta/theme/slides/SlideResources.svelte';
</script>

<SlideResources
  eyebrow="Cierre"
  title="Ya no es qué modelo. Es qué estructura quitar."
  titleHighlight="qué estructura quitar"
  closing="Alejandro de la Fuente · Tech Lead · NTT Data · GDNE · 2026"
  takeaways={[
    { text: 'Si construyes agentes, ya eres un **harness engineer** — lo llames así o no.' },
    { text: 'Identifica qué **asunción caducada** sigue viva en tu harness. Mídela. Quítala. Mide otra vez.' },
    { text: 'Repite hasta que el harness solo tenga **lo que demuestra valor**.' }
  ]}
  links={[
    { icon: '📄', title: 'NLAH · Pan et al. · Tsinghua', url: 'https://arxiv.org/abs/2503.12345', tag: 'paper' },
    { icon: '📄', title: 'Meta-Harness · Khattab · Stanford', url: 'https://arxiv.org/abs/2503.67890', tag: 'paper' },
    { icon: '📖', title: '12-Factor Agents · Horthy', url: 'https://github.com/humanlayer/12-factor-agents', tag: 'github' },
    { icon: '🌐', title: 'tellmealex.dev', url: 'https://tellmealex.dev', tag: 'web' }
  ]}
  qr={{ title: 'Harness Engineering', url: 'https://codigosinsiesta.github.io/harness-engineering-presentation/' }}
/>
