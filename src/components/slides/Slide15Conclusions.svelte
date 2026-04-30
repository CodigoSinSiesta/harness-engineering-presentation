<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const conclusions = [
    {
      n: '01',
      head: 'Cambio de paradigma, no optimización',
      body: 'La pregunta operativa cambia: deja de ser "qué modelo elijo" y pasa a ser <strong>"qué estructura quito"</strong>. Invierte el reflejo de añadir verificadores y multi-candidate.'
    },
    {
      n: '02',
      head: 'El harness es el activo de primer nivel',
      body: 'Si un harness mejora 5 modelos sin retoque, vale más que cualquier modelo individual. <strong>Cambia la economía del producto y reduce la dependencia del proveedor.</strong>'
    },
    {
      n: '03',
      head: 'La representación es decisión arquitectónica',
      body: 'El +16.8 pts de NLAH solo por cambiar de código a lenguaje natural estructurado implica que la elección de DSL/prompt-as-code <strong>es un parámetro de rendimiento</strong>, no estilístico.'
    },
    {
      n: '04',
      head: 'La verificación naive es trampa cara',
      body: 'Añadir verificadores y búsqueda multi-candidato <strong>empeora el rendimiento</strong> mientras dispara el coste. Lo único que ayuda consistentemente es <em>estrechar</em> el loop del propio agente.'
    },
    {
      n: '05',
      head: 'La disciplina es de sustracción',
      body: 'Vercel −80% herramientas. Manus 5 reescrituras. Anthropic eliminando reinicios de contexto. <strong>El harness se mantiene vivo podándolo</strong>, no engordándolo.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 15 · Conclusiones</p>
      <h2 class="title">Cinco hallazgos que <span class="grad">reformulan el campo</span>.</h2>
    </header>

    <section class="conclusions">
      {#each conclusions as c}
        <article class="card-glass conclusion">
          <span class="c-num">{c.n}</span>
          <div class="c-body">
            <h3 class="c-head">{c.head}</h3>
            <p class="c-text">{@html c.body}</p>
          </div>
        </article>
      {/each}
    </section>

    <p class="closer">
      <strong>Si construyes agentes, ya eres un harness engineer</strong> — lo llames así o no.
      La pregunta deja de ser qué modelo elegir. Pasa a ser <em>qué estructura eliminar</em>.
    </p>
  </div>
</div>

<style>
  .swiper-slide { position: relative; min-height: 100vh; display: grid; place-items: center; overflow: hidden; padding: var(--spacing-lg) 0; }
  .slide-background {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.13) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 70%, rgba(167, 139, 250, 0.08) 0%, transparent 55%);
  }
  .slide-content { position: relative; z-index: 1; width: min(1200px, 94vw); display: grid; gap: var(--spacing-lg); }
  .slide-header { display: grid; gap: var(--spacing-sm); }
  .label { margin: 0; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); }
  .title { margin: 0; font-size: clamp(1.9rem, 4.6vw, 3rem); }
  .grad {
    background: linear-gradient(135deg, #60A5FA 0%, #a78bfa 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .conclusions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
  .conclusion {
    padding: var(--spacing-md) var(--spacing-lg);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--spacing-md);
    align-items: start;
  }
  .conclusion:last-child { grid-column: 1 / -1; }

  .c-num {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: 2rem;
    line-height: 1;
    background: linear-gradient(135deg, #60A5FA 0%, #a78bfa 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    font-variant-numeric: tabular-nums;
    opacity: 0.85;
  }

  .c-body { display: grid; gap: var(--spacing-xs); }
  .c-head {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.3;
    color: var(--color-neutral-light);
  }
  .c-text {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
    opacity: 0.92;
  }

  .closer {
    margin: 0;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.55;
    opacity: 0.94;
    max-width: 80ch;
    justify-self: center;
  }

  @media (max-width: 900px) {
    .conclusions { grid-template-columns: 1fr; }
    .conclusion:last-child { grid-column: auto; }
  }
</style>
