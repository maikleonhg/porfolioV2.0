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
                title: "Performance OS — Personal Performance Platform",
                status: "LIVE // V2",
                stack: ["FastAPI", "SQLite", "Next.js 16", "Tailwind v4", "Recharts", "FastMCP", "Docker", "Cloudflare Tunnel", "GitHub Actions"],
                concept: {
                    es: "Plataforma multi-fuente que integra biometría (WHOOP), actividad (Strava), hábitos (Notion), tiempo de pantalla y finanzas en una base unificada con 370+ días de histórico. Expuesta como servidor MCP con 8 tools consumido por agentes IA del ecosistema Principia.",
                    en: "Multi-source platform integrating biometrics (WHOOP), activity (Strava), habits (Notion), screen time and finance into a unified base with 370+ days of history. Exposed as an MCP server with 8 tools, consumed by AI agents across the Principia ecosystem."
                },
                type: "BLUEPRINT",
                layout: "split",
                blueprint: {
                    title: "Architecture Diagram",
                    description: {
                        es: "APIs (WHOOP/Strava/Notion/Chess) + parsers PDF bancarios -> ETL diario cron -> SQLite -> FastAPI -> Next.js 16 web + servidor MCP (8 tools) consumido por agentes IA.",
                        en: "APIs (WHOOP/Strava/Notion/Chess) + bank PDF parsers -> daily ETL cron -> SQLite -> FastAPI -> Next.js 16 web + MCP server (8 tools) consumed by AI agents."
                    },
                    specs: "History: 370+ days | App-usage rows: 34,000+ | MCP tools: 8 | Deploy: Docker on ARM64 + Cloudflare Tunnel"
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
                title: "The Headhunter — Semantic Job Matching",
                status: "DEPLOYED // AUTOMATED",
                stack: ["n8n", "Apify", "Qdrant", "Embeddings", "Notion API", "PostgreSQL", "Telegram Bot"],
                concept: {
                    es: "Pipeline ETL de nivel empresarial que orquesta scraping, limpieza y clasificación de 500+ ofertas diarias desde LinkedIn (40+ nodos en n8n), alimentando un motor de matching semántico sobre Qdrant con embeddings — recomienda vacantes por similitud de significado, no por palabras clave.",
                    en: "Enterprise-grade ETL pipeline orchestrating scraping, cleaning, and classification of 500+ daily LinkedIn offers (40+ n8n nodes), feeding a semantic matching engine on Qdrant with embeddings — recommends roles by meaning similarity, not keywords."
                },
                type: "BLUEPRINT",
                blueprint: {
                    title: "Intelligent Recruitment Pipeline",
                    description: {
                        es: "Apify (Scraping LinkedIn) -> n8n (40+ nodos, orquestación) -> PostgreSQL (storage) -> Qdrant (vector DB con embeddings) -> Matching semántico -> Notion CRM + Telegram.",
                        en: "Apify (LinkedIn scraping) -> n8n (40+ nodes, orchestration) -> PostgreSQL (storage) -> Qdrant (vector DB with embeddings) -> Semantic matching -> Notion CRM + Telegram."
                    },
                    specs: "Volume: 500+ offers/day | Match: Semantic (Qdrant + embeddings) | Self-Healing: Yes"
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
            },
            {
                id: "CLI-004",
                title: "SE Programa — SaaS de empleabilidad",
                status: "PRODUCTION // CHARGING",
                stack: ["Next.js 15", "Prisma", "PostgreSQL", "Auth.js v5", "Webpay Plus", "Notion API"],
                concept: {
                    es: "Plataforma SaaS de Somos Empleables. Dos productos en un mismo sistema: curso self-serve low-ticket y hub VIP de coaching high-ticket con sesiones 1:1, ficha profesional y gestión de postulaciones — todo unificado en Next.js 15 + Prisma con pagos reales vía Webpay Plus homologado.",
                    en: "Somos Empleables' SaaS platform. Two products in one system: a self-serve low-ticket course and a high-ticket VIP coaching hub with 1:1 sessions, professional profile and application tracking — unified in Next.js 15 + Prisma with real payments via certified Webpay Plus."
                },
                type: "LIGHTBOX",
                gallery: ["/images/sectorB/seprograma.webp"],
                visual: "/images/sectorB/seprograma.webp",
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
