<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateLineDraw } from '@/utils/animations';

  let slideElement: HTMLElement;
  let svgEl: SVGElement;

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.6);
      }, 600);
    };

    slideElement.addEventListener("slide-activated", replay);
    return () => slideElement.removeEventListener("slide-activated", replay);
  });

  const models = [
    { name: 'Opus 4.6',   delta: '+8.2', y: 60 },
    { name: 'Sonnet 4.5', delta: '+6.4', y: 130 },
    { name: 'Haiku 4.5',  delta: '+11.1', y: 200, hi: true },
    { name: 'GPT-5.4',    delta: '+5.7', y: 270 },
    { name: 'Llama 4',    delta: '+4.2', y: 340 }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 11 · Lo que cambia el cálculo</p>
      <h2 class="title">Un harness optimizado <span class="grad">se transfiere.</span></h2>
      <p class="subtitle">
        El activo reutilizable ya no es el modelo. Es el harness.
        Optimizas con uno, mejoras los otros cinco.
      </p>
    </header>

    <section class="card-glass transfer-block">
      <svg class="transfer-svg" viewBox="0 0 1000 400" bind:this={svgEl} role="img" aria-label="Un harness optimizado mejora cinco modelos distintos" data-preserve-direction>
        <!-- Harness origin -->
        <g>
          <rect x="40" y="160" width="220" height="80" rx="12" fill="rgba(34,197,94,0.18)" stroke="#22c55e" stroke-width="2.5"/>
          <text x="60" y="186" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.1em">META-HARNESS</text>
          <text x="60" y="210" font-family="Space Grotesk" font-size="18" font-weight="800" fill="#FAF9F6">Auto-optimizado</text>
          <text x="60" y="228" font-family="JetBrains Mono" font-size="11" fill="#a78bfa">entrenado sobre Opus 4.6</text>
        </g>

        <!-- Models with deltas -->
        {#each models as m, i}
          <g>
            <line
              x1="260" y1="200"
              x2="640" y2={m.y}
              stroke={m.hi ? '#22c55e' : '#60A5FA'}
              stroke-width={m.hi ? '2.5' : '1.6'}
              stroke-dasharray={m.hi ? 'none' : '5 4'}
            />
            <rect
              x="640" y={m.y - 22}
              width="180" height="44" rx="8"
              fill={m.hi ? 'rgba(34,197,94,0.22)' : 'rgba(30,58,138,0.4)'}
              stroke={m.hi ? '#22c55e' : '#60A5FA'}
              stroke-width={m.hi ? '2' : '1.5'}
            />
            <text x="660" y={m.y - 4} font-family="Space Grotesk" font-size="14" font-weight="700" fill="#FAF9F6">{m.name}</text>
            <text
              x="660" y={m.y + 14}
              font-family="JetBrains Mono" font-size="13" font-weight="800"
              fill={m.hi ? '#22c55e' : '#60A5FA'}
            >{m.delta} pts</text>

            {#if m.hi}
              <text x="830" y={m.y + 4} font-family="JetBrains Mono" font-size="10" fill="#22c55e" letter-spacing="0.1em">★ #1 GLOBAL</text>
            {/if}
          </g>
        {/each}

        <!-- Annotation -->
        <text x="450" y="40" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#60A5FA" letter-spacing="0.12em">1 ARNÉS → 5 MODELOS → TODOS MEJORAN</text>
      </svg>

      <div class="implications">
        <div class="impl">
          <span class="impl-num">1</span>
          <p><strong>Cambia la economía del producto.</strong> Invertir en el harness rinde más que esperar al próximo modelo.</p>
        </div>
        <div class="impl">
          <span class="impl-num">2</span>
          <p><strong>Reduce la dependencia del proveedor.</strong> El activo portable es la lógica del harness, no el contrato con el proveedor.</p>
        </div>
        <div class="impl">
          <span class="impl-num">3</span>
          <p><strong>Reabre el mercado para modelos pequeños.</strong> Haiku batiendo a Opus es la prueba.</p>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 55%),
      radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.13) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1200px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .grad {
    background: linear-gradient(135deg, #22c55e 0%, #60A5FA 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.84; max-width: 70ch; }

  .transfer-block { padding: var(--spacing-lg); display: grid; gap: var(--spacing-lg); }
  .transfer-svg { width: 100%; height: auto; max-height: 380px; }

  .implications {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    border-top: 1px solid rgba(96, 165, 250, 0.18);
    padding-top: var(--spacing-md);
  }
  .impl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--spacing-sm);
    align-items: start;
  }
  .impl-num {
    width: 32px; height: 32px;
    display: grid; place-items: center;
    background: rgba(96, 165, 250, 0.18);
    border: 1px solid var(--color-accent-bright);
    border-radius: 50%;
    font-family: var(--font-display);
    font-weight: 800;
    color: var(--color-electric);
  }
  .impl p { margin: 0; font-size: 0.92rem; line-height: 1.55; opacity: 0.92; }

  @media (max-width: 900px) {
    .implications { grid-template-columns: 1fr; }
    .transfer-svg { max-height: 320px; }
  }
</style>
