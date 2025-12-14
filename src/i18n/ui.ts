export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export interface HeroContent {
    status: string;
    title: string;
    role: string;
    description: string;
    scroll: string;
    location: string;
    openToWork: string;
    hardwired: string;
    logic: string;
}

export interface SystemItem {
    title: string;
    subtitle: string;
    stack: string[];
    description: string;
    id: string;
    date: string;
}

export interface DeployedSystemsContent {
    header: string;
    title: string;
    subtitle: string;
    systems: SystemItem[];
}

export interface RnDItem {
    tag: string;
    title: string;
    link?: string;
    desc?: string;
    status?: string;
}

export interface RnDLabsContent {
    header: string;
    title: string;
    subtitle: string;
    quantifiedSelf: RnDItem;
    ironFortress: RnDItem;
    engineeringReality: RnDItem;
}

export interface BenchmarkItem {
    year?: string;
    title: string;
    subtitle?: string;
    label?: string;
    value?: string;
}

export interface BenchmarksContent {
    header: string;
    title: string;
    subtitle: string;
    colA: {
        title: string;
        items: BenchmarkItem[];
    };
    colB: {
        title: string;
        items: BenchmarkItem[];
    };
}

export interface VectorItem {
    category: string;
    target: string;
    progress: number;
    status: string;
}

export interface CurrentVectorContent {
    header: string;
    title: string;
    subtitle: string;
    vectors: VectorItem[];
}

export interface KernelContent {
    header: string;
    title: string;
    subtitle: string;
    description: string;
    principles: {
        title: string;
        desc: string;
    }[];
    neuro: string;
}

export interface LogEntry {
    date: string;
    title: string;
    excerpt: string;
    tags: string[];
}

export interface EvolutionLogsContent {
    header: string;
    title: string;
    subtitle: string;
    logs: LogEntry[];
}

export interface SystemProfileContent {
    header: string;
    subtitle: string;
    narrative: string;
}

export interface ProjectsContent {
    header: string;
    title: string;
    subtitle: string;
}

export interface UIContent {
    hero: HeroContent;
    systemProfile: SystemProfileContent;
    kernel: KernelContent;
    experience: DeployedSystemsContent; // Reusing the type for now as structure is same
    projects: ProjectsContent;
    rndLabs: RnDLabsContent;
    benchmarks: BenchmarksContent;
    currentVector: CurrentVectorContent;
    evolutionLogs: EvolutionLogsContent;
}

