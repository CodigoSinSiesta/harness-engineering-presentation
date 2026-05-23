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
        if (svgEl) animateLineDraw(svgEl, 1.6);
      }, 600);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>La ecuación</Eyebrow>
    <h2>Agent <span class="op">=</span> Model <span class="op">+</span> <span class="highlight">Harness</span></h2>
    <p class="sub">"Si no eres el modelo, eres el harness." — LangChain</p>

    <div class="card-glass diagram-card">
      <div class="diagram-eyebrow">
        <span class="dot"></span>
        <span>El harness es el sistema operativo del LLM</span>
      </div>

      <svg class="os-diagram" viewBox="0 0 900 340" bind:this={svgEl} role="img" aria-label="Diagrama: el harness como sistema operativo del LLM">
        <!-- Outer harness frame -->
        <rect x="20" y="20" width="860" height="300" rx="16"
          fill="none" stroke="#3B82F6" stroke-width="2" stroke-dasharray="6 4" />
        <text x="40" y="48" fill="#60A5FA" font-family="JetBrains Mono" font-size="13" letter-spacing="0.12em">ARNÉS · CAPA DEL SO</text>

        <!-- CPU = LLM -->
        <rect x="350" y="110" width="200" height="100" rx="10" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2"/>
        <text x="370" y="148" fill="#FAF9F6" font-family="Space Grotesk" font-size="20" font-weight="800">CPU</text>
        <text x="370" y="172" fill="#60A5FA" font-family="JetBrains Mono" font-size="13">= LLM en bruto</text>
        <text x="370" y="196" fill="#FAF9F6" font-family="Space Grotesk" font-size="13" opacity="0.7">pesos del modelo</text>

        <!-- RAM = context window -->
        <rect x="60" y="72" width="190" height="68" rx="8" fill="rgba(59,130,246,0.18)" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="78" y="100" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">RAM</text>
        <text x="78" y="124" fill="#60A5FA" font-family="JetBrains Mono" font-size="12">= Ventana de contexto</text>
        <line x1="250" y1="112" x2="350" y2="148" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>

        <!-- DISK = external memory -->
        <rect x="60" y="210" width="190" height="68" rx="8" fill="rgba(167,139,250,0.18)" stroke="#a78bfa" stroke-width="1.5"/>
        <text x="78" y="238" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">DISK</text>
        <text x="78" y="262" fill="#a78bfa" font-family="JetBrains Mono" font-size="12">= BBDD / ficheros</text>
        <line x1="250" y1="232" x2="350" y2="188" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 3"/>

        <!-- DRIVERS = tools -->
        <rect x="650" y="72" width="200" height="68" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60A5FA" stroke-width="1.5"/>
        <text x="668" y="100" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">DRIVERS</text>
        <text x="668" y="124" fill="#60A5FA" font-family="JetBrains Mono" font-size="12">= Herramientas</text>
        <line x1="650" y1="112" x2="550" y2="148" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>

        <!-- I/O = orchestration -->
        <rect x="650" y="210" width="200" height="68" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60A5FA" stroke-width="1.5"/>
        <text x="668" y="238" fill="#FAF9F6" font-family="Space Grotesk" font-size="16" font-weight="700">I/O</text>
        <text x="668" y="262" fill="#60A5FA" font-family="JetBrains Mono" font-size="12">= Bucles de orquestación</text>
        <line x1="650" y1="232" x2="550" y2="188" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
      </svg>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1000px; width: 100%; }
  h2 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: var(--spacing-sm); }
  .op { color: var(--color-electric); opacity: 0.7; }
  .sub { color: var(--color-electric); margin-bottom: var(--spacing-2xl); font-style: italic; }
  .diagram-card { padding: var(--spacing-xl); }
  .diagram-eyebrow { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); margin-bottom: var(--spacing-lg); }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-electric); animation: pulse-dot 2s ease-in-out infinite; flex-shrink: 0; }
  @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
  .os-diagram { width: 100%; height: auto; }
  @media (max-width: 768px) { .os-diagram { display: none; } }
</style>
