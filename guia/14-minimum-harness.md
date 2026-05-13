# Slide 14 — Cómo se ve un arnés mínimo

## Tesis
Toda la teoría (NLAH, Meta-Harness, los 4 componentes, las 5 topologías) aterriza en una estructura de ficheros pequeña que cualquier equipo puede tener montada en una tarde. Con **Spec-Driven Development**, el arnés añade una capa de formalidad mínima: spec antes de implementación, gate humano en el medio.

## Mensajes clave
- **AGENTS.md** es el punto de entrada. Es lo primero que cualquier agente lee y donde viven las reglas, el mapa del repo, las convenciones.
- **`init.sh` como gate**: si los tests no pasan o falta algún fichero crítico, el script aborta y el agente *no empieza*. Los fallos los descubre la máquina, no tú a las 11 de la noche.
- **`specs/<feature>/`** contiene tres documentos: `requirements.md` (EARS notation), `design.md` y `tasks.md`. Son el contexto aislado que cada agente recibe — el implementer no lee el historial del spec-author, solo sus outputs.
- **Gate humano**: la spec se escribe pero el implementer no arranca hasta que el humano la aprueba. Esto separa el *qué* del *cómo* y protege contra alucinaciones en la especificación.
- **`progress/`** es el antídoto al teléfono descompuesto: cuando el líder spawnea subagentes, les obliga a escribir resultados aquí. El siguiente subagente lee del disco, no del contexto del padre.
- **Ciclo de vida de tarea**: `pending → spec-ready → in-progress → done`. El estado `spec-ready` es nuevo respecto al arnés básico — marca que la spec ha pasado el gate humano.
- **`.claude/agents/leader.md`, `spec-author.md`, `implementer.md`, `reviewer.md`**: cuatro roles canónicos. El `spec-author` es el que distingue el arnés SDD del arnés genérico.

## Cross-refs wiki
- [[Harness-SDD-Implementacion-BettaTech]] — la nota completa sobre este vídeo de BettaTech: arquitectura 4 agentes, EARS notation, context isolation.
- [[Harness-Engineering-Introduccion-BettaTech]] — el repo de ejemplo de BettaTech (`github.com/betta-tech/ejemplo-harness-subagentes`).
- [[harness-engineering]] — conecta con "Garbage Collection Friday" de Lopopolo: convertir feedback humano en guardrails dentro del propio repo.
- [[subagentes]] — el patrón canónico que aquí se materializa.
- [[spec-driven-development]] — la metodología SDD y sus 3 documentos.
- [[kiro]] — inspiración de AWS Kiro para la estructura de 3 docs (requirements, design, tasks).
- [[claude-code]] — los hooks que rematan el ciclo (`init.sh` al cerrar la sesión).

## Anécdota / hook
BettaTech enseña esto en menos de 5 minutos: abre Claude Code, pega "lee AGENTS.md, ejecuta init, lee el progreso y elige una feature", y el agente recorre el flujo entero solo. La sorpresa del arnés SDD es que el spec-author genera documentos que *tú* revisas antes de que empiece el código — no hay magia, pero hay un checkpoint real.

## Preguntas tipo del público
- *"¿Qué es EARS notation?"* → "When [trigger], the system shall [behavior]". Cada frase de requirement mapea 1-a-1 con un test. No hay ambigüedad, no hay interpretación libre.
- *"¿El gate humano no rompe la autonomía?"* → Al contrario: sin gate, el agente implementa contra una spec que puede ser incorrecta. Con gate, el humano invierte 5 minutos en revisar 50 líneas de markdown y se evita días de código en la dirección equivocada.
- *"¿`specs/<feature>/` no es un Linear / Jira casero?"* → Sí, intencionalmente pequeño. Cuando crezca, montas un MCP que lee Linear y proyecta sobre el mismo formato. Lo importante es la *estructura* que el agente lee, no dónde vive.
- *"¿Por qué el reviewer puede reescribirse a sí mismo? ¿No es peligroso?"* → Vive en el repo bajo control de versiones. Cualquier cambio queda como diff revisable. Al ser un fichero, es auditable.
- *"¿Y los hooks?"* → Claude Code permite ejecutar scripts en eventos (close, prompt-submit). El más útil: lanzar `init.sh` al cerrar la sesión para garantizar que no se queda el repo en estado inconsistente.

## Transición
"Y con esto, los cinco hallazgos que reformulan el campo."
