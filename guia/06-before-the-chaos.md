# Slide 6 — El estado caótico antes de la formalización

## Tesis
Sin representación explícita del harness, aislar qué cambio causa qué efecto es imposible. Dos sistemas que "diferían en una decisión" en realidad diferían simultáneamente en cuatro dimensiones — y nadie podía aislar cuál importaba.

## Mensajes clave
- Sistemas A y B con prompts, tools, gates y state cambiando a la vez = no hay forma de atribuir el delta.
- Anthropic identificó dos modos de fallo recurrentes: **One-Shotting** (agotar contexto) y **Premature Completion** (declarar victoria sin verificar).
- La consecuencia: el campo era artesanal, productivo pero ad hoc.

## Cross-refs wiki
- [[12-factor-agents]] — Horthy llegó al mismo diagnóstico desde otra dirección.
- [[crispi]] — patrón de plan revisable que evita estos modos de fallo.

## Anécdota / hook
"Levantad la mano quien haya tenido que debuggear un agente que falló en la 3ª de 6 etapas y la sesión siguiente no se acordó de nada." (Casi todos.)

## Preguntas tipo del público
- *"¿Esto no es lo que ReAct ya resolvía?"* → Solo parcialmente. ReAct cubre el razonamiento, no la persistencia entre sesiones.
- *"¿Cómo se evita Premature Completion?"* → Con execution contracts y artifact-backed verification — lo veremos en NLAH.

## Transición
"En marzo de 2026, dos papers atacaron este problema desde direcciones opuestas. Empezamos por el de Tsinghua."
