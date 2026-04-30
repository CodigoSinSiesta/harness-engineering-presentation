<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>
  <div class="animated-grid"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 16 · Cierre</p>
      <h2 class="title">
        Ya no es cuestión de <span class="strike">qué modelo elegir</span>.<br/>
        Es cuestión de <span class="grad">qué estructura quitar</span>.
      </h2>
    </header>

    <section class="resources">
      <div class="card-glass res-block">
        <h3>Papers de referencia</h3>
        <ul>
          <li><strong>Pan et al.</strong> · <em>Natural-Language Agent Harnesses</em> · Tsinghua · marzo 2026</li>
          <li><strong>Khattab et al.</strong> · <em>Meta-Harness</em> · Stanford · marzo 2026</li>
          <li><strong>DeepMind</strong> · <em>AutoHarness</em> · 2025</li>
          <li><em>AgentSpec DSL</em> · ICSE 2026</li>
        </ul>
      </div>

      <div class="card-glass res-block">
        <h3>Convergencia de autores</h3>
        <ul>
          <li><strong>Lopopolo</strong> (OpenAI) · "el código es libre, el harness es lo escaso"</li>
          <li><strong>Horthy</strong> (HumanLayer) · 12-Factor Agents</li>
          <li><strong>Pan + Khattab</strong> · NLAH + Meta-Harness</li>
        </ul>
      </div>

      <div class="card-glass res-block">
        <h3>Próximo paso accionable</h3>
        <ol>
          <li>Identifica qué <strong>asunción caducada</strong> sigue viva en tu harness.</li>
          <li>Mídela. Quítala. Mide otra vez.</li>
          <li>Repite hasta que el harness solo tenga lo que demuestra valor.</li>
        </ol>
      </div>
    </section>

    <footer class="closing-author">
      <img
        src="https://www.gravatar.com/avatar/8461e0b8674185c1df153079e820504b?s=100"
        alt="Alejandro de la Fuente"
        class="closing-avatar"
      />
      <div>
        <p class="ca-name">Alejandro de la Fuente</p>
        <p class="ca-meta">Tech Lead · NTT Data · GDNE · <a href="https://tellmealex.dev" target="_blank" rel="noopener">tellmealex.dev</a></p>
      </div>
      <span class="thanks">Gracias.</span>
    </footer>
  </div>

  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 50% 25%, rgba(96, 165, 250, 0.18) 0%, transparent 55%),
      radial-gradient(ellipse at 50% 90%, rgba(167, 139, 250, 0.1) 0%, transparent 55%);
    z-index: 1;
  }
  .animated-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(96, 165, 250, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(96, 165, 250, 0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    z-index: 0;
    animation: moveGrid 25s linear infinite;
  }
  .slide-content { position: relative; z-index: 2; width: min(1200px, 94vw); display: grid; gap: var(--spacing-xl); }
  .slide-header { display: grid; gap: var(--spacing-sm); text-align: center; justify-items: center; }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.6rem, 4vw, 2.6rem); line-height: 1.4; max-width: 22ch; }
  .strike { color: #f87171; text-decoration: line-through; opacity: 0.8; }
  .grad {
    background: linear-gradient(135deg, #22c55e 0%, #60A5FA 50%, #a78bfa 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .resources {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
  }
  .res-block { padding: var(--spacing-lg); display: grid; gap: var(--spacing-sm); }
  .res-block h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--color-electric);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .res-block ul, .res-block ol {
    margin: 0;
    padding-left: var(--spacing-md);
    display: grid;
    gap: var(--spacing-xs);
  }
  .res-block li { font-size: 0.9rem; line-height: 1.5; opacity: 0.92; }

  .closing-author {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-xl);
    border-top: 1px solid rgba(96, 165, 250, 0.2);
    flex-wrap: wrap;
  }
  .closing-avatar { width: 56px; height: 56px; border-radius: 50%; }
  .ca-name { margin: 0; font-weight: 700; font-size: 1.05rem; }
  .ca-meta { margin: 0; font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-electric); opacity: 0.9; }
  .thanks {
    margin-left: auto;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    background: linear-gradient(135deg, #60A5FA 0%, #a78bfa 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .orb-1 { width: 420px; height: 420px; background: rgba(96, 165, 250, 0.1); top: -100px; right: -100px; animation: floatOrb 12s ease-in-out infinite; }
  .orb-2 { width: 320px; height: 320px; background: rgba(167, 139, 250, 0.07); bottom: -100px; left: -100px; animation: floatOrb 15s ease-in-out infinite reverse; }

  @keyframes moveGrid { 0% { transform: translate(0,0); } 100% { transform: translate(60px, 60px); } }
  @keyframes floatOrb { 0%,100% { transform: translateY(0) scale(1);} 50%{ transform: translateY(-30px) scale(1.05);} }

  @media (max-width: 900px) {
    .resources { grid-template-columns: 1fr; }
    .closing-author { justify-content: center; text-align: center; }
    .thanks { margin-left: 0; }
  }
</style>
