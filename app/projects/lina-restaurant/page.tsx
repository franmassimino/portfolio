"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";
import {
  ProjectHero,
  ProjectCoverImage,
  ProjectSections,
  ProjectMetrics,
  ProjectTakeaways,
  ProjectNavigation,
} from "@/components/project";

export default function LinaRestaurantPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data embedded directly in the component
  const projectData = {
    title: "Lina Restaurante",
    titleEs: "Lina Restaurante",
    description: "Building the digital presence and local positioning for a new contemporary restaurant",
    descriptionEs: "Construcción de la presencia digital y posicionamiento local para un nuevo restaurante contemporáneo",
    coverImage: "/assets/lina-mockup.png",
    completedDate: "May 2024",
    duration: "2 months",
    techStack: ["Next.js", "TailwindCSS", "CoverManager", "Google Business Profile", "GA4", "Local SEO"],
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
        label: "Guest Experience",
        labelEs: "Experiencia del Huésped",
        value: "Friction-free flow",
        valueEs: "Flujo sin fricción",
        insight: "Reservation flow without barriers",
        insightEs: "Flujo de reservas sin barreras",
        icon: "🍷"
      },
    ],
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

  // Other projects data for navigation
  const otherProjects = [
    {
      slug: "lamperti-luthier",
      data: {
        title: "Lamperti Luthier",
        titleEs: "Lamperti Luthier",
        description: "Bringing a local guitar workshop into the digital age",
        descriptionEs: "Llevando un taller local de guitarras a la era digital",
      }
    },
    {
      slug: "stay-wild-studio",
      data: {
        title: "Stay Wild Studio",
        titleEs: "Stay Wild Studio",
        description: "Launching an online store to scale a growing handmade accessories brand",
        descriptionEs: "Lanzamiento de una tienda online para escalar una marca de accesorios artesanales en crecimiento",
      }
    }
  ];

  const title = isSpanish ? projectData.titleEs : projectData.title;
  const description = isSpanish ? projectData.descriptionEs : projectData.description;
  const keyTakeaways = isSpanish ? projectData.keyTakeawaysEs : projectData.keyTakeaways;

  return (
    <>
      <Head>
        <title>Lina Restaurante - Case Study | Francisco Massimino</title>
        <meta name="description" content="Building the digital presence and local positioning for a new contemporary restaurant" />
        <meta property="og:title" content="Lina Restaurante - Case Study | Francisco Massimino - Portfolio" />
        <meta property="og:description" content="Building the digital presence and local positioning for a new contemporary restaurant" />
        <meta property="og:image" content="/assets/lina.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lina Restaurante - Case Study | Francisco Massimino - Portfolio" />
        <meta name="twitter:description" content="Building the digital presence and local positioning for a new contemporary restaurant" />
        <meta name="twitter:image" content="/assets/lina.png" />
        <meta name="keywords" content="Next.js, TailwindCSS, CoverManager, Google Business Profile, GA4, Local SEO" />
      </Head>
      <main className="relative min-h-screen">
        {/* Animated background grid */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

      {/* Gradient orbs */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Navbar />

      <ProjectHero
        title={title}
        description={description}
        techStack={projectData.techStack}
        isSpanish={isSpanish}
      />

      <ProjectCoverImage src={projectData.coverImage} alt={title} />

      <ProjectSections sections={projectData.sections} isSpanish={isSpanish} />

      <ProjectMetrics metrics={projectData.metrics} isSpanish={isSpanish} />

      <ProjectTakeaways takeaways={keyTakeaways} isSpanish={isSpanish} />

      <ProjectNavigation
        otherProjects={otherProjects}
        isSpanish={isSpanish}
      />
      </main>
    </>
  );
}
