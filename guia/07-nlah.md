# Slide 7 — NLAH (Tsinghua, marzo 2026)

## Tesis
Pan et al. proponen separar el harness en tres capas con responsabilidades distintas. La capa de arriba (NLAH) es swappable; la del medio (Charter) es fija. Eso permite experimentos controlados.

## Mensajes clave
- **NLAH** (task-specific, SWAP) — Contracts, Roles, Stages, Failure taxonomy. Es lo que defines tú.
- **Runtime Charter** (universal, FIXED) — cómo se vinculan contratos, persiste estado, gestiona child agents. Es la "física" del runtime.
- **Backend** — terminal tools, multi-agent interface, primitivas de spawn & wait.
- Esta separación da al campo lo que no tenía: experimentos controlados.

## Cross-refs wiki
- [[harness-vs-runtime]] — la distinción que NLAH formaliza.
- [[evals]] — sin separación de capas no hay evaluación honesta.

## Anécdota / hook
La obsesión de Khattab (DSPy) con "make the agent compilable" es prima hermana de la obsesión de Pan con "make the harness aislable pieza a pieza". Dos equipos, dos países, mismo norte.

## Preguntas tipo del público
- *"¿Es esto otro framework más?"* → No. Es una propuesta de **representación**. Cualquier framework puede adoptar la separación.
- *"¿Hay que escribir todo en lenguaje natural?"* → No literalmente. La idea es estructura legible, formal pero no en código nativo.

## Transición
"Lo más sorprendente del paper no es la arquitectura. Es lo que pasa cuando coges un harness existente y solo le cambias la representación."
