export const sys002 = {
    id: "SYS-002",
    title: {
        es: "Personal Cloud Core",
        en: "Personal Cloud Core"
    },
    metadata: {
        status: "ONLINE // 24/7",
        stack: ["Raspberry Pi 5", "Docker", "Portainer", "CasaOS", "NPM", "Tailscale", "Jellyfin", "n8n", "Pi-hole"],
        location: {
            es: "Home Lab (Físico)",
            en: "Home Lab (Physical)"
        }
    },
    sections: [
        {
            type: "header",
            title: "HEADER / METADATA",
            content: [
                {
                    subtitle: { es: "Identidad del Sistema", en: "System Identity" },
                    text: {
                        es: "SYSTEM_ID: SERVER_PI5 | ROL: Home Lab & Cognitive Defense Grid | UPTIME: 24/7 (Infraestructura Crítica)",
                        en: "SYSTEM_ID: SERVER_PI5 | ROLE: Home Lab & Cognitive Defense Grid | UPTIME: 24/7 (Critical Infrastructure)"
                    }
                },
                {
                    subtitle: { es: "Hardware Specs", en: "Hardware Specs" },
                    text: {
                        es: "HARDWARE: Raspberry Pi 5 (8GB RAM) | Enfriamiento Personalizado | ALMACENAMIENTO: SSD Externo (SATA vía USB 3.0)",
                        en: "HARDWARE: Raspberry Pi 5 (8GB RAM) | Custom Cooling | STORAGE: External SSD (SATA via USB 3.0)"
                    }
                }
            ]
        },
        {
            type: "abstract",
            title: { es: "ABSTRACT (MANIFIESTO)", en: "ABSTRACT (MANIFESTO)" },
            content: [
                {
                    subtitle: { es: "La Evolución", en: "The Evolution" },
                    text: {
                        es: "Lo que comenzó como una curiosidad técnica y un nodo de experimentación de redes, evolucionó rápidamente para convertirse en la columna vertebral operativa del laboratorio personal. Este servidor no solo aloja aplicaciones; actúa como un árbitro entre el usuario y el caos digital.",
                        en: "What started as a technical curiosity and a network experimentation node rapidly evolved into the operational backbone of the personal laboratory. This server doesn't just host applications; it acts as an arbiter between the user and digital chaos."
                    }
                },
                {
                    subtitle: { es: "Filosofía", en: "Philosophy" },
                    text: {
                        es: "El sistema opera bajo el principio de \"Soberanía Digital y Bienestar Forzado\". Se utiliza la infraestructura de red para imponer límites físicos a comportamientos digitales adictivos, demostrando que la ingeniería de sistemas puede aplicarse a la ingeniería del comportamiento humano.",
                        en: "The system operates under the principle of \"Digital Sovereignty and Forced Wellness\". Network infrastructure is used to impose physical limits on addictive digital behaviors, demonstrating that systems engineering can be applied to human behavioral engineering."
                    }
                },
                {
                    subtitle: { es: "Libertad Operativa", en: "Operational Freedom" },
                    text: {
                        es: "Más allá de la restricción, el sistema es un habilitador de productividad ubicua. Permite desplegar y ejecutar flujos de trabajo complejos en n8n desde la nube, operar proyectos de manera remota y acceder a la red local segura vía VPN (Tailscale) desde cualquier lugar del mundo, eliminando las barreras físicas del hardware local.",
                        en: "Beyond restriction, the system is an enabler of ubiquitous productivity. It allows deploying and running complex n8n workflows from the cloud, operating projects remotely, and accessing the secure local network via VPN (Tailscale) from anywhere in the world, eliminating physical hardware barriers."
                    }
                }
            ]
        },
        {
            type: "architecture",
            title: { es: "ARQUITECTURA DEL SISTEMA // FLUJO DE DATOS", en: "SYSTEM ARCHITECTURE // DATA FLOW" },
            description: {
                es: "Este esquema isométrico desglosa cómo conviven la seguridad, la automatización y la privacidad en una sola placa de silicio (Raspberry Pi 5).",
                en: "This isometric scheme breaks down how security, automation, and privacy coexist on a single silicon board (Raspberry Pi 5)."
            },
            image: "/images/sys-002/diagramisometric.webp",
            subsections: [
                {
                    title: { es: "01. LA CAPA PÚBLICA (Secure Ingress)", en: "01. PUBLIC LAYER (Secure Ingress)" },
                    text: {
                        es: "En lugar de exponer el servidor directamente a la web salvaje, se utiliza un túnel encriptado (Cloudflared). El flujo: Internet → Cloudflare Edge → Túnel → Nginx Proxy Manager. Resultado: Servicios como mi Dashboard de Rendimiento (Streamlit) y Automatizaciones (n8n) son accesibles globalmente sin comprometer la seguridad de la red doméstica.",
                        en: "Instead of exposing the server directly to the wild web, an encrypted tunnel (Cloudflared) is used. The flow: Internet → Cloudflare Edge → Tunnel → Nginx Proxy Manager. Result: Services like my Performance Dashboard (Streamlit) and Automations (n8n) are globally accessible without compromising home network security."
                    }
                },
                {
                    title: { es: "02. EL NÚCLEO (Docker Orchestration)", en: "02. THE CORE (Docker Orchestration)" },
                    text: {
                        es: "Dentro de la Pi 5, los servicios viven aislados en contenedores: Zona Pública (Apps que necesitan ver el mundo: n8n, Webhooks) y Zona Privada (Servicios de uso personal: Jellyfin, Filebrowser) que no tienen conexión con el proxy inverso, manteniéndose oscuros para el internet público.",
                        en: "Inside the Pi 5, services live isolated in containers: Public Zone (Apps that need to see the world: n8n, Webhooks) and Private Zone (Personal use services: Jellyfin, Filebrowser) which have no connection to the reverse proxy, remaining dark to the public internet."
                    }
                },
                {
                    title: { es: "03. EL ESCUDO DE SALIDA (DNS Filtering)", en: "03. EGRESS SHIELD (DNS Filtering)" },
                    text: {
                        es: "No solo importa lo que entra, sino lo que sale. Pi-hole actúa como el portero de la red. Intercepta las peticiones DNS de mi laptop y móvil. Si la petición es ads.google.com o tiktok-tracker, el tráfico es eliminado (Drop) antes de salir al router. Esto ahorra ancho de banda y protege mi atención.",
                        en: "It's not just what comes in, but what goes out. Pi-hole acts as the network gatekeeper. It intercepts DNS requests from my laptop and mobile. If the request is for ads.google.com or tiktok-tracker, the traffic is dropped before leaving the router. This saves bandwidth and protects my attention."
                    }
                },
                {
                    title: { es: "04. LA MALLA DE GESTIÓN (Tailscale)", en: "04. MANAGEMENT MESH (Tailscale)" },
                    text: {
                        es: "Para tareas de mantenimiento o consumo de medios fuera de casa, evito exponer puertos SSH. Utilizo Tailscale para crear una red privada virtual (Mesh VPN) que conecta mis dispositivos directamente al servidor, sin importar en qué red de cafetería me encuentre.",
                        en: "For maintenance tasks or media consumption away from home, I avoid exposing SSH ports. I use Tailscale to create a virtual private network (Mesh VPN) that connects my devices directly to the server, regardless of which coffee shop network I'm on."
                    }
                }
            ]
        },
        {
            type: "hardware",
            title: { es: "CAPA FÍSICA (HARDWARE & THERMALS)", en: "PHYSICAL LAYER (HARDWARE & THERMALS)" },
            description: {
                es: "El hardware fue modificado para soportar cargas de trabajo continuas y temperaturas estables bajo estrés.",
                en: "The hardware was modified to support continuous workloads and stable temperatures under stress."
            },
            subsections: [
                {
                    title: { es: "Compute & Storage", en: "Compute & Storage" },
                    items: [
                        { label: "Compute", text: { es: "Raspberry Pi 5 con 8GB de RAM.", en: "Raspberry Pi 5 with 8GB RAM." } },
                        { label: { es: "Almacenamiento (Upgrade)", en: "Storage (Upgrade)" }, text: { es: "Se migró de una tarjeta SD (alta latencia/falla) a un SSD SATA reutilizado (extraído de una laptop personal), conectado vía USB 3.0. Nota: El puerto M.2 fue descartado por incompatibilidad física con el drive disponible, optando por la robustez del SATA externo.", en: "Migrated from an SD card (high latency/failure) to a repurposed SATA SSD (extracted from a personal laptop), connected via USB 3.0. Note: The M.2 port was discarded due to physical incompatibility with the available drive, opting for the robustness of external SATA." } }
                    ]
                },
                {
                    title: { es: "Enclosure & Cooling", en: "Enclosure & Cooling" },
                    text: {
                        es: "Alojado en un chasis de aluminio de grado industrial (Mini PC Style) con disipación pasiva y un ventilador PWM activo con iluminación RGB. La velocidad del ventilador se ajusta dinámicamente según la carga de la CPU.",
                        en: "Housed in an industrial-grade aluminum chassis (Mini PC Style) with passive dissipation and an active PWM fan with RGB lighting. Fan speed adjusts dynamically based on CPU load."
                    },
                    image: "/images/sys-002/pi5rgb.webp"
                }
            ]
        },
        {
            type: "defense",
            title: { es: "PROTOCOLO DE DEFENSA COGNITIVA (PI-HOLE)", en: "COGNITIVE DEFENSE PROTOCOL (PI-HOLE)" },
            description: {
                es: "Más allá del bloqueo de publicidad, Pi-hole se utiliza como una herramienta de Neuro-Hacking para gestionar la atención y los niveles de dopamina.",
                en: "Beyond ad blocking, Pi-hole is used as a Neuro-Hacking tool to manage attention and dopamine levels."
            },
            subsections: [
                {
                    title: { es: "El Fenómeno de la Sustitución", en: "The Substitution Phenomenon" },
                    text: {
                        es: "El análisis de datos reveló que eliminar las apps de redes sociales del móvil simplemente desplazaba el comportamiento adictivo hacia el navegador web.",
                        en: "Data analysis revealed that deleting social media apps from mobile simply shifted the addictive behavior to the web browser."
                    }
                },
                {
                    title: { es: "Contramedida de Red (+4k Bloqueos/Día)", en: "Network Countermeasure (+4k Blocks/Day)" },
                    text: {
                        es: "Se implementó un bloqueo a nivel DNS diferenciado por dispositivo. Actualmente bloqueando más de 4,000 peticiones de rastreo y publicidad diariamente.",
                        en: "Implemented DNS-level blocking differentiated by device. Currently blocking over 4,000 tracking and ad requests daily."
                    },
                    items: [
                        { label: { es: "Móviles", en: "Mobile" }, text: { es: "Bloqueo total de dominios de distracción.", en: "Total block of distraction domains." } },
                        { label: "Desktop", text: { es: "Acceso restringido con ventanas de tiempo (FB/IG) y modificaciones de interfaz.", en: "Restricted access with time windows (FB/IG) and interface modifications." } }
                    ],
                    image: "/images/sys-002/pihole.webp"
                },
                {
                    title: { es: "La Estrategia YouTube (\"Thumbnail Killer\")", en: "The YouTube Strategy (\"Thumbnail Killer\")" },
                    text: {
                        es: "Reconociendo a YouTube como herramienta educativa pero trampa de dopamina, se implementó una solución híbrida: acceso permitido en Desktop pero con inyección de scripts para eliminar las miniaturas (thumbnails). Resultado: Búsqueda intencional vs. Consumo pasivo.",
                        en: "Recognizing YouTube as an educational tool but a dopamine trap, a hybrid solution was implemented: allowed access on Desktop but with script injection to remove thumbnails. Result: Intentional Search vs. Passive Consumption."
                    },
                    image: "/images/sys-002/youtubeDash.webp"
                }
            ]
        },
        {
            type: "application",
            title: { es: "CAPA DE APLICACIÓN (SERVICE MESH)", en: "APPLICATION LAYER (SERVICE MESH)" },
            description: {
                es: "El servidor orquesta una serie de contenedores Docker gestionados vía Portainer, con acceso remoto seguro vía SSH y WireGuard VPN.",
                en: "The server orchestrates a series of Docker containers managed via Portainer, with secure remote access via SSH and WireGuard VPN."
            },
            subsections: [
                {
                    title: { es: "Automatización (n8n)", en: "Automation (n8n)" },
                    text: {
                        es: "El cerebro operativo. Gestiona más de 20 workflows activos complejos para clientes y gestión personal, accesibles y ejecutables desde cualquier ubicación gracias a la exposición segura en la nube.",
                        en: "The operational brain. Manages over 20 complex active workflows for clients and personal management, accessible and executable from any location thanks to secure cloud exposure."
                    },
                    items: [
                        { label: { es: "Caso de Uso", en: "Use Case" }, text: { es: "Pipeline de limpieza de datos \"Sheet-to-Notion\" de acceso ubicuo.", en: "\"Sheet-to-Notion\" data cleaning pipeline with ubiquitous access." } },
                        { label: "Error Handling", text: { es: "Sistema de alertas en tiempo real conectado a un Bot de Telegram para reportar fallos en la ejecución de nodos críticos.", en: "Real-time alert system connected to a Telegram Bot to report failures in critical node execution." } }
                    ],
                    image: "/images/sys-002/n8nworkflow.webp"
                },
                {
                    title: "Media & Storage",
                    items: [
                        { label: "Jellyfin", text: { es: "Servidor de medios consumiendo una partición dedicada del SSD, sirviendo contenido a la red local.", en: "Media server consuming a dedicated SSD partition, serving content to the local network." } },
                        { label: "Filebrowser/CasaOS", text: { es: "Gestión de archivos remota e interfaz visual amigable para la gestión de servicios.", en: "Remote file management and user-friendly visual interface for service management." } }
                    ]
                },
                {
                    title: { es: "Acceso y Seguridad", en: "Access & Security" },
                    items: [
                        { label: "Tailscale", text: { es: "Mesh VPN Zero-config para acceso remoto seguro a la red local y servicios internos sin abrir puertos (CGNAT friendly).", en: "Zero-config Mesh VPN for secure remote access to local network and internal services without opening ports (CGNAT friendly)." } },
                        { label: "NPM (Nginx Proxy Manager)", text: { es: "Gestión de certificados SSL y proxy inverso para servicios expuestos.", en: "SSL certificate management and reverse proxy for exposed services." } }
                    ]
                }
            ]
        }
    ],
    appendix: {
        title: { es: "RESUMEN TÉCNICO", en: "TECHNICAL SUMMARY" },
        items: [
            { label: "OS", value: "Debian 12" },
            { label: "Engine", value: "Docker + CasaOS" },
            { label: "Network", value: "Tailscale + Cloudflare" },
            { label: "Storage", value: "SSD SATA" }
        ]
    }
};
