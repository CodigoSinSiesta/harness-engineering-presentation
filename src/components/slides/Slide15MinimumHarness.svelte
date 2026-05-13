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
      file: 'specs/<feature>/',
      role: 'Contexto aislado',
      desc: 'requirements · design · tasks. Cada agente recibe solo lo que necesita.'
    },
    {
      file: 'progress/',
      role: 'Memoria compartida',
      desc: 'Los subagentes escriben aquí — anti teléfono descompuesto.'
    },
    {
      file: '.claude/agents/',
      role: 'Roles del arnés',
      desc: 'leader · spec-author · implementer · reviewer. Cuatro contratos en .md.'
    }
  ];

  const lifecycle = ['pending', 'spec-ready', 'in-progress', 'done'];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 15 · Cómo se ve un arnés mínimo</p>
      <h2 class="title">Lo que escribes <span class="grad">el lunes</span>.</h2>
      <p class="subtitle">
        Con <strong>Spec-Driven Development</strong>: cuatro agentes, tres documentos de spec y un gate humano
        que separa escritura de implementación. Esto es lo que copia <strong>BettaTech</strong> en su repo — montable en una tarde.
      </p>
    </header>

    <section class="layout">
      <article class="card-glass tree" aria-label="Estructura de ficheros del arnés SDD">
        <header class="tree-header">
          <span class="dot"></span>
          <span>Repositorio</span>
        </header>
        <pre class="tree-pre"><code>proyecto/
