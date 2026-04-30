<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const components = [
    {
      name: 'Contexto',
      desc: 'Qué información ve el modelo y en qué orden.',
      tag: '01',
      color: '#60A5FA'
    },
    {
      name: 'Herramientas',
      desc: 'Qué acciones puede ejecutar — pocas, simples, generales.',
      tag: '02',
      color: '#3B82F6'
    },
    {
      name: 'Memoria',
      desc: 'Qué recuerda fuera de su ventana de contexto.',
      tag: '03',
      color: '#a78bfa'
    },
    {
      name: 'Validación',
      desc: 'Cómo demuestra que su trabajo es correcto.',
      tag: '04',
      color: '#22c55e'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 3 · El arnés del caballo</p>
      <h2 class="title">Por qué se llama <span class="grad">harness</span>.</h2>
      <p class="subtitle">
        Un LLM en bruto es un caballo desbocado capaz de generar miles de líneas de código.
        El arnés son las <strong>riendas</strong> que le pones para que el galope sea útil —
        el ingeniero ya no escribe el código, <strong>diseña el arnés</strong> que sujeta al modelo.
      </p>
    </header>

    <section class="components" aria-label="Los 4 componentes del arnés">
      <header class="components-header">
        <span class="dot"></span>
        <span>Cualquier arnés se descompone en 4 piezas</span>
      </header>
      <div class="components-grid">
        {#each components as c}
          <article class="card-glass component">
            <div class="c-tag" style:color={c.color} style:border-color={c.color} style:background={`${c.color}1f`}>
              {c.tag}
            </div>
            <h3 class="c-name">{c.name}</h3>
            <p class="c-desc">{c.desc}</p>
          </article>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }

  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 25% 20%, rgba(59, 130, 246, 0.14) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 55%);
  }

  .slide-content {
    position: relative; z-index: 1;
    width: min(1200px, 94vw);
    display: grid;
    gap: var(--spacing-xl);
  }

  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(2.2rem, 5.4vw, 3.6rem); }
  .grad {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .subtitle { margin: 0; opacity: 0.86; max-width: 80ch; line-height: 1.6; font-size: 1.05rem; }

  .components { display: grid; gap: var(--spacing-md); }
  .components-header {
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

  .components-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
  }
  .component {
    padding: var(--spacing-lg);
    display: grid;
    gap: var(--spacing-sm);
  }
  .c-tag {
    width: max-content;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid;
  }
  .c-name {
    margin: 0;
    font-family: var(--font-display);
    font-size: 1.3rem;
    color: var(--color-neutral-light);
  }
  .c-desc { margin: 0; font-size: 0.95rem; line-height: 1.55; opacity: 0.92; }

  @media (max-width: 900px) {
    .components-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 480px) {
    .components-grid { grid-template-columns: 1fr; }
  }
</style>
