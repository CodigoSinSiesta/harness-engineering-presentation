<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateCounter } from '@/utils/animations';

  let slideElement: HTMLElement;
  let beforeEl: HTMLElement;
  let afterEl: HTMLElement;
  let deltaEl: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        if (beforeEl) animateCounter(beforeEl, 30, 1.5);
        if (afterEl) animateCounter(afterEl, 47, 1.8);
        if (deltaEl) animateCounter(deltaEl, 17, 1.5);
      }, 600);
    };

    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 8 · El experimento de migración · OS-Symphony → NLAH</p>
      <h2 class="title">Misma lógica. Mismo modelo. <span class="grad">+16.8 pts.</span></h2>
      <p class="subtitle">
        Tomas un harness escrito en código nativo. Lo migras a representación NLAH.
        No tocas el algoritmo. No cambias el modelo. Solo cambias <em>cómo se expresa</em>.
      </p>
    </header>

    <section class="card-glass migration">
      <div class="migration-row">
        <div class="side side-before">
          <span class="side-tag">Antes · Arnés en código</span>
          <span class="side-name">OS-Symphony</span>
          <pre class="snippet">screenshot()
find_element()
click()
verify()
<span class="repair">// bucle de reparación ↺</span></pre>
          <div class="side-stats">
            <div class="stat"><span class="stat-num"><span bind:this={beforeEl}>0</span>.4%</span><span class="stat-label">precisión</span></div>
            <div class="stat"><span class="stat-num">361'</span><span class="stat-label">runtime</span></div>
            <div class="stat"><span class="stat-num">1,200</span><span class="stat-label">llamadas LLM</span></div>
          </div>
        </div>

        <div class="arrow-block">
          <svg viewBox="0 0 100 80" class="arrow-svg" aria-hidden="true">
            <line x1="10" y1="40" x2="86" y2="40" stroke="#60A5FA" stroke-width="2.5"/>
            <polygon points="86,40 76,33 76,47" fill="#60A5FA"/>
          </svg>
          <span class="arrow-label">Misma estrategia<br/>Distinta representación</span>
        </div>

        <div class="side side-after">
          <span class="side-tag side-tag-after">Después · Arnés en lenguaje natural</span>
          <span class="side-name">NLAH</span>
          <pre class="snippet">Task Definition ✓
  objective &amp; scope
  completion contract
State Schema ✓
  file-backed runtime state
  artifact paths
Completion Criteria ✓
  artifact-backed verification</pre>
          <div class="side-stats">
            <div class="stat stat-good"><span class="stat-num"><span bind:this={afterEl}>0</span>.2%</span><span class="stat-label">precisión</span></div>
            <div class="stat stat-good"><span class="stat-num">141'</span><span class="stat-label">runtime</span></div>
            <div class="stat stat-good"><span class="stat-num">34</span><span class="stat-label">llamadas LLM</span></div>
          </div>
        </div>
      </div>

      <div class="delta-bar">
        <div class="delta-cell">
          <span class="delta-icon">▲</span>
          <span class="delta-num">+<span bind:this={deltaEl}>0</span> pts</span>
          <span class="delta-label">precisión (representación pura)</span>
        </div>
        <div class="delta-cell">
          <span class="delta-icon">▼</span>
          <span class="delta-num">−61%</span>
          <span class="delta-label">runtime</span>
        </div>
        <div class="delta-cell">
          <span class="delta-icon">▼</span>
          <span class="delta-num">−97%</span>
          <span class="delta-label">llamadas LLM</span>
        </div>
      </div>
    </section>

    <p class="takeaway">
      <strong>La representación es decisión arquitectónica, no estilística.</strong>
      Cómo escribes el harness vale tanto como qué hace.
    </p>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 30% 30%, rgba(248, 113, 113, 0.06) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 70%, rgba(34, 197, 94, 0.1) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1200px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.4vw, 2.8rem); }
  .grad {
    background: linear-gradient(135deg, #22c55e 0%, #60A5FA 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.82; max-width: 78ch; }

  .migration { padding: var(--spacing-lg); display: grid; gap: var(--spacing-lg); }

  .migration-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--spacing-lg);
    align-items: stretch;
  }

  .side {
    display: grid;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border: 1px solid rgba(96, 165, 250, 0.18);
    background: rgba(10, 22, 40, 0.5);
  }
  .side-before { border-color: rgba(248, 113, 113, 0.4); }
  .side-after { border-color: rgba(34, 197, 94, 0.4); }

  .side-tag {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #f87171;
  }
  .side-tag-after { color: #22c55e; }

  .side-name {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--color-neutral-light);
  }

  .snippet {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    background: rgba(10, 22, 40, 0.7);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    border-left: 3px solid var(--color-accent-bright);
    white-space: pre;
    overflow-x: auto;
    color: var(--color-electric);
    line-height: 1.5;
  }
  .repair { color: #f87171; }

  .side-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xs);
  }
  .stat {
    display: grid;
    text-align: center;
    padding: var(--spacing-sm);
    background: rgba(248, 113, 113, 0.1);
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: var(--radius-sm);
  }
  .stat-good {
    background: rgba(34, 197, 94, 0.1);
    border-color: rgba(34, 197, 94, 0.3);
  }
  .stat-num {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.15rem;
    color: var(--color-neutral-light);
    font-variant-numeric: tabular-nums;
  }
  .stat-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.85;
    margin-top: 2px;
  }

  .arrow-block {
    display: grid;
    place-items: center;
    gap: var(--spacing-xs);
    align-self: center;
  }
  .arrow-svg { width: 80px; height: 64px; }
  .arrow-label {
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-electric);
    line-height: 1.4;
    max-width: 130px;
  }

  .delta-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(96, 165, 250, 0.2);
  }
  .delta-cell {
    display: grid;
    place-items: center;
    gap: 2px;
    text-align: center;
  }
  .delta-icon { color: #22c55e; font-size: 1.2rem; }
  .delta-num {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    color: #22c55e;
    font-variant-numeric: tabular-nums;
  }
  .delta-label {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.86;
  }

  .takeaway {
    margin: 0;
    text-align: center;
    font-size: 1.05rem;
    color: var(--color-neutral-light);
    opacity: 0.96;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .migration-row { grid-template-columns: 1fr; }
    .arrow-block { transform: rotate(90deg); }
    .delta-bar { grid-template-columns: 1fr; }
  }
</style>
