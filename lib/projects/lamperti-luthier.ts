import type { ProjectData } from './types';

export const lampertiLuthier: ProjectData = {
  title: "Lamperti Luthier",
  titleEs: "Lamperti Luthier",
  description: "Bringing a local guitar workshop into the digital age",
  descriptionEs: "Llevando un taller local de guitarras a la era digital",
  coverImage: "/assets/lamperti-luthier.png",
  completedDate: "March 2024",
  duration: "6 months",
  techStack: ["Next.js", "TailwindCSS", "Google Analytics 4", "Hotjar", "Google Ads", "Meta Ads", "Google Business Profile"],
  keyFeatures: [
    {
      title: "Conversion-Focused Landing Page",
      titleEs: "Landing Page Orientada a Conversión",
      description: "Clean and minimal layout with straightforward messaging and WhatsApp-first contact",
      descriptionEs: "Diseño limpio y minimalista con mensajes directos y contacto prioritario por WhatsApp",
      icon: "target"
    },
    {
      title: "Data-Driven Ad Campaigns",
      titleEs: "Campañas Publicitarias Basadas en Datos",
      description: "Targeted Google and Meta ads to drive nearby users to the site",
      descriptionEs: "Anuncios dirigidos en Google y Meta para atraer usuarios cercanos al sitio",
      icon: "bar-chart-3"
    },
    {
      title: "Performance Tracking",
      titleEs: "Seguimiento de Rendimiento",
      description: "Google Analytics 4 and Hotjar integration to understand behavior and refine the page over time",
      descriptionEs: "Integración de Google Analytics 4 y Hotjar para entender el comportamiento y refinar la página con el tiempo",
      icon: "activity"
    },
    {
      title: "Local SEO Enhancement",
      titleEs: "Mejora de SEO Local",
      description: "Improved Google Business Profile for stronger local presence",
      descriptionEs: "Perfil de Google Business mejorado para mayor presencia local",
      icon: "map-pin"
    },
  ],
  sections: [
    {
      title: "Overview",
      titleEs: "Resumen",
      structuredContent: {
        intro: "Lamperti Luthier is a small guitar repair workshop in Buenos Aires run by Mauro, a young craftsman with strong technical skill but very limited online presence. Most of his clients arrived through word-of-mouth, which made demand irregular and hard to plan.",
        introEs: "Lamperti Luthier es un pequeño taller de reparación de guitarras en Buenos Aires dirigido por Mauro, un joven artesano con gran habilidad técnica pero presencia online muy limitada. La mayoría de sus clientes llegaban por boca a boca, lo que hacía la demanda irregular y difícil de planificar.",
        closing: "The goal was not just to 'have a website,' but to create a simple and reliable way for new clients to find him and contact him easily — while maintaining the authenticity of his work.",
        closingEs: "El objetivo no era solo 'tener un sitio web', sino crear una forma simple y confiable para que nuevos clientes lo encuentren y contacten fácilmente, mientras se mantiene la autenticidad de su trabajo.",
      }
    },
    {
      title: "Research & Direction",
      titleEs: "Investigación y Dirección",
      structuredContent: {
        intro: "During research, we noticed a pattern across local luthiers:",
        introEs: "Durante la investigación, notamos un patrón entre los luthiers locales:",
        bullets: [
          "Good reputations built over years",
          "Outdated or slow websites",
          "Contact processes with too much friction (forms, emails, delayed responses)"
        ],
        bulletsEs: [
          "Buenas reputaciones construidas a lo largo de años",
          "Sitios web desactualizados o lentos",
          "Procesos de contacto con demasiada fricción (formularios, emails, respuestas demoradas)"
        ],
        highlight: "Skilled craftsmanship presented through a modern, approachable experience.",
        highlightEs: "Artesanía calificada presentada a través de una experiencia moderna y accesible.",
        closing: "For someone younger and less established, adopting the same traditional look and flow would only reinforce the gap in perceived credibility. So we chose a different angle. Instead of long forms or complex flows, we prioritized immediate, direct contact and clarity.",
        closingEs: "Para alguien más joven y menos establecido, adoptar la misma apariencia y flujo tradicional solo reforzaría la brecha en la credibilidad percibida. Así que elegimos un ángulo diferente. En lugar de formularios largos o flujos complejos, priorizamos el contacto inmediato, directo y la claridad."
      }
    },
    {
      title: "Solution",
      titleEs: "Solución",
      structuredContent: {
        intro: "We developed a conversion-focused landing page, built with a clean and minimal layout, straightforward messaging, and WhatsApp-first contact. This made it easy for potential clients to ask questions and book appointments without barriers.\n\nTo support this, we:",
        introEs: "Desarrollamos una landing page orientada a conversión, construida con un diseño limpio y minimalista, mensajes directos y contacto prioritario por WhatsApp. Esto facilitó que los clientes potenciales hicieran preguntas y reservaran citas sin barreras.\n\nPara apoyar esto, nosotros:",
        bullets: [
          "Improved the Google Business Profile for stronger local presence",
          "Ran targeted Google and Meta ads to drive nearby users to the site",
          "Integrated Google Analytics 4 and Hotjar to understand behavior and refine the page over time"
        ],
        bulletsEs: [
          "Mejoramos el Perfil de Google Business para una presencia local más fuerte",
          "Ejecutamos anuncios dirigidos en Google y Meta para atraer usuarios cercanos al sitio",
          "Integramos Google Analytics 4 y Hotjar para entender el comportamiento y refinar la página con el tiempo"
        ],
        closing: "The focus was always on clarity, trust, and accessibility.",
        closingEs: "El enfoque siempre estuvo en la claridad, la confianza y la accesibilidad."
      }
    },
    {
      title: "Outcome",
      titleEs: "Resultado",
      structuredContent: {
        intro: "The workshop moved from inconsistent demand to a steady flow of inquiries throughout the month. Direct communication became immediate, personal, and simple for clients.",
        introEs: "El taller pasó de una demanda inconsistente a un flujo constante de consultas durante todo el mes. La comunicación directa se volvió inmediata, personal y simple para los clientes.",
      }
    },
    {
      title: "Business Impact",
      titleEs: "Impacto en el Negocio",
      structuredContent: {
        intro: "With a stable pipeline of new clients, Mauro was able to rent his own dedicated workshop space, organize scheduling more comfortably, and grow through:",
        introEs: "Con un pipeline estable de nuevos clientes, Mauro pudo alquilar su propio espacio de taller dedicado, organizar los horarios más cómodamente y crecer a través de:",
        bullets: [
          "New clients discovering him online",
          "Returning customers from past work",
          "Referrals that naturally increased as more people interacted with his service"
        ],
        bulletsEs: [
          "Nuevos clientes descubriéndolo online",
          "Clientes recurrentes de trabajos anteriores",
          "Referencias que aumentaron naturalmente a medida que más personas interactuaban con su servicio"
        ],
        closing: "The digital presence didn't replace reputation — it accelerated its growth.",
        closingEs: "La presencia digital no reemplazó la reputación, aceleró su crecimiento."
      }
    },
  ],
  metrics: [
    {
      label: "Inquiries Generated",
      labelEs: "Consultas Generadas",
      value: "700+ messages",
      valueEs: "700+ mensajes",
      insight: "Steady flow of inquiries throughout the month",
      insightEs: "Flujo constante de consultas durante todo el mes",
      icon: "💬"
    },
    {
      label: "Contact Method",
      labelEs: "Método de Contacto",
      value: "Direct WhatsApp",
      valueEs: "WhatsApp Directo",
      insight: "Immediate, personal, and simple communication",
      insightEs: "Comunicación inmediata, personal y simple",
      icon: "⚡"
    },
    {
      label: "Lead Flow",
      labelEs: "Flujo de Leads",
      value: "Consistent month-to-month",
      valueEs: "Consistente mes a mes",
      insight: "Moved from irregular to predictable demand",
      insightEs: "Pasó de demanda irregular a predecible",
      icon: "🎯"
    },
    {
      label: "Brand Positioning",
      labelEs: "Posicionamiento de Marca",
      value: "Skilled and approachable",
      valueEs: "Calificado y accesible",
      insight: "Modern craftsmanship with authentic touch",
      insightEs: "Artesanía moderna con toque auténtico",
      icon: "🧭"
    },
  ],
  impact: {
    title: "Business Impact",
    titleEs: "Impacto en el Negocio",
    content: "With a stable pipeline of new clients, Mauro was able to rent his own dedicated workshop space, organize scheduling more comfortably, and grow through new clients discovering him online, returning customers from past work, and referrals that naturally increased as more people interacted with his service. The digital presence didn't replace reputation — it accelerated its growth.",
    contentEs: "Con un pipeline estable de nuevos clientes, Mauro pudo alquilar su propio espacio de taller dedicado, organizar los horarios más cómodamente y crecer a través de nuevos clientes descubriéndolo online, clientes recurrentes de trabajos anteriores y referencias que aumentaron naturalmente a medida que más personas interactuaban con su servicio. La presencia digital no reemplazó la reputación, aceleró su crecimiento.",
  },
  keyTakeaways: [
    "Positioning matters as much as design — especially when credibility is still being built.",
    "Reducing friction in communication can have a greater impact than adding features.",
    "Sustainable growth for local businesses often comes from clarity, accessibility, and consistency, more than scale.",
  ],
  keyTakeawaysEs: [
    "El posicionamiento importa tanto como el diseño, especialmente cuando aún se está construyendo credibilidad.",
    "Reducir la fricción en la comunicación puede tener un impacto mayor que agregar funciones.",
    "El crecimiento sostenible para negocios locales a menudo proviene de la claridad, accesibilidad y consistencia, más que de la escala.",
  ]
};
