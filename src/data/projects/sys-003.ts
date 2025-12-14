export const sys003 = {
    id: "SYS-003",
    title: "The Headhunter",
    metadata: {
        status: "DEPLOYED // AUTOMATED",
        stack: ["n8n", "Apify", "Notion API", "Google Sheets", "Telegram Bot"],
        location: {
            es: "Self-Hosted (Pi5)",
            en: "Self-Hosted (Pi5)"
        }
    },
    sections: [
        {
            type: "header",
            title: "HEADER / METADATA",
            content: [
                {
                    subtitle: { es: "Project Identity", en: "Project Identity" },
                    text: "PROJECT_ID: SYS-003 \"THE HEADHUNTER\" | CLIENT: Somos Empleables (Consultora RRHH) | TYPE: Enterprise Automation / ETL"
                },
                {
                    subtitle: "Tech Stack",
                    text: "STACK: n8n (Self-Hosted) | Apify | Notion API | Google Sheets Query | Telegram Bot"
                }
            ]
        },
        {
            type: "abstract",
            title: { es: "ABSTRACT (THE BOTTLENECK & SOLUTION)", en: "ABSTRACT (THE BOTTLENECK & SOLUTION)" },
            content: [
                {
                    subtitle: { es: "El Problema", en: "The Problem" },
                    text: {
                        es: "El cliente ejecutaba una operación manual insostenible: extracción de vacantes mediante actores de scraping manuales, exportación a CSV, limpieza artesanal y publicación en Drive. Esto generaba latencia en la información y datos \"sucios\" (ofertas cerradas mezcladas con activas).",
                        en: "The client was running an unsustainable manual operation: extracting job vacancies via manual scraping actors, exporting to CSV, artisanal cleaning, and publishing to Drive. This generated information latency and \"dirty\" data (closed offers mixed with active ones)."
                    }
                },
                {
                    subtitle: { es: "La Solución", en: "The Solution" },
                    text: {
                        es: "Se diseñó una arquitectura de procesamiento de datos de nivel agencia, desplegada en un servidor propio (Pi5). No es un simple bot; es un Sistema ETL (Extract, Transform, Load) completo que orquesta la búsqueda, limpieza, clasificación y distribución de miles de ofertas laborales diarias sin intervención humana.",
                        en: "Designed an agency-grade data processing architecture, deployed on a private server (Pi5). It's not a simple bot; it's a complete ETL (Extract, Transform, Load) System that orchestrates the search, cleaning, classification, and distribution of thousands of daily job offers without human intervention."
                    }
                }
            ]
        },
        {
            type: "architecture",
            title: { es: "ARQUITECTURA DEL SISTEMA (THE PIPELINE)", en: "SYSTEM ARCHITECTURE (THE PIPELINE)" },
            description: {
                es: "El sistema se divide en cuatro sub-flujos secuenciales que garantizan la integridad de los datos y la personalización de la entrega.",
                en: "The system is divided into four sequential sub-flows that guarantee data integrity and delivery customization."
            },
            subsections: [
                {
                    title: { es: "Fase 1: Ingesta Inteligente (Scraper Automático)", en: "Phase 1: Intelligent Ingest (Automatic Scraper)" },
                    items: [
                        { label: "Source of Truth", text: { es: "El sistema lee una base de datos en Notion donde el cliente define los cargos a buscar. Si el cliente agrega una fila (ej. \"Data Scientist\"), el sistema reacciona automáticamente en la siguiente ejecución.", en: "The system reads a Notion database where the client defines the roles to search for. If the client adds a row (e.g., \"Data Scientist\"), the system automatically reacts in the next run." } },
                        { label: { es: "Extracción", en: "Extraction" }, text: { es: "Ejecución diaria de actores en Apify que extraen solo las ofertas de las últimas 24 horas (\"Delta Load\") para optimizar recursos.", en: "Daily execution of Apify actors that extract only offers from the last 24 hours (\"Delta Load\") to optimize resources." } },
                        { label: { es: "Compilado Maestro", en: "Master Compile" }, text: { es: "Todos los datos crudos se vierten en una base centralizada.", en: "All raw data is poured into a centralized database." } }
                    ],
                    image: "/images/sys-003/scrappern8n.webp"
                },
                {
                    title: { es: "Fase 2: Orquestación y \"Self-Healing\"", en: "Phase 2: Orchestration & Self-Healing" },
                    text: {
                        es: "Aquí reside la verdadera ingeniería. El sistema es capaz de adaptarse a nuevos requerimientos sin recodificar.",
                        en: "True engineering lies here. The system is capable of adapting to new requirements without recoding."
                    },
                    items: [
                        { label: { es: "Creación Dinámica", en: "Dynamic Creation" }, text: { es: "Mediante HTTP Requests, el sistema audita las hojas de cálculo existentes. Si detecta un cargo nuevo en Notion que no tiene hoja de destino, la crea automáticamente.", en: "Via HTTP Requests, the system audits existing spreadsheets. If it detects a new role in Notion that has no destination sheet, it creates it automatically." } },
                        { label: { es: "Inyección de Lógica", en: "Logic Injection" }, text: { es: "Se utiliza un nodo de código para generar un JSON que inyecta una Query de Google Sheets en la fila 1 de cada hoja nueva. Esto permite que cada hoja filtre automáticamente su propio cargo (ej. SELECT * WHERE Col1 contains 'Data') sin intervención manual.", en: "A code node is used to generate a JSON that injects a Google Sheets Query into row 1 of each new sheet. This allows each sheet to automatically filter its own role (e.g., SELECT * WHERE Col1 contains 'Data') without manual intervention." } },
                        { label: { es: "Indexación", en: "Indexing" }, text: { es: "Se genera y actualiza una hoja \"Master Index\" que mapea Cargo, URL de la Hoja y Conteo de Ofertas.", en: "A \"Master Index\" sheet is generated and updated, mapping Role, Sheet URL, and Offer Count." } }
                    ],
                    image: "/images/sys-003/compiladoindex.webp"
                },
                {
                    title: { es: "Fase 3: Limpieza y Sincronización Bidireccional", en: "Phase 3: Cleaning & 2-Way Sync" },
                    items: [
                        { label: { es: "Política de Retención", en: "Retention Policy" }, text: { es: "Un filtro automático elimina ofertas con más de 14 días de antigüedad para garantizar que los candidatos solo vean oportunidades vigentes.", en: "An automatic filter removes offers older than 14 days to ensure candidates only see current opportunities." } },
                        { label: "Sync Notion <-> Sheets", text: { es: "El sistema compara el conteo real de ofertas en el Index y actualiza la columna \"Ofertas Disponibles\" en el CRM de Notion del cliente, manteniendo ambas plataformas en perfecta sincronía.", en: "The system compares the actual offer count in the Index and updates the \"Available Offers\" column in the client's Notion CRM, keeping both platforms in perfect sync." } }
                    ]
                },
                {
                    title: { es: "Fase 4: Algoritmo de Coincidencia (Match & Append)", en: "Phase 4: Matching Algorithm (Match & Append)" },
                    text: {
                        es: "Un flujo inteligente ejecutado cada 3 días mediante un 'Shield Trigger' para personalizar la experiencia del candidato.",
                        en: "Reserved intelligent flow executed every 3 days via a 'Shield Trigger' to customize the candidate experience."
                    },
                    items: [
                        { label: { es: "Limpieza Previa", en: "Pre-Cleaning" }, text: { es: "Primero, se eliminan las ofertas obsoletas o expiradas directamente de la 'Ficha Profesional' del usuario en Notion.", en: "First, obsolete or expired offers are removed directly from the user's 'Professional Card' in Notion." } },
                        { label: "Matching Logic", text: { es: "El sistema recupera los perfiles de candidatos y sus keywords. Mediante un loop, cruza estas palabras clave con la base de datos maestra de vacantes vigentes.", en: "The system retrieves candidate profiles and keywords. Or a loop, crosses these keywords with the master database of current vacancies." } },
                        { label: "Ranking & Delivery", text: { es: "Selecciona el Top 5 de ofertas con mayor coincidencia para cada perfil y las inyecta (Append) automáticamente en su ficha de Notion. Resultado: Cada usuario recibe un feed de vacantes 100% personalizado y actualizado sin mover un dedo.", en: "Selects the Top 5 best-matching offers for each profile and automatically injects (Append) them into their Notion card. Result: Each user receives a 100% personalized and updated vacancy feed without lifting a finger." } }
                    ],
                    image: "/images/sys-003/flujoscompletos.webp"
                }
            ]
        },
        {
            type: "observability",
            title: { es: "OBSERVABILIDAD Y CONTROL DE ERRORES", en: "OBSERVABILITY & ERROR CONTROL" },
            description: {
                es: "Para un sistema que opera sin supervisión, el silencio es peligroso. Se implementó un sistema de monitoreo de grado DevOps.",
                en: "For a system operating unsupervised, silence is dangerous. A DevOps-grade monitoring system was implemented."
            },
            subsections: [
                {
                    title: "Telegram Watchdog",
                    text: {
                        es: "Un bot dedicado reporta el estado de cada ejecución.",
                        en: "A dedicated bot reports execution status."
                    },
                    items: [
                        { label: "Success", text: { es: "Reporte de cuántas ofertas se agregaron y links al Index actualizado.", en: "Report on how many offers were added and links to the updated Index." } },
                        { label: "Failure", text: { es: "En caso de error, envía un mensaje con stacktrace limpio, indicando exactamente qué nodo falló y un link directo a la ejecución para debugging inmediato.", en: "In case of error, sends a message with clean stacktrace, indicating exactly which node failed and a direct link to the execution for immediate debugging." } }
                    ]
                }
            ]
        },
    ],
    appendix: {
        title: { es: "RESUMEN TÉCNICO", en: "TECHNICAL SUMMARY" },
        items: [
            { label: "Orchestrator", value: "n8n" },
            { label: "Integrations", value: "5+ APIs" },
            { label: "Volume", value: "1k+ Daily Rows" },
            { label: "Uptime", value: "99.9%" }
        ]
    }
};
