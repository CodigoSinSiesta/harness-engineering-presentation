<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateLineDraw } from '@/utils/animations';

  let slideElement: HTMLElement;
  let svgEl: SVGElement;

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.8);
      }, 600);
    };

    slideElement.addEventListener("slide-activated", replay);
    return () => slideElement.removeEventListener("slide-activated", replay);
  });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 10 · Paper 2 · Meta-Harness · Stanford · Marzo 2026</p>
      <h2 class="title">Si el harness es código, <span class="grad">se puede optimizar.</span></h2>
      <p class="subtitle">
        DSPy (Khattab, 2023) ajusta <em>prompts</em> dentro de un pipeline fijo.
        Meta-Harness <strong>reescribe el pipeline entero</strong>: estructura, recuperación, memoria, topología.
      </p>
    </header>

    <section class="card-glass loop-block" aria-label="Meta-harness optimization loop">
      <div class="loop-eyebrow">
        <span class="dot"></span>
        <span>Bucle de optimización · 10M tokens/iter · 400× más feedback que cualquier método previo</span>
      </div>

      <svg class="loop-svg" viewBox="0 0 920 320" bind:this={svgEl} role="img" aria-label="Loop de optimización" data-preserve-direction>
        <!-- Proposer -->
        <g>
          <rect x="40" y="100" width="200" height="120" rx="14" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2"/>
          <text x="60" y="130" font-family="JetBrains Mono" font-size="11" fill="#60A5FA" letter-spacing="0.1em">PASO 1</text>
          <text x="60" y="158" font-family="Space Grotesk" font-size="20" font-weight="800" fill="#FAF9F6">Proposer</text>
          <text x="60" y="180" font-family="JetBrains Mono" font-size="11" fill="#a78bfa">Claude Code · Opus 4.6</text>
          <text x="60" y="200" font-family="Space Grotesk" font-size="11" fill="#FAF9F6" opacity="0.8">lee trazas fallidas</text>
          <text x="60" y="214" font-family="Space Grotesk" font-size="11" fill="#FAF9F6" opacity="0.8">escribe nuevo arnés</text>
        </g>

        <!-- Arrow 1 -->
        <line x1="240" y1="160" x2="340" y2="160" stroke="#60A5FA" stroke-width="2"/>
        <polygon points="340,160 330,154 330,166" fill="#60A5FA"/>
        <text x="245" y="150" font-family="JetBrains Mono" font-size="10" fill="#60A5FA">nuevo arnés</text>

        <!-- Evaluator -->
        <g>
          <rect x="340" y="100" width="200" height="120" rx="14" fill="rgba(167,139,250,0.18)" stroke="#a78bfa" stroke-width="2"/>
          <text x="360" y="130" font-family="JetBrains Mono" font-size="11" fill="#a78bfa" letter-spacing="0.1em">PASO 2</text>
          <text x="360" y="158" font-family="Space Grotesk" font-size="20" font-weight="800" fill="#FAF9F6">Evaluador</text>
          <text x="360" y="180" font-family="JetBrains Mono" font-size="11" fill="#a78bfa">ejecuta benchmark</text>
          <text x="360" y="200" font-family="Space Grotesk" font-size="11" fill="#FAF9F6" opacity="0.8">puntuación + traza cruda</text>
        </g>

        <!-- Arrow 2 -->
        <line x1="540" y1="160" x2="640" y2="160" stroke="#60A5FA" stroke-width="2"/>
        <polygon points="640,160 630,154 630,166" fill="#60A5FA"/>
        <text x="545" y="150" font-family="JetBrains Mono" font-size="10" fill="#60A5FA">registra resultados</text>

        <!-- Filesystem -->
        <g>
          <rect x="640" y="100" width="220" height="120" rx="14" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
          <text x="660" y="130" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.1em">PASO 3</text>
          <text x="660" y="158" font-family="Space Grotesk" font-size="20" font-weight="800" fill="#FAF9F6">FS creciente</text>
          <text x="660" y="180" font-family="JetBrains Mono" font-size="10" fill="#22c55e">traces/iter_001/</text>
          <text x="660" y="195" font-family="JetBrains Mono" font-size="10" fill="#22c55e">traces/iter_002/</text>
          <text x="660" y="210" font-family="JetBrains Mono" font-size="10" fill="#22c55e">traces/iter_003/...</text>
        </g>

        <!-- Loop arrow back -->
        <path
          d="M 750 100 Q 750 30 460 30 Q 140 30 140 100"
          stroke="#22c55e"
          stroke-width="2"
          fill="none"
          stroke-dasharray="6 4"
        />
        <polygon points="140,100 134,90 146,90" fill="#22c55e"/>
        <text x="445" y="22" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.08em">acumula · diagnostica · re-propone</text>

        <!-- Score badge -->
        <g>
          <rect x="370" y="240" width="140" height="48" rx="8" fill="rgba(34,197,94,0.18)" stroke="#22c55e" stroke-width="1.6"/>
          <text x="440" y="262" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#22c55e" letter-spacing="0.1em">MEJOR ACTUAL</text>
          <text x="440" y="280" text-anchor="middle" font-family="Space Grotesk" font-size="16" font-weight="800" fill="#22c55e">76.4% TerminalBench 2.0</text>
        </g>
      </svg>

      <p class="caption">
        <strong>Las trazas son irremplazables.</strong>
        Sin ellos: 50% → 34.6% (−15.4 pts). Con resúmenes en lugar de en bruto: 34.9% (−15.1 pts).
        La señal vive en los detalles en bruto. No hay atajo.
      </p>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 75% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 25% 75%, rgba(167, 139, 250, 0.08) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1200px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.4vw, 2.9rem); }
  .grad {
    background: linear-gradient(135deg, #a78bfa 0%, #22c55e 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.84; max-width: 78ch; line-height: 1.55; }

  .loop-block { padding: var(--spacing-lg); display: grid; gap: var(--spacing-md); }
  .loop-eyebrow {
    display: flex; align-items: center; gap: var(--spacing-sm);
    font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.08em;
    color: var(--color-electric);
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent-bright); box-shadow: 0 0 8px rgba(59, 130, 246, 0.8); }

  .loop-svg { width: 100%; height: auto; max-height: 360px; }

  .caption {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.55;
    opacity: 0.92;
    border-top: 1px solid rgba(96, 165, 250, 0.18);
    padding-top: var(--spacing-md);
  }

  @media (max-width: 768px) {
    .loop-svg { max-height: 280px; }
  }
</style>
