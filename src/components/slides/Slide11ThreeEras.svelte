<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 11 · Las tres eras</p>
      <h2 class="title">Cada era <span class="grad">absorbe</span> la anterior.</h2>
      <p class="subtitle">
        Tres disciplinas en cuatro años. Cada una contiene a la previa y añade una capa de control.
      </p>
    </header>

    <section class="card-glass eras">
      <div class="era era-3">
        <div class="era-label">2026</div>
        <div class="era-name">Harness Engineering</div>
        <div class="era-add">+ orquestación · memoria · verificación · safety</div>

        <div class="era era-2">
          <div class="era-label">2024</div>
          <div class="era-name">Context Engineering</div>
          <div class="era-add">+ retrieval · ventana · prioridad de información</div>

          <div class="era era-1">
            <div class="era-label">2022</div>
            <div class="era-name">Prompt Engineering</div>
            <div class="era-add">+ instrucción · few-shot · role-play</div>
          </div>
        </div>
      </div>
    </section>

    <p class="punchline">
      El harness engineering <strong>no reemplaza</strong> saber escribir prompts ni gestionar contexto.
      <strong>Los incluye</strong> — y añade orquestación, memoria, verificación y safety como problemas de primer orden.
    </p>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 55%),
      radial-gradient(ellipse at 50% 80%, rgba(59, 130, 246, 0.13) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1100px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .grad {
    background: linear-gradient(135deg, #a78bfa 0%, #60A5FA 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.84; max-width: 78ch; }

  .eras {
    padding: var(--spacing-2xl);
    display: grid;
    place-items: center;
  }

  .era {
    width: 100%;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    position: relative;
    display: grid;
    gap: var(--spacing-xs);
    transition: transform var(--transition-base);
  }

  .era-3 {
    background: rgba(167, 139, 250, 0.08);
    border: 2px solid rgba(167, 139, 250, 0.5);
    box-shadow: 0 0 32px rgba(167, 139, 250, 0.15);
    animation: glowOuter 4s ease-in-out infinite;
  }
  .era-2 {
    margin-top: var(--spacing-md);
    background: rgba(96, 165, 250, 0.08);
    border: 2px solid rgba(96, 165, 250, 0.5);
  }
  .era-1 {
    margin-top: var(--spacing-md);
    background: rgba(34, 197, 94, 0.06);
    border: 2px solid rgba(34, 197, 94, 0.4);
  }

  .era-label {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    color: var(--color-electric);
    text-transform: uppercase;
  }
  .era-3 .era-label { color: #a78bfa; }
  .era-2 .era-label { color: #60A5FA; }
  .era-1 .era-label { color: #22c55e; }

  .era-name {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(1.3rem, 3vw, 2rem);
    color: var(--color-neutral-light);
  }
  .era-add {
    font-family: var(--font-mono);
    font-size: 0.92rem;
    color: var(--color-electric);
    opacity: 0.85;
    line-height: 1.5;
  }

  .punchline {
    margin: 0;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.55;
    opacity: 0.92;
    max-width: 80ch;
    justify-self: center;
  }

  @keyframes glowOuter {
    0%, 100% { box-shadow: 0 0 32px rgba(167, 139, 250, 0.15); }
    50% { box-shadow: 0 0 48px rgba(167, 139, 250, 0.3); }
  }

  @media (max-width: 768px) {
    .eras { padding: var(--spacing-md); }
    .era { padding: var(--spacing-md); }
  }
</style>
