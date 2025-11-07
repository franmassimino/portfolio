import type { ProjectData } from './types';

export const linaRestaurant: ProjectData = {
  title: "Lina Restaurante",
  titleEs: "Lina Restaurante",
  description: "Building the digital presence and local positioning for a new contemporary restaurant",
  descriptionEs: "Construcción de la presencia digital y posicionamiento local para un nuevo restaurante contemporáneo",
  coverImage: "/assets/lina.png",
  completedDate: "May 2024",
  duration: "2 months",
  techStack: ["Next.js", "TailwindCSS", "CoverManager", "Google Business Profile", "GA4", "Local SEO"],
  keyFeatures: [
    {
      title: "Custom Website Experience",
      titleEs: "Experiencia Web Personalizada",
      description: "Designed and developed in Next.js with photography-centered layout highlighting plating and atmosphere",
      descriptionEs: "Diseñado y desarrollado en Next.js con layout centrado en fotografía destacando emplatado y atmósfera",
      icon: "layout"
    },
    {
      title: "Multilingual Support",
      titleEs: "Soporte Multilingüe",
      description: "Spanish + English implementation for international guests and local discovery",
      descriptionEs: "Implementación de Español + Inglés para huéspedes internacionales y descubrimiento local",
      icon: "languages"
    },
    {
      title: "Seamless Reservations",
      titleEs: "Reservas Sin Fricción",
      description: "CoverManager integration for effortless booking with reduced administrative overhead",
      descriptionEs: "Integración de CoverManager para reservas sin esfuerzo con reducción de sobrecarga administrativa",
      icon: "calendar"
    },
    {
      title: "Local SEO Foundation",
      titleEs: "Fundación de SEO Local",
      description: "Built SEO and Google Maps positioning from scratch for indexing and local discovery",
      descriptionEs: "Construcción de SEO y posicionamiento en Google Maps desde cero para indexación y descubrimiento local",
      icon: "search"
    },
  ],
  sections: [
    {
      title: "Context & Challenge",
      titleEs: "Contexto y Desafío",
      structuredContent: {
        intro: "Lina is a contemporary dining restaurant that opened with no existing online presence. The brand's visual identity and narrative — centered on memory, care, and the experience of gathering — were created by a branding designer.\n\nMy role was to translate that identity into the digital space and build the systems that would make the restaurant discoverable, trustworthy, and easy to book.\n\nThis meant:",
        introEs: "Lina es un restaurante de cocina contemporánea que abrió sin presencia online existente. La identidad visual y narrativa de la marca, centrada en la memoria, el cuidado y la experiencia de reunirse, fueron creadas por un diseñador de branding.\n\nMi rol fue traducir esa identidad al espacio digital y construir los sistemas que harían al restaurante descubrible, confiable y fácil de reservar.\n\nEsto significaba:",
        bullets: [
          "Designing and developing the website experience",
          "Implementing multilingual support",
          "Setting up reservation, analytics, and tracking flows",
          "Establishing the restaurant's SEO and Google Maps positioning",
          "Creating a simple reputation-building mechanism for reviews"
        ],
        bulletsEs: [
          "Diseñar y desarrollar la experiencia del sitio web",
          "Implementar soporte multilingüe",
          "Configurar flujos de reservas, analíticas y seguimiento",
          "Establecer el posicionamiento SEO y Google Maps del restaurante",
          "Crear un mecanismo simple de construcción de reputación para reseñas"
        ],
        highlight: "As a new restaurant, Lina had no website, no SEO footprint, no Google Maps ranking, and no reviews.",
        highlightEs: "Como un nuevo restaurante, Lina no tenía sitio web, huella de SEO, ranking en Google Maps ni reseñas.",
        closing: "To complicate the launch, a nearby restaurant named \"La Lina\" was already ranking first for name-related searches — leading to confusion and misdirected bookings. We needed to introduce the brand clearly, differentiate it from \"La Lina\", make reservations effortless, and build credibility from scratch.",
        closingEs: "Para complicar el lanzamiento, un restaurante cercano llamado \"La Lina\" ya estaba rankeando primero para búsquedas relacionadas con el nombre, lo que generaba confusión y reservas mal dirigidas. Necesitábamos introducir la marca claramente, diferenciarla de \"La Lina\", hacer las reservas sin esfuerzo y construir credibilidad desde cero."
      }
    },
    {
      title: "Digital Execution & Experience",
      titleEs: "Ejecución Digital y Experiencia",
      structuredContent: {
        intro: "Working with the brand identity provided, I:",
        introEs: "Trabajando con la identidad de marca proporcionada, yo:",
        bullets: [
          "Designed and developed a custom website in Next.js",
          "Structured the layout to highlight photography, plating, and atmosphere",
          "Implemented Spanish + English support for international guests",
          "Integrated CoverManager for seamless, no-friction reservations",
          "Built the SEO and Google Maps foundation for indexing and local discovery"
        ],
        bulletsEs: [
          "Diseñé y desarrollé un sitio web personalizado en Next.js",
          "Estructuré el layout para destacar fotografía, emplatado y atmósfera",
          "Implementé soporte de Español + Inglés para huéspedes internacionales",
          "Integré CoverManager para reservas fluidas y sin fricción",
          "Construí la fundación de SEO y Google Maps para indexación y descubrimiento local"
        ],
        closing: "The approach aimed to reflect the calm, intentional, grounded feel of the physical dining experience.",
        closingEs: "El enfoque buscaba reflejar la sensación calmada, intencional y fundamentada de la experiencia gastronómica física."
      }
    },
    {
      title: "Reputation Strategy",
      titleEs: "Estrategia de Reputación",
      structuredContent: {
        intro: "Guests were consistently happy — but reviews were not being captured. So we created a simple, respectful system:",
        introEs: "Los huéspedes estaban consistentemente contentos, pero las reseñas no se estaban capturando. Así que creamos un sistema simple y respetuoso:",
        bullets: [
          "A small printed card with a QR linking directly to Google Reviews",
          "Light, optional staff prompts given only when appropriate"
        ],
        bulletsEs: [
          "Una pequeña tarjeta impresa con un QR enlazando directamente a Google Reviews",
          "Prompts ligeros y opcionales del personal dados solo cuando es apropiado"
        ],
        closing: "This allowed the restaurant to build authentic reputation without incentives or pressure.",
        closingEs: "Esto permitió al restaurante construir reputación auténtica sin incentivos o presión."
      }
    },
    {
      title: "Outcome",
      titleEs: "Resultado",
      structuredContent: {
        intro: "Over time, Lina surpassed \"La Lina\" in search rankings, now holding the #1 position for branded queries. The restaurant built strong visibility across Google Maps and local discovery, reached 380+ reviews with an average close to 5 stars, and simplified reservations while reducing administrative overhead.",
        introEs: "Con el tiempo, Lina superó a \"La Lina\" en los rankings de búsqueda, manteniendo ahora la posición #1 para consultas de marca. El restaurante construyó fuerte visibilidad en Google Maps y descubrimiento local, alcanzó 380+ reseñas con un promedio cercano a 5 estrellas y simplificó las reservas mientras reducía la sobrecarga administrativa."
      }
    },
  ],
  metrics: [
    {
      label: "Google Reviews",
      labelEs: "Reseñas de Google",
      value: "380+ reviews",
      valueEs: "380+ reseñas",
      insight: "Average close to 5 stars with authentic feedback",
      insightEs: "Promedio cercano a 5 estrellas con feedback auténtico",
      icon: "⭐"
    },
    {
      label: "Local Ranking",
      labelEs: "Ranking Local",
      value: "#1 position",
      valueEs: "Posición #1",
      insight: "Top result for \"Lina Restaurante\" on Maps/Search",
      insightEs: "Resultado principal para \"Lina Restaurante\" en Maps/Search",
      icon: "📍"
    },
    {
      label: "Audience",
      labelEs: "Audiencia",
      value: "Local + international",
      valueEs: "Local + internacional",
      insight: "Bilingual support attracts diverse visitors",
      insightEs: "Soporte bilingüe atrae visitantes diversos",
      icon: "🌍"
    },
    {
      label: "Guest Experience",
      labelEs: "Experiencia del Huésped",
      value: "Friction-free flow",
      valueEs: "Flujo sin fricción",
      insight: "Reservation flow without barriers",
      insightEs: "Flujo de reservas sin barreras",
      icon: "🍷"
    },
  ],
  impact: {
    title: "Business Impact",
    titleEs: "Impacto en el Negocio",
    content: "Lina now operates with a strong digital foundation that drives discovery, builds trust, and streamlines operations. The restaurant surpassed nearby competitors in search rankings, built authentic reputation through 380+ five-star reviews, and reduced administrative friction through seamless reservation flows. The digital presence complements the physical dining experience, creating emotional continuity from discovery to booking.",
    contentEs: "Lina ahora opera con una fundación digital sólida que impulsa el descubrimiento, construye confianza y agiliza las operaciones. El restaurante superó a los competidores cercanos en rankings de búsqueda, construyó reputación auténtica a través de 380+ reseñas de cinco estrellas y redujo la fricción administrativa a través de flujos de reserva fluidos. La presencia digital complementa la experiencia gastronómica física, creando continuidad emocional desde el descubrimiento hasta la reserva.",
  },
  keyTakeaways: [
    "A restaurant's first experience is now digital — positioning and clarity matter as much as the menu",
    "Good web design is about emotional continuity, not decoration",
    "Reputation systems work best when they are human and simple",
    "SEO + Maps + UX form a single, unified conversion funnel in hospitality",
  ],
  keyTakeawaysEs: [
    "La primera experiencia de un restaurante ahora es digital: el posicionamiento y la claridad importan tanto como el menú",
    "El buen diseño web se trata de continuidad emocional, no de decoración",
    "Los sistemas de reputación funcionan mejor cuando son humanos y simples",
    "SEO + Maps + UX forman un embudo de conversión único y unificado en hospitalidad",
  ]
};