export const content: Record<'es' | 'en', UIContent> = {
    es: {
        hero: {
            status: "Sistema v2.1 // En línea",
            title: "MIGUEL A. LEÓN",
            role: "Data Engineer. Systems Architect. AI Engineer.",
            description: "Construyo arquitecturas que unen la logica de datos con la inteligencia artificial aplicada.",
            scroll: "DESLIZA PARA INICIAR ↓",
            location: "Hidalgo, MX",
            openToWork: "DISPONIBLE",
            hardwired: "HARDWIRED",
            logic: "LOGIC"
        },
        systemProfile: {
            header: "SYSTEM_PROFILE // ABOUT_ME",
            subtitle: "El Motor Multipotencial",
            narrative: "Soy un desarrollador orientado a soluciones, enfocado en construir sistemas impulsados por datos, arquitectura sólida e inteligencia artificial. Mi enfoque profesional combina análisis, diseño y capacidad técnica para desarrollar productos de principio a fin.\nAdemás de trabajar con datos y modelos, también diseño y construyo la infraestructura necesaria para que las soluciones funcionen: desde el desarrollo full-stack hasta el despliegue en plataformas cloud y servidores propios. Me interesa crear sistemas escalables, confiables y preparados para crecer. \n\nBusco posicionarme como un profesional integral capaz de tomar una idea, convertirla en un sistema funcional y llevarlo hasta producción."
        },
        kernel: {
            header: "CORE_OPERATING_SYSTEM",
            title: "Sistema",
            subtitle: "Operativo",
            description: "Una mirada a cómo proceso el mundo",
            principles: [
                {
                    title: "PENSAMIENTO MULTIDIMENSIONAL",
                    desc: "Mi mente no opera en línea recta. Pienso en capas, escenarios paralelos y conexiones que emergen entre dominios distintos."
                },
                {
                    title: "ARQUITECTURA ANTIFRÁGIL",
                    desc: "Aprendo del error y del caos. Cada falla es una actualización que me hace más adaptable y más sólido."
                },
                {
                    title: "ALTO RENDIMIENTO INTEGRAL",
                    desc: "Cuerpo y mente son un solo sistema. Cuido mi energía y mis hábitos para potenciar claridad, foco y creatividad."
                }
            ],
            neuro: "Mi cerebro procesa a alta velocidad y busca patrones profundos en el ruido."
        },
        experience: {
            header: "Historial Operativo",
            title: "Trayectoria",
            subtitle: "Profesional",
            systems: [
                {
                    title: "Somos Empleables",
                    subtitle: "Automatización y Data Engineering",
                    stack: ["n8n", "Apify", "Notion", "G-Sheets"],
                    description: "Diseñé e implementé un sistema integral de automatización para la recolección, limpieza y clasificación de vacantes. Automaticé el scraping diario, depuración de datos y sincronización con Notion y Telegram, reduciendo el trabajo manual a cero.",
                    id: "SYS-01",
                    date: "Sep 2025 - Presente"
                },
                {
                    title: "BizBat",
                    subtitle: "Data Science Intern",
                    stack: ["Data Science", "BigQuery", "Google Cloud", "GA4", "Looker Studio", "Python", "SQL"],
                    description: "Normalización y unificación de datos de usuarios y eventos en BigQuery, implementando pipelines automatizados para la inyección continua de datos y actualización de dashboards. Monitoreo y Reporte de KPIs: Lideré el reporte usando GA4 y desarrollé dashboards interactivos en Looker Studio, definiendo y reportando KPIs clave para la toma de decisiones estratégicas. Colaboré en la optimización de infraestructura en GCP y preparación de datos para el entrenamiento posterior de modelos de Machine Learning.",
                    id: "SYS-02",
                    date: "Feb 2025 - Sep 2025"
                },
                {
                    title: "Startup Incubator - Novolabs",
                    subtitle: "Automatización y Data Engineering",
                    stack: ["Whisper API", "LLM", "n8n", "Business Model", "Gamification", "AI", "Startup Validation", "AI Architecture", "Automation"],
                    description: "Arquitectura de IA y Automatización: Diseñé una arquitectura de IA compleja utilizando APIs (Whisper) para transcripción, procesando la salida con un LLM para puntuación de comprensión lectora y retroalimentación. Automaticé el flujo de datos, incluyendo actualizaciones de datos gamificados, utilizando un contenedor n8n para análisis de usuarios y mejora de lectura. Validación de Negocio: Lideré la fase de validación del modelo de negocio, definiendo estrategias de mercado y analizando investigación de usuarios potenciales para guiar el desarrollo del producto.",
                    id: "SYS-03",
                    date: "Nov 2024 - Abr 2025"
                }
            ]
        },
        projects: {
            header: "Laboratorio de Sistemas",
            title: "Proyectos",
            subtitle: "Desplegados",
        },
        rndLabs: {
            header: "Laboratorios I+D",
            title: "Proyectos",
            subtitle: "Personales",
            quantifiedSelf: {
                tag: "SALUD + DATOS",
                title: "The Quantified Self",
                link: "analytics.maikleonlabs ->"
            },
            ironFortress: {
                tag: "INFRAESTRUCTURA",
                title: "The Iron Fortress",
                desc: "Self-hosted (Pi5 + Cloudflare)",
                status: "EN LÍNEA"
            },
            engineeringReality: {
                tag: "HARDWARE",
                title: "Engineering Reality",
                desc: "SolidWorks / Impresión 3D"
            }
        },
        benchmarks: {
            header: "Benchmarks",
            title: "Métricas",
            subtitle: "de Rendimiento",
            colA: {
                title: "Poder de Procesamiento",
                items: [
                    { year: "2024", title: "Premio CENEVAL", subtitle: "Mejor Puntaje Nacional" },
                    { year: "2017", title: "Olimpiada de Matemáticas", subtitle: "1er Lugar Estatal" },
                    { year: "2019", title: "Excelencia Estadística", subtitle: "Reconocimiento de Patrones" },
                ]
            },
            colB: {
                title: "Resistencia de Hardware",
                items: [
                    { label: "RESISTENCIA", title: "Maratón 10km Aguas Abiertas", value: "TOP 10%" },
                    { label: "FUERZA", title: "5km Nado Contracorriente", value: "COMPLETADO" },
                    { label: "DISCIPLINA", title: "Objetivo Grasa Corporal", value: "13%" },
                ]
            }
        },
        currentVector: {
            header: "Página Ahora (Oct-Dic)",
            title: "El Vector",
            subtitle: "Actual",
            vectors: [
                {
                    category: "Protocolo Profesional",
                    target: "Certificación GCP Cloud Engineer",
                    progress: 75,
                    status: "EN_PROGRESO"
                },
                {
                    category: "Optimización Biológica",
                    target: "Recomposición Corporal",
                    progress: 90,
                    status: "OPTIMIZANDO"
                },
                {
                    category: "Infraestructura",
                    target: "Despliegue Agentes IA",
                    progress: 40,
                    status: "DESPLEGANDO"
                }
            ]
        },
        evolutionLogs: {
            header: "Bitácora",
            title: "Iteraciones",
            subtitle: "Mentales",
            logs: [
                {
                    date: "2024-11-20",
                    title: "Parálisis por Análisis",
                    excerpt: "La optimización prematura es la raíz de todo mal. A veces, el sistema necesita correr sucio para correr.",
                    tags: ["Filosofía", "Ingeniería"]
                },
                {
                    date: "2024-11-15",
                    title: "Solo sé que no sé nada",
                    excerpt: "En la era de la IA, la humildad intelectual es el único firewall contra la obsolescencia.",
                    tags: ["Aprendizaje", "IA"]
                }
            ]
        }
    },
    en: {
        hero: {
            status: "System v2.1 // Online",
            title: "MIGUEL A. LEÓN",
            role: "Data Engineer. Systems Architect. Human Optimizer.",
            description: "I build architectures that unite data logic with applied artificial intelligence.",
            scroll: "SCROLL TO INITIALIZE ↓",
            location: "Hidalgo, MX",
            openToWork: "OPEN TO WORK",
            hardwired: "HARDWIRED",
            logic: "LOGIC"
        },
        systemProfile: {
            header: "SYSTEM_PROFILE // ABOUT_ME",
            subtitle: "The Multipotential Engine",
            narrative: "I am a solution-oriented developer focused on building systems powered by data, solid architecture, and artificial intelligence. My professional approach combines analysis, design, and technical capability to develop products from start to finish.\nBeyond working with data and models, I also design and build the necessary infrastructure for solutions to work: from full-stack development to deployment on cloud platforms and self-hosted servers. I'm interested in creating scalable, reliable systems that are prepared to grow.\n\nI seek to position myself as a well-rounded professional capable of taking an idea, turning it into a functional system, and bringing it all the way to production."
        },
        kernel: {
            header: "CORE_OPERATING_SYSTEM",
            title: "Operating",
            subtitle: "System",
            description: "A look at how I process the world.",
            principles: [
                {
                    title: "MULTIDIMENSIONAL THINKING",
                    desc: "My mind doesn't operate in a straight line. I think in layers, parallel scenarios, and connections that emerge between distinct domains."
                },
                {
                    title: "ANTIFRAGILE ARCHITECTURE",
                    desc: "I learn from error and chaos. Every failure is an update that makes me more adaptable and solid."
                },
                {
                    title: "HOLISTIC HIGH PERFORMANCE",
                    desc: "Body and mind are a single system. I optimize my energy and habits to enhance clarity, focus, and creativity."
                }
            ],
            neuro: "My brain processes at high speed and seeks deep patterns in the noise."
        },
        experience: {
            header: "Operational History",
            title: "Professional",
            subtitle: "Trajectory",
            systems: [
                {
                    title: "Somos Empleables",
                    subtitle: "Automation & Data Engineering",
                    stack: ["n8n", "Apify", "Notion", "G-Sheets"],
                    description: "Designed and implemented a comprehensive automation system for job vacancy collection, cleaning, and classification. Automated daily scraping, data debugging, and synchronization with Notion and Telegram, reducing manual work to zero.",
                    id: "SYS-01",
                    date: "Sep 2025 - Present"
                },
                {
                    title: "BizBat",
                    subtitle: "Data Science Intern",
                    stack: ["Data Science", "BigQuery", "Google Cloud", "GA4", "Looker Studio", "Python", "SQL"],
                    description: "Normalized and unified user and event data in BigQuery, implementing automated pipelines for continuous data injection and dashboard updates. KPI Monitoring & Reporting: Led reporting using GA4 and developed interactive dashboards in Looker Studio, defining and reporting key KPIs for strategic decision-making. Collaborated on GCP infrastructure optimization and data preparation for subsequent Machine Learning model training.",
                    id: "SYS-02",
                    date: "Feb 2025 - Sep 2025"
                },
                {
                    title: "Startup Incubator - Novolabs",
                    subtitle: "AI Architecture and Automation",
                    stack: ["Whisper API", "LLM", "n8n", "Business Model", "Gamification", "AI", "Startup Validation", "AI Architecture", "Automation"],
                    description: "AI Architecture and Automation: Designed a complex AI architecture utilizing APIs (Whisper) for transcription, processing output with an LLM for reading comprehension scoring and feedback. Automated the data flow, including gamified data updates, using an n8n container for user analysis and reading enhancement. Business Validation: Led the business model validation phase, defining market strategies and analyzing potential user research to guide product development.",
                    id: "SYS-03",
                    date: "Nov 2024 - Apr 2025"
                }
            ]
        },
        projects: {
            header: "Systems Laboratory",
            title: "Deployed",
            subtitle: "Projects",
        },
        rndLabs: {
            header: "R&D Labs",
            title: "Personal",
            subtitle: "Projects",
            quantifiedSelf: {
                tag: "HEALTH + DATA",
                title: "The Quantified Self",
                link: "analytics.maikleonlabs ->"
            },
            ironFortress: {
                tag: "INFRASTRUCTURE",
                title: "The Iron Fortress",
                desc: "Self-hosted (Pi5 + Cloudflare)",
                status: "ONLINE"
            },
            engineeringReality: {
                tag: "HARDWARE",
                title: "Engineering Reality",
                desc: "SolidWorks / 3D Printing"
            }
        },
        benchmarks: {
            header: "Benchmarks",
            title: "Performance",
            subtitle: "Metrics",
            colA: {
                title: "Processing Power",
                items: [
                    { year: "2024", title: "CENEVAL Award", subtitle: "Top Score National" },
                    { year: "2017", title: "Math Olympiad", subtitle: "1st Place State" },
                    { year: "2019", title: "Statistics Excellence", subtitle: "Pattern Recognition" },
                ]
            },
            colB: {
                title: "Hardware Endurance",
                items: [
                    { label: "ENDURANCE", title: "10km Open Water Marathon", value: "TOP 10%" },
                    { label: "STRENGTH", title: "5km Upstream Swim", value: "COMPLETED" },
                    { label: "DISCIPLINE", title: "Body Fat Target", value: "13%" },
                ]
            }
        },
        currentVector: {
            header: "Now Page (Oct-Dec)",
            title: "The Current",
            subtitle: "Vector",
            vectors: [
                {
                    category: "Professional Protocol",
                    target: "GCP Cloud Engineer Cert",
                    progress: 75,
                    status: "IN_PROGRESS"
                },
                {
                    category: "Biological Optimization",
                    target: "Body Recomposition",
                    progress: 90,
                    status: "OPTIMIZING"
                },
                {
                    category: "Infrastructure",
                    target: "AI Agents Deployment",
                    progress: 40,
                    status: "DEPLOYING"
                }
            ]
        },
        evolutionLogs: {
            header: "Logs",
            title: "Mental",
            subtitle: "Iterations",
            logs: [
                {
                    date: "2024-11-20",
                    title: "Analysis Paralysis",
                    excerpt: "Premature optimization is the root of all evil. Sometimes the system needs to run dirty to run at all.",
                    tags: ["Philosophy", "Engineering"]
                },
                {
                    date: "2024-11-15",
                    title: "I only know that I know nothing",
                    excerpt: "In the AI era, intellectual humility is the only firewall against obsolescence.",
                    tags: ["Learning", "AI"]
                }
            ]
        }
    }
};
