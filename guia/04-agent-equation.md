# Slide 4 — Agent = Model + Harness

## Tesis
Un agente es un modelo más todo lo que lo rodea. La analogía del sistema operativo lo hace operativo: el LLM es la CPU, el harness es el SO.

## Mensajes clave
- LangChain: "Si no eres el modelo, eres el harness".
- Harness = todo lo que no son pesos del modelo: system prompts, tools, orquestación, memoria, verificación, safety.
- El LLM en crudo es inerte. Sin harness no hay trabajo útil.

## Cross-refs wiki
- [[harness-engineering]] — la perspectiva operativa de Lopopolo.
- [[harness-vs-runtime]] — la distinción entre lo que cambia por tarea y lo que es universal.
- [[mcp]] — los "drivers" del agente moderno.

## Anécdota / hook
La analogía CPU/SO no la inventaron Pan ni Khattab — lleva años circulando — pero los papers la formalizan operativamente.

## Preguntas tipo del público
- *"¿Y MCP dónde encaja?"* → Como driver / device layer. Es la API estandarizada para que el harness conecte tools.
- *"¿El system prompt es harness o modelo?"* → Harness. Está fuera de los pesos.

## Transición
"Anthropic estudió cómo se compone ese harness en agentes reales y encontró 5 patrones canónicos."
