/*
  connectors-data.js
  -------------------
  Lista de integraciones que se muestran en integraciones.html
  (carrusel superior + directorio filtrable). Edita este archivo
  para agregar, quitar o modificar conectores — no necesitas tocar
  el HTML ni el CSS de la página.

  Cómo agregar un conector nuevo:
  Copia un bloque { ... } y pégalo dentro del arreglo CONNECTORS,
  completando los campos:

    name      → Nombre visible del conector. Ej: "Slack"
    cat       → Categoría visible en la tarjeta. Ej: "Comunicación"
    filters   → Lista de categorías por las que se puede filtrar.
                Usa uno o más de estos valores:
                "popular", "comunicacion", "documentos",
                "rrhh-finanzas", "ventas", "desarrollo",
                "productividad", "sso"
    badge     → Texto corto del tipo de integración.
                Ej: "Nativo", "API", "MCP"
    initials  → 2 letras que se muestran si no hay logo (fallback).
    logo      → (opcional) URL de una imagen del logo. Si la dejas
                vacía (""), se muestra el círculo con las iniciales.
                Puede ser una URL externa (https://...) o una ruta
                local a un archivo que subas junto a este sitio,
                por ejemplo "logos/slack.svg".

    home      → (opcional) true para que este conector tambien
                aparezca en la seccion "Contecta con tus Apps" del
                home (index.html). Si lo omites o lo dejas en false,
                el conector solo aparece en la pagina de Integraciones.

  Para quitar un conector, borra su bloque completo (incluyendo
  la coma que lo separa del siguiente).
*/

const CONNECTORS = [
  { name:"Google Workspace", cat:"Popular", filters:["popular","comunicacion","documentos"], badge:"Nativo", initials:"GW", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/google-icon.svg" },
  { name:"Slack", cat:"Comunicación", filters:["popular","comunicacion"], badge:"Nativo", initials:"SL", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/slack-icon.svg" , home:true },
  { name:"Microsoft Teams", cat:"Comunicación", filters:["popular","comunicacion"], badge:"Nativo", initials:"MT", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/microsoft-teams.svg" , home:true },
  { name:"Notion", cat:"Documentos", filters:["popular","documentos"], badge:"Nativo", initials:"NO", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/notion-icon.svg" },
  { name:"Jira", cat:"Desarrollo", filters:["popular","desarrollo"], badge:"Nativo", initials:"JI", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/jira.svg" , home:true },
  { name:"Gmail", cat:"Comunicación", filters:["comunicacion"], badge:"Nativo", initials:"GM", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/google-gmail.svg" },
  { name:"Outlook", cat:"Comunicación", filters:["comunicacion"], badge:"Nativo", initials:"OU", logo:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg" },
  { name:"Google Drive", cat:"Documentos", filters:["documentos"], badge:"Nativo", initials:"GD", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/google-drive.svg" , home:true },
  { name:"Shopify", cat:"Ventas & CRM", filters:["ventas"], badge:"API", initials:"SH", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/shopify.svg", home:true },
  { name:"Bsale", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"BS", logo:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20d%3D%22M10%2030%20L26%2010%20L34%2010%20L18%2030%20L26%2030%20L14%2044%20L6%2044%20L20%2026%20L12%2026%20Z%22%20fill%3D%22%23FF6A1A%22/%3E%3C/svg%3E", home:true },
  { name:"SharePoint", cat:"Documentos", filters:["documentos"], badge:"Nativo", initials:"SP", logo:"https://upload.wikimedia.org/wikipedia/commons/2/28/Microsoft_Office_SharePoint_%282025%E2%80%93present%29.svg" },
  { name:"OneDrive", cat:"Documentos", filters:["documentos"], badge:"API", initials:"OD", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/microsoft-onedrive.svg" },
  { name:"Dropbox", cat:"Documentos", filters:["documentos"], badge:"API", initials:"DB", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/dropbox.svg" },
  { name:"Confluence", cat:"Documentos", filters:["documentos","desarrollo"], badge:"Nativo", initials:"CO", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/confluence.svg" },
  { name:"GitHub", cat:"Desarrollo", filters:["desarrollo"], badge:"Nativo", initials:"GH", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/github-icon.svg" },
  { name:"Google Calendar", cat:"Productividad", filters:["productividad"], badge:"Nativo", initials:"GC", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/google-calendar.svg" }
];
