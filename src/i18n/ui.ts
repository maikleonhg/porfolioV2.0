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

export interface UIContent {
    hero: HeroContent;
    systemProfile: SystemProfileContent;
    kernel: KernelContent;
    deployedSystems: DeployedSystemsContent;
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
            narrative: "Opero en la intersección donde la intuición humana falla y los datos toman el mando. Mi background no es tradicional: crecí entre la medicina y las matemáticas, desarrollando una obsesión por entender cómo funcionan los sistemas complejos —sean bases de datos en la nube o la fisiología humana durante un maratón.\n\nNo me limito a 'escribir código'. Construyo arquitecturas resilientes. Uso la filosofía para hacer las preguntas correctas y la ingeniería para ejecutar las respuestas precisas."
        },
        kernel: {
            header: "CORE_OPERATING_SYSTEM",
            title: "Sistema",
            subtitle: "Operativo",
            description: "La metodología que ejecuta el sistema. Filosofía aplicada como código de producción.",
            principles: [
                {
                    title: "RECURSIVE DEBUGGING",
                    desc: "La duda es el primer paso de la compilación. Cuestiono mis propias hipótesis con la misma rigurosidad con la que audito un pipeline de datos. Entender el error interno es la única forma de evitar el colapso del sistema externo."
                },
                {
                    title: "ANTIFRAGILE ARCHITECTURE",
                    desc: "No busco estabilidad estática; busco sistemas que mejoren bajo estrés. El fallo, el caos y la carga pesada no son bugs, son features necesarios para la evolución. Si el sistema se rompe, se reconstruye mejor."
                },
                {
                    title: "FULL STACK PERFORMANCE",
                    desc: "El código no corre en el vacío; corre en un cerebro biológico. Optimizo mi VO2 Max y mi sueño con la misma obsesión que mis queries de SQL. Un hardware (cuerpo) eficiente produce un software (mente) superior."
                }
            ],
            neuro: "Mi cerebro procesa a alta velocidad y busca patrones profundos en el ruido."
        },
        deployedSystems: {
            header: "Sistemas Desplegados",
            title: "Experiencia",
            subtitle: "Laboral",
            systems: [
                {
                    title: "Somos Empleables",
                    subtitle: "Automatización y Data Engineering",
                    stack: ["n8n", "Apify", "Notion", "G-Sheets"],
                    description: "Diseñé e implementé un sistema integral de automatización para la recolección, limpieza y clasificación de vacantes. Automatizé el scraping diario, depuración de datos y sincronización con Notion y Telegram, reduciendo el trabajo manual a cero.",
                    id: "SYS-01"
                },
                {
                    title: "BizBat",
                    subtitle: "Data Science Intern",
                    stack: ["BigQuery", "GA4", "Looker", "GCP"],
                    description: "Normalicé y unifiqué datos de usuarios en BigQuery, implementando pipelines automatizados. Lideré reportes KPI usando GA4 y Looker Studio para decisiones estratégicas.",
                    id: "SYS-02"
                },
                {
                    title: "Gamified Reading Platform",
                    subtitle: "Arquitectura IA y Automatización",
                    stack: ["Whisper API", "LLM", "n8n"],
                    description: "Diseñé arquitectura de IA para puntuación de comprensión lectora. Automaticé el flujo de datos gamificados y lideré la validación del modelo de negocio.",
                    id: "SYS-03"
                }
            ]
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
            narrative: "I operate at the intersection where human intuition fails and data takes command. My background isn't traditional: I grew up between medicine and mathematics, developing an obsession with understanding how complex systems work—whether cloud databases or human physiology during a marathon.\n\nI don't just 'write code'. I build resilient architectures. I use philosophy to ask the right questions and engineering to execute precise answers."
        },
        kernel: {
            header: "CORE_OPERATING_SYSTEM",
            title: "Operating",
            subtitle: "System",
            description: "The methodology that runs the system. Philosophy applied as production code.",
            principles: [
                {
                    title: "RECURSIVE DEBUGGING",
                    desc: "Doubt is the first step of compilation. I question my own hypotheses with the same rigor I audit a data pipeline. Understanding internal error is the only way to prevent external system collapse."
                },
                {
                    title: "ANTIFRAGILE ARCHITECTURE",
                    desc: "I don't seek static stability; I seek systems that improve under stress. Failure, chaos, and heavy load aren't bugs—they're necessary features for evolution. If the system breaks, it rebuilds better."
                },
                {
                    title: "FULL STACK PERFORMANCE",
                    desc: "Code doesn't run in a vacuum; it runs in a biological brain. I optimize my VO2 Max and sleep with the same obsession as my SQL queries. Efficient hardware (body) produces superior software (mind)."
                }
            ],
            neuro: "My brain processes at high speed and seeks deep patterns in the noise."
        },
        deployedSystems: {
            header: "Deployed Systems",
            title: "Work",
            subtitle: "Experience",
            systems: [
                {
                    title: "Somos Empleables",
                    subtitle: "Automation & Data Engineering",
                    stack: ["n8n", "Apify", "Notion", "G-Sheets"],
                    description: "Designed and implemented a comprehensive automation system for job vacancy collection, cleaning, and classification. Automated daily scraping, data debugging, and synchronization with Notion and Telegram, reducing manual work to zero.",
                    id: "SYS-01"
                },
                {
                    title: "BizBat",
                    subtitle: "Data Science Intern",
                    stack: ["BigQuery", "GA4", "Looker", "GCP"],
                    description: "Normalized and unified user data in BigQuery, implementing automated pipelines. Led KPI reporting using GA4 and Looker Studio for strategic decision-making.",
                    id: "SYS-02"
                },
                {
                    title: "Gamified Reading Platform",
                    subtitle: "AI Architecture & Automation",
                    stack: ["Whisper API", "LLM", "n8n"],
                    description: "Designed AI architecture utilizing Whisper and LLMs for reading comprehension scoring. Automated gamified data flow and led business model validation.",
                    id: "SYS-03"
                }
            ]
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
