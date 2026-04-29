# Slide 4 — Los 5 patrones canónicos

## Tesis
Anthropic identificó 5 topologías de orquestación que cubren la mayoría de agentes en producción. No son alternativas mutuamente excluyentes — un agente real combina varios.

## Mensajes clave
- **Prompt Chaining** — el más simple. Pipeline determinista.
- **Routing** — clasificador que delega.
- **Parallelization** — fan-out / fan-in. Útil para retrieval o ensembles.
- **Orch-Workers** — maestro descompone, workers ejecutan, maestro integra.
- **Eval-Optimizer** — generador + evaluador con retry. El más potente cuando "está bien" es objetivable.

## Cross-refs wiki
- [[patrones-ia]] — taxonomía completa con ejemplos.
- [[orquestacion]] — el cómo del orquestador.
- [[subagentes]] — patrón orch-workers en Claude Code.

## Anécdota / hook
"Si miras un agente cualquiera de producción y no eres capaz de dibujarlo en uno de estos 5 diagramas, probablemente esté mal arquitecturado o estés viendo algo demasiado plano."

## Preguntas tipo del público
- *"¿Hay algún patrón mejor que otro?"* → No. El paper de NLAH muestra que self-evolution (eval-optimizer narrowing) es el único módulo consistentemente positivo, pero el patrón depende de la tarea.
- *"¿Y el ReAct?"* → Es un caso particular de eval-optimizer con verificación implícita en el modelo.

## Transición
"Pero hasta hace nada, todo esto se construía de forma caótica. Vamos a verlo."
