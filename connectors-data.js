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
                "productividad"
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
  { name:"Bsale", cat:"RR.HH. & Finanzas", filters:["rrhh-finanzas"], badge:"API", initials:"BS", logo:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20866%20914%22%3E%3Cpath%20fill%3D%22%23ED6935%22%20d%3D%22M253.006592%2C400.093262%20C247.376236%2C381.910828%20248.386505%2C364.282898%20254.170685%2C346.764435%20C262.562286%2C321.348907%20280.828125%2C305.144257%20303.488556%2C292.471741%20C335.338593%2C274.660004%20366.816681%2C256.181732%20398.406494%2C237.906601%20C440.212891%2C213.721054%20481.973816%2C189.456879%20523.751892%2C165.222473%20C524.899658%2C164.556702%20525.954834%2C163.686447%20527.166199%2C163.183853%20C531.082397%2C161.559052%20530.750366%2C159.372131%20528.825806%2C156.123825%20C521.978394%2C144.566299%20515.387146%2C132.856720%20508.739288%2C121.181694%20C507.983673%2C119.854607%20507.484039%2C118.381737%20506.421661%2C115.967255%20C581.666809%2C126.701874%20655.770386%2C137.273621%20731.090637%2C148.018951%20C702.712036%2C218.785828%20674.705933%2C288.623962%20646.699768%2C358.462128%20C646.205505%2C358.388306%20645.711243%2C358.314514%20645.216980%2C358.240692%20C637.856323%2C345.513763%20630.291809%2C332.898163%20623.246948%2C319.998749%20C620.821472%2C315.557587%20618.729919%2C315.615753%20614.805481%2C317.901154%20C563.627808%2C347.704834%20512.380981%2C377.389496%20461.138580%2C407.081879%20C439.456909%2C419.645325%20417.740295%2C432.148560%20396.048157%2C444.694000%20C371.129608%2C459.105408%20362.251923%2C483.764313%20372.201416%2C510.831116%20C372.578888%2C511.858032%20372.796661%2C512.943665%20373.473816%2C515.396240%20C364.839020%2C508.697021%20357.287933%2C502.838715%20349.736938%2C496.980286%20C328.065277%2C480.166290%20306.294617%2C463.477814%20284.755585%2C446.495514%20C269.511475%2C434.476379%20258.409393%2C419.429626%20253.006592%2C400.093262%20Z%22%2F%3E%3Cpath%20fill%3D%22%23ED6935%22%20d%3D%22M514.875732%2C492.921448%20C529.192749%2C485.499908%20539.738098%2C475.193512%20544.208557%2C459.645721%20C547.582764%2C447.910309%20546.959900%2C436.312408%20542.372192%2C424.962372%20C542.063538%2C424.198669%20541.676453%2C423.463074%20541.421936%2C422.683044%20C541.337036%2C422.422729%20541.552490%2C422.064423%20541.834778%2C420.931519%20C547.919861%2C425.536346%20553.799500%2C429.880707%20559.567200%2C434.368835%20C583.318420%2C452.850708%20607.299622%2C471.049805%20630.694519%2C489.973236%20C656.530762%2C510.871429%20668.252136%2C538.087463%20664.051819%2C571.405518%20C660.277466%2C601.344177%20644.604980%2C623.327881%20618.549683%2C638.327515%20C577.826477%2C661.771240%20537.238281%2C685.449341%20496.576691%2C709.000122%20C449.623535%2C736.194824%20402.655457%2C763.363770%20355.688690%2C790.534973%20C321.947205%2C810.054993%20288.199768%2C829.564758%20254.441757%2C849.056152%20C253.107437%2C849.826660%20251.636581%2C850.360657%20249.556808%2C851.312805%20C249.379745%2C849.041809%20249.171082%2C847.619629%20249.172272%2C846.197571%20C249.202789%2C809.867920%20248.812057%2C773.530090%20249.476242%2C737.211731%20C249.852829%2C716.618713%20251.561188%2C695.984924%20257.938416%2C676.140564%20C265.259857%2C653.357971%20278.753357%2C634.549011%20298.362396%2C621.307861%20C322.267242%2C605.166138%20347.150177%2C590.427673%20371.997101%2C575.736816%20C408.279572%2C554.284607%20444.904205%2C533.411011%20481.388214%2C512.299744%20C492.446716%2C505.900787%20503.522217%2C499.531158%20514.875732%2C492.921448%20Z%22%2F%3E%3C%2Fsvg%3E", home:true },
  { name:"SharePoint", cat:"Documentos", filters:["documentos"], badge:"Nativo", initials:"SP", logo:"https://upload.wikimedia.org/wikipedia/commons/2/28/Microsoft_Office_SharePoint_%282025%E2%80%93present%29.svg" },
  { name:"OneDrive", cat:"Documentos", filters:["documentos"], badge:"API", initials:"OD", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/microsoft-onedrive.svg" },
  { name:"Dropbox", cat:"Documentos", filters:["documentos"], badge:"API", initials:"DB", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/dropbox.svg" },
  { name:"Confluence", cat:"Documentos", filters:["documentos","desarrollo"], badge:"Nativo", initials:"CO", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/confluence.svg" },
  { name:"GitHub", cat:"Desarrollo", filters:["desarrollo"], badge:"Nativo", initials:"GH", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/github-icon.svg" },
  { name:"Google Calendar", cat:"Productividad", filters:["productividad"], badge:"Nativo", initials:"GC", logo:"https://cdn.jsdelivr.net/gh/gilbarbara/logos@42037415f0df19cd82b3853c18a967a81783f921/logos/google-calendar.svg" }
];
