import { sys001 } from './sys-001';
import { sys002 } from './sys-002';
import { sys003 } from './sys-003';

export interface ProjectItem {
    id: string;
    title: string;
    status: string;
    stack: string[];
    concept: {
        es: string;
        en: string;
    };
    type: string;
    layout?: "split" | "standard";
    blueprint?: {
        title: string;
        description: {
            es: string;
            en: string;
        };
        specs: string;
    };
    gallery?: string[];
    details?: any;
    visual: string;
    colSpan: string;
    rowSpan: string;
    specialEffect?: string;
}

export const sectors: { id: string; title: string; subtitle: string; projects: ProjectItem[] }[] = [
    {
        id: "SECTOR_A",
        title: "CORE SYSTEMS",
        subtitle: "Alta Complejidad - Requiere Documentación",
        projects: [
            {
                id: "SYS-001",
                title: "Personal Performance & Habit Data Analysis",
                status: "LIVE // EVOLVING",
                stack: ["Streamlit", "Python", "Pandas", "WHOOP API", "Strava"],
                concept: {
                    es: "Ingeniería inversa de mi propia fisiología. Un dashboard vivo que correlaciona sueño, estrés y carga de entrenamiento para predecir el rendimiento cognitivo y físico.",
                    en: "Reverse engineering my own physiology. A live dashboard correlating sleep, stress, and training load to predict cognitive and physical performance."
                },
                type: "BLUEPRINT",
                layout: "split",
                blueprint: {
                    title: "Architecture Diagram",
                    description: {
                        es: "Flujo de datos: WHOOP/Strava API -> Python ETL -> Pandas DataFrame -> Streamlit Visualization.",
                        en: "Data Flow: WHOOP/Strava API -> Python ETL -> Pandas DataFrame -> Streamlit Visualization."
                    },
                    specs: "Data Refresh: 15min | Storage: Local Parquet | Model: Linear Regression"
                },
                details: sys001,
                visual: "/images/sys-001/Dashboard2.webp",
                colSpan: "md:col-span-6",
                rowSpan: "md:row-span-1"
            },
            {
                id: "SYS-002",
                title: "Personal Cloud Core",
                status: "ONLINE // 24/7",
                stack: ["R-Pi 5", "Docker", "Portainer", "Cloudflare", "Nginx"],
                concept: {
                    es: "Soberanía digital absoluta. Un ecosistema self-hosted que bloquea rastreadores a nivel de red y sirve mis aplicaciones.",
                    en: "Absolute digital sovereignty. A self-hosted ecosystem that blocks network-level trackers and serves my applications."
                },
                type: "BLUEPRINT",
                blueprint: {
                    title: "Network Topology",
                    description: {
                        es: "Internet -> Cloudflare Tunnel -> Raspberry Pi 5 -> Nginx Proxy Manager -> Docker Containers (Pi-hole, Portainer, etc).",
                        en: "Internet -> Cloudflare Tunnel -> Raspberry Pi 5 -> Nginx Proxy Manager -> Docker Containers (Pi-hole, Portainer, etc)."
                    },
                    specs: "Uptime: 99.9% | Bandwidth: 1Gbps | Security: Strict Firewall"
                },
                details: sys002,
                visual: "/images/sys-002/diagramisometric.webp",
                colSpan: "md:col-span-3",
                rowSpan: "md:row-span-1"
            },
            {
                id: "SYS-003",
                title: "The Headhunter",
                status: "DEPLOYED // AUTOMATED",
                stack: ["n8n", "Apify", "Notion API", "Google Sheets", "Telegram Bot"],
                concept: {
                    es: "Sistema ETL de nivel empresarial que orquesta la búsqueda, limpieza, clasificación y distribución de miles de ofertas laborales diarias sin intervención humana.",
                    en: "Enterprise-grade ETL system orchestrating the search, cleaning, classification, and distribution of thousands of daily job offers without human intervention."
                },
                type: "BLUEPRINT",
                blueprint: {
                    title: "Intelligent Recruitment Pipeline",
                    description: {
                        es: "Notion (Config) -> Apify (Scraping) -> n8n (Orchestration) -> Google Sheets (DB) -> Notion (CRM).",
                        en: "Notion (Config) -> Apify (Scraping) -> n8n (Orchestration) -> Google Sheets (DB) -> Notion (CRM)."
                    },
                    specs: "Volume: 1k+ Rows/Day | Self-Healing: Yes | Notifications: Telegram"
                },
                details: sys003,
                visual: "/images/sys-003/scrappern8n.webp",
                colSpan: "md:col-span-3",
                rowSpan: "md:row-span-1"
            }
        ]
    },
    {
        id: "SECTOR_B",
        title: "CLIENT INTERFACES",
        subtitle: "Freelance & Comercial",
        projects: [
            {
                id: "CLI-001",
                title: "Tusados Shop",
                status: "DEPLOYED",
                stack: ["Astro", "React", "3D Carousel"],
                concept: {
                    es: "Barbería urbana con sistema de catálogo inmersivo y gestión de citas.",
                    en: "Urban barber shop with immersive catalog system and appointment management."
                },
                type: "LIGHTBOX",
                gallery: ["/images/sectorB/tusados.webp", "/images/sectorB/tusadoscarrusel.webp", "/images/sectorB/tusadosbarber.webp"],
                visual: "/images/sectorB/tusadoscarrusel.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            },
            {
                id: "CLI-002",
                title: "Klub",
                status: "PRODUCTION",
                stack: ["Landing Page", "Ticketing", "Stripe"],
                concept: {
                    es: "Ecosistema digital para nightlife: Landing page de alto impacto + Compra de tickets QR.",
                    en: "Digital nightlife ecosystem: High-impact landing page + QR ticket purchasing."
                },
                type: "LIGHTBOX",
                gallery: ["/images/sectorB/klubheropage.webp", "/images/sectorB/klubEventspage.webp", "/images/sectorB/klubPayTickets.webp", "/images/sectorB/klubdashboardtickets.webp"],
                visual: "/images/sectorB/klubheropage.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            },
            {
                id: "CLI-003",
                title: "Clinical Space",
                status: "LIVE",
                stack: ["Medical UI", "Booking", "Design"],
                concept: {
                    es: "Plataforma de servicios clínicos enfocada en la confianza y la claridad de la información médica.",
                    en: "Clinical services platform focused on trust and medical information clarity."
                },
                type: "LIGHTBOX",
                gallery: ["/images/sectorB/drleonwebherosection.webp", "/images/sectorB/DrLeonWeb3.webp", "/images/sectorB/DrLeonWeb2.webp"],
                visual: "/images/sectorB/drleonwebherosection.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            }
        ]
    },
    {
        id: "SECTOR_C",
        title: "HARDWARE ENGINEERING",
        subtitle: "El mundo físico",
        projects: [
            {
                id: "HW-001",
                title: "Mechanical Reality",
                status: "FABRICATED",
                stack: ["SolidWorks", "3D Print", "CNC"],
                concept: {
                    es: "Colección de diseño industrial: Molino Tlaxcoapan para triturado eficiente.",
                    en: "Industrial design collection: Molino Tlaxcoapan for efficient grinding."
                },
                type: "LIGHTBOX",
                visual: "/images/sectorB/molinosolidworks.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            },
            {
                id: "HW-002",
                title: "Mobile Maintenance Unit",
                status: "PROTOTYPE",
                stack: ["SolidWorks", "Circuits", "Mechanics"],
                concept: {
                    es: "Unidad móvil con banco de trabajo, escalera y elevador mecánico integrados. Finalista en 'Prototipos' IPN.",
                    en: "Mobile unit with integrated workbench, ladder, and mechanical lift. IPN 'Prototipos' Finalist."
                },
                type: "LIGHTBOX",
                visual: "/images/sectorB/UnidadMovil2.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            },
            {
                id: "HW-003",
                title: "Robotic Arm",
                status: "ENGINEERED",
                stack: ["SolidWorks", "Mechatronics", "Simulation"],
                concept: {
                    es: "Diseño completo de brazo robótico articulado, incluyendo selección de motores y transmisión mecánica.",
                    en: "Complete design of articulated robotic arm, including motor selection and mechanical transmission."
                },
                type: "LIGHTBOX",
                visual: "/images/sectorB/brazosolidworks.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            }
        ]
    },
    {
        id: "SECTOR_D",
        title: "LEGACY INNOVATION",
        subtitle: "Experimentos & Primeras Versiones",
        projects: [
            {
                id: "LEG-001",
                title: "RapidRead",
                status: "ARCHIVED",
                stack: ["React Native", "Firebase", "Gamification"],
                concept: {
                    es: "App móvil para lectura rápida. Sube tus documentos y mejora velocidad/comprensión.",
                    en: "Speed reading mobile app. Upload docs and improve speed/comprehension."
                },
                type: "LIGHTBOX",
                visual: "/images/sectorB/RapidRead.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            },
            {
                id: "LEG-002",
                title: "Orderer Life",
                status: "DEPRECATED",
                stack: ["Notion API", "Automation", "Systems Thinking"],
                concept: {
                    es: "Sistema de gestión de vida (OS) integrado en Notion para hábitos y proyectos.",
                    en: "Integrated Life OS in Notion for habits and projects management."
                },
                type: "LIGHTBOX",
                visual: "/images/sectorB/OrdererLife.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            },
            {
                id: "LEG-003",
                title: "Arbitrage Hunter",
                status: "LEGACY",
                stack: ["Python", "Betting APIs", "Math"],
                concept: {
                    es: "Bot de análisis para apuestas de arbitraje (Surebets) y calculadora de beneficios.",
                    en: "Analysis bot for arbitrage betting (Surebets) and profit calculator."
                },
                type: "LIGHTBOX",
                visual: "/images/sectorB/BettingMatched.webp",
                colSpan: "md:col-span-2",
                rowSpan: "md:row-span-1"
            }
        ]
    }
];
