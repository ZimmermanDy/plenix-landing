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
  { name:"Google Workspace", cat:"Popular", filters:["popular","comunicacion","documentos"], badge:"Nativo", initials:"GW", logo:"" },
  { name:"Slack", cat:"Comunicación", filters:["popular","comunicacion"], badge:"Nativo", initials:"SL", logo:"" , home:true },
  { name:"Microsoft Teams", cat:"Comunicación", filters:["popular","comunicacion"], badge:"Nativo", initials:"MT", logo:"" , home:true },
  { name:"Notion", cat:"Documentos", filters:["popular","documentos"], badge:"Nativo", initials:"NO", logo:"" },
  { name:"Salesforce", cat:"Ventas & CRM", filters:["popular","ventas"], badge:"API", initials:"SF", logo:"" },
  { name:"Jira", cat:"Desarrollo", filters:["popular","desarrollo"], badge:"Nativo", initials:"JI", logo:"" , home:true },
  { name:"Gmail", cat:"Comunicación", filters:["comunicacion"], badge:"Nativo", initials:"GM", logo:"" },
  { name:"Outlook", cat:"Comunicación", filters:["comunicacion"], badge:"Nativo", initials:"OU", logo:"" },
  { name:"Google Drive", cat:"Documentos", filters:["documentos"], badge:"Nativo", initials:"GD", logo:"" , home:true },
  { name:"Shopify", cat:"Ventas & CRM", filters:["ventas"], badge:"API", initials:"SH", logo:"", home:true },
  { name:"Bsale", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"BS", logo:"", home:true },
  { name:"SharePoint", cat:"Documentos", filters:["documentos"], badge:"Nativo", initials:"SP", logo:"" },
  { name:"OneDrive", cat:"Documentos", filters:["documentos"], badge:"API", initials:"OD", logo:"" },
  { name:"Dropbox", cat:"Documentos", filters:["documentos"], badge:"API", initials:"DB", logo:"" },
  { name:"Confluence", cat:"Documentos", filters:["documentos","desarrollo"], badge:"Nativo", initials:"CO", logo:"" },
  { name:"Buk", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"Nativo", initials:"BK", logo:"" },
  { name:"Defontana", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"DF", logo:"" },
  { name:"Manager ERP", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"MG", logo:"" },
  { name:"SII", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"SI", logo:"" },
  { name:"Rex", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"RX", logo:"" },
  { name:"HubSpot", cat:"Ventas & CRM", filters:["ventas"], badge:"Nativo", initials:"HS", logo:"" },
  { name:"GitHub", cat:"Desarrollo", filters:["desarrollo"], badge:"Nativo", initials:"GH", logo:"" },
  { name:"GitLab", cat:"Desarrollo", filters:["desarrollo"], badge:"API", initials:"GL", logo:"" },
  { name:"Google Calendar", cat:"Productividad", filters:["productividad"], badge:"Nativo", initials:"GC", logo:"" },
  { name:"Zoom", cat:"Productividad", filters:["productividad","comunicacion"], badge:"API", initials:"ZM", logo:"" },
  { name:"Asana", cat:"Productividad", filters:["productividad"], badge:"API", initials:"AS", logo:"" },
  { name:"Trello", cat:"Productividad", filters:["productividad"], badge:"API", initials:"TR", logo:"" },
  { name:"Google SSO", cat:"Single Sign-On", filters:["sso"], badge:"Nativo", initials:"GS", logo:"" },
  { name:"Microsoft Entra ID", cat:"Single Sign-On", filters:["sso"], badge:"Nativo", initials:"EN", logo:"" },
  { name:"Okta", cat:"Single Sign-On", filters:["sso"], badge:"Nativo", initials:"OK", logo:"" }
];
