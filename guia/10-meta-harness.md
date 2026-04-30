# Slide 10 — Meta-Harness (Stanford, marzo 2026)

## Tesis
Si el harness se puede representar, se puede optimizar. Khattab et al. construyen un loop donde un proposer (Claude Code) lee traces fallidos, escribe un harness nuevo, lo evalúa y guarda el resultado. Repite.

## Mensajes clave
- DSPy tunea prompts dentro de un pipeline fijo. Meta-Harness reescribe el pipeline.
- 10M tokens por iteración, 400× más feedback que cualquier método previo.
- Los traces son irremplazables: sin ellos 50% → 34.6%. Con resúmenes en lugar de raw, igual de mal.
- El Agentic Proposer es el mismo Claude Code que tú usas, pero apuntado a optimizar harnesses en lugar de a hacer features.

## Cross-refs wiki
- [[claude-code]] — la herramienta como proposer.
- [[evals]] — cómo se mide cada iteración.
- [[crispi]] — la importancia de los traces como artefacto principal.

## Anécdota / hook
"Pensad un momento: el optimizador es un coding agent. El optimizado es otro coding agent. Es la pescadilla mordiéndose la cola — y funciona."

## Preguntas tipo del público
- *"¿Cuánto cuesta una iteración?"* → 10M tokens. No es para PoC pequeñas. Tiene sentido para harnesses que vives a vivir mucho.
- *"¿Se puede hacer en local?"* → Sí, con un modelo razonable. Pero los resultados publicados usan Opus 4.6 como proposer.

## Transición
"El resultado más importante del paper no es el score. Es lo que pasa cuando coges el harness optimizado y lo usas con otros modelos."
