<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateLineDraw } from '@/utils/animations';

  let svgEl: SVGElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.8);
      }, 600);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>Paper 2 · Meta-Harness · Stanford · Marzo 2026</Eyebrow>
    <h2>Si el harness es código, <span class="highlight">se puede optimizar.</span></h2>
    <p class="sub">DSPy ajusta prompts dentro de un pipeline fijo. Meta-Harness <strong>reescribe el pipeline entero</strong>.</p>

    <div class="card-glass loop-block">
      <div class="loop-eyebrow">
        <span class="dot"></span>
        <span>Bucle de optimización · 10M tokens/iter · 400× más feedback que cualquier método previo</span>
      </div>

      <svg class="loop-svg" viewBox="0 0 920 310" bind:this={svgEl} role="img" aria-label="Loop de optimización Meta-Harness" data-preserve-direction>
        <!-- Proposer -->
        <rect x="40" y="90" width="200" height="120" rx="14" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2"/>
        <text x="60" y="120" font-family="JetBrains Mono" font-size="11" fill="#60A5FA" letter-spacing="0.1em">PASO 1</text>
        <text x="60" y="148" font-family="Space Grotesk" font-size="20" font-weight="800" fill="#FAF9F6">Proposer</text>
        <text x="60" y="170" font-family="JetBrains Mono" font-size="11" fill="#a78bfa">Claude Code · Opus 4.6</text>
        <text x="60" y="188" font-family="Space Grotesk" font-size="11" fill="#FAF9F6" opacity="0.8">lee trazas fallidas</text>
        <text x="60" y="202" font-family="Space Grotesk" font-size="11" fill="#FAF9F6" opacity="0.8">escribe nuevo arnés</text>

        <!-- Arrow 1 -->
        <line x1="240" y1="150" x2="340" y2="150" stroke="#60A5FA" stroke-width="2"/>
        <polygon points="340,150 330,144 330,156" fill="#60A5FA"/>
        <text x="245" y="140" font-family="JetBrains Mono" font-size="10" fill="#60A5FA">nuevo arnés</text>

        <!-- Evaluator -->
        <rect x="340" y="90" width="200" height="120" rx="14" fill="rgba(167,139,250,0.18)" stroke="#a78bfa" stroke-width="2"/>
        <text x="360" y="120" font-family="JetBrains Mono" font-size="11" fill="#a78bfa" letter-spacing="0.1em">PASO 2</text>
        <text x="360" y="148" font-family="Space Grotesk" font-size="20" font-weight="800" fill="#FAF9F6">Evaluador</text>
        <text x="360" y="170" font-family="JetBrains Mono" font-size="11" fill="#a78bfa">ejecuta benchmark</text>
        <text x="360" y="188" font-family="Space Grotesk" font-size="11" fill="#FAF9F6" opacity="0.8">puntuación + traza cruda</text>

        <!-- Arrow 2 -->
        <line x1="540" y1="150" x2="640" y2="150" stroke="#60A5FA" stroke-width="2"/>
        <polygon points="640,150 630,144 630,156" fill="#60A5FA"/>
        <text x="545" y="140" font-family="JetBrains Mono" font-size="10" fill="#60A5FA">registra resultados</text>

        <!-- Filesystem -->
        <rect x="640" y="90" width="220" height="120" rx="14" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
        <text x="660" y="120" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.1em">PASO 3</text>
        <text x="660" y="148" font-family="Space Grotesk" font-size="20" font-weight="800" fill="#FAF9F6">FS creciente</text>
        <text x="660" y="170" font-family="JetBrains Mono" font-size="10" fill="#22c55e">traces/iter_001/</text>
        <text x="660" y="185" font-family="JetBrains Mono" font-size="10" fill="#22c55e">traces/iter_002/</text>
        <text x="660" y="200" font-family="JetBrains Mono" font-size="10" fill="#22c55e">traces/iter_003/...</text>

        <!-- Loop arrow back -->
        <path d="M 750 90 Q 750 24 460 24 Q 140 24 140 90" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="6 4"/>
        <polygon points="140,90 132,80 150,80" fill="#22c55e"/>
        <text x="440" y="16" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.08em" text-anchor="middle">acumula · diagnostica · re-propone</text>

        <!-- Score badge -->
        <rect x="370" y="228" width="140" height="48" rx="8" fill="rgba(34,197,94,0.18)" stroke="#22c55e" stroke-width="1.6"/>
        <text x="440" y="250" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.1em">MEJOR ACTUAL</text>
        <text x="440" y="268" text-anchor="middle" font-family="Space Grotesk" font-size="16" font-weight="800" fill="#22c55e">76.4% TerminalBench 2.0</text>
      </svg>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1100px; width: 100%; }
  h2 { font-size: clamp(1.8rem, 4vw, 3rem); margin-bottom: var(--spacing-sm); }
  .sub { color: var(--color-electric); margin-bottom: var(--spacing-xl); opacity: 0.9; }
  .loop-block { padding: var(--spacing-xl); }
  .loop-eyebrow { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); margin-bottom: var(--spacing-lg); }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--color-electric); animation: pulse 2s ease-in-out infinite; flex-shrink: 0; }
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
  .loop-svg { width: 100%; height: auto; }
  @media (max-width: 768px) { .loop-svg { display: none; } }
</style>
