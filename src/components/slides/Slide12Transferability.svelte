<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateLineDraw } from '@/utils/animations';

  const models = [
    { name: 'Opus 4.6',   delta: '+8.2', y: 60,  hi: false },
    { name: 'Sonnet 4.5', delta: '+6.4', y: 130, hi: false },
    { name: 'Haiku 4.5',  delta: '+11.1',y: 200, hi: true  },
    { name: 'GPT-5.4',    delta: '+5.7', y: 270, hi: false },
    { name: 'Llama 4',    delta: '+4.2', y: 340, hi: false }
  ];

  let svgEl: SVGElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.6);
      }, 600);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>Lo que cambia el cálculo</Eyebrow>
    <h2>Un harness optimizado <span class="highlight">se transfiere.</span></h2>
    <p class="sub">El activo reutilizable ya no es el modelo. Es el harness. Optimizas con uno, mejoras los otros cinco.</p>

    <div class="card-glass transfer-block">
      <svg class="transfer-svg" viewBox="0 0 1000 400" bind:this={svgEl} role="img" aria-label="Un harness optimizado mejora cinco modelos distintos" data-preserve-direction>
        <!-- Label top -->
        <text x="500" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#60A5FA" letter-spacing="0.12em">1 ARNÉS → 5 MODELOS → TODOS MEJORAN</text>

        <!-- Harness origin -->
        <rect x="40" y="160" width="220" height="80" rx="12" fill="rgba(34,197,94,0.18)" stroke="#22c55e" stroke-width="2.5"/>
        <text x="60" y="186" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.1em">META-HARNESS</text>
        <text x="60" y="210" font-family="Space Grotesk" font-size="18" font-weight="800" fill="#FAF9F6">Auto-optimizado</text>
        <text x="60" y="228" font-family="JetBrains Mono" font-size="11" fill="#a78bfa">entrenado sobre Opus 4.6</text>

        <!-- Models with deltas -->
        {#each models as m}
          <line
            x1="260" y1="200"
            x2="640" y2={m.y}
            stroke={m.hi ? '#22c55e' : '#60A5FA'}
            stroke-width={m.hi ? '2.5' : '1.6'}
          />
          <rect
            x="640" y={m.y - 22}
            width="200" height="44" rx="8"
            fill={m.hi ? 'rgba(34,197,94,0.18)' : 'rgba(59,130,246,0.18)'}
            stroke={m.hi ? '#22c55e' : '#60A5FA'}
            stroke-width={m.hi ? '2' : '1.5'}
          />
          <text x="658" y={m.y - 4} font-family="Space Grotesk" font-size="14" font-weight="700" fill="#FAF9F6">{m.name}</text>
          <text
            x="658" y={m.y + 14}
            font-family="JetBrains Mono" font-size="13" font-weight="800"
            fill={m.hi ? '#22c55e' : '#60A5FA'}
          >{m.delta} pts</text>
          {#if m.hi}
            <text x="852" y={m.y + 4} font-family="JetBrains Mono" font-size="10" fill="#22c55e" letter-spacing="0.1em">★ #1</text>
          {/if}
        {/each}
      </svg>

      <p class="note"><strong>Cambia la economía del producto.</strong> Invertir en el harness rinde más que esperar al próximo modelo.</p>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1100px; width: 100%; }
  h2 { font-size: clamp(1.8rem, 4vw, 3rem); margin-bottom: var(--spacing-sm); }
  .sub { color: var(--color-electric); margin-bottom: var(--spacing-xl); opacity: 0.9; }
  .transfer-block { padding: var(--spacing-xl); }
  .transfer-svg { width: 100%; height: auto; display: block; }
  .note { font-size: 0.9rem; opacity: 0.8; margin-top: var(--spacing-lg); text-align: center; }
  @media (max-width: 768px) { .transfer-svg { display: none; } }
</style>
