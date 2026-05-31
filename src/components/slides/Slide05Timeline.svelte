<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Convergencia 2025-2026"
  title="Cinco actores. Cinco rutas. Una misma conclusión."
  titleHighlight="Una misma conclusión"
  columns={2}
  items={[
    {
      title: 'Nov 2025 · Anthropic',
      body: '"**Effective harnesses for long-running agents**" — Initializer + coding agent + `claude-progress.txt`. Primer uso documentado del término.'
    },
    {
      title: '5 Feb 2026 · Mitchell Hashimoto',
      body: 'Acuña **"Harness Engineering"**. Cada error del agente se convierte en una regla de `AGENTS.md`. Le pone nombre a lo que todos hacían.'
    },
    {
      title: '11 Feb 2026 · OpenAI',
      body: '**Harness Engineering con Codex** — 7 ingenieros · 1M líneas · 0 escritas a mano. El trabajo es **diseñar el arnés**.'
    },
    {
      title: 'Abr 2026 · Martin Fowler + Karpathy',
      body: 'Fowler: taxonomía **Guides + Sensors** (computacionales vs inferenciales). Karpathy (Sequoia AI Ascent): vibe coding eleva el suelo; agentic engineering preserva el techo.'
    }
  ]}
/>
