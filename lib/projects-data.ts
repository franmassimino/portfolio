export const projectsData = {
  "lamperti-luthier": {
    title: "Lamperti Luthier",
    titleEs: "Lamperti Luthier",
    description: "Website + growth strategy for a traditional violin maker",
    descriptionEs: "Sitio web + estrategia de crecimiento para un luthier tradicional",
    coverImage: "/assets/lamperti-luthier.png",
    completedDate: "March 2024",
    duration: "2 months",
    techStack: ["Next.js", "SEO", "Marketing", "Analytics"],
    keyFeatures: [
      { title: "SEO Optimization", titleEs: "Optimización SEO", description: "Improved search rankings for local searches", descriptionEs: "Mejora en rankings de búsqueda local" },
      { title: "Content Strategy", titleEs: "Estrategia de Contenido", description: "Built authority with educational content", descriptionEs: "Construyó autoridad con contenido educativo" },
    ],
    sections: [
      {
        title: "The Challenge",
        titleEs: "El Desafío",
        content: "Lamperti Luthier needed to establish an online presence and attract clients in a competitive market.",
        contentEs: "Lamperti Luthier necesitaba establecer presencia online y atraer clientes en un mercado competitivo.",
      },
    ],
    results: [
      "30+ clients acquired in first month",
      "3x increase in organic traffic",
      "50% reduction in customer acquisition cost"
    ],
    resultsEs: [
      "30+ clientes adquiridos en el primer mes",
      "3x aumento en tráfico orgánico",
      "50% reducción en costo de adquisición"
    ]
  },
  "stay-wild-studio": {
    title: "Stay Wild Studio",
    titleEs: "Stay Wild Studio",
    description: "E-commerce platform for sustainable fashion brand",
    descriptionEs: "Plataforma e-commerce para marca de moda sostenible",
    coverImage: "/assets/stay-wild.png",
    completedDate: "April 2024",
    duration: "3 months",
    techStack: ["Shopify", "React", "Marketing", "Branding"],
    keyFeatures: [
      { title: "Custom Shopify Theme", titleEs: "Tema Personalizado", description: "Built from scratch for brand identity", descriptionEs: "Construido desde cero para identidad de marca" },
      { title: "Marketing Integration", titleEs: "Integración de Marketing", description: "Connected all marketing channels", descriptionEs: "Conectó todos los canales de marketing" },
    ],
    sections: [
      {
        title: "The Challenge",
        titleEs: "El Desafío",
        content: "Create a unique e-commerce experience that reflects the brand's sustainable values.",
        contentEs: "Crear una experiencia e-commerce única que refleje los valores sostenibles de la marca.",
      },
    ],
    results: [
      "100% increase in conversion rate",
      "2x average order value",
      "40% repeat purchase rate"
    ],
    resultsEs: [
      "100% aumento en tasa de conversión",
      "2x valor promedio de pedido",
      "40% tasa de compra repetida"
    ]
  },
  "lina-restaurant": {
    title: "Lina Restaurant",
    titleEs: "Lina Restaurant",
    description: "Full digital launch for a modern restaurant",
    descriptionEs: "Lanzamiento digital completo para un restaurante moderno",
    coverImage: "/assets/lina.png",
    completedDate: "May 2024",
    duration: "2 months",
    techStack: ["Next.js", "UX Design", "SEO", "Booking System"],
    keyFeatures: [
      { title: "Online Reservations", titleEs: "Reservas Online", description: "Custom booking system integrated", descriptionEs: "Sistema de reservas personalizado integrado" },
      { title: "Menu Management", titleEs: "Gestión de Menú", description: "Easy to update digital menu", descriptionEs: "Menú digital fácil de actualizar" },
    ],
    sections: [
      {
        title: "The Challenge",
        titleEs: "El Desafío",
        content: "Launch a new restaurant with a strong digital presence from day one.",
        contentEs: "Lanzar un nuevo restaurante con fuerte presencia digital desde el día uno.",
      },
    ],
    results: [
      "200+ reservations in first week",
      "90% table occupancy rate",
      "4.8★ average review score"
    ],
    resultsEs: [
      "200+ reservas en primera semana",
      "90% tasa de ocupación de mesas",
      "4.8★ puntuación promedio de reseñas"
    ]
  },
} as const;

export type ProjectSlug = keyof typeof projectsData;
export type ProjectData = typeof projectsData[ProjectSlug];


