<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateCounter } from '@/utils/animations';

  let counterEl: HTMLElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (counterEl) animateCounter(counterEl, 6, 1.6);
      }, 700);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>El hallazgo</Eyebrow>
    <h2>Mismo modelo. Mismo benchmark.</h2>

    <div class="big-num">
      <span class="ghost">×</span>
      <span class="counter" bind:this={counterEl}>0</span>
      <span class="ghost">×</span>
    </div>
    <p class="sub"><strong>de diferencia en rendimiento.</strong></p>

    <div class="grid">
      <div class="card-glass">
        <span class="src">Stanford · 2026</span>
        <p>La lógica de orquestación que envuelve al LLM produce hoy <strong>más variación de rendimiento que el propio modelo</strong>.</p>
      </div>
      <div class="card-glass">
        <span class="src">LangChain · TerminalBench 2.0</span>
        <p>Modificando solo la infraestructura del harness, su coding agent saltó del <strong>puesto 30+ al puesto 5</strong>.</p>
      </div>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1000px; width: 100%; text-align: center; }
  h2 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: var(--spacing-xl); }
  .big-num { display: flex; align-items: center; justify-content: center; gap: var(--spacing-lg); margin-bottom: var(--spacing-md); }
  .counter {
    font-size: clamp(6rem, 18vw, 12rem);
    font-weight: 900;
    font-family: var(--font-display);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }
  .ghost { font-size: clamp(3rem, 8vw, 6rem); color: var(--color-electric); opacity: 0.4; }
  .sub { font-size: 1.5rem; color: var(--color-electric); margin-bottom: var(--spacing-2xl); }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); text-align: left; }
  .src { font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); display: block; margin-bottom: var(--spacing-sm); }
  .card-glass { padding: var(--spacing-xl); }
  @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
