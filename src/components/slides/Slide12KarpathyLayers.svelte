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
      <p class="label">Slide 12 · El mapa completo</p>
      <h2 class="title">El harness es el sustrato. <span class="grad">¿Quién va encima?</span></h2>
      <p class="subtitle">
        Karpathy (Sequoia AI Ascent, 2026) separó lo que en 2025 vivía bajo la misma etiqueta. Tres capas, tres responsabilidades distintas.
      </p>
    </header>

    <div class="stack">
      <div class="layer layer-top">
        <div class="layer-badge">negocio</div>
        <div class="layer-body">
          <div class="layer-name">Agents-as-a-Service</div>
          <div class="layer-desc">Vendes el <strong>resultado</strong> del agente, no la herramienta. El cliente configura una vez — el agente trabaja por él.</div>
        </div>
        <div class="layer-src">Bascuñana · mayo 2026</div>
      </div>

      <div class="layer layer-mid">
        <div class="layer-badge">disciplina</div>
        <div class="layer-body">
          <div class="layer-name">Agentic Engineering</div>
          <div class="layer-desc">La responsabilidad del ingeniero que dirige: aesthetics, taste, oversight, specs. El agente hace el trabajo pesado. <strong>Tú pones el criterio.</strong></div>
        </div>
        <div class="layer-src">Karpathy · Sequoia AI Ascent · abril 2026</div>
      </div>

      <div class="layer layer-bot">
        <div class="layer-badge here">← estamos aquí</div>
        <div class="layer-body">
          <div class="layer-name">Harness Engineering</div>
          <div class="layer-desc">Tools tipadas, permisos declarativos, contexto gestionado, verificación, observabilidad. <strong>Dónde trabaja el agente.</strong></div>
        </div>
        <div class="layer-src">NLAH · Meta-Harness · Factory · 2026</div>
      </div>
    </div>

    <blockquote class="karpathy-quote">
      <span class="qi">"</span>
      You can outsource your thinking but you can't outsource your understanding.
      <span class="qa">"</span>
      <cite>— Andrej Karpathy</cite>
    </blockquote>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(167, 139, 250, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1000px, 94vw); display: grid; gap: var(--spacing-lg); }

  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; }
  .grad {
    background: linear-gradient(135deg, #a78bfa 0%, #60A5FA 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.8; max-width: 72ch; }

  .stack { display: flex; flex-direction: column; gap: 0; }

  .layer {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
    padding: var(--spacing-xl) var(--spacing-2xl);
    border-left: 3px solid transparent;
    position: relative;
    transition: background var(--transition-fast);
  }
  .layer:not(:last-child) {
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .layer:hover { background: rgba(255,255,255,0.02); }

  .layer-top {
    background: rgba(167, 139, 250, 0.06);
    border-left-color: rgba(167, 139, 250, 0.5);
    border-radius: var(--radius-md) var(--radius-md) 0 0;
  }
  .layer-mid {
    background: rgba(96, 165, 250, 0.06);
    border-left-color: rgba(96, 165, 250, 0.5);
  }
  .layer-bot {
    background: rgba(34, 197, 94, 0.06);
    border-left-color: rgba(34, 197, 94, 0.5);
    border-radius: 0 0 var(--radius-md) var(--radius-md);
  }

  .layer-badge {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: var(--radius-sm);
    flex-shrink: 0;
    min-width: 90px;
    text-align: center;
  }
  .layer-top .layer-badge { background: rgba(167, 139, 250, 0.15); color: #c4b5fd; }
  .layer-mid .layer-badge { background: rgba(96, 165, 250, 0.15); color: #93c5fd; }
  .layer-bot .layer-badge { background: rgba(34, 197, 94, 0.15); color: #86efac; }
  .here { background: rgba(34, 197, 94, 0.25) !important; border: 1px solid rgba(34, 197, 94, 0.5); }

  .layer-body { flex: 1; display: flex; flex-direction: column; gap: 4px; }

  .layer-name {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    color: var(--color-neutral-light);
  }
  .layer-desc {
    font-size: 0.875rem;
    color: var(--color-neutral-light);
    opacity: 0.65;
    line-height: 1.55;
  }
  .layer-desc strong { color: var(--color-neutral-light); opacity: 1; }

  .layer-src {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-neutral-light);
    opacity: 0.3;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .karpathy-quote {
    margin: 0;
    padding: var(--spacing-lg) var(--spacing-2xl);
    background: rgba(167, 139, 250, 0.07);
    border: 1px solid rgba(167, 139, 250, 0.2);
    border-radius: var(--radius-md);
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    font-style: italic;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.6;
    text-align: center;
    position: relative;
  }
  .qi, .qa { font-size: 2rem; color: #a78bfa; opacity: 0.5; font-style: normal; line-height: 0; vertical-align: -0.3em; }
  .qi { margin-right: 4px; }
  .qa { margin-left: 4px; }
  cite { display: block; margin-top: var(--spacing-sm); font-size: 0.78rem; font-style: normal; font-family: var(--font-mono); letter-spacing: 0.08em; color: #a78bfa; opacity: 0.7; }

  @media (max-width: 768px) {
    .layer { flex-direction: column; align-items: flex-start; gap: var(--spacing-sm); padding: var(--spacing-lg); }
    .layer-src { display: none; }
  }
</style>
