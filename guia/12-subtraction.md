# Slide 12 — El oficio de sustracción

## Tesis
Cada componente del harness codifica una asunción sobre lo que el modelo no puede hacer solo. Cuando el modelo aprende a hacerlo, el componente caduca. La disciplina madura es podar.

## Mensajes clave
- **Vercel** quitó el 80% de las tools de un agente y mejoró el resultado.
- **Manus** reescribió su harness 5 veces en 6 meses, cada vez más simple.
- **Anthropic** eliminó context resets cuando Opus 4.6 dejó de necesitarlos.
- El espacio del harness no se encoge cuando los modelos mejoran — se mueve.

## Cross-refs wiki
- [[crispi]] — la idea de plan revisable que se borra cuando se cumple.
- [[harness-engineering]] — Lopopolo: "el código es libre, lo escaso es el harness".

## Anécdota / hook
"Es el principio de YAGNI aplicado al harness. La diferencia es que aquí YAGNI no es opinión — es cuantificable: si lo quitas y la métrica no baja, no lo necesitabas."

## Preguntas tipo del público
- *"¿Cómo sé qué quitar?"* → Mide cada módulo aislado. Si su delta no es claramente positivo, quita.
- *"¿Y si lo quito y mañana lo necesito?"* → Es código en git. Lo restauras. Pero la deuda de mantener algo "por si acaso" es real y silenciosa.

## Transición
"Resumimos los cinco hallazgos que reformulan el campo y las acciones concretas que salen de ellos."
