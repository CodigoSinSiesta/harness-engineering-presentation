# Slide 3 — El arnés del caballo

## Tesis
La disciplina se llama harness por una razón concreta: el LLM es un caballo desbocado capaz de generar miles de líneas, y el ingeniero pasa de teclear código a poner las riendas. Cualquier arnés se descompone en 4 piezas: contexto, herramientas, memoria, validación.

## Mensajes clave
- El nombre no es marketing: la metáfora del arnés sobre el caballo es literal — sujetar y dirigir un sistema potente pero impredecible.
- Hoy es más rápido escribir código que leerlo, así que la atención humana se mueve a controlar el ritmo del modelo, no a teclear.
- Los 4 componentes son universales: independientemente del framework, todo arnés tiene los 4. Si te falta uno, lo estás haciendo a mano.
- **Memoria** es el componente más infravalorado: sacar información fuera de la ventana de contexto evita la degradación que empieza al ~20% de uso.
- **Validación** es el más mal entendido: la IA no puede *decir* que algo está hecho — tiene que *demostrarlo* con tests, navegador, o reviewer.

## Cross-refs wiki
- [[Harness-Engineering-Introduccion-BettaTech]] — la nota canónica que aterriza esta misma estructura en español.
- [[harness-engineering]] — la perspectiva operativa de Lopopolo (OpenAI).
- [[12-factor-agents]] — Horthy nombra estos mismos 4 ejes con otros nombres.
- [[instruction-budget]] — por qué la memoria externa es necesaria.

## Anécdota / hook
> "Cada vez que tienes que decirle 'continúa' al agente es un fallo del harness." — Ryan Lopopolo, OpenAI.

Si tu agente necesita ese empujón humano, es que falta una de las 4 piezas. La metáfora del caballo está hecha exactamente para esto: si tienes que sujetarlo a mano, las riendas no estaban bien puestas.

## Preguntas tipo del público
- *"¿Skills y MCP encajan en cuál de los 4?"* → Skills en **Contexto** (instrucciones que entran al prompt). MCP en **Herramientas** (drivers que el modelo invoca).
- *"¿La memoria son embeddings o ficheros planos?"* → Cualquiera de los dos. BettaTech usa ficheros (`progress/`); también vale SQLite o vector store. Lo importante es que vive *fuera* de la ventana de contexto.
- *"¿Validación es lo mismo que tests?"* → Tests son una forma. También: levantar navegador, reviewer agent, ejecutar `init.sh`. La regla es "demostrar, no decir".

## Transición
"Si todo arnés tiene esas 4 piezas, podemos formalizarlo: Agent = Model + Harness."
