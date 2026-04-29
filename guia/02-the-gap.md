# Slide 2 — El gap del 6×

## Tesis
La lógica que envuelve al LLM produce hoy más variación de rendimiento que el propio modelo. La diferencia entre un buen agente y uno mediocre ya no la marca el modelo.

## Mensajes clave
- Stanford documentó el 6× empíricamente. No es opinión.
- LangChain lo confirmó en TerminalBench 2.0: del puesto 30+ al 5 modificando solo el harness.
- El modelo es importante, pero ha dejado de ser el factor dominante.

## Cross-refs wiki
- [[evals]] — cómo medir rendimiento de agentes sin engañarse.
- [[crispi]] — el patrón de plan + revisión que aprovecha esto.

## Anécdota / hook
Recuerda al público: TerminalBench 2.0 es un benchmark de tareas reales en terminal. El paso de #30 a #5 implica miles de horas-LLM evaluadas.

## Preguntas tipo del público
- *"¿Eso significa que da igual el modelo?"* → No. Significa que dado un modelo razonable, el harness explica más varianza que cambiar de modelo.
- *"¿De qué año son los datos?"* → Stanford y LangChain, 2026.

## Transición
"Entonces, ¿qué es exactamente este 'harness' del que hablamos?"
