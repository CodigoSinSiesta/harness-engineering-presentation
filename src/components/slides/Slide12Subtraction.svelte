<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const cases = [
    {
      org: 'Vercel',
      action: 'Quitó el 80% de las tools de un agente',
      result: '→ mejores resultados',
      tag: 'TOOLS −80%',
      color: '#22c55e'
    },
    {
      org: 'Manus',
      action: 'Reescribió su harness 5 veces en 6 meses',
      result: '→ cada vez más simple',
      tag: 'REWRITES ×5',
      color: '#a78bfa'
    },
    {
      org: 'Anthropic',
      action: 'Eliminó context resets cuando Opus 4.6 dejó de necesitarlos',
      result: '→ asunción caducada, removida',
      tag: 'RESETS −100%',
      color: '#60A5FA'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 12 · La forma extraña que toma la disciplina</p>
      <h2 class="title">Es <span class="grad">un oficio de sustracción</span> tanto como de adición.</h2>
      <p class="subtitle">
        Cada componente del harness <strong>codifica una asunción</strong> sobre lo que el modelo no puede hacer solo.
        Cuando el modelo aprende a hacerlo, el componente debe morir — o pasa a estorbar.
      </p>
    </header>

    <section class="cases">
      {#each cases as c}
        <article class="card-glass case">
          <div class="case-tag" style:color={c.color} style:border-color={c.color} style:background={`${c.color}1f`}>
            {c.tag}
          </div>
          <div class="case-org">{c.org}</div>
          <p class="case-action">{c.action}</p>
          <div class="case-result">{c.result}</div>
        </article>
      {/each}
    </section>

    <section class="card-glass principle">
      <div class="principle-eyebrow">
        <span class="dot"></span>
        <span>El principio</span>
      </div>
      <p class="principle-text">
        El espacio del harness <strong>no se encoge</strong> a medida que los modelos mejoran.
        <strong>Se mueve.</strong>
      </p>
      <p class="principle-corollary">
        El trabajo maduro de harness engineering <em>no es construir estructura</em> —
        es <strong>podarla</strong> a medida que el modelo absorbe lo que antes la justificaba.
      </p>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 25% 25%, rgba(167, 139, 250, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1200px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 2.9rem); }
  .grad {
    background: linear-gradient(135deg, #a78bfa 0%, #22c55e 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.84; max-width: 80ch; line-height: 1.55; }

  .cases {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
  }
  .case {
    padding: var(--spacing-lg);
    display: grid;
    gap: var(--spacing-sm);
  }

  .case-tag {
    width: max-content;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid;
  }

  .case-org {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.6rem;
    color: var(--color-neutral-light);
  }
  .case-action {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    opacity: 0.94;
  }
  .case-result {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: #22c55e;
    margin-top: var(--spacing-xs);
  }

  .principle {
    padding: var(--spacing-lg) var(--spacing-xl);
    display: grid;
    gap: var(--spacing-sm);
    border-left: 4px solid var(--color-accent-bright);
  }
  .principle-eyebrow {
    display: flex; align-items: center; gap: var(--spacing-sm);
    font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--color-electric);
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent-bright); box-shadow: 0 0 8px rgba(59, 130, 246, 0.8); }

  .principle-text {
    margin: 0;
    font-size: clamp(1.1rem, 2.3vw, 1.5rem);
    line-height: 1.4;
  }
  .principle-corollary {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.92;
    line-height: 1.55;
  }

  @media (max-width: 900px) {
    .cases { grid-template-columns: 1fr; }
  }
</style>
