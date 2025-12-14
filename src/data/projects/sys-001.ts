export const sys001 = {
    id: "SYS-001",
    title: {
        es: "Personal Performance & Habit Data Analysis",
        en: "Personal Performance & Habit Data Analysis"
    },
    metadata: {
        status: "LIVE // EVOLVING",
        stack: ["Python 3.11", "Raspberry Pi 5", "Docker", "Streamlit", "Cloudflare", "Whoop API", "Strava API", "Notion API", "Chess.com API", "Lichess API"],
        location: "https://streamlit.maikleonlab.com/"
    },
    sections: [
        {
            type: "abstract",
            title: { es: "ABSTRACT (RESUMEN EJECUTIVO)", en: "ABSTRACT (EXECUTIVE SUMMARY)" },
            content: [
                {
                    subtitle: { es: "La Premisa", en: "The Premise" },
                    text: {
                        es: "El rendimiento humano no es aleatorio; es una variable dependiente de múltiples factores fisiológicos y ambientales. Sin embargo, los datos que explican estos factores suelen estar fragmentados en silos cerrados (Whoop, Strava, Notion, Chess.com).",
                        en: "Human performance is not random; it is a variable dependent on multiple physiological and environmental factors. However, the data explaining these factors is often fragmented in closed silos (Whoop, Strava, Notion, Chess.com)."
                    }
                },
                {
                    subtitle: { es: "La Solución", en: "The Solution" },
                    text: {
                        es: "Se diseñó e implementó un sistema de ingeniería inversa de la fisiología personal. Una arquitectura ETL (Extract, Transform, Load) automatizada que unifica métricas de recuperación, carga cardiovascular, productividad, uso de pantalla y desempeño cognitivo (Elo en Ajedrez) en un \"Gran Libro Maestro\" (Data Master). El objetivo final es correlacionar variables biológicas con el rendimiento cognitivo mediante análisis de datos en un entorno privado y soberano.",
                        en: "Designed and implemented a personal physiology reverse engineering system. An automated ETL (Extract, Transform, Load) architecture that unifies recovery metrics, cardiovascular load, productivity, screen time, and cognitive performance (Chess Elo) into a \"Master Ledger\" (Data Master). The ultimate goal is to correlate biological variables with cognitive performance through data analysis in a private and sovereign environment."
                    }
                }
            ]
        },
        {
            type: "architecture",
            title: { es: "ARQUITECTURA DEL SISTEMA (PIPELINE)", en: "SYSTEM ARCHITECTURE (PIPELINE)" },
            description: {
                es: "El sistema opera bajo un modelo de procesamiento por lotes (Batch Processing) ejecutado diariamente a las 03:00 AM, garantizando la separación de responsabilidades (SoC) y la persistencia de datos.",
                en: "The system operates under a Batch Processing model executed daily at 03:00 AM, ensuring Separation of Concerns (SoC) and data persistence."
            },
            diagram: {
                type: "flow",
                items: [
                    { label: "Inputs", content: "APIs (Whoop, Strava, Notion, Chess, Lichess) + CSV Manual" },
                    { label: "Processing", content: "Raspberry Pi 5 -> Python ETL -> Master Builder" },
                    { label: "Output", content: "Parquet DB -> Docker -> Streamlit Dashboard" }
                ]
            }
        },
        {
            type: "engineering",
            title: { es: "INGENIERÍA DE DATOS (ETL CORE)", en: "DATA ENGINEERING (ETL CORE)" },
            subsections: [
                {
                    title: { es: "Fase de Extracción (The Secret Agent)", en: "Extraction Phase (The Secret Agent)" },
                    text: {
                        es: "A diferencia de los enfoques tradicionales de descarga masiva, el sistema actúa con precisión quirúrgica. Los scripts de extracción consultan los endpoints de las APIs utilizando la última fecha registrada en el maestro como filtro (\"Delta Load\"), solicitando únicamente datos nuevos para minimizar la latencia y la carga en los servidores externos.",
                        en: "Unlike traditional bulk download approaches, the system acts with surgical precision. Extraction scripts query API endpoints using the last recorded date in the master as a filter (\"Delta Load\"), requesting only new data to minimize latency and load on external servers."
                    },
                    details: [
                        {
                            es: "Gestión de Autenticación: Implementación de un ciclo de refresco automático de tokens OAuth 2.0 para Whoop y Strava, asegurando una conexión continua sin intervención manual.",
                            en: "Authentication Management: Implementation of an automatic OAuth 2.0 token refresh cycle for Whoop and Strava, ensuring continuous connection without manual intervention."
                        }
                    ],
                    image: "/images/sys-001/Whoop_img_.webp"
                },
                {
                    title: { es: "Fase de Transformación y Normalización", en: "Transformation & Normalization Phase" },
                    text: {
                        es: "La fase crítica donde el caos se convierte en orden. Los datos crudos (JSON jerárquicos complejos) son \"aplanados\" y estandarizados.",
                        en: "The critical phase where chaos becomes order. Raw data (complex hierarchical JSONs) are \"flattened\" and standardized."
                    },
                    details: [
                        {
                            es: "Desafío de Ingeniería: Alineación temporal. El \"ciclo de sueño\" de Whoop y las métricas de productividad de Notion operan en ventanas de tiempo distintas. Se desarrolló lógica para vincular la \"fecha de vigilia\" (wake_up_time) como la clave primaria universal (YYYY-MM-DD), permitiendo cruzar datos de sueño de una noche con el rendimiento cognitivo del día siguiente.",
                            en: "Engineering Challenge: Temporal alignment. Whoop's \"sleep cycle\" and Notion's productivity metrics operate in different time windows. Logic was developed to link \"wake_up_time\" as the universal primary key (YYYY-MM-DD), allowing the correlation of one night's sleep data with the next day's cognitive performance."
                        },
                        {
                            es: "Limpieza de Señal: Filtrado algorítmico para eliminar duplicidad de datos, como actividades de ciclismo registradas simultáneamente por GPS (Strava) y acelerómetro (Whoop), priorizando la fuente de mayor fidelidad.",
                            en: "Signal Cleaning: Algorithmic filtering to eliminate data duplication, such as cycling activities recorded simultaneously by GPS (Strava) and accelerometer (Whoop), prioritizing the higher fidelity source."
                        }
                    ],
                    diagram: "raw-vs-clean"
                }
            ]
        },
        {
            type: "infrastructure",
            title: { es: "INFRAESTRUCTURA Y DEVOPS (PERSONAL CLOUD CORE)", en: "INFRASTRUCTURE & DEVOPS (PERSONAL CLOUD CORE)" },
            description: {
                es: "El despliegue prioriza la soberanía digital y la seguridad. Todo el ecosistema se ejecuta en hardware propietario (Raspberry Pi 5 con Debian 12 Bookworm), eliminando dependencias de nubes públicas para el almacenamiento de datos sensibles.",
                en: "Deployment prioritizes digital sovereignty and security. The entire ecosystem runs on proprietary hardware (Raspberry Pi 5 with Debian 12 Bookworm), eliminating reliance on public clouds for sensitive data storage."
            },
            subsections: [
                {
                    title: { es: "Estrategia de Despliegue", en: "Deployment Strategy" },
                    items: [
                        { label: { es: "Contenerización", en: "Containerization" }, text: { es: "La aplicación de visualización (Streamlit) vive dentro de un contenedor Docker aislado, con volúmenes de solo lectura para acceder a los datos procesados, garantizando que la aplicación web no pueda alterar el \"Libro Maestro\".", en: "The visualization app (Streamlit) lives inside an isolated Docker container, with read-only volumes to access processed data, guaranteeing the web app cannot alter the \"Master Ledger\"." } },
                        { label: { es: "Gestión de Secretos", en: "Secrets Management" }, text: { es: "Las credenciales y tokens no se almacenan en el código ni en las imágenes de Docker. Se inyectan en tiempo de ejecución mediante variables de entorno y archivos .env con permisos restrictivos (chmod 600).", en: "Credentials and tokens are not stored in code or Docker images. They are injected at runtime via environment variables and .env files with restrictive permissions (chmod 600)." } }
                    ]
                },
                {
                    title: { es: "Red y Túneles Seguros", en: "Network & Secure Tunnels" },
                    description: {
                        es: "Para exponer el dashboard de forma segura a internet sin abrir puertos en el router doméstico, se implementó una arquitectura Zero Trust:",
                        en: "To expose the dashboard securely to the internet without opening ports on the home router, a Zero Trust architecture was implemented:"
                    },
                    items: [
                        { label: "Cloudflare Tunnel", text: { es: "Encripta el tráfico desde el borde hasta el servidor local.", en: "Encrypts traffic from the edge to the local server." } },
                        { label: "Nginx Proxy Manager", text: { es: "Gestiona el proxy inverso y los certificados SSL, enrutando el tráfico de streamlit.maikleonlab.com al contenedor interno.", en: "Manages reverse proxy and SSL certificates, routing traffic from streamlit.maikleonlab.com to the internal container." } }
                    ],
                    diagram: "network-topology",
                    image: "/images/sys-001/server_pi5.webp"
                }
            ]
        },
        {
            type: "visualization",
            title: { es: "VISUALIZACIÓN E INSIGHTS (DASHBOARD)", en: "VISUALIZATION & INSIGHTS (DASHBOARD)" },
            description: {
                es: "La interfaz final (\"The Twin\") permite la exploración dinámica de las correlaciones. Construida con Streamlit y Plotly Express, se enfoca en métricas de tendencia más que en valores absolutos diarios.",
                en: "The final interface (\"The Twin\") allows dynamic exploration of correlations. Built with Streamlit and Plotly Express, it focuses on trend metrics rather than absolute daily values."
            },
            items: [
                { label: { es: "Análisis de Tendencias", en: "Trend Analysis" }, text: { es: "Uso de medias móviles de 30 días para eliminar el ruido diario y revelar cambios de comportamiento a largo plazo (Macro-adaptación).", en: "Use of 30-day moving averages to eliminate daily noise and reveal long-term behavioral changes (Macro-adaptation)." } },
                { label: { es: "Consistencia de Hábitos", en: "Habit Consistency" }, text: { es: "Visualización de la varianza en el cumplimiento de rutinas para detectar \"fugas de disciplina\" en días específicos de la semana.", en: "Visualization of variance in routine compliance to detect \"discipline leaks\" on specific days of the week." } }
            ],
            image: "/images/sys-001/Dashboard1.webp"
        }
    ],
    appendix: {
        title: { es: "APÉNDICE TÉCNICO", en: "TECHNICAL APPENDIX" },
        items: [
            { label: "Core", value: "Python 3.11, Pandas 2.2" },
            { label: "Visualization", value: "Streamlit 1.39, Plotly 5.24" },
            { label: "Security", value: "Cloudflared, Nginx Proxy Manager, Docker" },
            { label: "APIs", value: "Whoop, Strava, Notion, Chess.com, Lichess" }
        ]
    }
};
