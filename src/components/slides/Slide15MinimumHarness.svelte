<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateLineDraw } from '@/utils/animations';

  const pieces = [
    { file: 'AGENTS.md',       role: 'Punto de entrada',   desc: 'Reglas, mapa del repo, convenciones. Lo primero que cada agente lee.' },
    { file: 'init.sh',         role: 'Gate de pre-trabajo', desc: 'Verifica entorno y tests antes de dejar trabajar. Si falla → para.' },
    { file: 'specs/<feature>/',role: 'Contexto aislado',    desc: 'requirements · design · tasks. Cada agente solo ve lo que necesita.' },
    { file: 'progress/',       role: 'Memoria compartida',  desc: 'Los subagentes escriben aquí — anti teléfono descompuesto.' },
    { file: '.claude/agents/', role: 'Roles del arnés',     desc: 'leader · spec-author · implementer · reviewer. Cuatro contratos .md.' }
  ];

  let svgEl: SVGElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (svgEl) animateLineDraw(svgEl, 1.4);
      }, 500);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="layout" bind:this={slideElement}>
    <div class="header">
      <Eyebrow>Cómo se ve un arnés mínimo</Eyebrow>
      <h2>Lo que escribes <span class="highlight">el lunes.</span></h2>
      <p class="sub">Con SDD: cuatro agentes, tres documentos de spec y un gate humano. Montable en una tarde.</p>
    </div>

    <div class="content-row">
      <!-- SVG: roles diagram -->
      <div class="card-glass diagram-card">
        <svg viewBox="0 0 480 240" bind:this={svgEl} role="img" aria-label="Diagrama de roles del arnés" class="roles-svg">
          <!-- LÍDER -->
          <rect x="180" y="10" width="120" height="40" rx="8" fill="rgba(59,130,246,0.22)" stroke="#3B82F6" stroke-width="2"/>
          <text x="240" y="28" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#60A5FA">LÍDER</text>
          <text x="240" y="43" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">orquestador</text>

          <!-- SPEC AUTHOR -->
          <rect x="10" y="88" width="125" height="40" rx="8" fill="rgba(251,191,36,0.15)" stroke="#FCD34D" stroke-width="2"/>
          <text x="72" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="10" letter-spacing="0.08em" fill="#FCD34D">SPEC AUTHOR</text>
          <text x="72" y="121" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">escribe specs</text>

          <!-- IMPLEMENTER -->
          <rect x="178" y="88" width="120" height="40" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60A5FA" stroke-width="2"/>
          <text x="238" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="10" letter-spacing="0.08em" fill="#60A5FA">IMPLEMENTER</text>
          <text x="238" y="121" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">escribe código</text>

          <!-- REVISOR -->
          <rect x="348" y="88" width="122" height="40" rx="8" fill="rgba(167,139,250,0.18)" stroke="#a78bfa" stroke-width="2"/>
          <text x="409" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="10" letter-spacing="0.08em" fill="#a78bfa">REVISOR</text>
          <text x="409" y="121" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">valida + bloquea</text>

          <!-- specs/ context isolation -->
          <rect x="10" y="175" width="125" height="44" rx="10" fill="rgba(251,191,36,0.10)" stroke="#FCD34D" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="72" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#FCD34D">specs/</text>
          <text x="72" y="211" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">contexto aislado</text>

          <!-- Human gate -->
          <circle cx="207" cy="197" r="14" fill="rgba(34,197,94,0.18)" stroke="#22c55e" stroke-width="2"/>
          <text x="207" y="202" text-anchor="middle" font-family="JetBrains Mono" font-size="13" fill="#22c55e">✓</text>

          <!-- progress/ shared memory -->
          <rect x="240" y="175" width="150" height="44" rx="10" fill="rgba(34,197,94,0.14)" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="315" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="11" letter-spacing="0.1em" fill="#22c55e">progress/</text>
          <text x="315" y="211" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#FAF9F6" opacity="0.7">memoria compartida</text>

          <!-- spawn arrows from LÍDER -->
          <line x1="210" y1="50" x2="95"  y2="88" stroke="#FCD34D" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="240" y1="50" x2="238" y2="88" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="272" y1="50" x2="370" y2="88" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 3"/>

          <!-- Spec Author → specs/ -->
          <line x1="72" y1="128" x2="72" y2="175" stroke="#FCD34D" stroke-width="1.6"/>
          <!-- specs/ → gate -->
          <line x1="135" y1="197" x2="193" y2="197" stroke="#22c55e" stroke-width="1.6"/>
          <!-- gate → progress/ -->
          <line x1="221" y1="197" x2="240" y2="197" stroke="#22c55e" stroke-width="1.6"/>
          <!-- Implementer → progress/ -->
          <line x1="238" y1="128" x2="290" y2="175" stroke="#60A5FA" stroke-width="1.6"/>
        </svg>
      </div>

      <!-- Pieces list -->
      <div class="pieces">
        {#each pieces as p}
          <div class="piece card-glass">
            <code class="piece-file">{p.file}</code>
            <div class="piece-body">
              <span class="piece-role">{p.role}</span>
              <p class="piece-desc">{p.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</SlideShell>

<style>
  .layout { max-width: 1200px; width: 100%; display: flex; flex-direction: column; gap: var(--spacing-xl); }
  .header { display: flex; flex-direction: column; gap: var(--spacing-sm); }
  h2 { font-size: clamp(1.8rem, 4vw, 3rem); margin: 0; }
  .sub { color: var(--color-electric); opacity: 0.9; margin: 0; }
  .content-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-xl); align-items: start; }
  .diagram-card { padding: var(--spacing-lg); }
  .roles-svg { width: 100%; height: auto; }
  .pieces { display: flex; flex-direction: column; gap: var(--spacing-sm); }
  .piece { display: flex; gap: var(--spacing-md); padding: var(--spacing-md) var(--spacing-lg); align-items: flex-start; }
  .piece-file { font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-electric); white-space: nowrap; padding: 2px 6px; background: rgba(96,165,250,0.1); border-radius: 4px; flex-shrink: 0; }
  .piece-body { display: flex; flex-direction: column; gap: 2px; }
  .piece-role { font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-electric); opacity: 0.7; }
  .piece-desc { font-size: 0.85rem; opacity: 0.85; margin: 0; }
  @media (max-width: 900px) { .content-row { grid-template-columns: 1fr; } .roles-svg { max-width: 480px; margin: 0 auto; } }
</style>
