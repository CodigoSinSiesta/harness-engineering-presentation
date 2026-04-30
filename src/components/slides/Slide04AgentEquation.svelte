<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateLineDraw } from '@/utils/animations';

  let slideElement: HTMLElement;
  let svgEl: SVGElement;

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.6);
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
      <p class="label">Slide 4 · La ecuación</p>
      <h2 class="title">Agent <span class="op">=</span> Model <span class="op">+</span> <span class="grad">Harness</span></h2>
      <p class="subtitle">Si no eres el modelo, eres el harness. — LangChain</p>
    </header>

    <section class="card-glass surface" aria-label="Analogía sistema operativo">
      <div class="surface-eyebrow">
        <span class="dot"></span>
        <span>El harness es el sistema operativo del LLM</span>
      </div>

      <svg
        class="os-diagram"
        viewBox="0 0 900 360"
        bind:this={svgEl}
        role="img"
        aria-label="Diagrama: el harness como sistema operativo del LLM"
      >
        <!-- Outer harness frame -->
        <rect x="20" y="20" width="860" height="320" rx="16" ry="16"
          fill="none" stroke="#3B82F6" stroke-width="2" stroke-dasharray="6 4" />
        <text x="40" y="48" fill="#60A5FA" font-family="JetBrains Mono" font-size="13" letter-spacing="0.12em">
          ARNÉS · CAPA DEL SO
        </text>

        <!-- CPU = LLM -->
        <g>
          <rect x="350" y="120" width="200" height="100" rx="10" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2"/>
          <text x="370" y="155" fill="#FAF9F6" font-family="Space Grotesk" font-size="20" font-weight="800">CPU</text>
          <text x="370" y="180" fill="#60A5FA" font-family="JetBrains Mono" font-size="13">= LLM en bruto</text>
          <text x="370" y="205" fill="#FAF9F6" font-family="Space Grotesk" font-size="14" opacity="0.7">pesos del modelo</text>
        </g>

        <!-- RAM = context window -->
        <g>
          <rect x="60" y="80" width="190" height="68" rx="8" fill="rgba(59,130,246,0.18)" stroke="#3B82F6" stroke-width="1.5"/>
          <text x="78" y="108" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">RAM</text>
          <text x="78" y="130" fill="#60A5FA" font-family="JetBrains Mono" font-size="12">= Ventana de contexto</text>
          <line x1="250" y1="120" x2="350" y2="155" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
        </g>

        <!-- Disk = External DBs -->
        <g>
          <rect x="60" y="220" width="190" height="68" rx="8" fill="rgba(167,139,250,0.18)" stroke="#a78bfa" stroke-width="1.5"/>
          <text x="78" y="248" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">DISK</text>
          <text x="78" y="270" fill="#a78bfa" font-family="JetBrains Mono" font-size="12">= BBDD externas / ficheros</text>
          <line x1="250" y1="240" x2="350" y2="195" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 3"/>
        </g>

        <!-- Drivers = tools -->
        <g>
          <rect x="650" y="80" width="200" height="68" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60A5FA" stroke-width="1.5"/>
          <text x="668" y="108" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">DRIVERS</text>
          <text x="668" y="130" fill="#60A5FA" font-family="JetBrains Mono" font-size="12">= Integración de herramientas</text>
          <line x1="650" y1="120" x2="550" y2="155" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
        </g>

        <!-- I/O = orchestration -->
        <g>
          <rect x="650" y="220" width="200" height="68" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60A5FA" stroke-width="1.5"/>
          <text x="668" y="248" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">I/O</text>
          <text x="668" y="270" fill="#60A5FA" font-family="JetBrains Mono" font-size="12">= Bucles de orquestación</text>
          <line x1="650" y1="240" x2="550" y2="195" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
        </g>
      </svg>

      <p class="caption">
        <span class="quote">"Todo lo que no son pesos del modelo"</span>
        — prompts del sistema, herramientas, orquestación, memoria, verificación, seguridad.
      </p>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; }

  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 25% 20%, rgba(59, 130, 246, 0.14) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 55%);
  }

  .slide-content {
    position: relative; z-index: 1;
    width: min(1180px, 94vw);
    display: grid;
    gap: var(--spacing-lg);
  }

  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(2rem, 5vw, 3.4rem); }
  .op { color: var(--color-electric); opacity: 0.7; }
  .grad {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.78; max-width: 70ch; }

  .surface { display: grid; gap: var(--spacing-md); padding: var(--spacing-lg); }

  .surface-eyebrow {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-electric);
  }
  .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--color-accent-bright);
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
  }

  .os-diagram { width: 100%; height: auto; max-height: 420px; }

  .caption {
    margin: 0;
    text-align: center;
    font-size: 0.95rem;
    opacity: 0.86;
    border-top: 1px solid rgba(96, 165, 250, 0.18);
    padding-top: var(--spacing-md);
  }
  .quote { color: var(--color-electric); font-family: var(--font-mono); font-size: 0.9rem; }

  @media (max-width: 768px) {
    .os-diagram { max-height: 320px; }
  }
</style>
