<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateLineDraw } from '@/utils/animations';

  let slideElement: HTMLElement;
  let svgs: SVGElement[] = [];

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        svgs.forEach((s, i) => {
          if (s) setTimeout(() => animateLineDraw(s, 1.0), i * 150);
        });
      }, 500);
    };

    slideElement.addEventListener("slide-activated", replay);
    return () => slideElement.removeEventListener("slide-activated", replay);
  });

  const patterns = [
    {
      name: 'Prompt Chaining',
      desc: 'Cadena lineal: cada paso usa la salida del anterior.',
      use: 'Pipelines deterministas con etapas claras.'
    },
    {
      name: 'Routing',
      desc: 'Un clasificador decide a qué especialista delegar.',
      use: 'Triaje de entradas heterogéneas.'
    },
    {
      name: 'Parallelization',
      desc: 'Distribución paralela a trabajadores y agregación al final.',
      use: 'Recuperación multifuente, ensembles.'
    },
    {
      name: 'Orch-Workers',
      desc: 'Maestro descompone, trabajadores ejecutan, maestro integra.',
      use: 'Tareas complejas con sub-objetivos dinámicos.'
    },
    {
      name: 'Eval-Optimizer',
      desc: 'Bucle generador-evaluador con criterio de aceptación.',
      use: 'Cuando hay un "está bien" objetivable.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 5 · Los 5 patrones canónicos · Anthropic</p>
      <h2 class="title">Topologías de orquestación</h2>
      <p class="subtitle">
        Todo agente en producción combina varios. Esas decisiones arquitectónicas son las que generan el gap de 6×.
      </p>
    </header>

    <section class="patterns-grid">
      <!-- Prompt Chaining -->
      <article class="card-glass pattern">
        <h3 class="p-name">{patterns[0].name}</h3>
        <svg class="p-svg" viewBox="0 0 240 90" bind:this={svgs[0]} role="img" aria-label="Cadena lineal de nodos">
          <line x1="20" y1="45" x2="220" y2="45" stroke="#60A5FA" stroke-width="2" />
          {#each [30, 90, 150, 210] as cx, i}
            <circle cx={cx} cy="45" r="14" fill={i === 0 ? '#3B82F6' : i === 3 ? '#a78bfa' : '#1E3A8A'} stroke="#60A5FA" stroke-width="2"/>
          {/each}
        </svg>
        <p class="p-desc">{patterns[0].desc}</p>
        <p class="p-use"><span class="usek">Útil:</span> {patterns[0].use}</p>
      </article>

      <!-- Routing -->
      <article class="card-glass pattern">
        <h3 class="p-name">{patterns[1].name}</h3>
        <svg class="p-svg" viewBox="0 0 240 90" bind:this={svgs[1]} role="img" aria-label="Routing fan-out">
          <circle cx="40" cy="45" r="14" fill="#3B82F6" stroke="#60A5FA" stroke-width="2"/>
          {#each [{x:200,y:18},{x:200,y:45},{x:200,y:72}] as p}
            <line x1="54" y1="45" x2={p.x - 14} y2={p.y} stroke="#60A5FA" stroke-width="1.8"/>
            <circle cx={p.x} cy={p.y} r="11" fill="#1E3A8A" stroke="#a78bfa" stroke-width="2"/>
          {/each}
        </svg>
        <p class="p-desc">{patterns[1].desc}</p>
        <p class="p-use"><span class="usek">Útil:</span> {patterns[1].use}</p>
      </article>

      <!-- Parallelization -->
      <article class="card-glass pattern">
        <h3 class="p-name">{patterns[2].name}</h3>
        <svg class="p-svg" viewBox="0 0 240 90" bind:this={svgs[2]} role="img" aria-label="Fan-out fan-in">
          <circle cx="30" cy="45" r="12" fill="#3B82F6" stroke="#60A5FA" stroke-width="2"/>
          {#each [18, 45, 72] as y}
            <line x1="42" y1="45" x2="106" y2={y} stroke="#60A5FA" stroke-width="1.6"/>
            <circle cx="120" cy={y} r="11" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2"/>
            <line x1="134" y1={y} x2="198" y2="45" stroke="#60A5FA" stroke-width="1.6"/>
          {/each}
          <circle cx="210" cy="45" r="12" fill="#a78bfa" stroke="#60A5FA" stroke-width="2"/>
        </svg>
        <p class="p-desc">{patterns[2].desc}</p>
        <p class="p-use"><span class="usek">Útil:</span> {patterns[2].use}</p>
      </article>

      <!-- Orch-Workers -->
      <article class="card-glass pattern">
        <h3 class="p-name">{patterns[3].name}</h3>
        <svg class="p-svg" viewBox="0 0 240 90" bind:this={svgs[3]} role="img" aria-label="Orquestador y trabajadores">
          <rect x="100" y="8" width="40" height="22" rx="4" fill="#3B82F6" stroke="#60A5FA" stroke-width="1.6"/>
          <text x="120" y="24" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6">ORCH</text>
          {#each [40, 90, 140, 190] as x, i}
            <line x1="120" y1="30" x2={x + 14} y2="55" stroke="#60A5FA" stroke-width="1.4"/>
            <rect x={x} y="55" width="28" height="22" rx="4" fill="#1E3A8A" stroke="#a78bfa" stroke-width="1.4"/>
            <text x={x + 14} y="71" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#a78bfa">w{i + 1}</text>
          {/each}
        </svg>
        <p class="p-desc">{patterns[3].desc}</p>
        <p class="p-use"><span class="usek">Útil:</span> {patterns[3].use}</p>
      </article>

      <!-- Eval-Optimizer -->
      <article class="card-glass pattern wide">
        <h3 class="p-name">{patterns[4].name}</h3>
        <svg class="p-svg" viewBox="0 0 320 90" bind:this={svgs[4]} role="img" aria-label="Bucle generador evaluador">
          <circle cx="60" cy="45" r="16" fill="#3B82F6" stroke="#60A5FA" stroke-width="2"/>
          <text x="60" y="49" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6">GEN</text>
          <line x1="76" y1="45" x2="184" y2="45" stroke="#60A5FA" stroke-width="2"/>
          <circle cx="200" cy="45" r="16" fill="#1E3A8A" stroke="#a78bfa" stroke-width="2"/>
          <text x="200" y="49" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#a78bfa">EVAL</text>
          <path d="M 200 61 Q 200 85 130 85 Q 60 85 60 61" stroke="#a78bfa" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
          <text x="130" y="80" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#a78bfa">reintenta si falla</text>
          <rect x="240" y="32" width="60" height="26" rx="6" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="1.4"/>
          <text x="270" y="49" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#22c55e">OK ✓</text>
          <line x1="216" y1="45" x2="240" y2="45" stroke="#22c55e" stroke-width="1.6" stroke-dasharray="3 2"/>
        </svg>
        <p class="p-desc">{patterns[4].desc}</p>
        <p class="p-use"><span class="usek">Útil:</span> {patterns[4].use}</p>
      </article>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 75% 25%, rgba(59, 130, 246, 0.13) 0%, transparent 55%),
      radial-gradient(ellipse at 25% 75%, rgba(167, 139, 250, 0.08) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1180px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .subtitle { margin: 0; opacity: 0.82; max-width: 70ch; }

  .patterns-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }
  .pattern { padding: var(--spacing-md) var(--spacing-lg); display: grid; gap: var(--spacing-sm); }
  .pattern.wide { grid-column: 1 / -1; }

  .p-name {
    margin: 0;
    font-size: 1.15rem;
    font-family: var(--font-display);
    color: var(--color-neutral-light);
  }
  .p-svg {
    width: 100%; height: 90px;
    background: rgba(10, 22, 40, 0.5);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(96, 165, 250, 0.15);
  }
  .p-desc { margin: 0; font-size: 0.92rem; opacity: 0.9; }
  .p-use {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-electric);
    opacity: 0.85;
  }
  .usek { font-weight: 700; }

  @media (max-width: 768px) {
    .patterns-grid { grid-template-columns: 1fr; }
    .pattern.wide { grid-column: auto; }
  }
</style>
