# Slide 8 — +16.8 puntos solo por representación

## Tesis
Migrar OS-Symphony (harness en código nativo) a representación NLAH, sin tocar el algoritmo ni cambiar el modelo, da +16.8 puntos. La representación es decisión arquitectónica, no estilística.

## Mensajes clave
- Mismo modelo, misma lógica, distinta forma de expresarla.
- Los repair loops frágiles del código se sustituyen por runtime state durable y artifact-backed completion.
- Los números: accuracy +55%, runtime −61%, LLM calls −97%.

## Cross-refs wiki
- [[crispi]] — escribir planes en prose revisable es la misma idea aplicada al planning.
- [[12-factor-agents]] — Horthy: "control the control flow, don't fatten the prompt".

## Anécdota / hook
"Cuando vi este resultado por primera vez fue cuando me convencí de que esto no era una moda. +55% de accuracy reescribiendo el mismo algoritmo en otra forma — eso es física, no estética."

## Preguntas tipo del público
- *"¿Funciona también si reescribo en YAML?"* → Probablemente menos. La estructura permite ablación, pero el lenguaje natural permite que el modelo razone sobre el harness mismo.
- *"¿Cualquier harness gana 16 puntos?"* → No. Este es el caso reportado. La magnitud depende de cuánto repair loop frágil tuvieras.

## Transición
"El siguiente hallazgo es aún más contraintuitivo: todo el mundo añade verificadores y multi-candidate. El paper dice que ambos perjudican."
