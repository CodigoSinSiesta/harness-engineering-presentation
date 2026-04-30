# Slide 14 — Cómo se ve un arnés mínimo

## Tesis
Toda la teoría (NLAH, Meta-Harness, los 4 componentes, las 5 topologías) aterriza en una estructura de ficheros pequeña que cualquier equipo puede tener montada en una tarde. El repo *es* el sistema.

## Mensajes clave
- **AGENTS.md** es el punto de entrada. Es lo primero que cualquier agente lee y donde viven las reglas, el mapa del repo, las convenciones.
- **`init.sh` como gate**: si los tests no pasan o falta algún fichero crítico, el script aborta y el agente *no empieza*. Los fallos los descubre la máquina, no tú a las 11 de la noche.
- **`featurelist.json`** convierte el backlog en algo que un agente puede leer sin ambigüedad. Anthropic recomienda exactamente este patrón en su artículo de multi-agent research.
- **`progress/`** es el antídoto al teléfono descompuesto: cuando el líder spawnea subagentes, les obliga a escribir resultados aquí. El siguiente subagente lee del disco, no del contexto del padre.
- **`.claude/agents/leader.md`, `implementer.md`, `reviewer.md`**: los tres roles canónicos de orquestación. El reviewer puede modificarse a sí mismo si detecta un patrón nuevo de error.

## Cross-refs wiki
- [[Harness-Engineering-Introduccion-BettaTech]] — el repo de ejemplo de BettaTech (`github.com/betta-tech/ejemplo-harness-subagentes`).
- [[harness-engineering]] — conecta con "Garbage Collection Friday" de Lopopolo: convertir feedback humano en guardrails dentro del propio repo.
- [[subagentes]] — el patrón canónico que aquí se materializa.
- [[crispi]] — el equivalente de `init.sh` como pre-trabajo gate.
- [[claude-code]] — los hooks que rematan el ciclo (`init.sh` al cerrar la sesión).

## Anécdota / hook
BettaTech enseña esto en menos de 5 minutos: abre Claude Code, pega "lee AGENTS.md, ejecuta init, lee el progreso y elige una feature", y el agente recorre el flujo entero solo. La sorpresa es que **no hay magia** — son ficheros planos, scripts bash, y un poco de disciplina sobre dónde escribe cada agente.

## Preguntas tipo del público
- *"¿Esto sustituye a Cursor / Copilot?"* → No, complementa. Esto es la capa de orquestación; Cursor/Copilot son tools que tu líder podría invocar.
- *"¿`featurelist.json` no es un Linear / Jira casero?"* → Sí, intencionalmente pequeño. Cuando crezca, montas un MCP que lea Linear y proyecta sobre el mismo formato. Lo importante es la *estructura* que el agente lee, no dónde vive.
- *"¿Por qué el reviewer puede reescribirse a sí mismo? ¿No es peligroso?"* → Vive en el repo bajo control de versiones. Cualquier cambio queda como diff revisable. Al ser un fichero, es auditable.
- *"¿Y los hooks?"* → Claude Code permite ejecutar scripts en eventos (close, prompt-submit). El más útil: lanzar `init.sh` al cerrar la sesión para garantizar que no se queda el repo en estado inconsistente.

## Transición
"Y con esto, los cinco hallazgos que reformulan el campo."
