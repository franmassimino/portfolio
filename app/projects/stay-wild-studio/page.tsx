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

export default function StayWildStudioPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data embedded directly in the component
  const projectData = {
    title: "Stay Wild Studio",
    titleEs: "Stay Wild Studio",
    description: "Launching an online store to scale a growing handmade accessories brand",
    descriptionEs: "Lanzamiento de una tienda online para escalar una marca de accesorios artesanales en crecimiento",
    coverImage: "/assets/stay-wild-mockup2.png",
    completedDate: "April 2024",
    duration: "3 months",
    techStack: ["Shopify", "Liquid", "Sendcloud", "Stripe", "Mailchimp", "GA4", "SEO structure"],
    sections: [
      {
        title: "Context & Direction",
        titleEs: "Contexto y Dirección",
        structuredContent: {
          intro: "Stay Wild Studio is a handmade accessories brand run by Liss, with a loyal audience built through social media and community engagement. Demand for her products was already strong — but the brand did not yet have a functional online store. An old attempt on PrestaShop had never been completed, mostly due to technical friction and maintenance overhead.\n\nThe goal was to launch a store that matched the brand's identity, provided a smooth purchase experience, and — most importantly — could be managed independently by the founder.\n\nBefore launch, the brand already had:",
          introEs: "Stay Wild Studio es una marca de accesorios artesanales dirigida por Liss, con una audiencia leal construida a través de redes sociales y engagement comunitario. La demanda de sus productos ya era fuerte, pero la marca aún no tenía una tienda online funcional. Un intento anterior en PrestaShop nunca se completó, principalmente debido a fricción técnica y sobrecarga de mantenimiento.\n\nEl objetivo era lanzar una tienda que coincidiera con la identidad de marca, brindara una experiencia de compra fluida y, lo más importante, pudiera ser gestionada independientemente por la fundadora.\n\nAntes del lanzamiento, la marca ya contaba con:",
          bullets: [
            "A defined aesthetic and product identity",
            "A strong following across multiple countries",
            "1,000+ people subscribed to the newsletter waiting for the launch"
          ],
          bulletsEs: [
            "Una estética y identidad de producto definidas",
            "Un fuerte seguimiento en múltiples países",
            "1,000+ personas suscritas al newsletter esperando el lanzamiento"
          ],
          highlight: "If the purchase flow had friction, errors, or confusion, conversion would drop — and the launch moment would be wasted.",
          highlightEs: "Si el flujo de compra tenía fricción, errores o confusión, la conversión caería y el momento de lanzamiento se desperdiciaría.",
          closing: "The audience was geographically diverse (Europe, LATAM, North America, and even Oceania), so the store needed to handle multiple currencies, support reliable international shipping, and make checkout feel smooth and trustworthy across regions.",
          closingEs: "La audiencia era geográficamente diversa (Europa, LATAM, Norteamérica e incluso Oceanía), por lo que la tienda necesitaba manejar múltiples monedas, soportar envíos internacionales confiables y hacer que el checkout se sintiera fluido y confiable en todas las regiones."
        }
      },
      {
        title: "Solution",
        titleEs: "Solución",
        structuredContent: {
          intro: "To balance simplicity, long-term autonomy, and global functionality, I recommended migrating the store to Shopify. Shopify allowed easy product and content management, custom styling without requiring coding day-to-day, native support for shipping and payment integrations, and stable and scalable infrastructure for growth.\n\nWe then:",
          introEs: "Para equilibrar simplicidad, autonomía a largo plazo y funcionalidad global, recomendé migrar la tienda a Shopify. Shopify permitió gestión fácil de productos y contenido, estilización personalizada sin requerir programación día a día, soporte nativo para integraciones de envío y pago, e infraestructura estable y escalable para el crecimiento.\n\nLuego:",
          bullets: [
            "Customized the Dawn theme with the brand's palette, tone, and visual rhythm",
            "Designed a mobile-first homepage centered around product discovery",
            "Built clean product pages highlighting details and craftsmanship",
            "Integrated Stripe for payments, Sendcloud for global shipping workflows, and Mailchimp for email marketing and launch communication",
            "Structured SEO, image optimization, and page load improvements so the store would feel fast and intentional from day one"
          ],
          bulletsEs: [
            "Personalizamos el tema Dawn con la paleta, tono y ritmo visual de la marca",
            "Diseñamos una página de inicio mobile-first centrada en el descubrimiento de productos",
            "Construimos páginas de producto limpias destacando detalles y artesanía",
            "Integramos Stripe para pagos, Sendcloud para flujos de envío globales y Mailchimp para marketing por email y comunicación de lanzamiento",
            "Estructuramos SEO, optimización de imágenes y mejoras de carga de página para que la tienda se sintiera rápida e intencional desde el día uno"
          ]
        }
      },
      {
        title: "Launch",
        titleEs: "Lanzamiento",
        structuredContent: {
          intro: "When the store went live, the newsletter audience — waiting and ready — converted quickly. In the first week after launch, the store sold over €5K, several products sold out, and customers from multiple regions placed orders successfully. The buying experience received consistently positive feedback. The launch validated both the demand and the purchase flow.",
          introEs: "Cuando la tienda se puso en marcha, la audiencia del newsletter, esperando y lista, convirtió rápidamente. En la primera semana después del lanzamiento, la tienda vendió más de €5K, varios productos se agotaron y clientes de múltiples regiones realizaron pedidos con éxito. La experiencia de compra recibió retroalimentación consistentemente positiva. El lanzamiento validó tanto la demanda como el flujo de compra."
        }
      },
      {
        title: "Business Impact",
        titleEs: "Impacto en el Negocio",
        structuredContent: {
          intro: "The brand now operates with:",
          introEs: "La marca ahora opera con:",
          bullets: [
            "A central, reliable online storefront",
            "A checkout and fulfillment pipeline that can support international orders",
            "The ability to update products, run discount periods, and launch new drops without developer involvement"
          ],
          bulletsEs: [
            "Una tienda online central y confiable",
            "Un pipeline de checkout y fulfillment que puede soportar pedidos internacionales",
            "La capacidad de actualizar productos, ejecutar períodos de descuento y lanzar nuevos drops sin involucramiento de desarrolladores"
          ],
          closing: "This wasn't just a store build — it was the foundation for a brand to scale on its own terms.",
          closingEs: "Esto no fue solo la construcción de una tienda, fue la fundación para que una marca escale en sus propios términos."
        }
      },
    ],
    metrics: [
      {
        label: "Global Reach",
        labelEs: "Alcance Global",
        value: "4+ regions",
        valueEs: "4+ regiones",
        insight: "Customers across EU, LATAM, NA & Oceania",
        insightEs: "Clientes en EU, LATAM, NA y Oceanía",
        icon: "🌍"
      },
      {
        label: "Fulfillment System",
        labelEs: "Sistema de Fulfillment",
        value: "Sendcloud integrated",
        valueEs: "Sendcloud integrado",
        insight: "Reliable international shipping workflows",
        insightEs: "Flujos de envío internacional confiables",
        icon: "📦"
      },
      {
        label: "Smooth Checkout",
        labelEs: "Checkout Fluido",
        value: "Stripe payments",
        valueEs: "Pagos con Stripe",
        insight: "Multi-currency support and trustworthy flow",
        insightEs: "Soporte multi-moneda y flujo confiable",
        icon: "💳"
      },
      {
        label: "Brand Autonomy",
        labelEs: "Autonomía de Marca",
        value: "Full independence",
        valueEs: "Independencia total",
        insight: "Founder updates store independently",
        insightEs: "Fundadora actualiza tienda independientemente",
        icon: "🧵"
      },
    ],
    keyTakeaways: [
      "A launch is not only a release — it's a moment that requires precision",
      "Platform choice can be a strategic growth decision, not just a technical one",
      "A seamless, human buying experience turns existing demand into sustainable sales",
      "Empowering the founder ensures the brand can grow without dependency",
    ],
    keyTakeawaysEs: [
      "Un lanzamiento no es solo un release, es un momento que requiere precisión",
      "La elección de plataforma puede ser una decisión estratégica de crecimiento, no solo técnica",
      "Una experiencia de compra fluida y humana convierte la demanda existente en ventas sostenibles",
      "Empoderar a la fundadora asegura que la marca pueda crecer sin dependencia",
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
        <title>Stay Wild Studio - Case Study | Francisco Massimino</title>
        <meta name="description" content="Launching an online store to scale a growing handmade accessories brand" />
        <meta property="og:title" content="Stay Wild Studio - Case Study | Francisco Massimino - Portfolio" />
        <meta property="og:description" content="Launching an online store to scale a growing handmade accessories brand" />
        <meta property="og:image" content="/assets/stay-wild.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stay Wild Studio - Case Study | Francisco Massimino - Portfolio" />
        <meta name="twitter:description" content="Launching an online store to scale a growing handmade accessories brand" />
        <meta name="twitter:image" content="/assets/stay-wild.png" />
        <meta name="keywords" content="Shopify, Liquid, Sendcloud, Stripe, Mailchimp, GA4, SEO structure" />
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
