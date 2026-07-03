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
      <p class="label">Slide 10 · La sorpresa de quitar piezas</p>
      <h2 class="title">Más estructura <span class="strike">≠</span> mejor agente.</h2>
      <p class="subtitle">
        SWE-Bench Verified · GPT-5.4 · razonamiento máximo. <strong>~75% resueltos</strong> con 6 módulos activos
        — y también con LLM + herramientas y nada más. <strong>14× el cómputo</strong> para el mismo resultado.
      </p>
    </header>

    <section class="isolation-grid">
      <div class="card-glass column col-bad">
        <div class="col-head">
          <span class="col-tag tag-bad">Ensanchar caro</span>
          <h3>Lo que <em>parece</em> ayudar — pero perjudica.</h3>
        </div>

        <ul class="modules">
          <li class="mod">
            <div class="mod-name">Verificadores</div>
            <div class="mod-desc">Comprobaciones automáticas extra entre pasos.</div>
            <div class="mod-bar">
              <div class="bar-track"><div class="bar bar-neg" style="width: 8%;"></div></div>
              <span class="bar-label">SWE −0.8</span>
            </div>
            <div class="mod-bar">
              <div class="bar-track"><div class="bar bar-neg" style="width: 84%;"></div></div>
              <span class="bar-label">OS −8.4</span>
            </div>
          </li>
          <li class="mod">
            <div class="mod-name">Búsqueda multi-candidato</div>
            <div class="mod-desc">Generar varias respuestas y elegir la mejor.</div>
            <div class="mod-bar">
              <div class="bar-track"><div class="bar bar-neg" style="width: 24%;"></div></div>
              <span class="bar-label">SWE −2.4</span>
            </div>
            <div class="mod-bar">
              <div class="bar-track"><div class="bar bar-neg" style="width: 56%;"></div></div>
              <span class="bar-label">OS −5.6</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="card-glass column col-good">
        <div class="col-head">
          <span class="col-tag tag-good">Estrechar disciplinado</span>
          <h3>Lo que <em>realmente</em> mejora.</h3>
        </div>

        <ul class="modules">
          <li class="mod mod-winner">
            <div class="mod-name">Auto-evolución</div>
            <div class="mod-desc">Bucle de reintento con criterio de aceptación. Estrecho hasta que el fallo justifique ampliar.</div>
            <div class="mod-bar">
              <div class="bar-track"><div class="bar bar-pos" style="width: 48%;"></div></div>
              <span class="bar-label">SWE +4.8</span>
            </div>
            <div class="mod-bar">
              <div class="bar-track"><div class="bar bar-pos" style="width: 27%;"></div></div>
              <span class="bar-label">OS +2.7</span>
            </div>
            <div class="winner-badge">★ ÚNICO MÓDULO CONSISTENTEMENTE ÚTIL</div>
          </li>
        </ul>
      </div>
    </section>

    <p class="punchline">
      <span class="quote-mark">"</span>
      Estrechar con disciplina vence a ensanchar con dinero, siempre.
      <span class="quote-mark">"</span>
    </p>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 30% 30%, rgba(248, 113, 113, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 70%, rgba(34, 197, 94, 0.1) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1200px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .strike { color: #f87171; text-decoration: line-through; }
  .subtitle { margin: 0; opacity: 0.84; max-width: 78ch; line-height: 1.55; }

  .isolation-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
  }

  .column { padding: var(--spacing-lg); display: grid; gap: var(--spacing-md); }
  .col-bad { border-left: 4px solid #f87171; }
  .col-good { border-left: 4px solid #22c55e; }

  .col-head { display: grid; gap: var(--spacing-xs); }
  .col-head h3 { margin: 0; font-size: 1.05rem; }

  .col-tag {
    width: max-content;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid;
  }
  .tag-bad { color: #f87171; border-color: #f87171; background: rgba(248, 113, 113, 0.12); }
  .tag-good { color: #22c55e; border-color: #22c55e; background: rgba(34, 197, 94, 0.12); }

  .modules { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--spacing-md); }
  .mod {
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    background: rgba(10, 22, 40, 0.5);
    border: 1px solid rgba(96, 165, 250, 0.16);
    display: grid;
    gap: var(--spacing-xs);
  }
  .mod-winner {
    border-color: rgba(34, 197, 94, 0.5);
    box-shadow: 0 0 24px rgba(34, 197, 94, 0.15);
  }

  .mod-name { font-family: var(--font-display); font-weight: 700; font-size: 1.05rem; }
  .mod-desc { font-size: 0.88rem; opacity: 0.88; line-height: 1.5; }

  .mod-bar { display: flex; gap: var(--spacing-sm); align-items: center; margin-top: 4px; }
  .bar-track {
    flex: 1;
    height: 8px;
    background: rgba(10, 22, 40, 0.6);
    border-radius: 4px;
    overflow: hidden;
  }
  .bar { height: 100%; border-radius: 4px; transition: width 1s ease-out; }
  .bar-neg { background: linear-gradient(90deg, #f87171, #ef4444); }
  .bar-pos { background: linear-gradient(90deg, #22c55e, #16a34a); }

  .bar-label {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 700;
    min-width: 64px;
    text-align: right;
  }
  .mod-bar:has(.bar-neg) .bar-label { color: #f87171; }
  .mod-bar:has(.bar-pos) .bar-label { color: #22c55e; }

  .winner-badge {
    margin-top: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(34, 197, 94, 0.18);
    color: #22c55e;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    border-radius: 999px;
    text-align: center;
    border: 1px solid rgba(34, 197, 94, 0.5);
  }

  .punchline {
    margin: 0;
    text-align: center;
    font-size: clamp(1.1rem, 2.4vw, 1.6rem);
    font-style: italic;
    color: var(--color-neutral-light);
    opacity: 0.94;
    line-height: 1.4;
  }
  .quote-mark { color: var(--color-electric); font-family: var(--font-display); font-weight: 900; font-size: 1.6em; line-height: 0; vertical-align: -0.35em; opacity: 0.7; }

  @media (max-width: 900px) {
    .isolation-grid { grid-template-columns: 1fr; }
  }
</style>
