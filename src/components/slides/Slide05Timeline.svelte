<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const milestones = [
    {
      date: 'Nov 2025',
      who: 'Anthropic',
      title: 'Effective harnesses for long-running agents',
      gist: 'Initializer + coding agent + claude-progress.txt. Primer uso documentado del término.',
      color: '#a78bfa'
    },
    {
      date: '5 Feb 2026',
      who: 'Mitchell Hashimoto',
      title: 'Acuña "Harness Engineering"',
      gist: 'Cada error del agente se convierte en una regla de AGENTS.md. Le pone nombre.',
      color: '#22c55e',
      pinned: true
    },
    {
      date: '11 Feb 2026',
      who: 'OpenAI',
      title: 'Harness Engineering con Codex',
      gist: '7 ingenieros · 1M líneas · 0 escritas a mano. El trabajo es diseñar el arnés.',
      color: '#60A5FA'
    },
    {
      date: 'Abr 2026',
      who: 'Martin Fowler',
      title: 'Taxonomía Guides + Sensors',
      gist: 'Computacionales vs inferenciales. La industria adopta el patrón Fowler.',
      color: '#fbbf24'
    },
    {
      date: 'Abr 2026',
      who: 'Andrej Karpathy',
      title: 'Sequoia AI Ascent — agentic engineering',
      gist: 'Vibe coding eleva el suelo; agentic engineering preserva el techo. El harness es el sustrato.',
      color: '#f472b6'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 5 · Convergencia 2025-2026</p>
      <h2 class="title">Cinco actores. Cinco rutas. <span class="grad">Una misma conclusión.</span></h2>
      <p class="subtitle">
        El término <em>Harness Engineering</em> emerge en cinco meses sin coordinación entre quienes lo nombran.
        Hashimoto le pone la palabra el 5 de febrero; el resto converge antes y después con la misma sustancia.
      </p>
    </header>

    <section class="timeline">
      <div class="rail" aria-hidden="true"></div>
      {#each milestones as m, i}
        <article class="milestone" class:milestone-pinned={m.pinned}>
          <div class="node" style:background={m.color} style:box-shadow={`0 0 14px ${m.color}66`}>
            <span class="node-idx">{i + 1}</span>
          </div>
          <div class="card-glass milestone-card">
            <div class="m-date" style:color={m.color}>{m.date}</div>
            <div class="m-who">{m.who}</div>
            <div class="m-title">{m.title}</div>
            <p class="m-gist">{m.gist}</p>
            {#if m.pinned}
              <div class="pin">★ Acuña el término</div>
            {/if}
          </div>
        </article>
      {/each}
    </section>

    <p class="punchline">
      <strong>Diferentes caminos, misma conclusión:</strong>
      lo que rodea al modelo importa más que el modelo. Cuando varios actores independientes
      llegan a la misma idea en cinco meses, no es una moda — es un cambio de fase.
    </p>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 70%, rgba(96, 165, 250, 0.12) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1240px, 94vw); display: grid; gap: var(--spacing-lg); }

  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.8rem, 4.4vw, 2.8rem); line-height: 1.18; }
  .grad {
    background: linear-gradient(135deg, #a78bfa 0%, #60A5FA 60%, #22c55e 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.84; max-width: 88ch; line-height: 1.55; }
  .subtitle em { font-style: italic; color: var(--color-electric); opacity: 0.95; }

  .timeline {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--spacing-md);
    padding: var(--spacing-md) 0 var(--spacing-sm);
  }

  .rail {
    position: absolute;
    top: 18px;
    left: 4%;
    right: 4%;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(167, 139, 250, 0.4) 0%,
      rgba(34, 197, 94, 0.45) 25%,
      rgba(96, 165, 250, 0.5) 50%,
      rgba(251, 191, 36, 0.45) 75%,
      rgba(244, 114, 182, 0.45) 100%
    );
    z-index: 0;
  }

  .milestone {
    position: relative;
    display: grid;
    gap: var(--spacing-sm);
    justify-items: center;
    z-index: 1;
  }

  .node {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: rgba(15, 23, 42, 0.9);
    font-family: var(--font-mono);
    font-weight: 800;
    font-size: 0.9rem;
    border: 2px solid rgba(15, 23, 42, 0.85);
  }

  .node-idx { line-height: 1; }

  .milestone-card {
    width: 100%;
    padding: var(--spacing-md);
    display: grid;
    gap: 4px;
    text-align: left;
  }

  .milestone-pinned .milestone-card {
    border-color: rgba(34, 197, 94, 0.45);
    box-shadow: 0 0 24px rgba(34, 197, 94, 0.18);
  }

  .m-date {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .m-who {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1rem;
    color: var(--color-neutral-light);
  }

  .m-title {
    font-size: 0.86rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    opacity: 0.95;
    line-height: 1.35;
  }

  .m-gist {
    margin: 4px 0 0;
    font-size: 0.78rem;
    line-height: 1.5;
    opacity: 0.78;
  }

  .pin {
    margin-top: var(--spacing-xs);
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #22c55e;
    border-top: 1px solid rgba(34, 197, 94, 0.25);
    padding-top: var(--spacing-xs);
  }

  .punchline {
    margin: 0;
    font-size: clamp(0.92rem, 1.6vw, 1.05rem);
    opacity: 0.9;
    line-height: 1.55;
    max-width: 92ch;
  }
  .punchline strong { color: var(--color-electric); }

  @media (max-width: 1100px) {
    .timeline { grid-template-columns: repeat(3, 1fr); }
    .rail { display: none; }
  }

  @media (max-width: 768px) {
    .timeline { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 480px) {
    .timeline { grid-template-columns: 1fr; gap: var(--spacing-sm); }
    .milestone { grid-template-columns: 38px 1fr; justify-items: start; align-items: start; gap: var(--spacing-sm); }
    .milestone-card { text-align: left; }
    .title { font-size: clamp(1.4rem, 5.5vw, 1.9rem); }
    .subtitle { font-size: 0.86rem; }
    .punchline { font-size: 0.84rem; }
  }
</style>
