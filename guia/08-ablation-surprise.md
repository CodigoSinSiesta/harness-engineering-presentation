# Slide 8 — The Ablation Surprise

## Tesis
Más estructura no implica mejor agente. La intuición naive ("más comprobaciones = más calidad") es falsa. El único módulo consistentemente útil es self-evolution (acceptance-gated retry loop).

## Mensajes clave
- ~75% Resolved con todo activo y también solo con LLM + tools. **14× el cómputo para el mismo resultado.**
- Verifiers: −0.8 / −8.4. Multi-candidate search: −2.4 / −5.6. Activamente perjudican.
- Self-evolution: +4.8 / +2.7. Lo único que ayuda — y porque *estrecha* el loop, no porque amplía.

## Cross-refs wiki
- [[evals]] — verificadores naive son trampas caras.
- [[ladder-of-trust]] — narrowing disciplinado es subir la escalera con criterios objetivables.
- [[coste-total-tokens]] — 14× cómputo sin retorno es deuda invisible.

## Anécdota / hook
"Esto va a doler a mucha gente que ha invertido meses en validators y multi-candidate. Tenedlo en mente: el paper no dice que sean inútiles, dice que naive hurts. Hay que medir antes de añadir."

## Preguntas tipo del público
- *"¿Entonces no debo añadir verificadores nunca?"* → Añade solo los que *demuestren con datos* que mejoran tu métrica. La default debería ser no tenerlos.
- *"¿Self-evolution es lo mismo que retry?"* → No. Es retry con gate de aceptación que solo amplía cuando la señal de fallo lo justifica.

## Transición
"Si cambiar la representación vale 16 puntos y la ablación nos dice que menos es más, entonces el harness es algo optimizable. Eso es lo que hace Stanford."