├── <span class="hl">AGENTS.md</span>
├── <span class="hl">init.sh</span>
├── <span class="hl">tasks.json</span>
├── <span class="hl">specs/</span>
│   └── &lt;feature&gt;/
│       ├── requirements.md
│       ├── design.md
│       └── tasks.md
├── <span class="hl">progress/</span>
│   ├── current.md
│   └── history.md
└── .claude/<span class="hl">agents/</span>
    ├── leader.md
    ├── <span class="hl-spec">spec-author.md</span>
    ├── implementer.md
    └── reviewer.md</code></pre>
      </article>

      <article class="card-glass flow" aria-label="Flujo de orquestación SDD con 4 agentes">
        <header class="flow-header">
          <span class="dot"></span>
          <span>Flujo SDD — 4 agentes + gate humano</span>
        </header>
        <svg
          class="flow-svg"
          viewBox="0 0 480 240"
          bind:this={svgEl}
          role="img"
          aria-label="Flujo SDD: líder spawna spec-author, spec-author escribe specs, gate humano aprueba, líder spawna implementer y revisor que leen specs y escriben en progress"
        >
          <!-- LÍDER -->
          <rect x="180" y="10" width="120" height="40" rx="8" fill="rgba(59, 130, 246, 0.22)" stroke="#3B82F6" stroke-width="2"/>
          <text x="240" y="28" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#60A5FA">LÍDER</text>
          <text x="240" y="43" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">orquestador</text>

          <!-- SPEC AUTHOR -->
          <rect x="10" y="88" width="125" height="40" rx="8" fill="rgba(251, 191, 36, 0.15)" stroke="#FCD34D" stroke-width="2"/>
          <text x="72" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="10" letter-spacing="0.08em" fill="#FCD34D">SPEC AUTHOR</text>
          <text x="72" y="121" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">escribe specs</text>

          <!-- IMPLEMENTER -->
          <rect x="178" y="88" width="120" height="40" rx="8" fill="rgba(96, 165, 250, 0.18)" stroke="#60A5FA" stroke-width="2"/>
          <text x="238" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="10" letter-spacing="0.08em" fill="#60A5FA">IMPLEMENTER</text>
          <text x="238" y="121" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">escribe código</text>

          <!-- REVISOR -->
          <rect x="348" y="88" width="122" height="40" rx="8" fill="rgba(167, 139, 250, 0.18)" stroke="#a78bfa" stroke-width="2"/>
          <text x="409" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="10" letter-spacing="0.08em" fill="#a78bfa">REVISOR</text>
          <text x="409" y="121" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">valida + bloquea</text>

          <!-- specs/ context isolation -->
          <rect x="10" y="175" width="125" height="44" rx="10" fill="rgba(251, 191, 36, 0.10)" stroke="#FCD34D" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="72" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#FCD34D">specs/</text>
          <text x="72" y="211" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">contexto aislado</text>

          <!-- progress/ shared memory -->
          <rect x="240" y="175" width="150" height="44" rx="10" fill="rgba(34, 197, 94, 0.14)" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="315" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#22c55e">progress/</text>
          <text x="315" y="211" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">memoria compartida</text>

          <!-- Human gate circle between specs/ and progress/ -->
          <circle cx="207" cy="197" r="14" fill="rgba(34, 197, 94, 0.25)" stroke="#22c55e" stroke-width="2"/>
          <text x="207" y="202" text-anchor="middle" font-family="JetBrains Mono" font-size="13" fill="#22c55e">✓</text>

          <!-- spawn arrows from LÍDER -->
          <line x1="210" y1="50" x2="95" y2="88" stroke="#FCD34D" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="240" y1="50" x2="238" y2="88" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="272" y1="50" x2="370" y2="88" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 3"/>

          <!-- Spec Author → specs/ -->
          <line x1="72" y1="128" x2="72" y2="175" stroke="#FCD34D" stroke-width="1.6"/>

          <!-- specs/ → gate → progress/ -->
          <line x1="135" y1="197" x2="193" y2="197" stroke="#22c55e" stroke-width="1.6"/>
          <line x1="221" y1="197" x2="240" y2="197" stroke="#22c55e" stroke-width="1.6"/>

          <!-- Implementer → progress/ -->
          <line x1="238" y1="128" x2="282" y2="175" stroke="#22c55e" stroke-width="1.6"/>

          <!-- Revisor → progress/ -->
          <line x1="392" y1="128" x2="372" y2="175" stroke="#22c55e" stroke-width="1.6"/>

          <!-- Labels -->
          <text x="130" y="82" font-family="JetBrains Mono" font-size="8" fill="#FCD34D" opacity="0.85">spawns</text>
          <text x="243" y="78" font-family="JetBrains Mono" font-size="8" fill="#60A5FA" opacity="0.85">spawns</text>
          <text x="308" y="78" font-family="JetBrains Mono" font-size="8" fill="#a78bfa" opacity="0.85">spawns</text>
          <text x="40" y="157" font-family="JetBrains Mono" font-size="8" fill="#FCD34D" opacity="0.85">escribe</text>
          <text x="147" y="192" font-family="JetBrains Mono" font-size="7" fill="#22c55e" opacity="0.85">gate</text>
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

    <section class="lifecycle" aria-label="Ciclo de vida de una tarea SDD">
      {#each lifecycle as step, i}
        <span class="lc-step">{step}</span>
        {#if i < lifecycle.length - 1}
          <span class="lc-arrow">→</span>
        {/if}
      {/each}
    </section>

    <p class="closer">
      <strong>El repo es el sistema.</strong> La spec separa el <em>qué</em> del <em>cómo</em>:
      ningún agente empieza a implementar hasta que el humano aprueba el diseño.
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
  .tree-pre :global(.hl-spec) { color: #FCD34D; font-weight: 600; }

  .flow-svg {
    width: 100%;
    height: auto;
    max-height: 260px;
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

  .lifecycle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(10, 22, 40, 0.4);
    border: 1px solid rgba(34, 197, 94, 0.2);
    border-radius: var(--radius-md);
  }
  .lc-step {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    padding: 4px 12px;
    border-radius: var(--radius-sm);
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
  }
  .lc-arrow {
    color: var(--color-electric);
    opacity: 0.6;
    font-size: 1rem;
  }

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
    .lifecycle { flex-wrap: wrap; }
  }
</style>
