# 211 Millas de Esperanza - Venezuela

Página de seguimiento (no oficial) para la caminata de Mauricio Fuentes y su primo Alfredo por el John Muir Trail — Yosemite a Mt. Whitney — a beneficio de los niños afectados por los terremotos de junio 2026 en Venezuela.

🔗 **Sitio en vivo:** _(agregar link de Netlify aquí una vez publicado)_

## Sobre esta página

Esta página es un tracker construido por la familia, no la fundación oficial. No recolecta ni procesa fondos — todas las donaciones van directo a Fundación Proyecto de la Mano vía los canales oficiales (link, Zelle, Venmo) listados en la página.

Sitio bilingüe (español / inglés), un solo archivo HTML autocontenido.

## Cómo actualizar el progreso

Todo lo que cambia semana a semana vive en un solo lugar: el bloque `CAMPAIGN_DATA` cerca del final de `index.html`.

1. Edita directo en GitHub: abre `index.html`, clic en el ícono de lápiz (✏️) arriba a la derecha del archivo.
2. Busca `CAMPAIGN_DATA` y actualiza:
   - `milesWalked` — millas completadas
   - `amountRaised` — estimado recaudado en USD
   - `lastUpdated` — fecha de esta actualización (formato YYYY-MM-DD)
3. Dale "Commit changes" — Netlify redespliega solo, en menos de un minuto.

## Agregar fotos

En la sección de fotos, reemplaza cada `<div class="photo-slot">` por `<img src="ruta-de-la-foto.jpg" alt="...">`.
