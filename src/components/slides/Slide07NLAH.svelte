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
      <p class="label">Slide 7 · Paper 1 · NLAH · Tsinghua · Marzo 2026</p>
      <h2 class="title">Hacer el harness <span class="grad">explícito</span> para poder ablararlo.</h2>
      <p class="subtitle">
        Pan et al. proponen escribir la lógica de control del agente en
        <strong>lenguaje natural estructurado</strong>, separada en tres capas con responsabilidades distintas.
      </p>
    </header>

    <section class="layers">
      <div class="layer layer-swap">
        <div class="layer-head">
          <span class="layer-tag tag-swap">SWAP</span>
          <h3>NLAH</h3>
          <span class="layer-sub">Lógica específica de tarea</span>
        </div>
        <ul class="layer-items">
          <li><code>Contracts</code></li>
          <li><code>Roles</code></li>
          <li><code>Stages</code></li>
          <li><code>Failure taxonomy</code></li>
        </ul>
        <p class="layer-why">
          Se intercambia entre tareas. Es lo que defines tú para tu dominio.
        </p>
      </div>

      <div class="layer layer-fixed">
        <div class="layer-head">
          <span class="layer-tag tag-fixed">FIXED</span>
          <h3>Runtime Charter</h3>
          <span class="layer-sub">Reglas universales</span>
        </div>
        <ul class="layer-items">
          <li>cómo se vinculan los <code>contracts</code></li>
          <li>cómo persiste el <code>state</code></li>
          <li>cómo se gestionan los agentes hijos</li>
        </ul>
        <p class="layer-why">
          Compartido entre tareas. Las "leyes físicas" del runtime.
        </p>
      </div>

      <div class="layer layer-base">
        <div class="layer-head">
          <span class="layer-tag tag-base">INFRA</span>
          <h3>Backend</h3>
          <span class="layer-sub">Herramientas y primitivas</span>
        </div>
        <ul class="layer-items">
          <li>herramientas de terminal</li>
          <li>interfaz multi-agente</li>
          <li>primitivas <code>spawn &amp; wait</code></li>
        </ul>
        <p class="layer-why">
          La infraestructura de bajo nivel. Igual para todos los arneses.
        </p>
      </div>
    </section>

    <section class="card-glass insight">
      <div class="insight-eyebrow">
        <span class="dot"></span>
        <span>Lo que esto desbloquea</span>
      </div>
      <div class="insight-grid">
        <div>
          <h4>Ablación limpia, por fin.</h4>
          <p>
            Fijas el Charter, intercambias el NLAH → testeas <em>diseño del harness</em>.
            Fijas el NLAH, cambias el Charter → testeas <em>política del runtime</em>.
          </p>
        </div>
        <div>
          <h4>Dos mecanismos lo sostienen.</h4>
          <p>
            <strong>Execution Contracts</strong> (firmas de función para agentes) +
            <strong>File-Backed State</strong> (memoria con la ruta del fichero como dirección).
          </p>
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
      radial-gradient(ellipse at 80% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 20% 75%, rgba(59, 130, 246, 0.13) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1180px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 2.9rem); }
  .grad {
    background: linear-gradient(135deg, #22c55e 0%, #60A5FA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.82; max-width: 78ch; }

  .layers { display: grid; gap: var(--spacing-md); }
  .layer {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) 2fr 1.5fr;
    gap: var(--spacing-lg);
    align-items: center;
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-md);
    border: 1px solid rgba(96, 165, 250, 0.22);
    background: rgba(10, 22, 40, 0.45);
    backdrop-filter: blur(6px);
  }
  .layer-swap { border-left: 4px solid #22c55e; }
  .layer-fixed { border-left: 4px solid #fbbf24; }
  .layer-base { border-left: 4px solid #60A5FA; }

  .layer-head { display: grid; gap: var(--spacing-xs); }
  .layer-head h3 { margin: 0; font-size: 1.6rem; line-height: 1; }
  .layer-sub { font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-electric); opacity: 0.85; }

  .layer-tag {
    width: max-content;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 999px;
    letter-spacing: 0.12em;
  }
  .tag-swap { background: rgba(34, 197, 94, 0.15); color: #22c55e; border: 1px solid #22c55e; }
  .tag-fixed { background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid #fbbf24; }
  .tag-base { background: rgba(96, 165, 250, 0.15); color: #60A5FA; border: 1px solid #60A5FA; }

  .layer-items { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--spacing-xs); font-size: 0.92rem; }
  .layer-items li::before { content: '— '; color: var(--color-electric); }
  .layer-items code { font-family: var(--font-mono); color: var(--color-neutral-light); background: rgba(96, 165, 250, 0.12); padding: 1px 6px; border-radius: 4px; font-size: 0.85rem; }

  .layer-why { margin: 0; font-size: 0.88rem; opacity: 0.84; line-height: 1.5; }

  .insight { padding: var(--spacing-lg); display: grid; gap: var(--spacing-md); }
  .insight-eyebrow {
    display: flex; align-items: center; gap: var(--spacing-sm);
    font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--color-electric);
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent-bright); box-shadow: 0 0 8px rgba(59, 130, 246, 0.8); }
  .insight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
  .insight-grid h4 { margin: 0 0 var(--spacing-xs); font-size: 1.05rem; color: var(--color-neutral-light); }
  .insight-grid p { margin: 0; font-size: 0.92rem; opacity: 0.88; line-height: 1.55; }

  @media (max-width: 900px) {
    .layer { grid-template-columns: 1fr; }
    .insight-grid { grid-template-columns: 1fr; }
  }
</style>
