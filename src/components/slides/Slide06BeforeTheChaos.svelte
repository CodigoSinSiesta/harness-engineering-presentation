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
      <p class="label">Slide 6 · Antes de los papers</p>
      <h2 class="title">Sin representación, no hay ablación.</h2>
      <p class="subtitle">
        Dos sistemas que <em>nominalmente</em> diferían en una decisión de diseño,
        en realidad diferían simultáneamente en prompts, herramientas, verificadores y semántica de estado.
        Imposible aislar qué cambio causa qué efecto.
      </p>
    </header>

    <section class="card-glass surface ab-block" aria-label="Comparativa Sistema A vs Sistema B">
      <div class="ab-grid">
        <div class="ab-col">
          <div class="ab-head ab-head-a">Sistema A</div>
          <ul class="ab-list">
            <li>prompts</li>
            <li>herramientas</li>
            <li>verificadores</li>
            <li>semántica de estado</li>
          </ul>
        </div>
        <div class="ab-vs">≠</div>
        <div class="ab-col">
          <div class="ab-head ab-head-b">Sistema B</div>
          <ul class="ab-list">
            <li>prompts</li>
            <li>herramientas</li>
            <li>verificadores</li>
            <li>semántica de estado</li>
          </ul>
        </div>
      </div>
      <p class="ab-caption">
        Cuatro variables cambiando a la vez. Atribuir el delta a uno solo
        es estadística — no es ingeniería.
      </p>
    </section>

    <section class="failure-grid">
      <article class="failure card-glass">
        <div class="f-head">
          <span class="f-tag f-tag-red">Modo de fallo 1</span>
          <h3>One-Shotting</h3>
        </div>
        <p>El agente intenta resolver toda la tarea en un único disparo y
        <strong>agota el contexto</strong> antes de cerrar el último paso.</p>
        <code class="f-trace">parse → plan → write → test → fix → 💥 context exhausted</code>
      </article>

      <article class="failure card-glass">
        <div class="f-head">
          <span class="f-tag f-tag-amber">Modo de fallo 2</span>
          <h3>Premature Completion</h3>
        </div>
        <p>Una sesión posterior ve progreso parcial (<code>3/6</code>) y
        <strong>declara victoria</strong> sin verificar el resto.</p>
        <code class="f-trace">load_state(3/6) → "looks done ✓" — y nunca lo estuvo.</code>
      </article>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 25% 75%, rgba(245, 101, 101, 0.07) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 25%, rgba(59, 130, 246, 0.12) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1180px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .subtitle { margin: 0; opacity: 0.82; max-width: 80ch; }

  .surface { padding: var(--spacing-lg); display: grid; gap: var(--spacing-md); }

  .ab-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--spacing-lg);
    align-items: stretch;
  }
  .ab-col {
    border: 1px solid rgba(96, 165, 250, 0.22);
    border-radius: var(--radius-md);
    background: rgba(10, 22, 40, 0.4);
    padding: var(--spacing-md) var(--spacing-lg);
  }
  .ab-head {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--spacing-md);
  }
  .ab-head-a { color: #60A5FA; }
  .ab-head-b { color: #a78bfa; }

  .ab-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--spacing-xs);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.86;
  }
  .ab-list li::before { content: '· '; color: var(--color-electric); margin-right: 4px; }

  .ab-vs {
    display: grid;
    place-items: center;
    font-size: 2.2rem;
    color: #f87171;
    font-weight: 800;
  }

  .ab-caption {
    margin: 0;
    text-align: center;
    font-size: 0.92rem;
    opacity: 0.85;
    border-top: 1px solid rgba(96, 165, 250, 0.18);
    padding-top: var(--spacing-md);
  }

  .failure-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }
  .failure { padding: var(--spacing-lg); display: grid; gap: var(--spacing-sm); }
  .f-head { display: grid; gap: var(--spacing-xs); }
  .f-head h3 { margin: 0; font-size: 1.3rem; }

  .f-tag {
    width: max-content;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid;
  }
  .f-tag-red { color: #f87171; border-color: #f87171; background: rgba(248, 113, 113, 0.1); }
  .f-tag-amber { color: #fbbf24; border-color: #fbbf24; background: rgba(251, 191, 36, 0.1); }

  .failure p { margin: 0; font-size: 0.95rem; line-height: 1.55; }
  .f-trace {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--color-electric);
    background: rgba(10, 22, 40, 0.6);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    border-left: 3px solid var(--color-accent-bright);
    overflow-x: auto;
  }

  @media (max-width: 900px) {
    .ab-grid { grid-template-columns: 1fr; }
    .ab-vs { transform: rotate(90deg); }
    .failure-grid { grid-template-columns: 1fr; }
  }
</style>
