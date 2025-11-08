"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
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

  const projects = [
    {
      id: "lamperti-luthier",
      title: "Lamperti Luthier",
      description: "Website + growth strategy. Helped get 30+ clients in first month.",
      tags: ["Next.js", "SEO", "Marketing", "Analytics", "Content Strategy"],
      image: "/assets/lamperti-luthier.png",
      href: "/projects/lamperti-luthier",
    },
    {
      id: "stay-wild-studio",
      title: "Stay Wild Studio",
      description: "E-commerce platform for sustainable fashion brand.",
      tags: ["Shopify", "React", "Marketing", "Branding", "E-commerce"],
      image: "/assets/stay-wild-mockup2.png",
      href: "/projects/stay-wild-studio",
    },
    {
      id: "lina-restaurant",
      title: "Lina Restaurant",
      description: "Full digital launch (web, UX, SEO, bookings).",
      tags: ["Next.js", "UX Design", "SEO", "Booking System", "Stripe"],
      image: "/assets/lina.png",
      href: "/projects/lina-restaurant",
    },
  ];

  return (
    <section
      id="projects"
      className="relative flex items-center justify-center overflow-hidden py-12 md:py-16"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient orbs */}
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16"
      >
        {/* Section Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">
              {t("projects.badge")}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground text-center"
        >
          {t("projects.title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-8"
        >
          {t("projects.description")}
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={project.href}>
                <Card className="group pt-0 relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative w-full aspect-video overflow-hidden bg-primary/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="px-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-2 text-foreground  transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
