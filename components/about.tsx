"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const techStack = [
    "Next.js",
    "React",
    "Node",
    "Prisma",
    "Postgres",
    "Vercel",
    "Shopify",
    "AI"
  ];

  return (
    <section
      id="about"
      className="relative flex items-center justify-center overflow-hidden py-12 md:py-16"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient orbs - opposite position from hero */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-6xl mx-auto px-8"
      >
        {/* Section Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">
              {t("about.badge")}
            </span>
          </div>
        </motion.div>

        {/* Main title/intro */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl max-w-4xl font-bold tracking-tight mb-8 text-foreground mx-auto leading-tight text-center"
        >
          {t("about.intro")}
        </motion.h2>

        {/* Description paragraphs */}
        <motion.div variants={itemVariants} className="space-y-6 text-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            {t("about.description1")}
          </p>

          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            {t("about.description3")}
          </p>
        </motion.div>

        {/* Tech Stack section with label */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm text-sm font-medium text-foreground">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location and availability */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-base md:text-lg font-medium leading-relaxed max-w-4xl mx-auto">
            {t("about.location")}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <Button size="lg" className="px-8">
            {t("about.cta")}
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}
