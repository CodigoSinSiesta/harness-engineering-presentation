<script lang="ts">
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';

  const milestones = [
    {
      date: 'Nov 2025',
      who: 'Anthropic',
      gist: 'Effective harnesses for long-running agents — Initializer + coding agent + claude-progress.txt. Primer uso documentado.',
      color: '#a78bfa',
      pinned: false
    },
    {
      date: '5 Feb 2026',
      who: 'Mitchell Hashimoto',
      gist: 'Acuña "Harness Engineering". Cada error del agente → regla en AGENTS.md. Le pone nombre a lo que todos hacían.',
      color: '#22c55e',
      pinned: true
    },
    {
      date: '11 Feb 2026',
      who: 'OpenAI',
      gist: '7 ingenieros · 1M líneas · 0 escritas a mano. El trabajo es diseñar el arnés.',
      color: '#60A5FA',
      pinned: false
    },
    {
      date: 'Abr 2026',
      who: 'Martin Fowler',
      gist: 'Taxonomía Guides + Sensors (computacionales vs inferenciales). La industria adopta el patrón.',
      color: '#fbbf24',
      pinned: false
    },
    {
      date: 'Abr 2026',
      who: 'Andrej Karpathy',
      gist: 'Sequoia AI Ascent: vibe coding eleva el suelo; agentic engineering preserva el techo. El harness es el sustrato.',
      color: '#f472b6',
      pinned: false
    }
  ];
</script>

<SlideShell>
  <div class="wrapper">
    <Eyebrow>Convergencia 2025-2026</Eyebrow>
    <h2>Cinco actores. Cinco rutas. <span class="highlight">Una misma conclusión.</span></h2>
    <p class="sub">El término emerge en cinco meses sin coordinación. Hashimoto le pone la palabra el 5 de febrero; el resto converge antes y después con la misma sustancia.</p>

    <section class="timeline">
      <div class="rail" aria-hidden="true"></div>
      {#each milestones as m, i}
        <article class="milestone" class:milestone-pinned={m.pinned}>
          <div class="node" style:background={m.color} style:box-shadow={`0 0 14px ${m.color}66`}>
            <span class="node-idx">{i + 1}</span>
          </div>
          <div class="milestone-card card-glass">
            {#if m.pinned}
              <div class="pin">★ Acuña el término</div>
            {/if}
            <div class="m-header">
              <span class="m-date">{m.date}</span>
              <span class="m-who" style:color={m.color}>{m.who}</span>
            </div>
            <p class="m-gist">{m.gist}</p>
          </div>
        </article>
      {/each}
    </section>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1100px; width: 100%; }
  h2 { font-size: clamp(1.8rem, 4vw, 3rem); margin-bottom: var(--spacing-sm); }
  .sub { color: var(--color-electric); opacity: 0.85; margin-bottom: var(--spacing-2xl); font-size: 0.95rem; }

  .timeline { position: relative; display: flex; flex-direction: column; gap: var(--spacing-md); padding-left: 48px; }
  .rail {
    position: absolute; left: 15px; top: 12px; bottom: 12px; width: 2px;
    background: linear-gradient(to bottom, rgba(96,165,250,0.15), rgba(96,165,250,0.5), rgba(96,165,250,0.15));
  }

  .milestone { display: flex; gap: var(--spacing-lg); align-items: flex-start; position: relative; }
  .node {
    position: absolute; left: -48px;
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .node-idx { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #0A1628; }

  .milestone-card { flex: 1; padding: var(--spacing-lg) var(--spacing-xl); position: relative; }
  .milestone-pinned .milestone-card {
    border-color: rgba(34,197,94,0.45);
    box-shadow: 0 0 24px rgba(34,197,94,0.18);
  }

  .pin {
    position: absolute; top: -10px; left: var(--spacing-xl);
    font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.1em;
    color: #22c55e; background: rgba(34,197,94,0.12);
    padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(34,197,94,0.3);
  }

  .m-header { display: flex; gap: var(--spacing-md); align-items: baseline; margin-bottom: var(--spacing-xs); }
  .m-date { font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-electric); opacity: 0.7; }
  .m-who { font-weight: 700; font-size: 0.9rem; }
  .m-gist { font-size: 0.875rem; opacity: 0.85; margin: 0; line-height: 1.5; }

  @media (max-width: 768px) {
    .timeline { padding-left: 36px; }
    .node { left: -36px; width: 24px; height: 24px; }
    .rail { left: 11px; }
  }
</style>
