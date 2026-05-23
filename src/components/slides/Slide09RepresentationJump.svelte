<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateCounter } from '@/utils/animations';

  let beforeEl: HTMLElement;
  let afterEl: HTMLElement;
  let deltaEl: HTMLElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (beforeEl) animateCounter(beforeEl, 30, 1.5);
        if (afterEl) animateCounter(afterEl, 47, 1.8);
        if (deltaEl) animateCounter(deltaEl, 17, 1.5);
      }, 600);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>El experimento de migración · OS-Symphony → NLAH</Eyebrow>
    <h2>Misma lógica. Mismo modelo. <span class="highlight">+16.8 pts.</span></h2>
    <p class="lead">Tomas un harness escrito en código nativo. Lo migras a representación NLAH. No tocas el algoritmo. No cambias el modelo. Solo cambias <em>cómo se expresa</em>.</p>

    <div class="compare-row">
      <div class="side card-glass">
        <div class="tag">Antes · Arnés en código</div>
        <div class="name">OS-Symphony</div>
        <div class="stats-row">
          <div class="stat"><span class="num"><span bind:this={beforeEl}>0</span>.4%</span><span class="lbl">precisión</span></div>
          <div class="stat"><span class="num">361'</span><span class="lbl">runtime</span></div>
          <div class="stat"><span class="num">1,200</span><span class="lbl">llamadas LLM</span></div>
        </div>
      </div>

      <div class="arrow">→</div>

      <div class="side card-glass side-after">
        <div class="tag">Después · Representación NLAH</div>
        <div class="name">OS-Symphony NLAH</div>
        <div class="stats-row">
          <div class="stat"><span class="num ok"><span bind:this={afterEl}>0</span>.2%</span><span class="lbl">precisión</span></div>
          <div class="stat"><span class="num ok">−40'</span><span class="lbl">runtime</span></div>
          <div class="stat"><span class="num ok">−30%</span><span class="lbl">llamadas LLM</span></div>
        </div>
      </div>
    </div>

    <div class="delta card-glass">
      <span class="delta-num">+<span bind:this={deltaEl}>0</span></span>
      <span class="delta-lbl">puntos de mejora · solo cambiando la representación del harness</span>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1100px; width: 100%; }
  h2 { font-size: clamp(1.8rem, 4vw, 3rem); margin-bottom: var(--spacing-sm); }
  .lead { color: var(--color-electric); margin-bottom: var(--spacing-2xl); opacity: 0.9; }
  .compare-row { display: flex; align-items: center; gap: var(--spacing-xl); margin-bottom: var(--spacing-xl); }
  .side { flex: 1; padding: var(--spacing-xl); }
  .side-after { border-color: rgba(34,197,94,0.4); }
  .tag { font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); margin-bottom: var(--spacing-xs); }
  .name { font-size: 1.25rem; font-weight: 700; margin-bottom: var(--spacing-lg); }
  .stats-row { display: flex; gap: var(--spacing-lg); }
  .stat { display: flex; flex-direction: column; align-items: center; }
  .num { font-size: 1.5rem; font-weight: 900; font-family: var(--font-display); color: var(--color-electric); }
  .num.ok { color: #22c55e; }
  .lbl { font-size: 0.7rem; font-family: var(--font-mono); opacity: 0.7; }
  .arrow { font-size: 2rem; color: var(--color-electric); flex-shrink: 0; }
  .delta { padding: var(--spacing-lg) var(--spacing-2xl); display: flex; align-items: center; gap: var(--spacing-lg); }
  .delta-num {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    font-family: var(--font-display);
    background: linear-gradient(135deg, #22c55e, #60A5FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex-shrink: 0;
  }
  .delta-lbl { font-size: 1rem; opacity: 0.85; }
  @media (max-width: 768px) {
    .compare-row { flex-direction: column; }
    .arrow { transform: rotate(90deg); }
  }
</style>
