<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateCounter } from '@/utils/animations';

  let slideElement: HTMLElement;
  let counterEl: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        if (counterEl) animateCounter(counterEl, 6, 1.6);
      }, 700);
    };

    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 2 · El hallazgo</p>
      <h2 class="title">Mismo modelo. Mismo benchmark.</h2>
    </header>

    <div class="big-number-block">
      <span class="ghost">×</span>
      <span class="counter" bind:this={counterEl}>0</span>
      <span class="ghost">×</span>
    </div>
    <p class="subtitle"><strong>de diferencia en rendimiento.</strong></p>

    <div class="evidence-grid">
      <article class="card-glass evidence-card">
        <span class="src">Stanford · 2026</span>
        <p>
          La lógica de orquestación que envuelve al LLM produce hoy <strong>más variación de
          rendimiento que el propio modelo</strong>.
        </p>
      </article>

      <article class="card-glass evidence-card">
        <span class="src">LangChain · TerminalBench 2.0</span>
        <p>
          Modificando solo la infraestructura del harness, su coding agent saltó del
          <strong>puesto 30+ al puesto 5</strong>.
        </p>
      </article>
    </div>
  </div>

  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
</div>

<style>
  .swiper-slide {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 18% 75%, rgba(59, 130, 246, 0.16) 0%, transparent 58%),
      radial-gradient(ellipse at 82% 20%, rgba(30, 58, 138, 0.2) 0%, transparent 55%);
    z-index: 0;
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1100px, 92vw);
    display: grid;
    gap: var(--spacing-xl);
    text-align: center;
  }

  .slide-header { display: grid; gap: var(--spacing-sm); justify-items: center; }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }

  .big-number-block {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: var(--spacing-md);
    font-family: var(--font-display);
    font-weight: 900;
    line-height: 1;
    margin: 0 auto;
  }

  .counter {
    font-size: clamp(7rem, 22vw, 16rem);
    background: linear-gradient(180deg, #f0abfc 0%, #60a5fa 60%, #1e3a8a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 80px rgba(96, 165, 250, 0.45);
    font-variant-numeric: tabular-nums;
  }

  .ghost {
    font-size: clamp(3rem, 10vw, 7rem);
    color: var(--color-electric);
    opacity: 0.55;
  }

  .subtitle {
    margin: 0;
    font-size: clamp(1.2rem, 3vw, 2rem);
    color: var(--color-neutral-light);
    opacity: 0.92;
  }

  .evidence-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-md);
  }

  .evidence-card { padding: var(--spacing-lg); text-align: left; }
  .src {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    color: var(--color-electric);
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: var(--spacing-xs);
  }
  .evidence-card p { margin: 0; font-size: 0.98rem; line-height: 1.55; }

  .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .orb-1 { width: 380px; height: 380px; background: rgba(167, 139, 250, 0.1); top: -80px; left: -80px; }
  .orb-2 { width: 460px; height: 460px; background: rgba(59, 130, 246, 0.09); bottom: -120px; right: -120px; }

  @media (max-width: 768px) {
    .evidence-grid { grid-template-columns: 1fr; }
  }
</style>
