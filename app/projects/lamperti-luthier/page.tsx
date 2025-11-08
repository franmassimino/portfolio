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

export default function LampertiLuthierPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data embedded directly in the component
  const projectData = {
    title: "Lamperti Luthier",
    titleEs: "Lamperti Luthier",
    description: "Bringing a local guitar workshop into the digital age",
    descriptionEs: "Llevando un taller local de guitarras a la era digital",
    coverImage: "/assets/lamperti-luthier.png",
    completedDate: "March 2024",
    duration: "6 months",
    techStack: ["Next.js", "Tailwind", "Google Analytics", "Hotjar", "Google Ads"],
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
          highlight: "For someone younger and less established, adopting the same traditional look and flow would only reinforce the gap in perceived credibility. So we chose a different angle.",
          highlightEs: "Para alguien más joven y menos establecido, adoptar la misma apariencia y flujo tradicional solo reforzaría la brecha en la credibilidad percibida. Así que elegimos un ángulo diferente.",
          closing: "For someone younger and less established, adopting the same traditional look and flow would only reinforce the gap in perceived credibility. So we chose a different angle. Instead of long forms or complex flows, we prioritized immediate, direct contact and clarity. Skilled craftsmanship presented through a modern, approachable experience.",
          closingEs: "En lugar de formularios largos o flujos complejos, priorizamos el contacto inmediato, directo y la claridad. Artesanía calificada presentada a través de una experiencia moderna y accesible"
        }
      },
      {
        title: "Solution",
        titleEs: "Solución",
        structuredContent: {
          intro: "I developed a conversion-focused landing page, built with a clean and minimal layout, straightforward messaging, and WhatsApp-first contact. This made it easy for potential clients to ask questions and book appointments without barriers.\n\nTo execute this, I:",
          introEs: "Desarrollé una landing page orientada a conversión, construida con un diseño limpio y minimalista, mensajes directos y contacto prioritario por WhatsApp. Esto facilitó que los clientes potenciales hicieran preguntas y reservaran citas sin barreras.\n\nPara ejecutar esto, me encargué de:",
          bullets: [
            "Integrated Google Analytics 4 and Hotjar to understand behavior and refine the page over time",
            "Ran targeted Google and Meta ads to drive nearby users to the site",
            "Created and optimizaed a Google Business Profile for stronger local presence",
          ],
          bulletsEs: [
            "Integrar Google Analytics 4 y Hotjar para entender el comportamiento y refinar la página con el tiempo",
            "Ejecutar campañas de anuncios dirigidos en Google y Meta para atraer usuarios cercanos al sitio",
            "Crear y optimizar un Perfil de Google Business para una presencia local más fuerte",
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
        label: "Qualified Leads Generated",
        labelEs: "Leads Calificados Generados",
        value: "700+ in 6 months",
        valueEs: "700+ en 6 meses",
        insight: "Strong and consistent inbound demand",
        insightEs: "Demanda de entrada fuerte y constante",
        icon: "💬"
      },
      {
        label: "Cost per Acquisition",
        labelEs: "Costo por Adquisición",
        value: "~€0.50 per lead",
        valueEs: "~€0.50 por lead",
        insight: "Highly cost-efficient paid acquisition",
        insightEs: "Adquisición paga altamente eficiente",
        icon: "⚡"
      },
      {
        label: "Revenue Impact (projected)",
        labelEs: "Impacto en Ingresos (estimado)",
        value: "7–10× ROAS",
        valueEs: "Retorno 7–10× ROAS",
        insight: "Every €1 in ads generated €7–10 in sales (based on client-reported close rate)",
        insightEs: "Cada €1 en anuncios generó €7–10 en ventas (según tasa de cierre reportada)",
        icon: "📈"
      }
      
    ]
,    
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

  // Other projects data for navigation
  const otherProjects = [
    {
      slug: "stay-wild-studio",
      data: {
        title: "Stay Wild Studio",
        titleEs: "Stay Wild Studio",
        description: "Launching an online store to scale a growing handmade accessories brand",
        descriptionEs: "Lanzamiento de una tienda online para escalar una marca de accesorios artesanales en crecimiento",
      }
    },
    {
      slug: "lina-restaurant",
      data: {
        title: "Lina Restaurante",
        titleEs: "Lina Restaurante",
        description: "Building the digital presence and local positioning for a new contemporary restaurant",
        descriptionEs: "Construcción de la presencia digital y posicionamiento local para un nuevo restaurante contemporáneo",
      }
    }
  ];

  const title = isSpanish ? projectData.titleEs : projectData.title;
  const description = isSpanish ? projectData.descriptionEs : projectData.description;
  const keyTakeaways = isSpanish ? projectData.keyTakeawaysEs : projectData.keyTakeaways;

  return (
    <>
      <Head>
        <title>Lamperti Luthier - Case Study | Francisco Massimino</title>
        <meta name="description" content="Bringing a local guitar workshop into the digital age" />
        <meta property="og:title" content="Lamperti Luthier - Case Study | Francisco Massimino - Portfolio" />
        <meta property="og:description" content="Bringing a local guitar workshop into the digital age" />
        <meta property="og:image" content="/assets/lamperti-luthier.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lamperti Luthier - Case Study | Francisco Massimino - Portfolio" />
        <meta name="twitter:description" content="Bringing a local guitar workshop into the digital age" />
        <meta name="twitter:image" content="/assets/lamperti-luthier.png" />
        <meta name="keywords" content="Next.js, TailwindCSS, Google Analytics 4, Hotjar, Google Ads, Meta Ads, Google Business Profile" />
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
