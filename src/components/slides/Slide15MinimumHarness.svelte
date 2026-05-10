<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance, animateLineDraw } from '@/utils/animations';

  let slideElement: HTMLElement;
  let svgEl: SVGElement;

  onMount(() => {
    animateSlideEntrance(slideElement);

    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.4);
      }, 500);
    };

    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });

  const pieces = [
    {
      file: 'AGENTS.md',
      role: 'Punto de entrada',
      desc: 'Reglas, mapa del repo, convenciones. Lo primero que cada agente lee.'
    },
    {
      file: 'init.sh',
      role: 'Gate de pre-trabajo',
      desc: 'Verifica entorno y tests antes de dejar trabajar. Si falla → para.'
    },
    {
      file: 'featurelist.json',
      role: 'Tareas estructuradas',
      desc: 'Lista pendiente con criterios de aceptación. Estado: done · pendiente.'
    },
    {
      file: 'progress/',
      role: 'Memoria compartida',
      desc: 'Los subagentes escriben aquí — anti teléfono descompuesto.'
    },
    {
      file: '.claude/agents/',
      role: 'Roles del arnés',
      desc: 'leader · implementer · reviewer. Cada uno con su .md de contrato.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 15 · Cómo se ve un arnés mínimo</p>
      <h2 class="title">Lo que escribes <span class="grad">el lunes</span>.</h2>
      <p class="subtitle">
        Toda la teoría aterriza en una estructura de ficheros sorprendentemente pequeña.
        Esto es lo que copia <strong>BettaTech</strong> en su repo de ejemplo — y lo que cualquier equipo puede tener montado en una tarde.
      </p>
    </header>

    <section class="layout">
      <article class="card-glass tree" aria-label="Estructura de ficheros del arnés">
        <header class="tree-header">
          <span class="dot"></span>
          <span>Repositorio</span>
        </header>
        <pre class="tree-pre"><code>proyecto/
├── <span class="hl">AGENTS.md</span>
├── <span class="hl">init.sh</span>
├── <span class="hl">featurelist.json</span>
├── <span class="hl">progress/</span>
│   ├── current.md
│   └── history.md
└── .claude/<span class="hl">agents/</span>
    ├── leader.md
    ├── implementer.md
    └── reviewer.md</code></pre>
      </article>

      <article class="card-glass flow" aria-label="Flujo de orquestación">
        <header class="flow-header">
          <span class="dot"></span>
          <span>El flujo cada vez que arranca el agente</span>
        </header>
        <svg
          class="flow-svg"
          viewBox="0 0 480 280"
          bind:this={svgEl}
          role="img"
          aria-label="Flujo: el líder lanza implementador y revisor con progress/ como memoria compartida"
        >
          <!-- LEADER -->
          <rect x="180" y="20" width="120" height="44" rx="8" fill="rgba(59, 130, 246, 0.22)" stroke="#3B82F6" stroke-width="2"/>
          <text x="240" y="40" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#60A5FA">LÍDER</text>
          <text x="240" y="55" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">orquestador</text>

          <!-- IMPLEMENTER -->
          <rect x="40" y="115" width="140" height="44" rx="8" fill="rgba(96, 165, 250, 0.18)" stroke="#60A5FA" stroke-width="2"/>
          <text x="110" y="135" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#60A5FA">IMPLEMENTADOR</text>
          <text x="110" y="150" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">escribe código</text>

          <!-- REVIEWER -->
          <rect x="300" y="115" width="140" height="44" rx="8" fill="rgba(167, 139, 250, 0.18)" stroke="#a78bfa" stroke-width="2"/>
          <text x="370" y="135" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#a78bfa">REVISOR</text>
          <text x="370" y="150" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">valida + bloquea</text>

          <!-- progress/ shared memory -->
          <rect x="120" y="210" width="240" height="50" rx="10" fill="rgba(34, 197, 94, 0.14)" stroke="#22c55e" stroke-width="2" stroke-dasharray="5 3"/>
          <text x="240" y="232" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#22c55e">progress/</text>
          <text x="240" y="248" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">memoria compartida en disco</text>

          <!-- spawn arrows -->
          <line x1="200" y1="64" x2="120" y2="115" stroke="#60A5FA" stroke-width="1.6" stroke-dasharray="4 3"/>
          <line x1="280" y1="64" x2="360" y2="115" stroke="#a78bfa" stroke-width="1.6" stroke-dasharray="4 3"/>

          <!-- write/read arrows to progress -->
          <line x1="110" y1="159" x2="180" y2="210" stroke="#22c55e" stroke-width="1.6"/>
          <line x1="370" y1="159" x2="300" y2="210" stroke="#22c55e" stroke-width="1.6"/>
          <line x1="240" y1="64" x2="240" y2="210" stroke="#22c55e" stroke-width="1.4" stroke-dasharray="3 3"/>

          <!-- labels on arrows -->
          <text x="135" y="100" font-family="JetBrains Mono" font-size="8" fill="#60A5FA" opacity="0.85">lanza</text>
          <text x="335" y="100" font-family="JetBrains Mono" font-size="8" fill="#a78bfa" opacity="0.85">lanza</text>
          <text x="130" y="195" font-family="JetBrains Mono" font-size="8" fill="#22c55e" opacity="0.85">escribe</text>
          <text x="338" y="195" font-family="JetBrains Mono" font-size="8" fill="#22c55e" opacity="0.85">lee</text>
        </svg>
      </article>
    </section>

    <section class="pieces" aria-label="Las piezas del arnés mínimo">
      {#each pieces as p}
        <article class="card-glass piece">
          <code class="p-file">{p.file}</code>
          <div class="p-role">{p.role}</div>
          <p class="p-desc">{p.desc}</p>
        </article>
      {/each}
    </section>

    <p class="closer">
      <strong>El repo es el sistema.</strong> No hay magia — todo son ficheros que el agente lee
      antes de empezar y donde escribe lo que va aprendiendo.
    </p>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }

  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 70%, rgba(59, 130, 246, 0.13) 0%, transparent 55%);
  }

  .slide-content {
    position: relative; z-index: 1;
    width: min(1240px, 94vw);
    display: grid;
    gap: var(--spacing-lg);
  }

  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .grad {
    background: linear-gradient(135deg, #22c55e 0%, #60A5FA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.84; max-width: 78ch; line-height: 1.55; }

  .layout {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: var(--spacing-md);
  }

  .tree, .flow {
    padding: var(--spacing-md) var(--spacing-lg);
    display: grid;
    gap: var(--spacing-sm);
  }

  .tree-header, .flow-header {
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

  .tree-pre {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--color-neutral-light);
    background: rgba(10, 22, 40, 0.5);
    border: 1px solid rgba(96, 165, 250, 0.15);
    border-radius: var(--radius-sm);
    padding: var(--spacing-md);
    overflow-x: auto;
  }
  .tree-pre :global(.hl) { color: var(--color-accent-bright); font-weight: 600; }

  .flow-svg {
    width: 100%;
    height: auto;
    max-height: 280px;
    background: rgba(10, 22, 40, 0.5);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(96, 165, 250, 0.15);
  }

  .pieces {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--spacing-sm);
  }
  .piece {
    padding: var(--spacing-md);
    display: grid;
    gap: 4px;
  }
  .p-file {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--color-accent-bright);
    font-weight: 600;
  }
  .p-role {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.85;
  }
  .p-desc { margin: 0; font-size: 0.82rem; line-height: 1.5; opacity: 0.92; }

  .closer {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    line-height: 1.55;
    opacity: 0.94;
    max-width: 80ch;
    justify-self: center;
  }

  @media (max-width: 1000px) {
    .layout { grid-template-columns: 1fr; }
    .pieces { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .pieces { grid-template-columns: 1fr; }
  }
</style>
